using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace HtpAsyncExample
{
    public class HttpListenerServer
    {
        protected HttpListener Listener;
        protected bool IsStarted = false;

        private readonly AutoResetEvent ListenForNextRequest = new AutoResetEvent(false);

        public Func<HttpListenerContext, Task> OnRequest;

        public HttpListenerServer Start(string urlBase)
        {
            Start(urlBase, Listen);
            return this;
        }

        protected void Start(string urlBase, WaitCallback listenCallback)
        {
            // *** Already running - just leave it in place
            if (this.IsStarted)
                return;

            if (this.Listener == null)
                Listener = new HttpListener();

            Listener.Prefixes.Add(urlBase);

            Listener.Start();
            IsStarted = true;

            ThreadPool.QueueUserWorkItem(listenCallback);
        }

        private bool IsListening
        {
            get { return this.IsStarted && this.Listener != null && this.Listener.IsListening; }
        }

        protected virtual void Listen(object state)
        {
            while (IsListening)
            {
                if (Listener == null) return;
                try
                {
                    Listener.BeginGetContext(ListenerCallback, Listener);
                    ListenForNextRequest.WaitOne();
                }
                catch (Exception ex)
                {
                    return;
                }
                if (Listener == null) return;
            }
        }

        private void ListenerCallback(IAsyncResult asyncResult)
        {
            var listener = asyncResult.AsyncState as HttpListener;
            HttpListenerContext context = null;

            if (listener == null) return;

            try
            {
                context = listener.EndGetContext(asyncResult);
            }
            catch (Exception ignore) {}
            finally
            {
                ListenForNextRequest.Set();
            }

            if (context == null) return;


            InitTask(context);
        }

        public virtual void InitTask(HttpListenerContext context)
        {
            try
            {
                var task = this.OnRequest(context);
                task.ContinueWith(x => HandleError(x.Exception, context), TaskContinuationOptions.OnlyOnFaulted | TaskContinuationOptions.AttachedToParent);

                if (task.Status == TaskStatus.Created)
                {
                    task.RunSynchronously();
                }
            }
            catch (Exception ex)
            {
                HandleError(ex, context);
            }
        }

        public static void HandleError(Exception ex, HttpListenerContext context)
        {
            Console.WriteLine("ERROR: " + ex);
        }
    }
}
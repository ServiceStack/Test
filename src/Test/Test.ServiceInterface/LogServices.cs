using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Logging;

namespace Test.ServiceInterface
{
    [Route("/logs")]
    public class ViewLogs : IReturn<string>
    {
        public bool Clear { get; set; }
    }

    public class LogServices : Service
    {
        [AddHeader(ContentType = MimeTypes.PlainText)]
        public object Any(ViewLogs request)
        {
            var sbFactory = (StringBuilderLogFactory)LogManager.LogFactory;

            var logs = sbFactory.GetLogs();

            if (request.Clear)
                sbFactory.ClearLogs();

            return logs;
        }
    }
}

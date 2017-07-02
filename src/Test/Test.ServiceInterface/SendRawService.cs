using System.Net.Mime;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class SendRawService : Service
    {
        [JsonOnly]
        public object Any(SendJson request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            return request.RequestStream.ReadFully();
        }

        public object Any(SendText request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            base.Request.ResponseContentType = request.ContentType ?? base.Request.AcceptTypes[0];
            return request.RequestStream.ReadFully();
        }

        public object Any(SendRaw request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            base.Request.ResponseContentType = request.ContentType ?? base.Request.AcceptTypes[0];
            return request.RequestStream.ReadFully();
        }
    }
}
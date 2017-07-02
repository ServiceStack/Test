using System.IO;
using ServiceStack;
using ServiceStack.Web;

namespace Test.ServiceModel
{
    [Route("/sendjson")]
    public class SendJson : IRequiresRequestStream, IReturn<string>
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Stream RequestStream { get; set; }
    }

    [Route("/sendtext")]
    public class SendText : IRequiresRequestStream, IReturn<string>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ContentType { get; set; }

        public Stream RequestStream { get; set; }
    }

    [Route("/sendraw")]
    public class SendRaw : IRequiresRequestStream, IReturn<byte[]>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ContentType { get; set; }

        public Stream RequestStream { get; set; }
    }
}
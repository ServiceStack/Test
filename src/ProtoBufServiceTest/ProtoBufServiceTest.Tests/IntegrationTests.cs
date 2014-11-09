using System;
using System.Text;
using NUnit.Framework;
using ProtoBufServiceTest.ServiceModel;
using ServiceStack;
using ServiceStack.ProtoBuf;
using ServiceStack.Text;

namespace ProtoBufServiceTest.Tests
{
    [TestFixture]
    public class IntegrationTests
    {
        [Test]
        public void Can_Send_ProtoBuf_request()
        {
            var client = new ProtoBufServiceClient("http://localhost:51376/");

            var request = new ProtoBufEmail
            {
                ToAddress = "to@email.com",
                FromAddress = "from@email.com",
                Subject = "Subject",
                Body = "Body",
                AttachmentData = Encoding.UTF8.GetBytes("AttachmentData"),
            };

            try
            {
                var response = client.Send<ProtoBufEmail>(request);

                Console.WriteLine(response.Dump());

                Assert.That(response.Equals(request));
            }
            catch (WebServiceException webEx)
            {
                Console.WriteLine(webEx.ResponseDto.Dump());
                Assert.Fail(webEx.Message);
            }
        }
    }
}
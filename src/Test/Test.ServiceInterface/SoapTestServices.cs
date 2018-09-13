using System;
using System.Runtime.Serialization;
using ServiceStack;

namespace Test.ServiceInterface
{
    [DataContract(Namespace = "http://schemas.servicestack.net/types")]
    [Route("/Stuff")]
    public class GetStuff : IReturn<GetStuffResponse>
    {
        [DataMember]
        [ApiMember(Name = "Summary Date",
            DataType = "DateTime",
            IsRequired = false)]
        public DateTime? SummaryDate { get; set; }

        [DataMember]
        [ApiMember(Name = "Summary End Date",
            DataType = "DateTime",
            IsRequired = false)]
        public DateTime? SummaryEndDate { get; set; }

        [DataMember]
        [ApiMember(Name = "Symbol",
            DataType = "string",
            IsRequired = false)]
        public string Symbol { get; set; }

        [DataMember]
        [ApiMember(Name = "Email",
            DataType = "string",
            IsRequired = false)]
        public string Email { get; set; }

        [DataMember]
        [ApiMember(Name = "Is Enabled",
            DataType = "bool",
            IsRequired = false)]
        public bool? IsEnabled { get; set; }
    }

    [DataContract(Namespace = "http://schemas.servicestack.net/types")]
    public class GetStuffResponse
    {
        [DataMember]
        public DateTime? SummaryDate { get; set; }
        [DataMember]
        public DateTime? SummaryEndDate { get; set; }
        [DataMember]
        public string Symbol { get; set; }
        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public bool? IsEnabled { get; set; }
    }

    public class SoapTestServices : Service
    {
        public object Any(GetStuff request) => request.ConvertTo<GetStuffResponse>();
    }
}
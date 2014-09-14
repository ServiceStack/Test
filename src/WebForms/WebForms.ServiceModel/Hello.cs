using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;

namespace WebForms.ServiceModel
{
    [Route("/hello")]
    [Route("/hello/{Name}")]
    public class Hello : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }

    public class HelloResponse
    {
        public string Result { get; set; }
    }
}
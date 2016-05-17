using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel
{
    public class StoreLogs
    {
        public List<Logger> Loggers { get; set; }
    }

    public class StoreLogsResponse
    {
        public List<Logger> ExistingLogs { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    public class Logger
    {
        public long Id { get; set; }
        public List<Device> Devices { get; set; }
    }

    public class Device
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public long TimeStamp { get; set; }
        public List<Channel> Channels { get; set; }
    }
    
    public class Channel
    {
        public Channel() { }

        public Channel(string name, string value)
        {
            Name = name;
            Value = value;
        }

        public string Name { get; set; }
        public string Value { get; set; }
    }
}
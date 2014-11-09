using System.Linq;
using System.Runtime.Serialization;
using ServiceStack;

namespace ProtoBufServiceTest.ServiceModel
{
    [DataContract]
    public class ProtoBufEmail
    {
        [DataMember(Order = 1)]
        public string ToAddress { get; set; }
        [DataMember(Order = 2)]
        public string FromAddress { get; set; }
        [DataMember(Order = 3)]
        public string Subject { get; set; }
        [DataMember(Order = 4)]
        public string Body { get; set; }
        [DataMember(Order = 5)]
        public byte[] AttachmentData { get; set; }

        public bool Equals(ProtoBufEmail other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.ToAddress, ToAddress)
                && Equals(other.FromAddress, FromAddress)
                && Equals(other.Subject, Subject)
                && Equals(other.Body, Body)
                && other.AttachmentData.SequenceEqual(AttachmentData);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(ProtoBufEmail)) return false;
            return Equals((ProtoBufEmail)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (ToAddress != null ? ToAddress.GetHashCode() : 0);
                result = (result * 397) ^ (FromAddress != null ? FromAddress.GetHashCode() : 0);
                result = (result * 397) ^ (Subject != null ? Subject.GetHashCode() : 0);
                result = (result * 397) ^ (Body != null ? Body.GetHashCode() : 0);
                result = (result * 397) ^ (AttachmentData != null ? AttachmentData.GetHashCode() : 0);
                return result;
            }
        }
    }

    [DataContract]
    public class ProtoBufEmailResponse
    {
        [DataMember(Order = 1)]
        public ResponseStatus ResponseStatus { get; set; }
    }
}
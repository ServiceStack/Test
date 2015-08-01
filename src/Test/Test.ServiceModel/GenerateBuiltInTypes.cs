using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;

namespace Test.ServiceModel
{
    public class GenerateBuiltInTypes
    {
        public QueryBase2 QueryBase { get; set; }
        public QueryResponse2<string> QueryResponse2 { get; set; }
        public AuthUserSession2 AuthUserSession2 { get; set; }
        public ResponseStatus2 ResponseStatus2 { get; set; }
        public ResponseError2 ResponseError2 { get; set; }
    }

    public class QueryBase2 : IQuery
    {
        public virtual int? Skip { get; set; }
        public virtual int? Take { get; set; }
        public virtual string OrderBy { get; set; }
        public virtual string OrderByDesc { get; set; }
        public virtual string Include { get; set; }
        public virtual Dictionary<string, string> Meta { get; set; }
    }

    [DataContract]
    public class QueryResponse2<T> : IHasResponseStatus, IMeta
    {
        public virtual int Offset { get; set; }
        public virtual int Total { get; set; }
        public virtual List<T> Results { get; set; }
        public virtual Dictionary<string, string> Meta { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    public class AuthUserSession2
    {
        public string ReferrerUrl { get; set; }
        public string Id { get; set; }
        public string UserAuthId { get; set; }
        public string UserAuthName { get; set; }
        public string UserName { get; set; }
        public string TwitterUserId { get; set; }
        public string TwitterScreenName { get; set; }
        public string FacebookUserId { get; set; }
        public string FacebookUserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string PrimaryEmail { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public string BirthDateRaw { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Culture { get; set; }
        public string FullName { get; set; }
        public string Gender { get; set; }
        public string Language { get; set; }
        public string MailAddress { get; set; }
        public string Nickname { get; set; }
        public string PostalCode { get; set; }
        public string TimeZone { get; set; }
        public string RequestTokenSecret { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModified { get; set; }
        public List<string> Roles { get; set; }
        public List<string> Permissions { get; set; }
        public virtual bool IsAuthenticated { get; set; }
        public virtual string Sequence { get; set; }
        public long Tag { get; set; }
    }

    public class ResponseStatus2
    {
        public string ErrorCode { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
        public List<ResponseError2> Errors { get; set; }
    }

    public class ResponseError2
    {
        public string ErrorCode { get; set; }
        public string FieldName { get; set; }
        public string Message { get; set; }
    }
}
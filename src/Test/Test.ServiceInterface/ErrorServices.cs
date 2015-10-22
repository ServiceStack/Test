using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.FluentValidation;
using ServiceStack.Model;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class Custom400Exception : Exception, IResponseStatusConvertible, IHasStatusCode
    {
        public Custom400Exception(string message) : base(message) { }

        public ResponseStatus ToResponseStatus()
        {
            return new ResponseStatus
            {
                ErrorCode = GetType().Name,
                Message = this.Message,
                Errors = new List<ResponseError>
                {
                    new ResponseError
                    {
                        ErrorCode = "FieldErrorCode",
                        Message = "FieldMessage",
                        FieldName = "FieldName",
                    }
                }
            };
        }

        public int StatusCode
        {
            get { return (int)HttpStatusCode.BadRequest; }
        }
    }

    public class ErrorsService : Service
    {
        public object Any(ThrowHttpError request)
        {
            throw new HttpError(request.Status ?? 500, request.Message ?? request.GetType().Name);
        }

        public object Any(Throw404 request)
        {
            throw HttpError.NotFound(request.Message ?? "Custom Status Description");
        }

        public object Any(ThrowCustom400 request)
        {
            throw new Custom400Exception(request.Message ?? "Custom Status Description");
        }

        public object Any(ThrowType request)
        {
            switch (request.Type ?? "Exception")
            {
                case "Exception":
                    throw new Exception(request.Message ?? "Server Error");
                case "NotFound":
                    throw HttpError.NotFound(request.Message ?? "What you're looking for isn't here");
                case "Unauthorized":
                    throw HttpError.Unauthorized(request.Message ?? "You shall not pass!");
                case "Conflict":
                    throw HttpError.Conflict(request.Message ?? "We haz Conflict!");
                case "NotImplementedException":
                    throw new NotImplementedException(request.Message ?? "Not implemented yet, try again later");
                case "ArgumentException":
                    throw new ArgumentException(request.Message ?? "Client Argument Error");
                case "AuthenticationException":
                    throw new AuthenticationException(request.Message ?? "We haz issue Authenticatting");
                case "UnauthorizedAccessException":
                    throw new UnauthorizedAccessException(request.Message ?? "You shall not pass!");
                case "OptimisticConcurrencyException":
                    throw new OptimisticConcurrencyException(request.Message ?? "Sorry too optimistic");
                case "UnhandledException":
                    throw new FileNotFoundException(request.Message ?? "File was never here");
                case "RawResponse":
                    Response.StatusCode = 418;
                    Response.StatusDescription = request.Message ?? "On a tea break";
                    Response.Close();
                    break;
            }

            return request;
        }

        public object Any(ThrowValidation request)
        {
            return request.ConvertTo<ThrowValidationResponse>();
        }

        public object Any(ThrowBusinessError request)
        {
            throw BusinessError();
        }

        protected HttpError BusinessError(string summaryMessage = "Some generic validation summary.")
        {
            return new HttpError(HttpStatusCode.BadRequest, "MyValidationType", summaryMessage)
            {
                Response = new ErrorResponse
                {
                    ResponseStatus = new ResponseStatus
                    {
                        ErrorCode = "MyValidationType",
                        Message = summaryMessage,
                        Errors = new List<ResponseError>()
                    },
                }
            };
        }
    }

    public class ThrowValidationValidator : AbstractValidator<ThrowValidation>
    {
        public ThrowValidationValidator()
        {
            RuleFor(x => x.Age).InclusiveBetween(1, 120);
            RuleFor(x => x.Required).NotEmpty();
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
        }
    }
}
using ServiceStack;

namespace External.ServiceModel
{
    public class ExternalOperation : IReturn<ExternalOperationResponse>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ExternalEnum ExternalEnum { get; set; }
    }

    public class ExternalOperationResponse
    {
        public string Result { get; set; }
    }

    public enum ExternalEnum
    {
        Foo,
        Bar,
        Baz
    }

    public class ExternalOperation2 : IReturn<ExternalOperation2Response>
    {
        public int Id { get; set; }
    }

    public class ExternalOperation2Response
    {
        public ExternalType ExternalType { get; set; }
    }

    public class ExternalType
    {
        public ExternalEnum2 ExternalEnum2 { get; set; }
    }

    public enum ExternalEnum2
    {
        Uno,
        Due,
        Tre
    }

    public class ExternalOperation3
    {
        public int Id { get; set; }
    }

    public class ExternalReturnTypeResponse
    {
        public ExternalEnum3 ExternalEnum3 { get; set; }
    }

    public enum ExternalEnum3
    {
        Un,
        Deux,
        Trois
    }

    public class ExternalOperation4
    {
        public int Id { get; set; }
    }

    public class ExternalUnmatchedResponse
    {
        public ExternalEnum4 ExternalEnum4 { get; set; }
    }

    public enum ExternalEnum4
    {
        Uno,
        Dos,
        Tres
    }

}

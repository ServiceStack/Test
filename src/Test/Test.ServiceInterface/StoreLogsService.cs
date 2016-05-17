using ServiceStack;
using ServiceStack.OrmLite;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class StoreLogsService : Service
    {
        public object Any(StoreLogs request)
        {
            if (!request.Loggers.IsNullOrEmpty())
                Db.SaveAll(request.Loggers);

            return new StoreLogsResponse
            {
                ExistingLogs = Db.Select<Logger>()
            };
        }
    }
}
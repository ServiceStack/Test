using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;
using LargeServices.ServiceModel;

namespace LargeServices.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Request01 request)
        {
            return new Request01Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request02 request)
        {
            return new Request02Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request03 request)
        {
            return new Request03Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request04 request)
        {
            return new Request04Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request05 request)
        {
            return new Request05Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request06 request)
        {
            return new Request06Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request07 request)
        {
            return new Request07Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request08 request)
        {
            return new Request08Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request09 request)
        {
            return new Request09Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request10 request)
        {
            return new Request10Response { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        public object Any(Request11 request)
        {
            return new Request11Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request12 request)
        {
            return new Request12Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request13 request)
        {
            return new Request13Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request14 request)
        {
            return new Request14Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request15 request)
        {
            return new Request15Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request16 request)
        {
            return new Request16Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request17 request)
        {
            return new Request17Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request18 request)
        {
            return new Request18Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request19 request)
        {
            return new Request19Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }


        public object Any(Request20 request)
        {
            return new Request20Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request21 request)
        {
            return new Request21Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request22 request)
        {
            return new Request22Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request23 request)
        {
            return new Request23Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request24 request)
        {
            return new Request24Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request25 request)
        {
            return new Request25Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request26 request)
        {
            return new Request26Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request27 request)
        {
            return new Request27Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request28 request)
        {
            return new Request28Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request29 request)
        {
            return new Request29Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request30 request)
        {
            return new Request30Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request31 request)
        {
            return new Request31Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request32 request)
        {
            return new Request32Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request33 request)
        {
            return new Request33Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request34 request)
        {
            return new Request34Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request35 request)
        {
            return new Request35Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request36 request)
        {
            return new Request36Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request37 request)
        {
            return new Request37Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request38 request)
        {
            return new Request38Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request39 request)
        {
            return new Request39Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request40 request)
        {
            return new Request40Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request41 request)
        {
            return new Request41Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request42 request)
        {
            return new Request42Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request43 request)
        {
            return new Request43Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request44 request)
        {
            return new Request44Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request45 request)
        {
            return new Request45Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request46 request)
        {
            return new Request46Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request47 request)
        {
            return new Request47Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request48 request)
        {
            return new Request48Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request49 request)
        {
            return new Request49Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request50 request)
        {
            return new Request50Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request51 request)
        {
            return new Request51Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request52 request)
        {
            return new Request52Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request53 request)
        {
            return new Request53Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request54 request)
        {
            return new Request54Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request55 request)
        {
            return new Request55Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request56 request)
        {
            return new Request56Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request57 request)
        {
            return new Request57Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request58 request)
        {
            return new Request58Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request59 request)
        {
            return new Request59Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request60 request)
        {
            return new Request60Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request61 request)
        {
            return new Request61Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request62 request)
        {
            return new Request62Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request63 request)
        {
            return new Request63Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request64 request)
        {
            return new Request64Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request65 request)
        {
            return new Request65Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request66 request)
        {
            return new Request66Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request67 request)
        {
            return new Request67Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request68 request)
        {
            return new Request68Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request69 request)
        {
            return new Request69Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request70 request)
        {
            return new Request70Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request71 request)
        {
            return new Request71Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request72 request)
        {
            return new Request72Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request73 request)
        {
            return new Request73Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request74 request)
        {
            return new Request74Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request75 request)
        {
            return new Request75Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request76 request)
        {
            return new Request76Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request77 request)
        {
            return new Request77Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request78 request)
        {
            return new Request78Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request79 request)
        {
            return new Request79Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request80 request)
        {
            return new Request80Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request81 request)
        {
            return new Request81Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request82 request)
        {
            return new Request82Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request83 request)
        {
            return new Request83Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request84 request)
        {
            return new Request84Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request85 request)
        {
            return new Request85Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request86 request)
        {
            return new Request86Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request87 request)
        {
            return new Request87Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request88 request)
        {
            return new Request88Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request89 request)
        {
            return new Request89Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request90 request)
        {
            return new Request90Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request91 request)
        {
            return new Request91Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request92 request)
        {
            return new Request92Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request93 request)
        {
            return new Request93Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request94 request)
        {
            return new Request94Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request95 request)
        {
            return new Request95Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request96 request)
        {
            return new Request96Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request97 request)
        {
            return new Request97Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request98 request)
        {
            return new Request98Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request99 request)
        {
            return new Request99Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }

        public object Any(Request100 request)
        {
            return new Request100Response { Result = "Hello, {1}!".Fmt(request.Name) };
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;

namespace LargeServices.ServiceModel
{
    [Route("/request01")]
    [Route("/request01/{Id}")]
    [Route("/request01/{Id}/{Name}")]
    [Route("/request01/{Id}/{Name}/route")]
    public class Request01 : IReturn<Request01Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request01Response
    {
        public string Result { get; set; }
    }

    [Route("/request02")]
    [Route("/request02/{Id}")]
    [Route("/request02/{Id}/{Name}")]
    [Route("/request02/{Id}/{Name}/route")]
    public class Request02 : IReturn<Request02Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request02Response
    {
        public string Result { get; set; }
    }

    [Route("/request03")]
    [Route("/request03/{Id}")]
    [Route("/request03/{Id}/{Name}")]
    [Route("/request03/{Id}/{Name}/route")]
    public class Request03 : IReturn<Request03Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request03Response
    {
        public string Result { get; set; }
    }

    [Route("/request04")]
    [Route("/request04/{Id}")]
    [Route("/request04/{Id}/{Name}")]
    [Route("/request04/{Id}/{Name}/route")]
    public class Request04 : IReturn<Request04Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request04Response
    {
        public string Result { get; set; }
    }

    [Route("/request05")]
    [Route("/request05/{Id}")]
    [Route("/request05/{Id}/{Name}")]
    [Route("/request05/{Id}/{Name}/route")]
    public class Request05 : IReturn<Request05Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request05Response
    {
        public string Result { get; set; }
    }

    [Route("/request06")]
    [Route("/request06/{Id}")]
    [Route("/request06/{Id}/{Name}")]
    [Route("/request06/{Id}/{Name}/route")]
    public class Request06 : IReturn<Request06Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request06Response
    {
        public string Result { get; set; }
    }

    [Route("/request07")]
    [Route("/request07/{Id}")]
    [Route("/request07/{Id}/{Name}")]
    [Route("/request07/{Id}/{Name}/route")]
    public class Request07 : IReturn<Request07Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request07Response
    {
        public string Result { get; set; }
    }

    [Route("/request08")]
    [Route("/request08/{Id}")]
    [Route("/request08/{Id}/{Name}")]
    [Route("/request08/{Id}/{Name}/route")]
    public class Request08 : IReturn<Request08Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request08Response
    {
        public string Result { get; set; }
    }

    [Route("/request09")]
    [Route("/request09/{Id}")]
    [Route("/request09/{Id}/{Name}")]
    [Route("/request09/{Id}/{Name}/route")]
    public class Request09 : IReturn<Request09Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request09Response
    {
        public string Result { get; set; }
    }

    [Route("/request10")]
    [Route("/request10/{Id}")]
    [Route("/request10/{Id}/{Name}")]
    [Route("/request10/{Id}/{Name}/route")]
    public class Request10 : IReturn<Request10Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request10Response
    {
        public string Result { get; set; }
    }

    [Route("/request11")]
    [Route("/request11/{Id}")]
    [Route("/request11/{Id}/{Name}")]
    [Route("/request11/{Id}/{Name}/route")]
    public class Request11 : IReturn<Request11Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request11Response
    {
        public string Result { get; set; }
    }

    [Route("/request12")]
    [Route("/request12/{Id}")]
    [Route("/request12/{Id}/{Name}")]
    [Route("/request12/{Id}/{Name}/route")]
    public class Request12 : IReturn<Request12Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request12Response
    {
        public string Result { get; set; }
    }

    [Route("/request13")]
    [Route("/request13/{Id}")]
    [Route("/request13/{Id}/{Name}")]
    [Route("/request13/{Id}/{Name}/route")]
    public class Request13 : IReturn<Request13Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request13Response
    {
        public string Result { get; set; }
    }

    [Route("/request14")]
    [Route("/request14/{Id}")]
    [Route("/request14/{Id}/{Name}")]
    [Route("/request14/{Id}/{Name}/route")]
    public class Request14 : IReturn<Request14Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request14Response
    {
        public string Result { get; set; }
    }

    [Route("/request15")]
    [Route("/request15/{Id}")]
    [Route("/request15/{Id}/{Name}")]
    [Route("/request15/{Id}/{Name}/route")]
    public class Request15 : IReturn<Request15Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request15Response
    {
        public string Result { get; set; }
    }

    [Route("/request16")]
    [Route("/request16/{Id}")]
    [Route("/request16/{Id}/{Name}")]
    [Route("/request16/{Id}/{Name}/route")]
    public class Request16 : IReturn<Request16Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request16Response
    {
        public string Result { get; set; }
    }

    [Route("/request17")]
    [Route("/request17/{Id}")]
    [Route("/request17/{Id}/{Name}")]
    [Route("/request17/{Id}/{Name}/route")]
    public class Request17 : IReturn<Request17Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request17Response
    {
        public string Result { get; set; }
    }

    [Route("/request18")]
    [Route("/request18/{Id}")]
    [Route("/request18/{Id}/{Name}")]
    [Route("/request18/{Id}/{Name}/route")]
    public class Request18 : IReturn<Request18Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request18Response
    {
        public string Result { get; set; }
    }

    [Route("/request19")]
    [Route("/request19/{Id}")]
    [Route("/request19/{Id}/{Name}")]
    [Route("/request19/{Id}/{Name}/route")]
    public class Request19 : IReturn<Request19Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request19Response
    {
        public string Result { get; set; }
    }

    [Route("/request20")]
    [Route("/request20/{Id}")]
    [Route("/request20/{Id}/{Name}")]
    [Route("/request20/{Id}/{Name}/route")]
    public class Request20 : IReturn<Request20Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request20Response
    {
        public string Result { get; set; }
    }


    [Route("/request21")]
    [Route("/request21/{Id}")]
    [Route("/request21/{Id}/{Name}")]
    [Route("/request21/{Id}/{Name}/route")]
    public class Request21 : IReturn<Request21Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request21Response
    {
        public string Result { get; set; }
    }

    [Route("/request22")]
    [Route("/request22/{Id}")]
    [Route("/request22/{Id}/{Name}")]
    [Route("/request22/{Id}/{Name}/route")]
    public class Request22 : IReturn<Request22Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request22Response
    {
        public string Result { get; set; }
    }

    [Route("/request23")]
    [Route("/request23/{Id}")]
    [Route("/request23/{Id}/{Name}")]
    [Route("/request23/{Id}/{Name}/route")]
    public class Request23 : IReturn<Request23Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request23Response
    {
        public string Result { get; set; }
    }

    [Route("/request24")]
    [Route("/request24/{Id}")]
    [Route("/request24/{Id}/{Name}")]
    [Route("/request24/{Id}/{Name}/route")]
    public class Request24 : IReturn<Request24Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request24Response
    {
        public string Result { get; set; }
    }

    [Route("/request25")]
    [Route("/request25/{Id}")]
    [Route("/request25/{Id}/{Name}")]
    [Route("/request25/{Id}/{Name}/route")]
    public class Request25 : IReturn<Request25Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request25Response
    {
        public string Result { get; set; }
    }

    [Route("/request26")]
    [Route("/request26/{Id}")]
    [Route("/request26/{Id}/{Name}")]
    [Route("/request26/{Id}/{Name}/route")]
    public class Request26 : IReturn<Request26Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request26Response
    {
        public string Result { get; set; }
    }

    [Route("/request27")]
    [Route("/request27/{Id}")]
    [Route("/request27/{Id}/{Name}")]
    [Route("/request27/{Id}/{Name}/route")]
    public class Request27 : IReturn<Request27Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request27Response
    {
        public string Result { get; set; }
    }

    [Route("/request28")]
    [Route("/request28/{Id}")]
    [Route("/request28/{Id}/{Name}")]
    [Route("/request28/{Id}/{Name}/route")]
    public class Request28 : IReturn<Request28Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request28Response
    {
        public string Result { get; set; }
    }

    [Route("/request29")]
    [Route("/request29/{Id}")]
    [Route("/request29/{Id}/{Name}")]
    [Route("/request29/{Id}/{Name}/route")]
    public class Request29 : IReturn<Request29Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request29Response
    {
        public string Result { get; set; }
    }

    [Route("/request30")]
    [Route("/request30/{Id}")]
    [Route("/request30/{Id}/{Name}")]
    [Route("/request30/{Id}/{Name}/route")]
    public class Request30 : IReturn<Request30Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request30Response
    {
        public string Result { get; set; }
    }


    [Route("/request31")]
    [Route("/request31/{Id}")]
    [Route("/request31/{Id}/{Name}")]
    [Route("/request31/{Id}/{Name}/route")]
    public class Request31 : IReturn<Request31Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request31Response
    {
        public string Result { get; set; }
    }

    [Route("/request32")]
    [Route("/request32/{Id}")]
    [Route("/request32/{Id}/{Name}")]
    [Route("/request32/{Id}/{Name}/route")]
    public class Request32 : IReturn<Request32Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request32Response
    {
        public string Result { get; set; }
    }

    [Route("/request33")]
    [Route("/request33/{Id}")]
    [Route("/request33/{Id}/{Name}")]
    [Route("/request33/{Id}/{Name}/route")]
    public class Request33 : IReturn<Request33Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request33Response
    {
        public string Result { get; set; }
    }

    [Route("/request34")]
    [Route("/request34/{Id}")]
    [Route("/request34/{Id}/{Name}")]
    [Route("/request34/{Id}/{Name}/route")]
    public class Request34 : IReturn<Request34Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request34Response
    {
        public string Result { get; set; }
    }

    [Route("/request35")]
    [Route("/request35/{Id}")]
    [Route("/request35/{Id}/{Name}")]
    [Route("/request35/{Id}/{Name}/route")]
    public class Request35 : IReturn<Request35Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request35Response
    {
        public string Result { get; set; }
    }

    [Route("/request36")]
    [Route("/request36/{Id}")]
    [Route("/request36/{Id}/{Name}")]
    [Route("/request36/{Id}/{Name}/route")]
    public class Request36 : IReturn<Request36Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request36Response
    {
        public string Result { get; set; }
    }

    [Route("/request37")]
    [Route("/request37/{Id}")]
    [Route("/request37/{Id}/{Name}")]
    [Route("/request37/{Id}/{Name}/route")]
    public class Request37 : IReturn<Request37Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request37Response
    {
        public string Result { get; set; }
    }

    [Route("/request38")]
    [Route("/request38/{Id}")]
    [Route("/request38/{Id}/{Name}")]
    [Route("/request38/{Id}/{Name}/route")]
    public class Request38 : IReturn<Request38Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request38Response
    {
        public string Result { get; set; }
    }

    [Route("/request39")]
    [Route("/request39/{Id}")]
    [Route("/request39/{Id}/{Name}")]
    [Route("/request39/{Id}/{Name}/route")]
    public class Request39 : IReturn<Request39Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request39Response
    {
        public string Result { get; set; }
    }

    [Route("/request40")]
    [Route("/request40/{Id}")]
    [Route("/request40/{Id}/{Name}")]
    [Route("/request40/{Id}/{Name}/route")]
    public class Request40 : IReturn<Request40Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request40Response
    {
        public string Result { get; set; }
    }


    [Route("/request41")]
    [Route("/request41/{Id}")]
    [Route("/request41/{Id}/{Name}")]
    [Route("/request41/{Id}/{Name}/route")]
    public class Request41 : IReturn<Request41Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request41Response
    {
        public string Result { get; set; }
    }

    [Route("/request42")]
    [Route("/request42/{Id}")]
    [Route("/request42/{Id}/{Name}")]
    [Route("/request42/{Id}/{Name}/route")]
    public class Request42 : IReturn<Request42Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request42Response
    {
        public string Result { get; set; }
    }

    [Route("/request43")]
    [Route("/request43/{Id}")]
    [Route("/request43/{Id}/{Name}")]
    [Route("/request43/{Id}/{Name}/route")]
    public class Request43 : IReturn<Request43Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request43Response
    {
        public string Result { get; set; }
    }

    [Route("/request44")]
    [Route("/request44/{Id}")]
    [Route("/request44/{Id}/{Name}")]
    [Route("/request44/{Id}/{Name}/route")]
    public class Request44 : IReturn<Request44Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request44Response
    {
        public string Result { get; set; }
    }

    [Route("/request45")]
    [Route("/request45/{Id}")]
    [Route("/request45/{Id}/{Name}")]
    [Route("/request45/{Id}/{Name}/route")]
    public class Request45 : IReturn<Request45Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request45Response
    {
        public string Result { get; set; }
    }

    [Route("/request46")]
    [Route("/request46/{Id}")]
    [Route("/request46/{Id}/{Name}")]
    [Route("/request46/{Id}/{Name}/route")]
    public class Request46 : IReturn<Request46Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request46Response
    {
        public string Result { get; set; }
    }

    [Route("/request47")]
    [Route("/request47/{Id}")]
    [Route("/request47/{Id}/{Name}")]
    [Route("/request47/{Id}/{Name}/route")]
    public class Request47 : IReturn<Request47Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request47Response
    {
        public string Result { get; set; }
    }

    [Route("/request48")]
    [Route("/request48/{Id}")]
    [Route("/request48/{Id}/{Name}")]
    [Route("/request48/{Id}/{Name}/route")]
    public class Request48 : IReturn<Request48Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request48Response
    {
        public string Result { get; set; }
    }

    [Route("/request49")]
    [Route("/request49/{Id}")]
    [Route("/request49/{Id}/{Name}")]
    [Route("/request49/{Id}/{Name}/route")]
    public class Request49 : IReturn<Request49Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request49Response
    {
        public string Result { get; set; }
    }

    [Route("/request50")]
    [Route("/request50/{Id}")]
    [Route("/request50/{Id}/{Name}")]
    [Route("/request50/{Id}/{Name}/route")]
    public class Request50 : IReturn<Request50Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request50Response
    {
        public string Result { get; set; }
    }


    [Route("/request51")]
    [Route("/request51/{Id}")]
    [Route("/request51/{Id}/{Name}")]
    [Route("/request51/{Id}/{Name}/route")]
    public class Request51 : IReturn<Request51Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request51Response
    {
        public string Result { get; set; }
    }

    [Route("/request52")]
    [Route("/request52/{Id}")]
    [Route("/request52/{Id}/{Name}")]
    [Route("/request52/{Id}/{Name}/route")]
    public class Request52 : IReturn<Request52Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request52Response
    {
        public string Result { get; set; }
    }

    [Route("/request53")]
    [Route("/request53/{Id}")]
    [Route("/request53/{Id}/{Name}")]
    [Route("/request53/{Id}/{Name}/route")]
    public class Request53 : IReturn<Request53Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request53Response
    {
        public string Result { get; set; }
    }

    [Route("/request54")]
    [Route("/request54/{Id}")]
    [Route("/request54/{Id}/{Name}")]
    [Route("/request54/{Id}/{Name}/route")]
    public class Request54 : IReturn<Request54Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request54Response
    {
        public string Result { get; set; }
    }

    [Route("/request55")]
    [Route("/request55/{Id}")]
    [Route("/request55/{Id}/{Name}")]
    [Route("/request55/{Id}/{Name}/route")]
    public class Request55 : IReturn<Request55Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request55Response
    {
        public string Result { get; set; }
    }

    [Route("/request56")]
    [Route("/request56/{Id}")]
    [Route("/request56/{Id}/{Name}")]
    [Route("/request56/{Id}/{Name}/route")]
    public class Request56 : IReturn<Request56Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request56Response
    {
        public string Result { get; set; }
    }

    [Route("/request57")]
    [Route("/request57/{Id}")]
    [Route("/request57/{Id}/{Name}")]
    [Route("/request57/{Id}/{Name}/route")]
    public class Request57 : IReturn<Request57Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request57Response
    {
        public string Result { get; set; }
    }

    [Route("/request58")]
    [Route("/request58/{Id}")]
    [Route("/request58/{Id}/{Name}")]
    [Route("/request58/{Id}/{Name}/route")]
    public class Request58 : IReturn<Request58Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request58Response
    {
        public string Result { get; set; }
    }

    [Route("/request59")]
    [Route("/request59/{Id}")]
    [Route("/request59/{Id}/{Name}")]
    [Route("/request59/{Id}/{Name}/route")]
    public class Request59 : IReturn<Request59Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request59Response
    {
        public string Result { get; set; }
    }

    [Route("/request60")]
    [Route("/request60/{Id}")]
    [Route("/request60/{Id}/{Name}")]
    [Route("/request60/{Id}/{Name}/route")]
    public class Request60 : IReturn<Request60Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request60Response
    {
        public string Result { get; set; }
    }


    [Route("/request61")]
    [Route("/request61/{Id}")]
    [Route("/request61/{Id}/{Name}")]
    [Route("/request61/{Id}/{Name}/route")]
    public class Request61 : IReturn<Request61Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request61Response
    {
        public string Result { get; set; }
    }

    [Route("/request62")]
    [Route("/request62/{Id}")]
    [Route("/request62/{Id}/{Name}")]
    [Route("/request62/{Id}/{Name}/route")]
    public class Request62 : IReturn<Request62Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request62Response
    {
        public string Result { get; set; }
    }

    [Route("/request63")]
    [Route("/request63/{Id}")]
    [Route("/request63/{Id}/{Name}")]
    [Route("/request63/{Id}/{Name}/route")]
    public class Request63 : IReturn<Request63Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request63Response
    {
        public string Result { get; set; }
    }

    [Route("/request64")]
    [Route("/request64/{Id}")]
    [Route("/request64/{Id}/{Name}")]
    [Route("/request64/{Id}/{Name}/route")]
    public class Request64 : IReturn<Request64Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request64Response
    {
        public string Result { get; set; }
    }

    [Route("/request65")]
    [Route("/request65/{Id}")]
    [Route("/request65/{Id}/{Name}")]
    [Route("/request65/{Id}/{Name}/route")]
    public class Request65 : IReturn<Request65Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request65Response
    {
        public string Result { get; set; }
    }

    [Route("/request66")]
    [Route("/request66/{Id}")]
    [Route("/request66/{Id}/{Name}")]
    [Route("/request66/{Id}/{Name}/route")]
    public class Request66 : IReturn<Request66Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request66Response
    {
        public string Result { get; set; }
    }

    [Route("/request67")]
    [Route("/request67/{Id}")]
    [Route("/request67/{Id}/{Name}")]
    [Route("/request67/{Id}/{Name}/route")]
    public class Request67 : IReturn<Request67Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request67Response
    {
        public string Result { get; set; }
    }

    [Route("/request68")]
    [Route("/request68/{Id}")]
    [Route("/request68/{Id}/{Name}")]
    [Route("/request68/{Id}/{Name}/route")]
    public class Request68 : IReturn<Request68Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request68Response
    {
        public string Result { get; set; }
    }

    [Route("/request69")]
    [Route("/request69/{Id}")]
    [Route("/request69/{Id}/{Name}")]
    [Route("/request69/{Id}/{Name}/route")]
    public class Request69 : IReturn<Request69Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request69Response
    {
        public string Result { get; set; }
    }

    [Route("/request70")]
    [Route("/request70/{Id}")]
    [Route("/request70/{Id}/{Name}")]
    [Route("/request70/{Id}/{Name}/route")]
    public class Request70 : IReturn<Request70Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request70Response
    {
        public string Result { get; set; }
    }


    [Route("/request71")]
    [Route("/request71/{Id}")]
    [Route("/request71/{Id}/{Name}")]
    [Route("/request71/{Id}/{Name}/route")]
    public class Request71 : IReturn<Request71Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request71Response
    {
        public string Result { get; set; }
    }

    [Route("/request72")]
    [Route("/request72/{Id}")]
    [Route("/request72/{Id}/{Name}")]
    [Route("/request72/{Id}/{Name}/route")]
    public class Request72 : IReturn<Request72Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request72Response
    {
        public string Result { get; set; }
    }

    [Route("/request73")]
    [Route("/request73/{Id}")]
    [Route("/request73/{Id}/{Name}")]
    [Route("/request73/{Id}/{Name}/route")]
    public class Request73 : IReturn<Request73Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request73Response
    {
        public string Result { get; set; }
    }

    [Route("/request74")]
    [Route("/request74/{Id}")]
    [Route("/request74/{Id}/{Name}")]
    [Route("/request74/{Id}/{Name}/route")]
    public class Request74 : IReturn<Request74Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request74Response
    {
        public string Result { get; set; }
    }

    [Route("/request75")]
    [Route("/request75/{Id}")]
    [Route("/request75/{Id}/{Name}")]
    [Route("/request75/{Id}/{Name}/route")]
    public class Request75 : IReturn<Request75Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request75Response
    {
        public string Result { get; set; }
    }

    [Route("/request76")]
    [Route("/request76/{Id}")]
    [Route("/request76/{Id}/{Name}")]
    [Route("/request76/{Id}/{Name}/route")]
    public class Request76 : IReturn<Request76Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request76Response
    {
        public string Result { get; set; }
    }

    [Route("/request77")]
    [Route("/request77/{Id}")]
    [Route("/request77/{Id}/{Name}")]
    [Route("/request77/{Id}/{Name}/route")]
    public class Request77 : IReturn<Request77Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request77Response
    {
        public string Result { get; set; }
    }

    [Route("/request78")]
    [Route("/request78/{Id}")]
    [Route("/request78/{Id}/{Name}")]
    [Route("/request78/{Id}/{Name}/route")]
    public class Request78 : IReturn<Request78Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request78Response
    {
        public string Result { get; set; }
    }

    [Route("/request79")]
    [Route("/request79/{Id}")]
    [Route("/request79/{Id}/{Name}")]
    [Route("/request79/{Id}/{Name}/route")]
    public class Request79 : IReturn<Request79Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request79Response
    {
        public string Result { get; set; }
    }

    [Route("/request80")]
    [Route("/request80/{Id}")]
    [Route("/request80/{Id}/{Name}")]
    [Route("/request80/{Id}/{Name}/route")]
    public class Request80 : IReturn<Request80Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request80Response
    {
        public string Result { get; set; }
    }


    [Route("/request81")]
    [Route("/request81/{Id}")]
    [Route("/request81/{Id}/{Name}")]
    [Route("/request81/{Id}/{Name}/route")]
    public class Request81 : IReturn<Request81Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request81Response
    {
        public string Result { get; set; }
    }

    [Route("/request82")]
    [Route("/request82/{Id}")]
    [Route("/request82/{Id}/{Name}")]
    [Route("/request82/{Id}/{Name}/route")]
    public class Request82 : IReturn<Request82Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request82Response
    {
        public string Result { get; set; }
    }

    [Route("/request83")]
    [Route("/request83/{Id}")]
    [Route("/request83/{Id}/{Name}")]
    [Route("/request83/{Id}/{Name}/route")]
    public class Request83 : IReturn<Request83Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request83Response
    {
        public string Result { get; set; }
    }

    [Route("/request84")]
    [Route("/request84/{Id}")]
    [Route("/request84/{Id}/{Name}")]
    [Route("/request84/{Id}/{Name}/route")]
    public class Request84 : IReturn<Request84Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request84Response
    {
        public string Result { get; set; }
    }

    [Route("/request85")]
    [Route("/request85/{Id}")]
    [Route("/request85/{Id}/{Name}")]
    [Route("/request85/{Id}/{Name}/route")]
    public class Request85 : IReturn<Request85Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request85Response
    {
        public string Result { get; set; }
    }

    [Route("/request86")]
    [Route("/request86/{Id}")]
    [Route("/request86/{Id}/{Name}")]
    [Route("/request86/{Id}/{Name}/route")]
    public class Request86 : IReturn<Request86Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request86Response
    {
        public string Result { get; set; }
    }

    [Route("/request87")]
    [Route("/request87/{Id}")]
    [Route("/request87/{Id}/{Name}")]
    [Route("/request87/{Id}/{Name}/route")]
    public class Request87 : IReturn<Request87Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request87Response
    {
        public string Result { get; set; }
    }

    [Route("/request88")]
    [Route("/request88/{Id}")]
    [Route("/request88/{Id}/{Name}")]
    [Route("/request88/{Id}/{Name}/route")]
    public class Request88 : IReturn<Request88Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request88Response
    {
        public string Result { get; set; }
    }

    [Route("/request89")]
    [Route("/request89/{Id}")]
    [Route("/request89/{Id}/{Name}")]
    [Route("/request89/{Id}/{Name}/route")]
    public class Request89 : IReturn<Request89Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request89Response
    {
        public string Result { get; set; }
    }

    [Route("/request90")]
    [Route("/request90/{Id}")]
    [Route("/request90/{Id}/{Name}")]
    [Route("/request90/{Id}/{Name}/route")]
    public class Request90 : IReturn<Request90Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request90Response
    {
        public string Result { get; set; }
    }


    [Route("/request91")]
    [Route("/request91/{Id}")]
    [Route("/request91/{Id}/{Name}")]
    [Route("/request91/{Id}/{Name}/route")]
    public class Request91 : IReturn<Request91Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request91Response
    {
        public string Result { get; set; }
    }

    [Route("/request92")]
    [Route("/request92/{Id}")]
    [Route("/request92/{Id}/{Name}")]
    [Route("/request92/{Id}/{Name}/route")]
    public class Request92 : IReturn<Request92Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request92Response
    {
        public string Result { get; set; }
    }

    [Route("/request93")]
    [Route("/request93/{Id}")]
    [Route("/request93/{Id}/{Name}")]
    [Route("/request93/{Id}/{Name}/route")]
    public class Request93 : IReturn<Request93Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request93Response
    {
        public string Result { get; set; }
    }

    [Route("/request94")]
    [Route("/request94/{Id}")]
    [Route("/request94/{Id}/{Name}")]
    [Route("/request94/{Id}/{Name}/route")]
    public class Request94 : IReturn<Request94Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request94Response
    {
        public string Result { get; set; }
    }

    [Route("/request95")]
    [Route("/request95/{Id}")]
    [Route("/request95/{Id}/{Name}")]
    [Route("/request95/{Id}/{Name}/route")]
    public class Request95 : IReturn<Request95Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request95Response
    {
        public string Result { get; set; }
    }

    [Route("/request96")]
    [Route("/request96/{Id}")]
    [Route("/request96/{Id}/{Name}")]
    [Route("/request96/{Id}/{Name}/route")]
    public class Request96 : IReturn<Request96Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request96Response
    {
        public string Result { get; set; }
    }

    [Route("/request97")]
    [Route("/request97/{Id}")]
    [Route("/request97/{Id}/{Name}")]
    [Route("/request97/{Id}/{Name}/route")]
    public class Request97 : IReturn<Request97Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request97Response
    {
        public string Result { get; set; }
    }

    [Route("/request98")]
    [Route("/request98/{Id}")]
    [Route("/request98/{Id}/{Name}")]
    [Route("/request98/{Id}/{Name}/route")]
    public class Request98 : IReturn<Request98Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request98Response
    {
        public string Result { get; set; }
    }

    [Route("/request99")]
    [Route("/request99/{Id}")]
    [Route("/request99/{Id}/{Name}")]
    [Route("/request99/{Id}/{Name}/route")]
    public class Request99 : IReturn<Request99Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request99Response
    {
        public string Result { get; set; }
    }

    [Route("/request100")]
    [Route("/request100/{Id}")]
    [Route("/request100/{Id}/{Name}")]
    [Route("/request100/{Id}/{Name}/route")]
    public class Request100 : IReturn<Request100Response>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Request100Response
    {
        public string Result { get; set; }
    }



}
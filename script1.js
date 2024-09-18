function view()
{
    var x=document.getElementById("myinput");
    if(x.type==="password")
    {
        x.type="text";
    }
    else
    {
        x.type="password";
    }
}

function vieww()
{
    var y=document.getElementById("myinputt");
    if(y.type==="password")
    {
        y.type="text";
    }
    else
    {
        y.type="password";
    }
}

const inp=document.getElementById("inputname1");
const ps=document.getElementById("myinput");
const buts=document.getElementById("butt1");
const inp1=document.getElementById("inputname2");
const ps1=document.getElementById("myinputt");
const buts1=document.getElementById("butt2");

ps.addEventListener("input", () =>
     {
    buts.disabled = !(inp.value.trim()&&ps.value.trim());
     }
);

inp.addEventListener("input", () =>
     {
    buts.disabled = !(inp.value.trim()&&ps.value.trim());
     }
);

ps1.addEventListener("input", () =>
    {
   buts1.disabled = !(inp1.value.trim()&&ps1.value.trim());
    }
);

inp1.addEventListener("input", () =>
    {
   buts1.disabled = !(inp1.value.trim()&&ps1.value.trim());
    }
);





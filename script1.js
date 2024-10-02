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

function setcookie()
{
    var u=document.getElementById('inputname1').value;
    var p=document.getElementById('myinput').value;
    document.cookie="myusername="+u+";path=http://localhost/one.html/";
    document.cookie="mypass="+p+";path=http://localhost/one.html/";
}

function getcookiedata()
{
    console.log(document.cookie);
    var user=getcookie('myusername');
    var pass=getcookie('mypass');
    var user1=getcookie('myusername1');
    var pass1=getcookie('mypass1');

    document.getElementById('inputname1').value=user;
    document.getElementById('myinput').value=pass;
    document.getElementById('inputname2').value=user1;
    document.getElementById('myinputt').value=pass1;
}

function getcookie(cname)
{
    var name=cname+"=";
    var decodedCookie= decodeURIComponent(document.cookie);
    var ca=decodedCookie.split(';');
    for(var i=0;i<ca.length;i++)
    {
        var c=ca[i];
        while(c.charAt(0)==' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function setcookie1()
{
    var u1=document.getElementById('inputname2').value;
    var p1=document.getElementById('myinputt').value;
    document.cookie="myusername1="+u1+";path=http://localhost/one.html/";
    document.cookie="mypass1="+p1+";path=http://localhost/one.html/";
}





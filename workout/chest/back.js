const icon=document.getElementById('menuicon');
const menu=document.getElementById('menu');
let i=0;
icon.addEventListener("click",()=>
{
    if(i===0)
    {
        menu.classList.remove("unseen");
        menu.classList.add("seen");
        i=1;
    }
    else
    {
        menu.classList.remove("seen");
        menu.classList.add("unseen");
        i=0;
    }
})
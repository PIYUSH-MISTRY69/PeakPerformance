
let i=0
function timer(seconds) {
    const timerElement = document.getElementById('four');
    let remainingSeconds = seconds;
  
    const intervalId = setInterval(() => {
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
  
      timerElement.textContent = `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
  
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        timerElement.textContent = "Time's up!";
        i=1;
      }
      const button=document.getElementById('butt');
      const button1=document.getElementById('butt1');
      const button2=document.getElementById('butt2');
      const button3=document.getElementById('butt3');
      const button4=document.getElementById('butt4');
      const button5=document.getElementById('butt5');
      const button6=document.getElementById('butt6');
      const button7=document.getElementById('butt7');
      const button8=document.getElementById('butt8');
      const button9=document.getElementById('butt9');
      const button10=document.getElementById('butt10');
      const button11=document.getElementById('butt11');
      const button12=document.getElementById('butt12');
      const button13=document.getElementById('butt13');
      const button14=document.getElementById('butt14');
      const button15=document.getElementById('butt15');
      const button16=document.getElementById('butt16');
      const button17=document.getElementById('butt17');
      const button18=document.getElementById('butt18');
      const button19=document.getElementById('butt19');

      if(i===1)
      {
        button.classList.add("disabled");
        button.disabled =i;
        button1.classList.add("disabled");
        button1.disabled=i;
        button2.classList.add("disabled");
        button2.disabled=i;
        button3.classList.add("disabled");
        button3.disabled=i;
        button4.classList.add("disabled");
        button4.disabled=i;
        button5.classList.add("disabled");
        button5.disabled=i;
        button6.classList.add("disabled");
        button6.disabled=i;
        button7.classList.add("disabled");
        button7.disabled=i;
        button8.classList.add("disabled");
        button8.disabled=i;
        button9.classList.add("disabled");
        button9.disabled=i;
        button10.classList.add("disabled");
        button10.disabled=i;
        button11.classList.add("disabled");
        button11.disabled=i;
        button12.classList.add("disabled");
        button12.disabled=i;
        button13.classList.add("disabled");
        button13.disabled=i;
        button14.classList.add("disabled");
        button14.disabled=i;
        button15.classList.add("disabled");
        button15.disabled=i;
        button16.classList.add("disabled");
        button16.disabled=i;
        button17.classList.add("disabled");
        button17.disabled=i;
        button18.classList.add("disabled");
        button18.disabled=i;
        button19.classList.add("disabled");
        button19.disabled=i;
      }
  
      remainingSeconds--;
    }, 1000);
  }
  
  timer(2 * 60);

 var cc=0;

 function correct()
 {
  cc=cc+10;
  console.log(cc);
  const but=document.getElementsByClassName('button');
  but.disabled=1;
 }

 function incorrect()
 {
  cc=cc-5;
  console.log(cc);
 }

 function disable1()
 {
  document.getElementById('butt').disabled=true;
  document.getElementById('butt1').disabled=true;
 }

 function disable2()
 {
  document.getElementById('butt2').disabled=true;
  document.getElementById('butt3').disabled=true;
 }

 function disable3()
 {
  document.getElementById('butt4').disabled=true;
  document.getElementById('butt5').disabled=true;
 }

 function disable4()
 {
  document.getElementById('butt6').disabled=true;
  document.getElementById('butt7').disabled=true;
 }

 function disable5()
 {
  document.getElementById('butt8').disabled=true;
  document.getElementById('butt9').disabled=true;
 }

 function disable6()
 {
  document.getElementById('butt10').disabled=true;
  document.getElementById('butt11').disabled=true;
 }

 function disable7()
 {
  document.getElementById('butt12').disabled=true;
  document.getElementById('butt13').disabled=true;
 }

 function disable8()
 {
  document.getElementById('butt14').disabled=true;
  document.getElementById('butt15').disabled=true;
 }

 function disable9()
 {
  document.getElementById('butt16').disabled=true;
  document.getElementById('butt17').disabled=true;
 }

 function disable10()
 {
  document.getElementById('butt18').disabled=true;
  document.getElementById('butt19').disabled=true;
 }
 

function display()
{
  const display=document.getElementById('res');
  display.classList.add("seen");
  if(cc<=0)
  {
    display.innerText=`You earned 0 points\nHard luck`;
  }
  else if(cc>0 && cc<=30)
  {
    display.innerText=`You earned ${cc} points\nUse 'PEAK10' to get 10% off on your next order`;
  }
  else if(cc>30 && cc<=60)
  {
    display.innerText=`You earned ${cc} points\nUse 'PEAK15' to get 15% off on your next order`;
  }
  else if(cc>60 && cc<=90)
  {
    display.innerText=`You earned ${cc} points\nUse 'PEAK20' to get 20% off on your next order`;
  }
  else
  {
    display.innerText=`You earned ${cc} points\nUse 'PEAK25' to get 25% off on your next order`;
  }
}


function gayab()
{
  const two=document.getElementById('two');
  two.classList.add("unseen");
}
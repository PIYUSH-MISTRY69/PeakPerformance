const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const bmiAdviceText = document.getElementById("bmiadvice");
const form = document.querySelector("form");
const bmiAdviceSection = document.getElementById("Advice");
var bmi=0;

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
  bmiAdviceText.textContent = "";

   // Hide the BMI advice section
   bmiAdviceSection.classList.remove("visible-block");
   bmiAdviceSection.classList.add("hidden-block");
   console.log("Form reset, advice hidden");
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    advice1.innerHTML=`<b>Invalid entries</b>`;
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);
  const advice = getBmiAdvice(bmi);
  gettextadvice(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
  bmiAdviceText.textContent = advice;
  
  // Show the BMI advice section
  //bmiAdviceSection.style.display = "block"; // Ensure visibility
  //bmiAdviceSection.classList.remove("hidden-block");
 // bmiAdviceSection.classList.add("visible-block");
  //console.log("Form submitted, advice shown");
 // console.log((bmiAdviceText).textcontent);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

function getBmiAdvice(bmi){
  if(bmi <18.5){
    return "You are currently underweight. It’s important to increase your caloric intake and focus on a balanced diet rich in nutrients. Consider consulting a healthcare provider or a nutritionist for personalized recommendations. Incorporating strength training exercises can also help build muscle mass."
  } else if(bmi>18.5 && bmi <25){
    return "You have a healthy weight! Keep up your balanced diet and regular physical activity. Maintaining a consistent exercise routine and eating a variety of nutrient-rich foods will help you stay in this healthy range."
  } else if(bmi>25 && bmi<30){
    return "You are slightly overweight. A combination of a balanced diet and regular exercise can help you reach a healthier weight. Consider reducing your caloric intake, eating more whole foods, and increasing your physical activity. Consulting with a healthcare provider can provide additional guidance."
  } else {
    return "You are classified as obese, which can increase your risk for various health conditions. It’s crucial to adopt a comprehensive approach to weight management, including a balanced diet and regular physical activity. Seeking advice from a healthcare provider or a nutritionist is highly recommended to develop a personalized plan to improve your health."
  }
}

const subbut=document.getElementById('subbut');
const advice1=document.getElementById('advice');
const resset=document.getElementById('resset');
let i=0;j=0;
subbut.addEventListener("click",()=>
{
  if(i===0)
  {
    advice1.classList.remove("unseen");
    advice1.classList.add("resize");
  }
})
resset.addEventListener("click",()=>
  {
    if(j===0)
    {
      advice1.classList.add("unseen");
      advice1.classList.remove('resize')
    }
  })


function gettextadvice(bmi)
{
  if(bmi <18.5 && bmi>0){
    advice1.innerHTML=`<b>You are currently underweight. It’s important to increase your caloric intake and focus on a balanced diet rich in nutrients. Consider consulting a healthcare provider or a nutritionist for personalized recommendations. Incorporating strength training exercises can also help build muscle mass.</b>`
  } else if(bmi>18.5 && bmi <25){
    advice1.innerHTML= `<b>You have a healthy weight! Keep up your balanced diet and regular physical activity. Maintaining a consistent exercise routine and eating a variety of nutrient-rich foods will help you stay in this healthy range.</b>`;
  } else if(bmi>25 && bmi<30){
    advice1.innerHTML=`<b>You are slightly overweight. A combination of a balanced diet and regular exercise can help you reach a healthier weight. Consider reducing your caloric intake, eating more whole foods, and increasing your physical activity. Consulting with a healthcare provider can provide additional guidance.</b>`;
  } else if(bmi>30){
    advice1.innerHTML=`<b>You are classified as obese, which can increase your risk for various health conditions. It’s crucial to adopt a comprehensive approach to weight management, including a balanced diet and regular physical activity. Seeking advice from a healthcare provider or a nutritionist is highly recommended to develop a personalized plan to improve your health.</b>`;
  }
}
let z=0;
function shift()
{
  const con=document.getElementById('con');
  if(z==0)
  {
    z=1;
    con.classList.add("shift");
  }
}

function reshift()
{
  const con=document.getElementById('con');
  if(z==1)
  {
    z=0;
    con.classList.remove("shift");
  }
}
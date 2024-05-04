const container=document.querySelector(".container");
const Count=document.querySelector(".Count");
const quetion=document.querySelector(".quetion");
const options=document.querySelectorAll(".option");
const buttons=document.querySelectorAll(".move");

const quetionsArr=[
    {
        que:"what is the capital of india?",
        ops:["Mumbai","New Delhi","Kolkata","Chennai"],
        ans:2
    },
    {
        que:"which river is considered thr holiest in india",
        ops:["Yamuna","Ganga","Brahmaputra","Godavari"],
        ans:1
    },
    {
        que:"What is the largest state in india by area?",
        ops:["Maharashtra","Uttar Pradesh","Rajasthan","Madhya Pradesh"],
        ans:2
    },
    {
        que:"Which team has won the most IPL titles?",
        ops:["Mumbai Indians","Chennai Super Kings","Kolkata Knight Riders","Rajasthan Royals"],
        ans:0
    },
    {
        que:"Who was the first batsman to score a century in IPL history?",
        ops:["Brendon McCullum","Adam Glichrist","AB de Villiers","Virat Kohli"],
        ans:0
    },
   
];

let currentQuestion=0;
let AnswerArr=[];

let CorrectAns=0;
let IncorrectAns=0;
let CountNo=1;

function showQuestion()
{
    const currentQuize=quetionsArr[currentQuestion];
    quetion.innerHTML=currentQuize.que;
    Count.innerHTML=CountNo;

    options.forEach((option,index)=>{
        option.innerHTML=currentQuize.ops[index];
    })
}

function selectOP(index){
    AnswerArr.push(index);

    console.log(AnswerArr[currentQuestion]);
    
    if(AnswerArr[currentQuestion]==quetionsArr[currentQuestion].ans)
    {
        buttons[currentQuestion].style.backgroundColor="green";
        CorrectAns++;
    }
    else{
        buttons[currentQuestion].style.backgroundColor="red";
        IncorrectAns++;
    }
}

function submitAns()
{
    if(currentQuestion < quetionsArr.length-1)
    {
        currentQuestion++;
        CountNo++;
        showQuestion();
    }
    else{
        showResult();
    }
}

const result=document.querySelector(".result");
const Correct=document.querySelector(".Correct");
const Incorrect=document.querySelector(".Incorrect");
const emoji=document.querySelector(".emoji");


function showResult()
{
    result.style.display="block";
    container.style.display="none";

    Correct.innerHTML+=CorrectAns;
    Incorrect.innerHTML+=IncorrectAns;

    if(CorrectAns > 2)
    {
        emoji.innerHTML="😊";
    }
    else{
        emoji.innerHTML="😥";
    }
}
showQuestion();

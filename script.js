let setupPara=document.getElementsByClassName('setup')[0]
let punchlinePara=document.getElementsByClassName('punchline')[0]


const url = "https://official-joke-api.appspot.com/random_joke";

let joke={}

async function getjokes() {
  await fetch(url).then((response) => {
    let jsonJokes = response.json();

    return jsonJokes;

  }) .then((data)=>{
   // console.log(data.setup)
   Object.assign(joke,data)
   
  })
 showJoke()
}

function showJoke(){
   // console.log(joke)
   setupPara.innerHTML=joke.setup
   punchlinePara.innerHTML=joke.punchline
   if(joke.setup){
     setupPara.innerHTML=joke.setup
   }else{
     setupPara.innerHTML="try again !"
   }
}
//console.log(joke)
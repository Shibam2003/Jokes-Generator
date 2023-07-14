/* <div id="joke" class="joke">Awesome Joke is loading...</div>
<button id="jokeBtn" class="btn">Next Joke</button> */

// PROMISES
// 2con => succ => fail

// fetch()//alternative of xmlhttp
// milega or nehimilega

// fulfilled or reject
// GET https://icanhazdadjoke.com/
// async function generateJokes(){}//for async function 

const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


//old way to create promises 

// const generateJokes = () =>{
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }


//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res)=>res.json())
//     .then((data)=>{
//         joke.innerHTML = data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// };


//using async await function this is another way of creating promise(to minimize the complexity)

const generateJokes = async () =>{
    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
    
    
       const res = await fetch('https://icanhazdadjoke.com',setHeader)
       const data = await res.json();
       joke.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
   


    
};











jokeBtn.addEventListener('click',generateJokes);
generateJokes();
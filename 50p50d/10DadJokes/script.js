const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// Using async await
generateJoke()
async function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener("click", generateJoke)


//Using then
// generateJoke()
// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com' ,config )
//     .then(res => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }
// jokeBtn.addEventListener("click", generateJoke)
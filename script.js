let Result = document.getElementById("Result")
let generate_btn =  document.getElementById("generate_btn")
let tickers = document.querySelector(".tickers")

generate_btn.addEventListener("click",()=>{
    console.log(
        "clicked"
    )
    Result.style.display="none"
    tickers.innerText = "generating..."
} )

API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random"

setTimeout(() => {
    Api_call(API_URL)
}, 3000);

async function Api_call(URL) {
   const data =  await fetch(URL)
    console.log(URL)
    console.log(data)
    
    try{
        let res = await data.json()
        console.log(res.text)
        tickers.innerText = res.text
    }
    catch(err){
        console.log(err)
    }
}
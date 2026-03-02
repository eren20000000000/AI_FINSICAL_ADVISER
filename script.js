let Result = document.getElementById("Result")
let Result_container = document.getElementById("Result_container")
let generate_btn =  document.getElementById("generate_btn")
let tickers = document.querySelector(".tickers")

generate_btn.addEventListener("click",()=>{
    console.log(
        "clicked"
    )
    Result.style.display="none"
    tickers.innerText = "generating..."
} )
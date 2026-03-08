let Result = document.getElementById("Result")
let generate_btn =  document.getElementById("generate_btn")
let tickers = document.querySelector(".tickers")

import { getFinancialAdvice } from "./main.js";
generate_btn.addEventListener("click", async () => {
    console.log("clicked");
    Result.style.display = "none";
    tickers.innerText = "generating...";
    const advice = await getFinancialAdvice();
    tickers.innerText = advice;
    Result.style.display = "block";
});
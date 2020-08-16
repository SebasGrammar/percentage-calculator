import { removeFormat } from "./formatter.js";

const calculator = document.querySelector(".calculator");
const salePrice = calculator.querySelector(".sale-price");

export function copy() {
    let price = removeFormat(salePrice.textContent);
    navigator.clipboard.writeText(price)
}

salePrice.addEventListener("click", copy)
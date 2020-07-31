import {main} from "./src/js/calculator1.js";

import {main as m} from "./src/js/calculator2.js";

import {main as ma} from "./src/js/calculator3.js";

import {main as mai} from "./src/js/calculator4.js";

import {main as mm} from "./src/js/price1.js";

import {main as mmm} from "./src/js/price2.js";

import {main as mmmm} from "./src/js/price3.js";

console.log(mai)

// const calculator1 = document.querySelector("#calculator-1");

// const amount = calculator1.querySelector(".amount"),
//     percent = calculator1.querySelector(".percent"),
//     base = calculator1.querySelector(".base");

// const bar = calculator1.querySelector(".bar");
// const progress = bar.querySelector(".progress");

// function updateVariable() {

//     const total = 100 - (100 - percent.value)

//     document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

//     console.log(Number(percent.value) * Number(base.value) / 100)
//     amount.textContent = Number(percent.value) * Number(base.value) / 100
// }

function updateTwo() {
    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    base.textContent = Number(amount.value) * 100 / Number(percent.value)
    console.log("L")
}

// percent.addEventListener("input", updateVariable.bind(progress))

//percent.addEventListener("input", updateTwo.bind(progress))
// console.log(percent)
// console.log("SET UP")

main()
m()
ma()
mai()

// prices

mm()
mmm()
mmmm()

console.log(main)
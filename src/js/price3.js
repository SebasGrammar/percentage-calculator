const calculator = document.querySelector("#calculator-7");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
    salePrice = calculator.querySelector(".sale-price");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

function update() {

    console.log(this.dataset.name)

    percent.textContent = Number(salePrice.value) * 100 / startingPrice.value

    //const total = 100 - (100 - percent.textContent)

    //document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log("L")
}

export function main() {
    startingPrice.addEventListener("input", update.bind(progress))
}
const calculator = document.querySelector("#calculator-6");

const startingPrice = calculator.querySelector(".starting-price"),
    increase = calculator.querySelector(".increase"),
    salePrice = calculator.querySelector(".sale-price"),
    excess = calculator.querySelector(".excess");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {

    console.log(this.dataset.name)

    salePrice.textContent = Number(startingPrice.value) * (100 + Number(increase.value)) / 100

    //const total = 100 - (100 - percent.textContent)

    //document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    excess.textContent = Number(salePrice.textContent) - Number(startingPrice.value);
    console.log("L")
    endingPoint.style.left = `${total}%`
}

// export function main() {
//     startingPrice.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
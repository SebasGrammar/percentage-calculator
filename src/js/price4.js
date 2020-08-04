const calculator = document.querySelector("#calculator-8");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
    profit = calculator.querySelector(".profit"),
    salePrice = calculator.querySelector(".sale-price");

const sign = calculator.querySelector(".sign");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const end = bar.querySelector(".end")

const percentValue = bar.querySelector(".percent-value");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {

    console.log(this.dataset.name)

    // const total = 100 - (100 - percent.textContent)
    const total = 100 - 25

    let originalPrice = Number(startingPrice.value) + Number(profit.value)

    let holder = Number(percent.value) * originalPrice / 100
    console.log(originalPrice)
    // salePrice.textContent = Number(percent.value) * originalPrice / 100;

    salePrice.textContent = originalPrice + holder


    endingPoint.style.left = `${total}%`

    percentValue.textContent = `2%`

    endingPoint.textContent = salePrice.textContent

    end.textContent = salePrice.textContent
}

// export function main() {
//     startingPrice.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
const calculator = document.querySelector("#calculator-5");

const startingPrice = calculator.querySelector(".starting-price"),
    discount = calculator.querySelector(".discount"),
    salePrice = calculator.querySelector(".sale-price"),
    saving = calculator.querySelector(".saving");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const end = bar.querySelector(".end")

const percentValue = bar.querySelector(".percent-value");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {

    console.log(this.dataset.name)

    salePrice.textContent = Number(startingPrice.value) * (100 - Number(discount.value)) / 100

    const total = 100 - discount.value

    console.log(total)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    saving.textContent = Number(startingPrice.value) - Number(salePrice.textContent);
    console.log(saving, salePrice, startingPrice)
    //document.documentElement.style.setProperty(`--progress-5`, `${total}%`);
    endingPoint.style.left = `${total}%`
}

// export function main() {
//     startingPrice.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
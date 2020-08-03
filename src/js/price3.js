const calculator = document.querySelector("#calculator-7");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
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

    const total = 100 - discount.value

    percent.textContent = Math.abs(100 - (Number(salePrice.value) * 100 / startingPrice.value))
    // percent.textContent = Number(salePrice.value) * 100 / startingPrice.value
    console.log(Number(startingPrice.value) < Number(salePrice.value))
    if (Number(salePrice.value) < Number(startingPrice.value)) {
        //sign.textContent = "-"
        sign.textContent = "less"
    } else {
        sign.textContent = "more"
    }

    //const total = 100 - (100 - percent.textContent)

    //document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    endingPoint.style.left = `${total}%`
    
}

// export function main() {
//     startingPrice.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
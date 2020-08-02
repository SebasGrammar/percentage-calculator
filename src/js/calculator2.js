const calculator = document.querySelector("#calculator-2");

const amount = calculator.querySelector(".amount"),
    percent = calculator.querySelector(".percent"),
    base = calculator.querySelector(".base");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const end = bar.querySelector(".end")

const percentValue = bar.querySelector(".percent-value");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function updateTwo() {
    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log(this.dataset.name)

    base.textContent = Number(amount.value) * 100 / Number(percent.value)
    console.log("L")

    percentValue.textContent = `${percent.value}%`

    endingPoint.style.left = `${total}%`
    
    endingPoint.textContent = amount.value
    end.textContent = base.textContent
}


// export function main() {
//     percent.addEventListener("input", updateTwo.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", updateTwo.bind(progress))
}
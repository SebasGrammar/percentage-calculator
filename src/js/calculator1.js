const calculator1 = document.querySelector("#calculator-1");

const amount = calculator1.querySelector(".amount"),
    percent = calculator1.querySelector(".percent"),
    base = calculator1.querySelector(".base");

const bar = calculator1.querySelector(".bar");
const progress = bar.querySelector(".progress");

const percentValue = bar.querySelector(".percent-value");

console.log(percentValue)

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator1.querySelector("button");

function updateVariable() {

    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    //console.log(Number(percent.value) * Number(base.value) / 100)
    amount.textContent = Number(percent.value) * Number(base.value) / 100

    // endingPoint.style.left = `${total}%`
    percentValue.textContent = `${percent.value}%`

    endingPoint.textContent = amount.textContent
    endingPoint.style.left = `${total}%`
}

// percent.addEventListener("input", updateVariable.bind(progress))

// export function main() {
//     percent.addEventListener("input", updateVariable.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", updateVariable.bind(progress))
}
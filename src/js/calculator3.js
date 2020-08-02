const calculator = document.querySelector("#calculator-3");

const amount = calculator.querySelector(".amount"),
    percent = calculator.querySelector(".percent"),
    base = calculator.querySelector(".base");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {
    // const total = 100 - (100 - percent.value)

    // document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log(this.dataset.name)

    percent.textContent = Number(amount.value) * 100 / Number(base.value)

    const total = 100 - (100 - percent.textContent)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log("L")
    endingPoint.style.left = `${total}%`
}

// export function main() {
//     amount.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
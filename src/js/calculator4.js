const calculator = document.querySelector("#calculator-4");

const amount1 = calculator.querySelector(".amount-1"),
    percent1 = calculator.querySelector(".percent-1");
    
const amount2 = calculator.querySelector(".amount-2"),
    percent2 = calculator.querySelector(".percent-2");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const end = bar.querySelector(".end")

const percentValue = bar.querySelector(".percent-value");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {

    amount2.textContent = Number(amount1.value) * Number(percent2.value) / Number(percent1.value)

    // const total = 100 - (100 - percent2.textContent)
    const total = Number(percent2.value)

    console.log(total)
    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log("L")

    endingPoint.style.left = `${total}%`
}

// export function main() {
//     percent2.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
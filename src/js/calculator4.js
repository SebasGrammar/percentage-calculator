const calculator = document.querySelector("#calculator-4");

const amount1 = calculator.querySelector(".amount-1"),
    percent1 = calculator.querySelector(".percent-1");
    
const amount2 = calculator.querySelector(".amount-2"),
    percent2 = calculator.querySelector(".percent-2");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

function update() {

    amount2.textContent = Number(amount1.value) * Number(percent2.value) / Number(percent1.value)

    // const total = 100 - (100 - percent2.textContent)
    const total = Number(percent2.value)

    console.log(total)
    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);
    console.log("L")
}

export function main() {
    percent2.addEventListener("input", update.bind(progress))
}
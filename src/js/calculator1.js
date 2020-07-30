const calculator1 = document.querySelector("#calculator-1");

const amount = calculator1.querySelector(".amount"),
    percent = calculator1.querySelector(".percent"),
    base = calculator1.querySelector(".base");

const bar = calculator1.querySelector(".bar");
const progress = bar.querySelector(".progress");

function updateVariable() {

    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    console.log(Number(percent.value) * Number(base.value) / 100)
    amount.textContent = Number(percent.value) * Number(base.value) / 100
}

// percent.addEventListener("input", updateVariable.bind(progress))

export function main() {
    percent.addEventListener("input", updateVariable.bind(progress))
}
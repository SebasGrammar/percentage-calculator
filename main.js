const amount = document.querySelector(".amount"),
    percent = document.querySelector(".percent"),
    base = document.querySelector(".base");

const bar = document.querySelector(".bar");
const progress = bar.querySelector(".progress");

function updateVariable() {

    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    console.log(Number(percent.value) * Number(base.value) / 100)
    amount.textContent = Number(percent.value) * Number(base.value) / 100
}

percent.addEventListener("input", updateVariable.bind(progress))
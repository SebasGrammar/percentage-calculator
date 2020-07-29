const amount = document.querySelector(".amount"),
    percent = document.querySelector(".percent"),
    base = document.querySelector(".base");

const bar = document.querySelector(".bar");
const progress = bar.querySelector(".progress");

// function updateVariable() {

//     const total = 100 - (100 - percent.value)

//     const suffix = this.dataset.sizing || '';
//     // document.documentElement.style.setProperty(`--${this.dataset.name}`, this.value + suffix);
//     document.documentElement.style.setProperty(`--${this.dataset.name}`, total + suffix);

//     console.log(this.dataset.name)
//     console.log(percent.value + suffix)


//     console.log(Number(percent.value) * Number(base.value) / 100)
// }

function updateVariable() {

    const total = 100 - (100 - percent.value)

    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${total}%`);

    console.log(Number(percent.value) * Number(base.value) / 100)
    amount.textContent = Number(percent.value) * Number(base.value) / 100
}

percent.addEventListener("input", updateVariable.bind(progress))
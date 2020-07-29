const amount = document.querySelector(".amount"),
    percent = document.querySelector(".percent");

const bar = document.querySelector(".bar");
const progress = bar.querySelector(".progress");

function updateVariable() {

    const total = 100 - (100 - percent.value)

    const suffix = this.dataset.sizing || '';
    // document.documentElement.style.setProperty(`--${this.dataset.name}`, this.value + suffix);
    document.documentElement.style.setProperty(`--${this.dataset.name}`, total + suffix);

    console.log(this.dataset.name)
    console.log(percent.value + suffix)
}

//progress.addEventListener("change", updateVariable)

percent.addEventListener("input", updateVariable.bind(progress))
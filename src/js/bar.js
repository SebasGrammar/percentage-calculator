const amount = document.querySelector(".amount"),
    percent = document.querySelector(".percent");

const bar = document.querySelector(".bar");
const progress = bar.querySelector(".progress");

function updateVariable() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    console.log(this)
}

//progress.addEventListener("change", updateVariable)

percent.addEventListener("input", updateVariable.bind(progress))
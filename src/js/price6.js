const calculator = document.querySelector("#calculator-10");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
    profit = calculator.querySelector(".profit"),
    units = calculator.querySelector(".units"),
    total = calculator.querySelector(".total"),
    excess = calculator.querySelector(".excess"),
    salePrice = calculator.querySelector(".sale-price");

const sign = calculator.querySelector(".sign");

const bar = calculator.querySelector(".bar");
const progress = bar.querySelector(".progress");

const end = bar.querySelector(".end")

const percentValue = bar.querySelector(".percent-value");

const endingPoint = bar.querySelector(".ending-point");

const submitButton = calculator.querySelector("button");

function update() {

    console.log(this.dataset.name)

    // const total = 100 - (100 - percent.textContent)
    //const total = 100 - 25 // different total from the one below

    // let originalPrice = Number(startingPrice.value) + Number(profit.value)

    // let holder = Number(percent.value) * originalPrice / 100
    // console.log(originalPrice)
    // console.log(holder)
    // salePrice.textContent = Number(percent.value) * originalPrice / 100;

    // salePrice.textContent = originalPrice + holder

    // salePrice.textContent = originalPrice + holder
    
    // let oe = Number(salePrice.textContent) * percent.value / 100

    // salePrice.textContent = originalPrice + oe

    let x = ( Number(startingPrice.value) + Number(profit.value) ) / ( 1 - (Number(percent.value) / 100 ) )

    //salePrice.textContent = x.toFixed(2)
    console.log(startingPrice.value)
    // salePrice.textContent = Math.round(x) - startingPrice.value
    salePrice.textContent = Math.round(x)
    console.log(x)

    let difference = 0;
    let counter = 0;
    

    while (difference < Number(startingPrice.value)) {
        difference += Number(profit.value)
        counter += 1
        console.log(counter)
    }

    excess.textContent = difference - Number(startingPrice.value);

    units.textContent = counter
    // excess.textContent = excess
    console.log(difference)
    total.textContent = Number(salePrice.textContent) * counter

    console.log(Number(startingPrice.value) + Number(profit.value))
    console.log( 1 - (Number(percent.value) / 100 ))

    endingPoint.style.left = `${total}%`

    percentValue.textContent = `2%`

    endingPoint.textContent = salePrice.textContent

    end.textContent = salePrice.textContent
}

// export function main() {
//     startingPrice.addEventListener("input", update.bind(progress))
// }

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
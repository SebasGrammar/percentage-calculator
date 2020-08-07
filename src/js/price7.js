const calculator = document.querySelector("#calculator-11");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
    profit = calculator.querySelector(".profit"),
    units = calculator.querySelector(".units"),
    total = calculator.querySelector(".total"),
    excess = calculator.querySelector(".excess"),
    profitMade = calculator.querySelector(".profit-made"),
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



    let x = ( Number(startingPrice.value) + Number(profit.value) ) / ( 1 - (Number(percent.value) / 100 ) )

    salePrice.textContent = Math.round(x)


    let difference = 0;
    let counter = 0;
    

    while (difference < Number(startingPrice.value)) {
        difference += Number(profit.value)
        counter += 1
        console.log(counter)
    }

    excess.textContent = difference - Number(startingPrice.value);
    units.textContent = counter
    

    console.log(difference)
    total.textContent = Number(salePrice.textContent) * counter
    profitMade.textContent = profit.value * counter

    console.log(Number(startingPrice.value) + Number(profit.value))
    console.log( 1 - (Number(percent.value) / 100 ))

    let additionalProducts = 0;
    let actual = 0;
    console.log("OE")
    console.log(Number(startingPrice.value) + Number(profit.value))

    let newProfit = 0;
    let step = Number(startingPrice.value) + Number(profit.value)
    let sp = 0;


    
    let overallPrice = Number(profit.value) + Number(startingPrice.value)

    endingPoint.style.left = `${total}%`

    percentValue.textContent = `2%`

    endingPoint.textContent = salePrice.textContent

    end.textContent = salePrice.textContent
}

export function main() {
    submitButton.addEventListener("click", update.bind(progress))
}
const calculator = document.querySelector("#calculator-10");

const startingPrice = calculator.querySelector(".starting-price"),
    percent = calculator.querySelector(".percent"),
    profit = calculator.querySelector(".profit"),
    units = calculator.querySelector(".units"),
    total = calculator.querySelector(".total"),
    excess = calculator.querySelector(".excess"),
    goal = calculator.querySelector(".goal"),
    profitMade = calculator.querySelector(".profit-made"),
    salePrice = calculator.querySelector(".sale-price");

const actualTotal = calculator.querySelector(".actual-total"),
    withProfit = calculator.querySelector(".with-profit");


/* TESTS */

const canBuy = calculator.querySelector(".can-buy"),
    left = calculator.querySelector(".left");

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
    
    // excess.textContent = excess
    console.log(difference)
    total.textContent = Number(salePrice.textContent) * counter
    profitMade.textContent = profit.value * counter

    console.log(Number(startingPrice.value) + Number(profit.value))
    console.log( 1 - (Number(percent.value) / 100 ))

    let additionalProducts = 0;
    let actual = 0;
    console.log("OE")
    console.log(Number(startingPrice.value) + Number(profit.value))
    //let step = Number(salePrice.textContent)
    let newProfit = 0;
    let step = Number(startingPrice.value) + Number(profit.value)
    let sp = 0;

    while (sp < Number(goal.value)) {
        sp += step
        newProfit += Number(profit.value)
        if (newProfit > Number(startingPrice.value)) {
            console.log(`excess: ${newProfit}`)
            newProfit -= Number(startingPrice.value)
            console.log(`You have ${newProfit} left over.`)
            console.log(newProfit)
            actual ++
        }
        console.log(sp)
        additionalProducts ++
    }
    
    let overallPrice = Number(profit.value) + Number(startingPrice.value)

    //console.log("You can buy these units: ")
    let unitsICanBuy = Math.floor(Number(goal.value) / startingPrice.value)

    canBuy.textContent = unitsICanBuy
    left.textContent = Number(goal.value) - Number(startingPrice.value) * unitsICanBuy
    console.log(`left: ${left.textContent}`)
    console.log(`oeoeoeoe ${overallPrice * unitsICanBuy}`)
    console.log(unitsICanBuy * overallPrice)

    actualTotal.textContent = sp // sp refers to the accumulated value
    withProfit.textContent = Number(actualTotal.textContent) + actual * step
    console.log(`New profit: ${newProfit}`)
    //console.log(`Additional products: ${additionalProducts}`)
    console.log(`Actual products: ${actual}`)
    let ooo = difference;

    

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
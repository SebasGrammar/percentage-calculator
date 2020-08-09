const calculator = document.querySelector("#calculator-12");

console.log(calculator)

const startingPrice = calculator.querySelector(".starting-price"),
    profit = calculator.querySelector(".profit"),
    percent = calculator.querySelector(".percent"),
    salePrice = calculator.querySelector(".sale-price");

console.log(profit)

const initialInvestment = calculator.querySelector(".initial-investment"),
    initialUnits = calculator.querySelector(".units"),
    actualInvestment = calculator.querySelector(".actual-investment"),
    test = calculator.querySelector(".test"), // actually invested...
    leftOver = calculator.querySelector(".left-over"),
    goal = calculator.querySelector(".goal"),
    totalProfit = calculator.querySelector(".total"),
    profitOnInvestment = calculator.querySelector(".profit-on-investment"),
    overallProfit = calculator.querySelector(".overall-profit"),
    totalUnits = calculator.querySelector(".total-units"),
    totalCycles = calculator.querySelector(".cycles");

const submitButton = calculator.querySelector("button");

function calculate() {

    let x = (Number(startingPrice.value) + Number(profit.value)) / (1 - (Number(percent.value) / 100))

    let investment = Number(initialInvestment.value);
    let unitPrice = Number(startingPrice.value);

    let price = Number(startingPrice.value) + Number(profit.value);


    salePrice.textContent = Math.round(x)

    let units = Math.floor(investment / unitPrice)
    let total = 0;
    let cycles = 0;

    initialUnits.textContent = units

    let money = 0;

    if (investment === Number(goal.value)) {
        let revenue = units * (unitPrice + Number(profit.value))

        let left = investment - (unitPrice * units)
        leftOver.textContent = left

        money = revenue + investment - (unitPrice * units)

        actualInvestment.textContent = revenue

    } else if (investment <= Number(goal.value)) {

        while (investment <= Number(goal.value)) {
            units = Math.floor(investment / unitPrice)
            let left = investment - (unitPrice * units)
            leftOver.textContent = left
            let revenue = units * (unitPrice + Number(profit.value))

            //let total = revenue + left
            investment = revenue + left
            // actualInvestment.textContent = investment
            actualInvestment.textContent = revenue
            money = investment; // not necessary but need to focus on somethig else for now

            total = units * (unitPrice + profit) + left
            // console.log(units)
            // console.log(total)
            cycles++

            console.log(units)
        }
    } else {

    }

    test.textContent = investment - (investment - units * Number(startingPrice.value))
    profitOnInvestment.textContent = Number(actualInvestment.textContent) - Number(test.textContent)


    // if (cycles === 0) {
    //     // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)
    //     // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)

    //     overallProfit.textContent = Number(totalProfit.textContent) - Number(initialInvestment.value)
    // } else {
    //     // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)
    //     //overallProfit.textContent = total - Number(initialInvestment.value)
    // }
    // totalProfit.textContent = units * price
    // actualInvestment.textContent = money
    totalProfit.textContent = money
    totalCycles.textContent = cycles
    totalUnits.textContent = units

    if (cycles === 0) {
        // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)
        // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)

        // overallProfit.textContent = Number(totalProfit.textContent) - Number(initialInvestment.value)
        overallProfit.textContent = Number(totalProfit.textContent) - Number(initialInvestment.value)
    } else {
        // overallProfit.textContent = Number(actualInvestment.textContent) - Number(initialInvestment.value)
        //overallProfit.textContent = total - Number(initialInvestment.value)
        overallProfit.textContent = Number(totalProfit.textContent) - Number(initialInvestment.value)
    }

}

export function main() {
    // submitButton.addEventListener("click", calculate.bind(progress))
    submitButton.addEventListener("click", calculate)
}

    // function calculate({ unitPrice, profit }, investment, goal) {

//     let units = Math.floor(investment / unitPrice)
//     let total = 0;
//     let cycles = 0;

//     initialUnits.textContent = units

//     while (investment < goal) {
//         units = Math.floor(investment / unitPrice)
//         let left = investment - (unitPrice * units)
//         let revenue = units * (unitPrice + profit)
//         //let total = revenue + left
//         investment = revenue + left

//         total = units * (unitPrice + profit) + left
//         // console.log(units)
//         // console.log(total)
//         cycles++

//         console.log(units)
//     }

// }

// function calculate({ unitPrice, profit }, investment, goal) {

//     let units = Math.floor(investment / unitPrice)
//     let total = 0;
//     let cycles = 0;

//     while (investment < goal) {
//         let units = Math.floor(investment / unitPrice)
//         let left = investment - (unitPrice * units)
//         let revenue = units * (unitPrice + profit)
//         //let total = revenue + left
//         investment = revenue + left

//         total = units * (unitPrice + profit) + left
//         // console.log(units)
//         // console.log(total)
//         cycles++

//         console.log(units)
//     }
// }
import {initialize} from "./src/js/formatter.js";

// CALCULATOR

const calculator = document.querySelector(".calculator");

// INFO DISPLAY

const salePrice = calculator.querySelector(".sale-price"), // Selling price -> all units + commission + shipping
    profits = calculator.querySelector(".profit"), // profit after selling specified units
    unitPrice = calculator.querySelector(".unit-price"),
    commissionValue = calculator.querySelector(".commission-value"),
    unitWithoutCommission = calculator.querySelector(".unit-without-commission"),
    total = calculator.querySelector(".total"); // unit price after applying commission

// DATA

const buyingPrice = calculator.querySelector(".buying-price"),
    shipping = calculator.querySelector(".shipping"),
    desiredProfit = calculator.querySelector(".desired-profit"),
    units = calculator.querySelector(".units"),
    commission = calculator.querySelector(".commission"),
    additionalFee = calculator.querySelector(".extra-fee");

// TRIGGER

initialize()

const calculateButton = calculator.querySelector(".calculate-button");

function calculate() {
    
    // Buying price -> how much does each unit cost?
    let price = Number(buyingPrice.value);

    // Desired profit
    let profit = Number(desiredProfit.value);

    // Units
    let numberOfUnits = Number(units.value);

    // Commission
    let commissionFee = Number(commission.value);

    // Shipping
    let shippingFee = Number(shipping.value);

    // Price after applying selling fees (commission)
    // let unitSellingPrice = Math.round((price + profit) / (1 - commissionFee / 100))
    let unitSellingPrice = (price + profit) / (1 - commissionFee / 100);

    // Price without commission
    let priceWithoutCommission = price + profit;

    // // Total after all fees have been applied
    total.textContent = priceWithoutCommission * numberOfUnits;

    console.log(priceWithoutCommission * numberOfUnits)

    // Extra fee (only applicable to some items)
    let extraFee = Number(additionalFee.value)

    let x = numberOfUnits * (1 - commissionFee / 100) // had to use a linear equation to figure out the actual fee.
    let y = numberOfUnits * shippingFee

    let shipp = y / x

    /******************/

    let z = numberOfUnits * extraFee // same here
    let ext = z / x
    console.log(ext)

    salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp + ext);
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = Math.round(unitSellingPrice);
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);
    unitWithoutCommission.textContent = priceWithoutCommission
    


}

// calculateButton.addEventListener("click", calculate)
calculateButton.addEventListener("click", function(event) {
    event.preventDefault()
    // event.stopPropagation()
    calculate()
})
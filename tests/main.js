import { initialize, formatNumber, removeFormat } from "./src/js/formatter.js";
import { copy } from "./src/js/copy.js";

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
    additionalFee = calculator.querySelector(".extra-fee"),
    vat = calculator.querySelector(".vat");

// TRIGGER

function set() {
    let currencyFields = document.querySelectorAll("input[data-type='currency']");
    currencyFields.forEach(field => {
        field.value = `$${formatNumber(field.value)}`
    })
}

set()
initialize()

const calculateButton = calculator.querySelector(".calculate-button");

function calculate() {

    // Buying price -> how much does each unit cost?
    // let price = Number(buyingPrice.value);
    let price = removeFormat(buyingPrice.value);

    // Desired profit
    // let profit = Number(desiredProfit.value);
    let profit = removeFormat(desiredProfit.value);

    // Units
    // let numberOfUnits = Number(units.value);
    let numberOfUnits = removeFormat(units.value)

    // Commission
    // let commissionFee = Number(commission.value);
    // let commissionFee = removeFormat(commission.value);
    let commissionFee = Number(commission.value); // there is no need to format this.

    // VAT / IVA
    let vatFee = Number(vat.value);

    // Shipping
    // let shippingFee = Number(shipping.value);
    let shippingFee = removeFormat(shipping.value)

    // Price after applying selling fees (commission)
    // let unitSellingPrice = Math.round((price + profit) / (1 - commissionFee / 100))
    let unitSellingPrice = (price + profit) / (1 - commissionFee / 100);

    // Price without commission
    let priceWithoutCommission = price + profit;

    // // Total after all fees have been applied
    total.textContent = formatNumber( (priceWithoutCommission * numberOfUnits).toString() );

    console.log(priceWithoutCommission * numberOfUnits)

    // Extra fee (only applicable to some items)
    // let extraFee = Number(additionalFee.value)
    let extraFee = removeFormat(additionalFee.value)

    let x = numberOfUnits * (1 - commissionFee / 100) // had to use a linear equation to figure out the actual fee.
    console.log(`X: ${x}`)
    let y = numberOfUnits * shippingFee

    let shipp = y / x

    /******************/

    let z = numberOfUnits * extraFee // same here
    let ext = z / x
    console.log(ext)

    /*****************/

    // let h = numberOfUnits * vatFee
    // let iva = h / x
    // console.log(iva)

    // let h = numberOfUnits * (1 - vatFee / 100)
    // let j = numberOfUnits * 
    // let iva = h / x
    // console.log(iva)

    // let h = numberOfUnits * (1 - vatFee / 100)
    let j = numberOfUnits * (1 - vatFee / 100)
    console.log(`J: ${j}`)
    let h = numberOfUnits * vatFee;
    console.log("H")
    console.log(h)
    let iva = h / x
    console.log(iva)

    /* ORIGINAL */

    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp + ext);
    // profits.textContent = profit * numberOfUnits;
    // unitPrice.textContent = Math.round(unitSellingPrice);
    // commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);
    // unitWithoutCommission.textContent = priceWithoutCommission

    /*************/

    /* TEST */

    // salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext).toString() );
    salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext + iva).toString() );
    profits.textContent = formatNumber( (profit * numberOfUnits).toString() );
    unitPrice.textContent = formatNumber( Math.round(unitSellingPrice).toString() );
    commissionValue.textContent = formatNumber( Math.round( commissionFee * removeFormat(salePrice.textContent) / 100).toString() );
    unitWithoutCommission.textContent = formatNumber( priceWithoutCommission.toString() )

    /*************/

}

calculateButton.addEventListener("click", calculate)
// calculateButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     // event.stopPropagation()
//     calculate()
// })
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
    console.log(`Y: ${y}`)

    let shipp = y / x


    console.log(`shipping: ${shipp}`)

    /******************/

    let z = numberOfUnits * extraFee // same here
    let ext = z / x
    console.log(`ext: ${ext}`)

    /********TEST BELOW********/

//    let m = numberOfUnits * (1 - vatFee / 100) * (price + profit);
//    console.log(`m: ${m}`)
//    let n = m / x
//    let nValue = n - (commissionFee * removeFormat(salePrice.textContent) / 100)
//    console.log(`IVA: ${nValue}`)

//    let o = numberOfUnits * (1 - 0.414 / 100) * (price + profit);
//    let p = o / x
//    console.log(`real p: ${p}`)
//    console.log(`there: ${commissionFee * removeFormat(salePrice.textContent) / 100}`)
//    let pValue = (commissionFee * removeFormat(salePrice.textContent) / 100) - p
//    console.log(`p: ${pValue}`)


    /* ACTUAL CODE BELOW -> TEST ABOVE */

    /* ORIGINAL */

    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp + ext);
    // profits.textContent = profit * numberOfUnits;
    // unitPrice.textContent = Math.round(unitSellingPrice);
    // commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);
    // unitWithoutCommission.textContent = priceWithoutCommission

    /*************/

    /* TEST */

    // salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext).toString() );
    // profits.textContent = formatNumber( (profit * numberOfUnits).toString() );
    // unitPrice.textContent = formatNumber( Math.round(unitSellingPrice).toString() );
    // commissionValue.textContent = formatNumber( Math.round( commissionFee * removeFormat(salePrice.textContent) / 100).toString() );
    // unitWithoutCommission.textContent = formatNumber( priceWithoutCommission.toString() )


    /*** ORIGINAL ABOVE - ** */

    // salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext).toString() );
    salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext).toString() );
    profits.textContent = formatNumber( (profit * numberOfUnits).toString() );
    unitPrice.textContent = formatNumber( Math.round(unitSellingPrice).toString() );
    commissionValue.textContent = formatNumber( Math.round( commissionFee * removeFormat(salePrice.textContent) / 100).toString() );
    console.log(`commission value: ${commissionValue.textContent}`)
    unitWithoutCommission.textContent = formatNumber( priceWithoutCommission.toString() )

    /*************/

    let m = numberOfUnits * (1 - vatFee / 100) * (price + profit);
    console.log(`m: ${m}`)
    let n = m / x
    let nValue = removeFormat(salePrice.textContent) - n
    console.log(`IVA: ${nValue}`)
 
    let o = numberOfUnits * (1 - 0.414 / 100) * (price + profit);
    let p = o / x
    let pValue = removeFormat(salePrice.textContent) - p
    console.log(`real p: ${p}`)
    console.log(removeFormat(salePrice.textContent) - p)
    
    // salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext + pValue + nValue).toString() );

    // found THE FORMULA :D
    // x - (unitSellingPrice * numberOfUnits) - (commissionFee / 100)x  - (vativa / 100)x - (ICA / 100)x = 0;
    // x =  1 - (commissionFee / 100)  - (vativa / 100) - (ICA / 100)
    // unitSelling * numberOfUnits / x 
}

calculateButton.addEventListener("click", calculate)
// calculateButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     // event.stopPropagation()
//     calculate()
// })
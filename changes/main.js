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
    vat = calculator.querySelector(".vat"),
    ica = calculator.querySelector(".ica");

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

    let deleteLater = console.log;
    console.log = function() {}
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

    // ICA

    let icaFee = Number(ica.value);

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

    // let x = numberOfUnits * (1 - commissionFee / 100) // had to use a linear equation to figure out the actual fee.
    let x = 1 - (commissionFee / 100) - (vatFee / 100) - (icaFee / 100)
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

    // let t1 = removeFormat(total.textContent) / (vatFee / 100)
    // console.log(`t1: ${t1}`)

    // let t2 = icaFee / 100 * removeFormat(total.textContent)
    // console.log(`t2: ${t2}`)

    /*

    salePrice.textContent = formatNumber( Math.round( unitSellingPrice * numberOfUnits + shipp + ext).toString() );
    profits.textContent = formatNumber( (profit * numberOfUnits).toString() );
    unitPrice.textContent = formatNumber( Math.round(unitSellingPrice).toString() );
    commissionValue.textContent = formatNumber( Math.round( commissionFee * removeFormat(salePrice.textContent) / 100).toString() );
    unitWithoutCommission.textContent = formatNumber( priceWithoutCommission.toString() )

    */
   
    // console.log = deleteLater; (1)

    let unknown = 1 - (commissionFee / 100) - (vatFee / 100) - (icaFee / 100)

    //console.log(removeFormat(total.textContent) / unknown)

    let alternativePrice = Math.round(removeFormat(total.textContent) / unknown)
    // console.log(`alternative price: ${alternativePrice}`)
    // console.log(`works? ${( 81590 + 4600 ) / unknown}`) // ayyy... this works! 105000... hmmm
    // console.log(`should be: ${105000 * (vatFee / 100)}`) // hmm. this one works...
    // console.log(`commission: ${Math.round( commissionFee * alternativePrice / 100 )}`)
    // console.log(removeFormat(total.textContent) / unknown * vatFee / 100)
    // console.log(removeFormat(total.textContent) / unknown * icaFee / 100)

    let testTotal = removeFormat(total.textContent)

    let testSalePrice = unitSellingPrice * numberOfUnits + shippingFee // + ext; // no, just the value... not the processed thing above >.<
    console.log(`Test sale price: ${testSalePrice}`)

    // console.log(Math.round( (testTotal + shippingFee) / unknown) )
    let testResult = Math.ceil( (testTotal + shippingFee) / unknown) 
    // console.log(Math.ceil( (testTotal + shippingFee) / unknown) )
    console.log(testResult)
    console.log(`IVA: ${Math.ceil( testResult * (vatFee / 100) )}`)

    // console.log(`works? ${( 81590 + 4600 ) / unknown}`) // ayyy... this works! 105000... hmmm
    console.log(`works? ${Math.ceil(( 81590 + 4600 ) / unknown)}`) // ayyy... this works! 105000... hmmm
    console.log(`should be: ${105000 * (vatFee / 100)}`) // hmm. this one works...

    // console.log(vatFee)
    // console.log(vatFee / 100)
    // this 29900 is the price of the publication.. no shipping included, but it's taken into account when determinig the IVA/ICA
    console.log( (29900 + 7700) * (vatFee / 100) )

    // IF THE SHIPPING IS NOT INCLUDED, CREATE AN ALTERNATIVE PRICE THAT INCLUDES IT, OR, BECAUSE IT IS DYNAMIC,
    // THE HIGHEST SHIPPING FEE THAT CAN BE PAID, SAY, 9600. YOU HAVE TO CALCULATE THE IVA / CREDIT CARD PAY FROM THIS.

    // PERHAPS SOMETHING LIKE 40000 + 9600 (ica, iva)...add this to the final price... pfff


    // Enrique De Jesus Rojano Florez
    console.log("ML") // with no commission, this works!
    console.log( Math.ceil( (45941 + 8300) / unknown ) ) 

    console.log = deleteLater;

    //console.log(unitSellingPrice)
    // console.log(`Sale price: ${formatNumber( Math.ceil( (unitSellingPrice * numberOfUnits) + shippingFee).toString() )}`)
    // console.log(`Sale price: ${formatNumber( Math.ceil( testTotal + shippingFee / unknown).toString() )}`)
    // IT WORKS!
    // WON't use ceil here... just round.
    console.log(shippingFee)
    // watch out with these parentheses
    // let testPrice = Math.round( (unitSellingPrice * numberOfUnits) + ( shippingFee / unknown) )
    // let testPrice = Math.round( ( (unitSellingPrice * numberOfUnits + shippingFee ) / unknown) )

    // let testPrice = Math.round( ( (removeFormat(total.textContent) + shippingFee + extraFee ) / unknown) )
    let testPrice = Math.round( ( (removeFormat(total.textContent) + (shippingFee) + (extraFee) ) / unknown) )
    // console.log(`Sale price: ${formatNumber( Math.round( (unitSellingPrice * numberOfUnits) + ( shippingFee / unknown) ).toString() )}`) // + ext... that's missing here.
    console.log(`Sale price: ${testPrice}`)
    console.log(testPrice)
    console.log(`Withholding tax: ${Math.ceil( testPrice * (vatFee / 100) )}`)
    console.log(`ICA: ${Math.ceil( testPrice * (icaFee / 100) )}`)

    let com = Math.round( commissionFee * testPrice / 100);
    console.log(`New commission: ${com}`)

    /* TEST */

    
}

calculateButton.addEventListener("click", calculate)
// calculateButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     // event.stopPropagation()
//     calculate()
// })
// CALCULATOR

const calculator = document.querySelector(".calculator");

// INFO DISPLAY

const salePrice = calculator.querySelector(".sale-price"), // Selling price -> all units + commission + shipping
    profits = calculator.querySelector(".profit"), // profit after selling specified units
    unitPrice = calculator.querySelector(".unit-price"),
    commissionValue = calculator.querySelector(".commission-value"); // unit price after applying commission

// DATA

const buyingPrice = calculator.querySelector(".buying-price"),
    shipping = calculator.querySelector(".shipping"),
    desiredProfit = calculator.querySelector(".desired-profit"),
    units = calculator.querySelector(".units"),
    commission = calculator.querySelector(".commission");

// TRIGGER

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
    let unitSellingPrice = Math.round((price + profit) / (1 - commissionFee / 100))

    // CONTENT
    salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shippingFee + (19.05 * shippingFee / 100) );
    //salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shippingFee);
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = unitSellingPrice;
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);

    let x = (1 - 4600 - 0.16)/3

    console.log(x)

    // // let adjustedPrice = ( Number(salePrice.textContent) - Number(commissionValue.textContent) - shippingFee ) / numberOfUnits;
    // let adjustement = ( Number(salePrice.textContent) - Number(commissionValue.textContent) - shippingFee ) / numberOfUnits;
    // console.log(adjustement)
    // // let lack = ( numberOfUnits * ( price + profit ) ) - adjustement;
    // let lack = price + profit - adjustement;
    // console.log(lack)
    // let adjustedPrice = Number(salePrice.textContent) + lack * numberOfUnits;
    // // console.log(Math.round(adjustedPrice))
    // console.log(price + profit - lack)

}

calculateButton.addEventListener("click", calculate)
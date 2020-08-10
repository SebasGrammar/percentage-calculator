// CALCULATOR

const calculator = document.querySelector(".calculator");

// INFO DISPLAY

const salePrice = calculator.querySelector(".sale-price"), // Selling price -> all units + commission
    profits = calculator.querySelector(".profit"), // profit after selling specified units
    unitPrice = calculator.querySelector(".unit-price"); // unit price after applying commission

// DATA

const buyingPrice = calculator.querySelector(".buying-price"),
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

    // Price after applying selling fees (commission)
    // let salePrice = Math.round( (startingPrice + profit) / (1 - percent / 100) ) + shipping
    let sellingPrice = Math.round( (price + profit) / (1 - commissionFee / 100) )

    // CONTENT

    salePrice.textContent = sellingPrice * numberOfUnits;
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = sellingPrice;

}

calculateButton.addEventListener("click", calculate)
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
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = unitSellingPrice;
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);

}

calculateButton.addEventListener("click", calculate)
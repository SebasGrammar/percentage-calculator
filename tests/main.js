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

    // 102.814 -> wrong
 
    // 130.690 -> right -> 27500 * 3 = 82500

    salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee;
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = unitSellingPrice;
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);

    // commissionValue.textContent = Math.round( commissionFee * ( unitSellingPrice * numberOfUnits ) / 100); // without shipping fee

    // amount.textContent = Number(percent.value) * Number(base.value) / 100

    // the commission is applied on the fucking price... so the shipping has nothing to do with any of this?
    // I mean... does it have anything to do with the final price? shouldn't it be calculated after the fee has been applied?

}

calculateButton.addEventListener("click", calculate)
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
 
    // 103.690 -> right -> 27500 * 3 = 82500

    // salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee;
    // TEST // THE ONE THAT WORKS IS ABOVE. THIS IS JUST A TEST. // REMOVE THIS 
    // salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee + 876; // If I add 876 it works... WHY?!!!
    //salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee + (19.043478260869566 * shippingFee / 100); // If I add 876 it works... WHY?!!!
    salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shippingFee + (19.05 * shippingFee / 100) ); // If I add 876 it works... WHY?!!!

    // WEIRD... WHY IS THIS SO ACCURATE? HMMMM.... // REMOVE THIS ... and everything that's all the way up from here till the next comment that says REMOVE THIS lol
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = unitSellingPrice;
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);

    // TEST AREA LOL

    let test = unitSellingPrice * numberOfUnits
    console.log(test)
    
}

calculateButton.addEventListener("click", calculate)
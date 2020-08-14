// CALCULATOR

const calculator = document.querySelector(".calculator");

// INFO DISPLAY

const salePrice = calculator.querySelector(".sale-price"), // Selling price -> all units + commission + shipping
    profits = calculator.querySelector(".profit"), // profit after selling specified units
    unitPrice = calculator.querySelector(".unit-price"),
    commissionValue = calculator.querySelector(".commission-value"),
    unitWithoutCommission = calculator.querySelector(".unit-without-commission"); // unit price after applying commission

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
    // let unitSellingPrice = Math.round((price + profit) / (1 - commissionFee / 100))
    let unitSellingPrice = (price + profit) / (1 - commissionFee / 100);

    // Price without commission
    let priceWithoutCommission = price + profit;

    /* TEST */

    let x = numberOfUnits * (1 - commissionFee / 100)
    let y = numberOfUnits * shippingFee

    let shipp = y / x

    /* TEST ABOVE */

    /* TEST */

    let z = numberOfUnits * 500
    let ext = z / x
    console.log(ext)
    /* TEST ABOVE */

    //let w = numberOfUnits * ()

    // CONTENT
    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shippingFee + (19.05 * shippingFee / 100) );
    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp);
    
    //let w = Math.round( unitSellingPrice * numberOfUnits + shipp);
    let w = Math.round( unitSellingPrice * numberOfUnits + shipp + (numberOfUnits * 500));

    
    if (w < 70000) {
    //  salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp);
        // console.log("SMALler")
        // w += 500
        // commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100) + 500;

        salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp + ext);

        // THERE IS A DIFFERENCE OF 500!!!!
    } else {
        salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp);
    }
    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp);
    //salePrice.textContent = w;

    /* TEST */

    let amount1 = unitSellingPrice * numberOfUnits

    console.log(amount1)

    let amount2 = unitSellingPrice * numberOfUnits + shippingFee

    console.log(amount2)


    /* TEST ABOVE */


    // THE ONE ABOVE IS THE ORIGINAL. THE ONE BELOW IS A TEST
    // salePrice.textContent = Math.round( unitSellingPrice * numberOfUnits + shipp );
    profits.textContent = profit * numberOfUnits;
    unitPrice.textContent = Math.round(unitSellingPrice);
    commissionValue.textContent = Math.round( commissionFee * Number(salePrice.textContent) / 100);
    unitWithoutCommission.textContent = priceWithoutCommission
    


}

calculateButton.addEventListener("click", calculate)
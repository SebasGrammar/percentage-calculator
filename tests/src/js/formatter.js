// FORMATTER

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

buyingPrice.addEventListener("change", function () {
    let value = this.value
    console.log(value)
    this.value = formatter.format(value)
})

/*

    // 102.814 - 4600

    // price without shipping -> 98214 + (fees with shipping - fees without shipping)
    // 16450 - 15714

    // = 98950 - fee with shipping
    // / 3 = BOOOM! (units)
    let priceWithoutShipping = Number(salePrice.textContent) - shippingFee;
    let feesWithShipping = Math.round( commissionFee * Number(salePrice.textContent) / 100)
    let feesWithoutShipping = Math.round( commissionFee * ( Number(salePrice.textContent) - shippingFee ) / 100)
    // let o = priceWithoutShipping + (feesWithShipping - feesWithoutShipping) - feesWithShipping;
    let o = priceWithoutShipping - feesWithoutShipping; // LOL hahhahahahah
    console.log(feesWithShipping - feesWithoutShipping)
    console.log (unitSellingPrice)
    console.log(o) // units = price + profit! BOOM!

    // 98214 - 15714

    // AND

    // 102814 - 16450

    // the commission is applied on the fucking price... so the shipping has nothing to do with any of this?
    // I mean... does it have anything to do with the final price? shouldn't it be calculated after the fee has been applied?

    // PRICE WITH SHIPPING - FEES OF PRICE WITHOUT SHIPPING
    // 102814 - 15714 - SHIPPING
    // 87100 - 4600 = 82500

*/

/*

FORMULAS_

// salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee;
// salePrice.textContent = unitSellingPrice * numberOfUnits + shippingFee + 876; // If I add 876 it works... WHY?!!!

*/

/*

    // let adjustedPrice = ( Number(salePrice.textContent) - Number(commissionValue.textContent) - shippingFee ) / numberOfUnits;
    let adjustement = ( Number(salePrice.textContent) - Number(commissionValue.textContent) - shippingFee ) / numberOfUnits;
    console.log(adjustement)
    // let lack = ( numberOfUnits * ( price + profit ) ) - adjustement;
    let lack = price + profit - adjustement;
    console.log(lack)
    let adjustedPrice = Number(salePrice.textContent) + lack * numberOfUnits;
    console.log(adjustedPrice)

*/
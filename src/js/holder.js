let information = {
    commission: 0.16,
    ICA: 0.00414,
    IVA: 0.015,
    shipping: 9100,
    // shipping: 7700
  }
  
  function calculate(price, {commission: com, ICA, IVA, shipping}) {
    // let salePrice = price / (1 - com) // after applying selling fee
    let salePrice = price / (1 - com) // after applying selling fee
    let valueOfCommission = salePrice - price
  
    let salePriceWithShipping = salePrice + shipping
  
    console.log(salePrice)
    console.log(valueOfCommission)
    console.log(salePriceWithShipping)
    
    let ICAF = Math.round( salePriceWithShipping * ICA )
    let IVAF = Math.round( salePriceWithShipping * IVA )
    let ICAIVAF = ICAF + IVAF
    console.log(ICAF, IVAF)
    
    console.log(salePrice - valueOfCommission)
    
    // console.log(salePrice - valueOfCommission - ICAIVAF)
    console.log(price - ICAIVAF)
    //console.log(price + ICAIVAF)
    console.log(price + ICAIVAF / (1 - com))
  
    let please = price + ICAIVAF / (1 - com) + valueOfCommission
    console.log(price + ICAIVAF / (1 - com) + valueOfCommission)
  
    //console.log(please - valueOfCommission - ICAF - IVAF)
  }
  
  //calculate(25116, information)
  // calculate(25116, information)
  // calculate(24396, information)
  
  // calculate(24370, information)
  
  calculate(25116, information)
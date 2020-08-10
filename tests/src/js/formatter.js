// FORMATTER

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

buyingPrice.addEventListener("change", function() {
    let value = this.value
    console.log(value)
    this.value = formatter.format(value)
})
document.getElementById('fruit-minus').addEventListener('click', function () {
    const productInput = document.getElementById('fruit-number');
    let productNumber = productInput.value;
    if (productNumber > 0) {
        productNumber--;
    }
    productInput.value = productNumber;
    // show product total 
    if (productNumber > 0) {
        document.getElementById('fruit-total').innerText = productNumber * 30;
    }
    else {
        alert('Add Some Fruits');
    }


    // subtotal
    const fruitTotal = (document.getElementById('fruit-number').value) * 30;
    const fruit1Total = (document.getElementById('fruit1-number').value) * 20;
    const subTotal = fruitTotal + fruit1Total;
    // console.log("subtotal: ",subTotal);
    
    // subTotal show
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);

    // tax show
    const tax = subTotal * 0.1;
    
    // tax show
    document.getElementById('tax-amount').innerText = tax.toFixed(2);
    
    // total show
    const total = subTotal + tax;
    
    // total show
    document.getElementById('total-price').innerText = total.toFixed(2);
})
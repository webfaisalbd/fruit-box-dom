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

})
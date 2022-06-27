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

})
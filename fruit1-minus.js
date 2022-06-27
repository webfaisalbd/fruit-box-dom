document.getElementById('fruit1-minus').addEventListener('click', function () {
    const productInput = document.getElementById('fruit1-number');
    let productNumber = productInput.value;
    if (productNumber > 0) {
        productNumber--;
    }
    productInput.value = productNumber;
    // show product total 
    if (productNumber > 0) {
        document.getElementById('fruit1-total').innerText = productNumber * 20;
    }
    else {
        alert('Add Some Fruits');
    }

})
document.getElementById('fruit1-plus').addEventListener('click', function (){
    const productInput = document.getElementById('fruit1-number');
    let productNumber = productInput.value;
    productNumber++;
    productInput.value = productNumber;
    // show product total 
    document.getElementById('fruit1-total').innerText = productNumber * 20;
    
})
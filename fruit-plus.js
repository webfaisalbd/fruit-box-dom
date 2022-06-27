document.getElementById('fruit-plus').addEventListener('click', function (){
    const productInput = document.getElementById('fruit-number');
    let productNumber = productInput.value;
    productNumber++;
    productInput.value = productNumber;
    console.log(productNumber);
    
})
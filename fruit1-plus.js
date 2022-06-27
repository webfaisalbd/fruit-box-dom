document.getElementById('fruit1-plus').addEventListener('click', function (){
    const productInput = document.getElementById('fruit1-number');
    let productNumber = productInput.value;
    productNumber++;
    productInput.value = productNumber;
    // show product total 
    document.getElementById('fruit1-total').innerText = productNumber * 20;



    // subtotal
    const fruitTotal = (document.getElementById('fruit-number').value) * 30;
    const fruit1Total = (document.getElementById('fruit1-number').value) * 20;
    const subTotal = fruitTotal + fruit1Total;
    // console.log("subtotal: ",subTotal);
    
})
let razerInput = document.getElementById("razerInput");
let hpInput = document.getElementById("hpInput");
let tarInput =document.getElementById("tarInput");
let razerMinus =document.getElementById("razerMinus");
let razerPlus = document.getElementById("razerPlus");
let hpMinus= document.getElementById("hpMinus");
let hpPlus = document.getElementById("hpPlus");
let tarPlus =document.getElementById("tarPlus");
let tarMinus =document.getElementById("tarMinus");



razerMinus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(razerInput, false);
    
})

razerPlus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(razerInput, true);

})
hpPlus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(hpInput, true);
})
hpMinus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(hpInput, false);
})
tarPlus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(tarInput, true);
})
tarMinus.addEventListener("click", function ( ) {
    // console.log("button clicked")
    productBookCount(tarInput, false);
})


function productBookCount(productCount, isIncrease){

    let count = parseInt(productCount.value);
    if(isIncrease === true){
        count += 1;
        productCount.value=count;
    }
    else if(isIncrease === false && count>0){
        count -=1;
        productCount.value= count;
    }
    subtotal();
    
        
}

// subtotal count 
let sT= document.getElementById("subTotal");
let vat = document.getElementById("vat");
let gTotal = document.getElementById("gTotal");

function subtotal(){
    let razerSubtotal = razerInput.value;
    // console.log(razerSubtotal);
    let hpsubtotal =hpInput.value;
    let tarSubtotal = tarInput.value;

    let sTotal = (259*razerSubtotal+85*hpsubtotal+159*tarSubtotal);
    console.log(sTotal);
    vatTotal= (sTotal*15)/100;

    sT.innerHTML=sTotal;
    vat.innerHTML=vatTotal;
    gTotal.innerHTML= sTotal+vatTotal;
    
}

let successText=document.getElementById("successText")
let productSection=document.getElementById("productSection")
let proceed =document.getElementById("proceed")

proceed.addEventListener("click", function(){
    productSection.style.display = "none";
    successText.style.display ="block";

   
    
})
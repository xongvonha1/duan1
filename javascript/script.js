const addressbtn = document.querySelector('#address-form');
const closeAddressBtn = document.querySelector("#close-tab");
// console.log(addressbtn)

addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
    
})

closeAddressBtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})
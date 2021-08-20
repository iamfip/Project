document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput= document.getElementById("deposit-input");
    const depositAmount= parseFloat (depositInput.value);
    // const depositTotal=parseFloat(depositAmount);
    console.log(depositAmount);

    // GEt depostTotal amont

   const depositTotalText= document.getElementById("deposit-total");
   const depositTotal= parseFloat(depositTotalText.innerText);
   depositTotalText.innerText= depositTotal + depositAmount;

   // update Balance
    const balaceTotal=document.getElementById("balance-total");
    const TotalBalance=parseFloat(balaceTotal.innerText);
    balaceTotal.innerText=TotalBalance + depositAmount;

    depositInput.value = '';
})


///// WithDraw Section

document.getElementById("withdraw-button").addEventListener('click',function(){
    const withdrowInput=document.getElementById("withdraw-input");
    const withdrawAmount= parseFloat(withdrowInput.value);
    // console.log(withdrawAmount);
    const withdrawTotalText= document.getElementById("withdraw-total");
    const withdrawTotal=parseFloat(withdrawTotalText.innerText);

    withdrawTotalText.innerText=withdrawTotal+withdrawAmount;

    const balaceTotal=document.getElementById("balance-total");
    const TotalBalance=parseFloat(balaceTotal.innerText);
    balaceTotal.innerText=TotalBalance - withdrawTotal;

    withdrowInput.value = '';

})
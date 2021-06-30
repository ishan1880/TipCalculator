let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let amount=document.getElementById('amount').value;
   // let tipPercentage=document.getElementById('percentage').value;
    let tipPercentage;
    let tip=document.getElementById('experience').value;
    //console.log(tip);

    if(tip==='Wonderful')
    { tipPercentage=document.getElementById('percentage').value= 15;}
    else
    if(tip==='Good')
    { tipPercentage=document.getElementById('percentage').value=10;}
    else
    { tipPercentage=document.getElementById('percentage').value=0;}
    
    console.log(tipPercentage);
    let tipAmount =document.getElementById('tipAmount').value = (amount/100)*tipPercentage;
    console.log(tipAmount);
    document.getElementById('total').value = parseFloat(amount)+parseFloat(tipAmount);

})
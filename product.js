function getPrice(input){
    const price = document.getElementById(input);
    const convertPrice = parseFloat(price.innerText);
    return convertPrice;

}

function setInnerText(id, value){
    const setValue = document.getElementById(id);
    const setOutput = setValue.innerText = value;
    return setOutput;
}

function discoutn(price , discount){

    const productPrice = price;
    const customerDiscutn = discount;
    const result = (productPrice * customerDiscutn)/ 100;
    const orginalPrice = productPrice - result;
    return orginalPrice;
}

document.getElementById('discBtn').addEventListener('click', function(){
     
      const priceBag = getPrice('priceBag');
       const myDiscoutn  =    discoutn(priceBag, 30);
         setInnerText('priceNow', myDiscoutn)
 })

 // bag 2 here 

 document.getElementById('discBtn2').addEventListener('click', function(){
        const bagPrice = getPrice('priceBag2');
        const customarPrice = discoutn(bagPrice, 40);
        setInnerText('priceNow2', customarPrice)
 })

 // bag 3 here 

 document.getElementById('discBtn3').addEventListener('click', function(){
      const bagPrice = getPrice('priceBag3');
      const customerPrice = discoutn(bagPrice, 35);
      setInnerText('priceNow3', customerPrice)
 })
// bag 4 here 

document.getElementById("discBtn4").addEventListener('click', function(){
       const bgPrice = getPrice('priceBag4');
       const customerPrice = discoutn(bgPrice, 15);
       setInnerText('priceNow4', customerPrice)
})



document.getElementById('btn-1').addEventListener('click', function(){
      const inputFild = document.getElementById('inputFild1');
      if(inputFild.value === 'Disc'){
          const price = getPrice('price1');
          const customerPrice = discoutn(price, 20);
          setInnerText('nowPrice1', customerPrice);
          inputFild.value = ''
      }else{
        alert('কুপন টি সঠিক নয়')
        inputFild.value = ''
      }
})

document.getElementById('btn-dicount-2').addEventListener('click', function(){
       const inputFild = document.getElementById('inputFild2');
       if(inputFild.value === 'DipuMoni'){
        const price = getPrice('price2');
        const customerPrice = discoutn(price, 15);
        setInnerText('nowPrice2', customerPrice)
        inputFild.value = ''
       }else{
        alert('কুপন টি সঠিক নয়')
        inputFild.value = ''
       }



       

})
const fromamountelement = document.getElementById("amount");
const convertedamountelement = document.getElementById ("covertamount");
const fromcurrencyelement = document.getElementById ("fromcurrency");
const tocurrencyelement = document.getElementById ("tocurrency");
const resultelement = document.getElementById ("result");
const convertercontainer = document.getElementById ("convertercontainer");


const countries =[
    { code :"USD", name :"United States Dollar"},
    { code :"PKR", name :"Pakistani rupees"},
    { code :"DZU", name :"dinar"},
    { code :"AOA", name :"Kwanza"},
    { code :"ARS", name :"peso"},
    { code :"AMD", name :"dram"},
    { code :"ALL", name :"Lek"},
    { code :"ADP", name :"ANDORAN PESTA"},
    { code :"ECS ", name :"Sucre "},
    { code :"EUR", name :"EURO "},
    { code :"GBP", name :"Pound Sterling"},
    { code :"KWD", name :"Kuwaiti Dinar"},
    { code :"QAR", name :"Qatari Rial"},
    { code :"SAR ", name :"Saudi Riyal "},

];

countries.forEach(country=>{
    const option1 =document.createElement("option")
    const option2 =document.createElement("option")
    option1.value=option2.value=country.code;
    option1.textContent=option2.textContent=`${country.code} (${country.name})`
    fromcurrencyelement.appendChild(option1);
    tocurrencyelement.appendChild(option2);

    fromcurrencyelement.value ="USD";
    tocurrencyelement.value ="PKR";

})


const getexchanerate = async () =>{
    const    amount = parseFloat(fromamountelement.value)
  const   fromcurrency = fromcurrencyelement.value;
   const  tocurrency = tocurrencyelement.value;
   resultelement.textContent ="fetching Exchange Rates ..."
    
try {
    
   const response = await fetch (`https://api.exchangerate-api.com/v4/latest/${fromcurrency}
    `)
   const  data = await response.json();

   const convertionrate = data.rates[tocurrency]
   const convertedamount = (amount *convertionrate)
   convertedamountelement.value =convertedamount;
   resultelement.textContent =`${amount} ${fromcurrency} = ${convertedamount} ${tocurrency}`
} catch (error) {
    convertercontainer.innerHTML =`<h2>Error While fetching exchange retes <h2/>`;
}
}
 fromamountelement.addEventListener("input" ,getexchanerate);
 fromcurrencyelement.addEventListener("change" ,getexchanerate);
 tocurrencyelement.addEventListener("change" ,getexchanerate);
 window.addEventListener("load" ,getexchanerate);
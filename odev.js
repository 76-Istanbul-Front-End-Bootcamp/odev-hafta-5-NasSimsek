import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});

//Population -bigger than 500000 butonu için

document.querySelector("#populationBigger").addEventListener("click",()=>{
  let filtredPopuData=data.filter(function(city){

    return city.population > 500000;

  });
  createTableElements(filtredPopuData, "allcities");

});
/*********************************** */
//Land area less than 1000 butonu için
document.querySelector("#landAreaLess").addEventListener("click",()=>{
  let filtredLandData=data.filter(function(city){
    return city.landArea < 1000 ;
  });

  createTableElements(filtredLandData,"allcities");

});

/************************************ */
//Does any city.... butonu için
document.querySelector("#isPopulationLess").addEventListener("click", () => {
  let hass = data.some(function (popu) {
    return popu.population < 100000;
  });
  console.log(hass);
  if (hass)
    alert("yes");
  else
    alert("no");
});

/******************************************* */
//Does every city has....butonu için
document.querySelector("#isLandBigger").addEventListener("click",()=>{
let everyland=data.every(function(landbig){
  return landbig.landArea > 100;
});
console.log(everyland);
if(everyland)
alert("yes");
else
alert("no");

});
/******************************************** */
//Choose içine şehir isimlerinin yerleştirilmesi
data.forEach(createOptions);

function createOptions(city){
  
  let createdOption= document.createElement("option");
createdOption.innerHTML=city.name;
createdOption.setAttribute("value",city.name)
document.getElementById("selectcity").appendChild(createdOption);


};
/********************************** */
//Seçilen şehrin FounItem tablosuna eklenmesi
document.querySelector("#selectcity").addEventListener("change",()=>{
let selectedIndex=(document.getElementById("selectcity").selectedIndex);
let selectedCit=data.find(function(city){
return ( document.getElementById("selectcity").options[selectedIndex].text==city.name)
});
createTableElements([selectedCit], "singlecity");



});
"use strict";

const numberOfSeries = prompt("Nechta serial ko'rdingiz?");

const seriesDB  = {
 count:numberOfSeries,
 series:{},
 actors:{},
 genres:[],
 privat:false 
}


for(let  i = 0; i < 2; i++ ) {
 const a = prompt("Oxirgi ko'rgan serialingiz?"),
 b = prompt("Nechi baxo berasiz?");  
 seriesDB.series[a] = b

 if(a != null && b != null && a != "" & b !=  ""){
  console.log("Done");
}else{
 console.log("Error");
 i--
}

}

if( seriesDB.count < 5) {
  console.log("Kam serial ko'ripsiz");
}else if(seriesDB.count >= 5 && seriesDB.count < 10){
 console.log("Siz classik tamoshabin ekansiz");
}else if(seriesDB.count >= 10) {
  console.log("Siz serialchi zvezda ekansiz");
}else{
  console.log("Eror");
}


 console.log(seriesDB);

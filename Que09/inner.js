let listOfitems = [10,2,999,"Mithun",1234,"PW"];

for (let i =0; i < listOfitems.length; i++){
    if(typeof listOfitems[i] === 'string'){
       console.log(`found first string is ${listOfitems[i]}`)
       break;
    }
}
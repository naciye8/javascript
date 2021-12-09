document.write("<p>merhaba</p>");



//burasi header icin yazildi
//console.log("merhaba from script");
//console.log("gggggggggggggggggggggggggggscript")


//alert("sayfada direkt ac")
//window.alert("sayfada uyari mesaji")


var firstnamemehmet="mehmet";
 let lastNamemehmet="turk";
 var agemehmet=56
  const age= 47;

//console.log("mehmet 46 yasinda");
//console.log(firstName, age,"yasinda");



//Pascal Case

let FirstName ="Mehmet" //gecerli

//Camel Case
let firstName ="mehmet"; //tavsiye


//Snake Case
let first_name ="mehmet" //gecerli


//Kebap Case
//let first_name = "mehmet //CSS"de kullaniyoruz

console.log(FirstName, firstName, first_name);
 


firstName="mustafa" // yukarida let oldugu icin tekrar atanabilir
lastName="demir"//yukarida const oldugu icin tekrer atanamaz
console.log(firstName, lastName, agemehmet)

let isMarried= true; // false


let ageisover18= true;


let team1="sahin", team2="dogan", team3="kartal", team4="atmaca";
console.log(team1+team2+team3+team4)
console.log("merha" + "ba")
console.log(age + 5); //52
console.log(age + "5"); //475

//string

let datastring1="merhaba"
let datastring2='merhaba'+ ""+"yasindaki"+""+firstName;
let datastring3= `merhaba  ${age} yasindaki ${firstName}`
console.log(datastring2)
console.log(datastring3)

// Number
let numberValue1 =5;
let numberValue2 =5.5;
console.log(numberValue1, numberValue2)

// Boolean
//let isMarried= true; //false
let ageIsOver18 =true;


//undefined
let telefon;
console.log(telefon)

//null
let nullValue="";
console.log(nullValue)
function name(params){
    let test="fonksiyon ici";
    console.log(test);
    console.log(firstName) //local scope,global scope'a erisebilir.
}
//nameFunc()
//console.log(test);// test local scope oldugu icin calismaz




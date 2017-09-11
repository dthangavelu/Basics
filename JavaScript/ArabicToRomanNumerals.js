
function arabicToRoman(num){
  var convertedNum = "";  
  var multiplyBy = 1;  
  var numerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM"
  }
  
  if(num >= 1000){    
    convertedNum += Array(Math.trunc(num/1000) + 1).join("M");    
    num = num % 1000;
  }
  if(num > 0){
    num = num.toString().split("");  
    
    if(num.length > 2){
      multiplyBy = 100;
    }else if(num.length > 1){
      multiplyBy = 10;
    }  
    for(var i = 0; i < num.length; i++){      
      convertedNum += numerals[Number(num[i]) * multiplyBy];      
      multiplyBy /= 10;      
    }   
  }
  return convertedNum;    
}

console.log(arabicToRoman(444));




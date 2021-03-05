module.exports = function toReadable (number) {
   let numberStr="";
   if(number<0){
      numberStr="minus ";
      number*=-1;
   } 
   let count = Math.ceil(number.toString().length/3);
   let numbersArray =[];
   let numbersNewArray =[];
   for( let i =0; i< count; i++){
      numbersArray[i]=[number%1000];
      number = (number-number%1000)/1000;
   }

   let numbersToWords = { 0  :  'zero', 1  :  'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
   11 :  'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen',18 : 'eighteen',19 : 'nineteen',20 : 'twenty',
   30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety'}

   for(let i = 0; i < numbersArray.length; i++){
      if ( ((numbersArray[i]%100 >= 10 && numbersArray[i]%100 <20 ) ||  (numbersArray[i]%100)%10===0 ) && numbersArray[i]%100!==0){
         numbersNewArray[i] =  ( Math.floor(numbersArray[i]/100)!==0 ? numbersToWords[(numbersArray[i]-numbersArray[i]%100)/100] + ' hundred ' : '' )  + numbersToWords[numbersArray[i]%100];
      } else if(numbersArray[i]%100===0){
         numbersNewArray[i] = numbersArray[i]*1===0 ?  numbersToWords[0] : numbersToWords[(numbersArray[i]-numbersArray[i]%100)/100] + ' hundred'; 
      } else {
         numbersNewArray[i] = ( Math.floor(numbersArray[i]/100)!==0 ? numbersToWords[(numbersArray[i]-numbersArray[i]%100)/100] + ' hundred ' : '' ) + ( numbersArray[i]%100 > 10  ? (numbersToWords[(numbersArray[i]-numbersArray[i]%10 - Math.floor(numbersArray[i]/100)*100 )] + ' ') : '') + numbersToWords[numbersArray[i]%10];
      }  
      let a = numbersNewArray[i];


      switch (i){
         case 1:
            numbersNewArray[i] =  a + ' thousand';
            break;
         case 2:
            numbersNewArray[i] = a + ' million';
            break;
         case 3:
            numbersNewArray[i] = a + ' billion';
            break;
      }
   
   }
   
   return numbersNewArray.reverse().join(' ');
  }



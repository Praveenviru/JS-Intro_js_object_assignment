function findLnum(num1,num2,num3){
  
    return  num1>num2?num1:(num2>num3?num2:num3);
   
 }
 let res=findLnum(45,78,33)
 console.log(`${res} (The Largest Number)`)
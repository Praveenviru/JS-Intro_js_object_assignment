function checkage(age){
    if(age<=0){
      console.log("Invalid Age")
    }
    else{
    return age>=60?"Eligible for Senior Discount":"Not Eligible for Senior Discount";
    }
    
  }
  let out=checkage(65)
  console.log(out)
  let out1=checkage(0)
  console.log(out1)
  let out2=checkage(23)
  console.log(out2)
function productPrice(price){
    return price>=1000?"Expensive":(price>=500&&price<=999?"Moderate":(price<500&&price>0?"Affordable":(price==0?"free":"Invalid"))) 
  }
  let res=productPrice(1000)
  console.log(res)
  let res1=productPrice(777)
  console.log(res1)
  let res2=productPrice(250)
  console.log(res2)
  let res3=productPrice(0)
  console.log(res3)
  let res4=productPrice(-12)
  console.log(res4)
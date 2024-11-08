function Foodorder(items,time){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Food-item is"+items);
        resolve();
      },delay)
    })
  
  }
  async function printFood(){
    await getFoodorder(Pizza,2000);
    await getFoodorder(Burger,40000);
    await getFoodorder(Noodles,10000);
  }
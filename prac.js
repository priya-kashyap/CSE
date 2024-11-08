//function aa(){
  //  console.log("first");

//}
//aa();
//(function(){
  //  console.log("second");
//})();

//function rollnumber(num,delay,nextroll){
  //  setTimeout(()=>{
    //    console.log("Roll.No.is",num);
      //  if(nextroll)nextroll();
    //},delay);
//}
//rollnumber(12,1000,()=>{
  //  rollnumber(13,2000,()=>{
    //    rollnumber(14,3000,()=>{
        //    rollnumber(15,4000);
      //  } );
    //});
//});
function rollnumber(num,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Roll.no is"+num);
      resolve();
    },delay)
  })
}
async function printRoll(){
  await getrollnumber(121,1000);
  await getrollnumber(122,2000);
  await getrollnumber(123,3000);
}
console.log("welcome to control room")
Roll()
//rollnumber(121,1000).then(()=>{
  //rollnumber(123,2000).then(()=>{
    //rollnumber(124,3000).then(()=>{
      //console.log("Viva Completed")
    //})
  //})
//})
  //  
 //let promise=new Promise(function(resolve,reject){
   // console.log("first Promise")
    //resolve("Hi")
    //reject("error")
 //});
 //promise.then(()=>{
   // console.log("second Promise",result)
 //});
 //promise.catch(()=>{
   // console.log("Error in first promise")
 //})

 //let promise =new Promise((resolve,reject)=>{
  //reject({user:"Aj",pass:"1234567"})
 //})
 //promise.then((data)=>{
  //console.log(data)
 //}).then((data)=>{
  //console.log(data.pass);
 //}).finally(()=>{
 // console.log("first");
 //})
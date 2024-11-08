let url='https://api.github.com/users/priya-kashyap';
let b=fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
}).finally(()=>{
    console.log("first")
})
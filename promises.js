// que1
// const  funA =()=>{
//     setTimeout(function(){
//        console.log(`Welcome FunA`)
//         //funB();
//     },3000)
 
// }

// const funB=()=>{
//     console.log(`Welcome FunB`)
// }
// funA();
// funB();

// //Que2
// function m2(N){
//     for(let i=1;i<=N;i++){
//       setTimeout(()=>{
//         console.log(i);
//       },i*1000);
//     }
//   }
//   m2(7);

//que 3
function print(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(num);
        resolve();
      },1000)
    });
  }
  let demo=Promise.resolve();
  for(let i=1;i<=7;i++){
    demo=demo.then(()=>print(i));
  }


// Que 4
function print(a){
    return new Promise((res,rej)=>{
      if(a==="yes"){
        res("Promise Resolved");
      }
      else{
        rej("Promise Rejected");
      }
    });
  }
  print("yes")
  .then((result)=>{console.log(result)})
  .catch((error)=>{console.log(error)})


  //Que 5
  function showData(name, sub) {  
    console.log(' Hello ' + name + '\n Your favorite subject is ' + sub);  
  }  

    function getData(callback) {  
   var username ="kiran";  
   var amount = "JS"; 
   callback(username,amount);  
  }  
   getData(showData); 

   //Que 7
   var p=new Promise(function(resolve, reject){  
    var x= 2+3;  
    if(x==7)  
        resolve(" executed and resolved successfully");  
    else  
        reject("rejected");  
    });  
     p.then(function(fromResolve){  
     console.log("Promise is"+fromResolve);  
     }).catch(function(fromReject){  
     console.log("Promise is "+fromReject);  
     }); 


     //Que 8
     async function weather (){
        let delhiweather =new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve("27 deg")
            },5000)
        })
        
        let puneweather =new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve("30 deg")
            },1000)
        })
        console.log("Fetching Delhi weather please wait...")
        let delhi=await delhiweather
        console.log("Fetched Delhi weather: "+delhi)
        console.log("Fetching pune weather please wait...")
        let pune =await puneweather
        console.log("Fetched pune weather: " +pune)
    }
    weather()

    //Que 9
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1 resolved'), 2000);
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 2 resolved'), 1000);
      });
      
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved'), 3000);
      });
      
      Promise.all([promise1, promise2, promise3])
        .then((values) => console.log(values))
        .catch((error) => console.log(error));
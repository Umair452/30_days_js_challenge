// let myPromise = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(! error){
//             resolve({userName: "Umair"})
//         }
//         else{
//             reject(`ERROR: SOMETHING WENT WRONG`)
//         }
//     }, 2000)
// })

// async function consumingyPromise (){
//     try {
//         const response = await myPromise
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// let myDivision = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         let numerator = 2
//         let denominator = 0
//         if (denominator == 0) {
//             error = true
//             reject(`DIVISION IS NOT POSSIBLE WHEN DENOMINATOR IS ZERO`)
//         } else {
//             resolve(`Division is done`)            
//         }
//     }, 2000)
// })

// async function consumingmyDivision (){
//     try {
//         const response = await myDivision
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// consumingmyDivision()

// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             let error = false
//             if (!error) {
//                 resolve({user: "User found"})
//             } else {
//                 reject(`USER NOT FOUND`)
//             }
//     },1000)
// }).then((user)=>{
//     console.log(user.user);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log(`Promise has been either resolved or rejected`);
    
// })
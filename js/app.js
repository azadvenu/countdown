const endDate="1 Jan 2024 12:00 AM";

const inputs= document.querySelectorAll("input");

const clock=()=>{
    const end= new Date(endDate);  //to convert it into milliseconds
    const now= new Date();
    const diff=(end-now)/1000;
    
    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24); //convert into days 
    inputs[1].value = Math.floor(diff/3600)%24; //remaining hours
    inputs[2].value = Math.floor(diff/60)%60;  //remaining minutes
    inputs[3].value= Math.floor(diff)%60;   //remaining seconds
}

//initial call
clock();

setInterval(
   ()=>{
    clock()
   }, 1000
);

// // // 1 day = 24 hours
// // // 1 hr = 60minute
// // 60 minute = 3600 seconds
// 1 sec = 1000 milliseconds

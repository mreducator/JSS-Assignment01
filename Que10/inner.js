let arr = [1,2,-3,-4,5,6];

let newVal = arr.filter((num)=>{
   let positiveNumber = Math.sign(num);
     if(positiveNumber === 1){
      console.log(num)
   }
   
})

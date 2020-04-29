const prime = (n) =>{
let sum = 0;
for (let i = 2; i <=n; i++) {
    if (i == 2) {
        continue;
    };
     for (let j = 2; j < i; j++){
        if (j == i-1 ) 
        {  
            sum+=i; 
            break;
        }
        else { if (i %j == 0 ) { 
            break;
        }
      }
     }   
    }
    return sum
}
console.log(prime(100));
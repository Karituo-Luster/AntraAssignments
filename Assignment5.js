function chance(){
     let count = 0;
     return function() {
          count++;
          if(count <= 5)
               console.log("Congrats, you earned the chance!");
          else
               console.log("Sorry, you missed the chance."); 
     }
}

function longerThan(minimumLength) {
     return (element) => {
          return (element.length > minimumLength);
     }
}
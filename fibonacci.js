/*
 *  Fibonacci Sequence** - Enter a number and have the program generate the
 *  Fibonacci sequence to that number or to the Nth number.
 */

var Fibonacci = function(n){
    //generate the sequence to the number or n
    this.n = n;
    this.sequence = this.generateSequence();
}

Fibonacci.prototype ={
     generateSequence: function (){
        var sequence = [0,1];
        var test = sequence[1];
        for (i = 0; i < this.n; i++){
            sequence.push(sequence[i] + sequence[i+1]);
        }
        return sequence;
     },
     getSequence(){
          let sequence = this.sequence;
          if(sequence.includes(n)){
              let index = sequence.indexOf(n);
              return sequence.slice(0,index +1);
          }
          else{
              return sequence.slice(0, n);
          }
     }
};



var n = 89;
var fibonacci = new Fibonacci(n);
console.log(fibonacci.getSequence());

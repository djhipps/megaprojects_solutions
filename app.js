const _ = require('lodash');
const yargs = require('yargs');
/* TODO : define all commands
 * TODO : create modules
 */

//modules
const fibonacci = require('./fibonacci.js');

const number = {}

const argv = yargs.command('fib', 'Generate fibonacci sequence',{
                      number:number
                  })
                 .help().argv;

var command = argv._[0];

if(command === "fib"){
   //TODO: work out why argv is going wrong
    console.log(argv.number);
    var fibonacci_sequence = new fibonacci(10);
    console.log(fibonacci_sequence);
    console.log(fibonacci_sequence.getSequence());
    // console.log(fibonacci_sequence.generateSequence);
}

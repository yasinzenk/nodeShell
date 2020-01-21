const printDirectory = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')



process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd.includes(' ')){
    const cmdArray = cmd.split(' ')
    if(cmdArray[0] === 'cat'){
    
      cat(cmdArray[1])
    }
  }
  
  else if(cmd === "pwd"){
    printDirectory();
  }
  else if (cmd === "ls") {
    ls()
  }
  
  else{
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\npromt > ');

});


const chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.italic("What is your name? "));
console.log(chalk.bgBlack.bold("Welcome "+userName+"!"));
console.log(chalk.blue.bold("\n(Rules: Let's see how much you know about me!\nYou will be given 5 questions.\nChoose a/b/c/d and enter your choice.\nYou'll score 1 mark for every right answer \nand 0 for every wrong answer.\nGood luck!!!)"));
var score=0;

function quiz(question,answer){
  var userAnswer = readlineSync.question(chalk.keyword('hotpink')(question));
  if(userAnswer===answer){
    console.log(chalk.green.bold("You are right!"));
    score = score+1;
  }else{
    console.log(chalk.red.bold("You are wrong!"));
  }
  console.log(chalk.blue.bgWhite.bold("Current score: "+score));
}

questions=[{question:"\nHow old is Anaswara?\na)19\nb)20\nc)21\nd)22\nYour answer: ", answer:"b"}, {question:"\nWhich state is she from?\na)Kerala\nb)Karnataka\nc)Delhi\nd)Goa\nYour answer: ", answer:"a"}, {question:"\nHer favourite boy-band?\na)One Direction\nb)BTS\nc)NCT\nd)Coldplay\nYour answer: ", answer:"c"}, {question:"\nWho is her celebrity crush?\na)Lee Taeyong\nb)Nakamoto Yuta\nc)Na Jaemin\nd)Liu Yangyang\nYour answer: ", answer:"c"}, {question:"\nHer favourite place?\na)Beach\nb)Mountaintop\nc)Park\nd)Museum\nYour answer: ", answer:"a"}]
for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}

console.log(chalk.yellow("\nYou've finished the game!"));
console.log(chalk.bgCyan.underline("\nFINAL SCORE: "+score));
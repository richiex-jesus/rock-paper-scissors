# rock-paper-scissors
this is my project which will be replicating a RPS game against the computer. this is a testament to the progress I have made in learning Javascript from scratch and indeed, I praise the Lord for enabling me to be able to complete this task.

pseudocode:
- to get computer choice:
1. use random number generator function again and return numbers between 0 to 30.
2. for 0-10, create new div container containing the text 'rock'. for 11-20, create new div container containing the text 'paper'. for 21-30, create new div container containing the text 'scissors'. 
3. for each case, append the div (class called computer-choice) to existing container.

- to get human choice:
1. create 3 buttons, each with text and id called "rock", "paper" and "scissors" respectively.
2. to each button, make a reference in the javascript file using the getElementById function. 
3. to each button, add an event listener such that when the 'click' event is triggered, it will call the function that plays a round.

- to make function that plays a round:
introduce 2 div containers. one will be for human score, the other will be for the computer's score.
let both human score and computer score start from 0.
if human-choice is rock and computer-choice is scissors, the human wins the round. increment the human score by 1.
if human-choice is paper and computer-choice is rock, the human also wins the round. increment the human score by 1.
if human-choice is scissors and computer-choice is paper, the human also wins the round. increment the human score by 1.
for cases of tie, no one wins. otherwise, the computer wins. increment the computer score by 1.

- when does the game end?
when either human score or computer score reachs 5 (one will reach before the other because tie does not give any points), make another div with a simple text declaring the winner of the round. if humans win, then humans win. otherwise, computers win.


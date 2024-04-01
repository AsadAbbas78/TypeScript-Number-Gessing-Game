import inquirer from "inquirer";
type anstype = {

      userGuess:number    
}
const systemGeneratedNo = Math.floor (Math.random() * 10);

const answer :anstype =await inquirer.prompt ([
{
          type: "number",
          name: "userGuess",
          message:"write your guess"
}


])

const{userGuess} = answer;
console.log(userGuess,"userGuess",systemGeneratedNo,'SYs' );
if (userGuess === systemGeneratedNo){
   
          
   console.log("your answer is correct \n you win");
   
}else{
          console.log("please try again");
          
}
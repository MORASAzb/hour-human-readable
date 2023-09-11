import './style.css'


const inputSecond=prompt("enter your time in seconds : ")

function formatTime(second){
  if(second<0 || second>35999){
    return "i can't calc this"
  }

  const hour = Math.floor(second/3600);
  const minutes=Math.floor((second%3600)/60);
  const remainingSecond=second%60;

  
  const formtedHouer=hour.toString().padStart(2 , "0");
  const formtedMinutes=minutes.toString().padStart(2 , "0");
  const formatedSeconds=remainingSecond.toString().padStart(2 , "0");

return `${formtedHouer} : ${formtedMinutes} : ${formatedSeconds} `


}



console.log(formatTime(inputSecond))
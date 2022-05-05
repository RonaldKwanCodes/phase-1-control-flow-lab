function scuberGreetingForFeet(someNumber){
  // Write your code here!
if(someNumber <= 400) {
  return 'This one is on me!'
}
else if(someNumber <= 2000){
  return 'That will be twenty bucks.'
}
else if(someNumber <= 2500){
  return 'I will gladly take your thirty bucks.'
}
else {
  return 'No can do.'}
}

function ternaryCheckCity(someCity){
  // Write your code here!
// if(someCity == 'NYC') {
//   return 'Ok, sounds good.'}
// else if(someCity != 'NYC') {
//   return 'No go.'}  
return someCity == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}


function switchOnCharmFromTip(generous){
  // Write your code here!
  const generousness = "generosity";

  let isGenerous, isnotasGenerous, anythingElse;

  switch (generousness) {
    case '':
      isGenerous = generous
      break;
    default:
      console.log("Thank you so much.");
      break;
  }



  }

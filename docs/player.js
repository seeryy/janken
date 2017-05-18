const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches =0;


function CountUp(){
  matches = matches +1;
  return matches;
}

//帰って来た裏か表マン on-third
function actionAgainstOmoteUra2(){
  CountUp();
  const isEven =matches %3 ==0;
  let result =GU;
  if(isEven){
    return CHOKI;
  }
    return result;
}

//表裏マン　odd-even
function actionAgainstOmoteUra(){
  CountUp();
  const isEven =matches %2 ==0;
  let result =PA;
  if(isEven){
    return result =GU;
  }
    return result;
}

//チョキ大好きマン　choki lover
function actionAgainstCHOKIDAISUKIMAN(){
  return GU;
}

//順番に出すマン rotation
function actionOrder(){
  CountUp();
  const isEven= matches % 3;
  let result =CHOKI;
  if(isEven==1){
    return result =PA;
  }else if(isEven ==2){
    return result =GU;
  }
  else{
    return result;
  }
}

function action(oppornent){
console.log(opppornent);

if (oppornent=='fighter::choki-lover'){
  result=CHOKIDAISUKIMAN();
}
else if(oppornent=='fighter::odd-even'){
  result=actionOmoteUra();
}
else if(oppornent=='fighter::rotation'){
  result=actionOrder();
}

}








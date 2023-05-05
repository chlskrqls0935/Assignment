const msg = document.querySelector("#msg");
const WWW = document.getElementsByClassName("WWW");
console.log(WWW)

function playGame(user){
    const com = Math.round((Math.random() * 2) + 1);
    let vipgame;
    if(com == 1) vipgame = "바위";
    if(com == 2) vipgame = "보";
    if(com == 3) vipgame = "가위";
    msg.value = '컴퓨터는' + vipgame + ':';
    switch(user){
        case 1 : 
            if(com == 1){
                WWW[0].value++; msg.value += ' 칫.. 비겼네요';
                break;
            }
            if(com == 2){
                WWW[1].value++; msg.value += ' 케케, 당신이 졌습니다!';
                break;
            }
            if(com == 3){
                WWW[2].value++; msg.value += ' 아잇! 당신이 이겼습니다!';
                break;
            }
        case 2 : 
            if(com == 1){
                WWW[2].value++; msg.value += ' 이런 제길! 당신이 이겼습니다!';
                break;
            }
            if(com == 2){
                WWW[1].value++; msg.value += ' 오잉? 무승부났네요..';
                break;
            }
            if(com == 3){
                WWW[0].value++; msg.value += ' 낄낄! 당신이 졌네요!';
                break;
            }
            case 3 : 
            if(com == 1){
                WWW[1].value++; msg.value += ' 풉! 당신이 졌어요!';
                break;
            }
            if(com == 2){
                WWW[2].value++; msg.value += ' 젠장! 당신이 이겼어요!';
                break;
            }
            if(com == 3){
                WWW[0].value++; msg.value += ' 헐! 무승부났네요..';
                break;
            }
    }
    msg.value += '';
  
}
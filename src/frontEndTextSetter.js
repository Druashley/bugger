// setting the front end button selection text here
// Each person will have 3 possible texts
import {answerText} from "./domelements.js"

function frontEndTextSet (who, phrase) {
    let phraseText = "";
    switch (who) {
        case "MP":
            if (phrase == 0){
                phraseText = "Assign this bug to MP, it is clearly a front end bug."
                answerText.innerHTML = phraseText;
            } else if (phrase == 1){
                phraseText = "Another bug for MP, poor guy! He gets all of the front end bugs!"
                answerText.innerHTML = phraseText;
            } else {
                phraseText = "Assign it to MP but it will probably be reassigned to RD."
                answerText.innerHTML = phraseText;
            }
            break;
        case "RD":
                if (phrase == 0){
                    phraseText = "RD gets this front end bug. MD has got the last few."
                    answerText.innerHTML = phraseText;
                } else if (phrase == 1){
                    phraseText = "RD was talking about working on this section before, so you should assign it to him."
                    answerText.innerHTML = phraseText;
                } else {
                    phraseText = "Assign this bug to RD and then he can adjust if needed."
                    answerText.innerHTML = phraseText;
                }
                break;
            case "DAME":
                if (phrase == 0){
                    phraseText = "This seems like a great CSS issue for DAME."
                    answerText.innerHTML = phraseText;
                } else if (phrase == 1){
                    phraseText = "This is a request from Sales and DAME loves working on these."
                    answerText.innerHTML = phraseText;
                } else {
                    phraseText = "This bug has to do with a lot of things DAME has worked on, and so you should assign it to him."
                    answerText.innerHTML = phraseText;
                }
                break;
    
        default:
            break;
    }
}




export { frontEndTextSet }
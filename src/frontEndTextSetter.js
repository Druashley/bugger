// setting the front end button selection text here
// Each person will have 3 possible texts
import { answerText } from "./domelements.js"

function frontEndTextSet(who, phrase) {
    let phraseText = "";
    switch (who) {
        case "MP":
            if (phrase == 0) {
                phraseText = "Assign this bug to MP, it is clearly a front end bug.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "Another bug for MP, poor guy! He gets all of the front end bugs!";
                answerText.textContent = phraseText;
            } else {
                phraseText = "Assign it to MP but it will probably be reassigned to RD.";
                answerText.textContent = phraseText;
            }
            break;
        case "RD":
            if (phrase == 0) {
                phraseText = "RD gets this frontend bug. MD has got the last few.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "RD was talking about working on this section before, so you should assign it to him.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "Assign this frontend bug to RD and then he can adjust if needed.";
                answerText.textContent = phraseText;
            }
            break;
        case "DAME":
            if (phrase == 0) {
                phraseText = "This seems like a great CSS bug for DAME.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "This is a frontend bug / request from Sales and DAME loves working on these.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "This frontend bug has to do with a lot of things DAME has worked on and so you should assign it to him.";
                answerText.textContent = phraseText;
            }
            break;
        case "DH":
            if (phrase == 0) {
                phraseText = "This frontend bug has to do with endpoints. Assign it to DH.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "DH seems like a great person for this frontend bug.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "All the other front end developers are drowning in bugs, assign it to DH.";
                answerText.textContent = phraseText;
            }
            break;
        case "JW":
            if (phrase == 0) {
                phraseText = "This frontend bug is actually a backend bug, give it to JW";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "Assign the bug to JW because it is unclear what is going on.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "Assign this to JW and he can push to someone else if need be.";
                answerText.textContent = phraseText;
            }
            break;
        case "RW":
            if (phrase == 0) {
                phraseText = "Assign this bug to RW and signout of skype.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "This frontend bug is critical and RW is the only person who can fix it.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "RW gets this one. Everyone has to stay sharp!";
                answerText.textContent = phraseText;
            }
            break;

        default:
            break;
    }
}




export { frontEndTextSet }
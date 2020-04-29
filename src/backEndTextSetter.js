//backend text will go here.

// setting the front end button selection text here
// Each person will have 3 possible texts
import { answerText } from "./domelements.js"

function backEndTextSet(who, phrase) {
    let phraseText = "";
    switch (who) {
        case "JW":
            if (phrase == 0) {
                phraseText = "Assign this backend bug to JW. He can reassign it if need be.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "JW mentioned something vaguely related to this backend bug in a meeting, assign it to him.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "Sever ERROR in '/' Application - Assign it to JW";
                answerText.textContent = phraseText;
            }
            break;
        case "DH":
            if (phrase == 0) {
                phraseText = "Assign this backend bug to DH, he always does these kinds of bugs.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "DH has to finish up some endpoints for this backend bug.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "Assign this bug to DH.";
                answerText.textContent = phraseText;
            }
            break;
        case "MP":
            if (phrase == 0) {
                phraseText = "This looks like a backend bug, but it is a frontend bug. Assign it to MP.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "Assign this to JW and then he can reassign it to MP.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "One backend bug here and there never hurt anyone, assign it to MP.";
                answerText.textContent = phraseText;
            }
            break;
        case "RD":
            if (phrase == 0) {
                phraseText = "RD needs more backend bugs in his life.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "Assign this to DH and he can reassign to RD.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "This has a 50/50 shot of being a frontend or backend bug - Just give it to RH and watch him reassign it.";
                answerText.textContent = phraseText;
            }
            break;
        case "DAME":
            if (phrase == 0) {
                phraseText = "This is not a backend bug. Assign it to DAME.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "This backend bug is mostly just css issues. Assign it to DAME.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "One backend bug won't kill DAME.";
                answerText.textContent = phraseText;
            }
            break;
        case "RW":
            if (phrase == 0) {
                phraseText = "This backend bug broke everything. Give it to RW.";
                answerText.textContent = phraseText;
            } else if (phrase == 1) {
                phraseText = "RW gets this bug. Be ready to run from a flying shoe.";
                answerText.textContent = phraseText;
            } else {
                phraseText = "RW is going to love this one.";
                answerText.textContent = phraseText;
            }
            break;

        default:
            break;
    }
}




export { backEndTextSet }
// the logic for picking the front end person will go here
import { answer } from "./domelements.js"



function setFrontEndPerson(number) {
    let person = "";
    if (number == 1) {
        person = "RW";
        answer.innerHTML = person;
    } else if (number < 4) {
        person = "JW";
        answer.innerHTML = person;
    } else if (number < 7) {
        person = "DH";
        answer.innerHTML = person;
    } else if (number < 21) {
        person = "DAME";
        answer.innerHTML = person;
    } else if (number < 47) {
        person = "RD";
        answer.innerHTML = person;
    } else {
        person = "MP";
        answer.innerHTML = person;
    }
}



export { setFrontEndPerson }
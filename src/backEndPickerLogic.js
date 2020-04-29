// the logic for picking the front end person will go here
import { answer } from "./domelements.js"



function setBackEndPerson(number) {
    let person = "";
    if (number == 1) {
        person = "RW";
        answer.innerHTML = person;
    } else if (number < 4) {
        person = "DAME";
        answer.innerHTML = person;
    } else if (number < 13) {
        person = "RD";
        answer.innerHTML = person;
    } else if (number < 17) {
        person = "MP";
        answer.innerHTML = person;
    } else if (number < 36) {
        person = "DH";
        answer.innerHTML = person;
    } else {
        person = "JW";
        answer.innerHTML = person;
    }
}




export { setBackEndPerson }
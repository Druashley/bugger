// I will put the functionality of the buttons here

import { frontEndButton, backEndButton, answer } from "./domelements.js"
import { randomNumberSet, randomThreeNumberSet } from "./randomizer.js"
import { setFrontEndPerson } from "./frontEndPickerLogic.js"
import { setBackEndPerson } from "./backEndPickerLogic.js"
import { frontEndTextSet } from "./frontEndTextSetter.js"
import { backEndTextSet } from "./backEndTextSetter.js"


const frontEndButtonClick = () => {
    frontEndButton.addEventListener("click", setFrontEnd)
}

const backEndButtonClick = () => {
    backEndButton.addEventListener("click", setBackEnd)
}




function setFrontEnd() {
    setFrontEndPerson(randomNumberSet());
    frontEndTextSet(answer.textContent, randomThreeNumberSet())
}


function setBackEnd() {
    setBackEndPerson(randomNumberSet());
    backEndTextSet(answer.textContent, randomThreeNumberSet())
}

export { frontEndButtonClick, backEndButtonClick }
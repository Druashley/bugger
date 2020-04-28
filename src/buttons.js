// I will put the functionality of the buttons here

import {frontEndButton, backEndButton} from "./domelements.js"
import { randomNumberSet } from "./randomizer.js"

const frontEndButtonClick = () => {
    frontEndButton.addEventListener("click", setFrontEnd)
}

function setFrontEnd () {
    console.log(randomNumberSet);
}

export {frontEndButtonClick}
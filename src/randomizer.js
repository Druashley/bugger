//the random number picker code will go here

const randomNumberSet = () => {
    // random number between 0 - 99
    return Math.floor(Math.random() * 100);
}

const randomThreeNumberSet = () => {
    // random number between 0 - 2
    return Math.floor(Math.random() * 3);
}


export { randomNumberSet, randomThreeNumberSet }
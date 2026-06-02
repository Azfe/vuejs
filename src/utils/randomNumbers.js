export const getRandomNumbers = ({ maxNumber, minNumber }) => {
  const calcRandomNumber = () => Math.floor(Math.random() * maxNumber) + minNumber

  const numberToGuess = calcRandomNumber()
  let initialRandomNumber = calcRandomNumber()

  while (initialRandomNumber === numberToGuess) {
    initialRandomNumber = calcRandomNumber() // Se repite hasta que sean distintos
  }

  return {
    numberToGuess,
    initialRandomNumber,
  }
}

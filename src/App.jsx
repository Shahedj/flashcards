import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // State to track if the card is flipped or not

  const updateCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');


  const cardPairs = [
    { question: "King of the jungle, with a majestic mane and a fierce roar.", answer: "Lion" },
    { question: "Massive mammal known for its long trunk and large ears.", answer: "Elephant" },
    { question: "Flightless bird that waddles on ice and swims in the ocean.", answer: "Penguin" },
    { question: "Tall creature with a long neck and distinctive spotted coat.", answer: "Giraffe" },
    { question: "Australian marsupial known for hopping and carrying its young in a pouch.", answer: "Kangaroo" },
    { question: "Invertebrate with eight arms and a soft body, known for its intelligence and camouflage abilities.", answer: "Octopus" },
    { question: "Striped feline predator, known for its strength, agility, and striking orange coat.", answer: "Tiger" },
    { question: "Highly intelligent marine mammal known for its playful behavior and clicking sounds.", answer: "Dolphin" },
    { question: "Large and powerful ape native to Africa, known for its strength and social behavior.", answer: "Gorilla" },
    { question: "Black and white bear native to China, known for its bamboo diet and gentle demeanor.", answer: "Panda" }
  ];

  const toggleCard = () => {
    setIsFlipped(!isFlipped); // Toggle the isFlipped state when the card is clicked
  }

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const answerComparison = (e) => {

    e.preventDefault();
    const correctAnswer = cardPairs[count].answer.toLowerCase();
    if (correctAnswer === answer.toLowerCase()) {
      setResult('correctAnswer');

    } else {

      setResult('wrongAnswer');

    }

  }



  return (
    <div className="App">
      <h1>Animals heads-up game!</h1>
      <h2 className='title'>Let's see how well you know the animals that share the planet with us!</h2>
      <h2 className='title'>Number of cards: {cardPairs.length} </h2>

      <div className='card' onClick={toggleCard}> {/* Add onClick event to the card */}
        {/* Conditionally render the question or answer based on isFlipped state */}
        <h2>{isFlipped ? cardPairs[count]?.answer : cardPairs[count]?.question}</h2>
      </div>

      <form onSubmit={answerComparison}>
        <label className='answerBox'>Guess the answer here: </label>
        <input id='answer' type='text' value={answer} onChange={handleChange} className={`answer ${result === "correctAnswer" ? 'correctAnswer' : result === "wrongAnswer" ? 'wrongAnswer' : ''}`}></input>
        <button type='submit'>Check guess</button>
      </form>

      <button onClick={decreaseCount} disabled={count === 0}>Back</button>
      <button onClick={updateCount} disabled={count === cardPairs.length - 1}>Next</button>
    </div>
  );
}

export default App;


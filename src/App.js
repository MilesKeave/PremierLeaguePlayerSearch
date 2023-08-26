import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () =>{
  const [chosenLevel, setChosenLevel] = useState(null);
  const [words, setWords] = useState(null);

  const getRandomWords = () => {

  

  

  const options = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: {
      level: chosenLevel,
      area: 'sat'
    },
    headers: {
      'X-RapidAPI-Key': '666c3015f6msh9bed86780ddc484p1cd254jsnc317044f5afb',
      'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
    }
  };

  axios.request(options).then(function(response){

    console.log(response);
    setWords(response.data);
  }).catch(function (error){
    console.log(error);
    });
  }

  console.log(words && words.quizlist);

  useEffect( () =>{

    if (chosenLevel) getRandomWords()

  }, chosenLevel)

  return (
    <div className="App">
      {!chosenLevel && <div className = 'levelSelector'>
        <h1> Word Assosciation App</h1>
        <p> Select Level to begin</p>
      <select 
          name = 'levels' 
          id = 'levels' value = {chosenLevel}
          onChange ={(e) => setChosenLevel(e.target.value)}> 
        <option value = {null}> Select a Value </option>
        <option value = {'1'}> Level 1 </option>
        <option value = {'2'}> Level 2 </option>
        <option value = {'3'}> Level 3 </option>


      </select>
      </div>}

      {chosenLevel && words && <div className="question-area">
        <h1> Welcome to level: {chosenLevel}</h1>

        {words.quizlist.map (question => <div className = "question-box">

          {question.quiz.map(tip => <p> {tip}</p>)}

          <p> {question.correct}</p>


        </div>)}



      </div>}
    </div>
  );
}

export default App;

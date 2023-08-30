import axios from 'axios';
import { useEffect, useState } from 'react';




const App = () =>{
  const [chosenPlayer, setChosenPlayer] = useState(null);
  
  const [words, setWords] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [year, setYear] = useState('2023');
  const [pos, setPos] = useState('');
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('');
  const [goals, setGoals] = useState('');
  const [assists, setAssists] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [played, setPlayed] = useState('');
  const [playerName, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [dribbles, setDribbles] = useState('');
  const [shotsOnTarget, setShotsOnTarget] = useState('');
  const [totalShots, setTotalShots] = useState('');
  const [passes, setPasses] = useState('');
  const [keyPasses, setKeyPasses] = useState('');
  
  const [passPercent, setPassPercent] = useState('');
  const [tackles, setTackles] = useState('');
  const [blocks, setBlocks] = useState('');
  const [interceptions, setInterceptions] = useState('');
  const [yellow, setYellow] = useState('');
  const [red, setRed] = useState('');
  const [yellowRed, setYellowRed] = useState('');
  const [playerPhoto, setPhoto] = useState('');
  




  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  

  

  const getPlayer = () => {

    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/players',
      params: {
        season: year,
        search: chosenPlayer,
        league: '39'
      },
      headers: {
        'X-RapidAPI-Key': '666c3015f6msh9bed86780ddc484p1cd254jsnc317044f5afb',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

  axios.request(options).then(function(response){

    console.log(response);
    setWords(response.data);
    console.log('here');

    
 

    var player1 = response.data.response[0];

    console.log(player1.statistics);
    console.log(player1.player);

    player1.statistics.map(stat=>
        setPos(stat.games.position)  );

    player1.statistics.map(stat=>
        setTeam(stat.team.logo));

    player1.statistics.map(stat=>
        setLeague(stat.league.logo));

    player1.statistics.map( stat =>
          setPlayed(stat.games.appearences));

    setPhoto(player1.player.photo);
   
    setName(player1.player.name);
                
    player1.statistics.map( stat =>
        setGoals(stat.goals.total));
      
      

    player1.statistics.map( stat =>
        setAssists(stat.goals.assists));
        
      

    player1.statistics.map( stat =>
        setDribbles(stat.dribbles.success));
      
    player1.statistics.map( stat =>
          setShotsOnTarget(stat.shots.on));
        
    player1.statistics.map( stat =>
          setTackles(stat.tackles.total));

    player1.statistics.map( stat =>
        setPlayed(stat.games.appearences));

    setWeight(player1.player.weight);

    setHeight(player1.player.height);
    
    setName(player1.player.name);

    setAge(player1.player.age);
                            
    setNationality(player1.player.nationality);
                                

    player1.statistics.map( stat =>
        setShotsOnTarget(stat.shots.on));
                                      
                

    player1.statistics.map( stat =>
        setTotalShots(stat.shots.total));
                                            
                  

    player1.statistics.map( stat =>
        setPasses(stat.passes.total));
                                                  
                
    player1.statistics.map( stat =>
        setKeyPasses(stat.passes.key));
                                                        
                
    player1.statistics.map( stat =>
        setPassPercent(stat.passes.accuracy));
                                                              
                
    player1.statistics.map( stat =>
        setTackles(stat.tackles.total));
                                                                    
                
    player1.statistics.map( stat =>
        setBlocks(stat.tackles.blocks));
                                                                          
                
    player1.statistics.map( stat =>
        setInterceptions(stat.tackles.interceptions));
                                                                                
                  
    player1.statistics.map( stat =>
          setYellow(stat.cards.yellow));
                                                                                      
    
    player1.statistics.map( stat =>
                setRed(stat.cards.red));
                                                                                                      
    player1.statistics.map( stat =>
                setYellowRed(stat.cards.yellowRed));
                                                                                                  
              
    
  }).catch(function (error){
    console.log(error);
   }) ;
  }
  console.log('words');
  console.log(words);
  //console.log(played);
  
 
  //console.log(words.results);

  useEffect( () =>{

    if (chosenPlayer) getPlayer()

  }, chosenPlayer)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
       setChosenPlayer(searchInput)
    }
  }

  return (





    <div className="App">
      {!chosenPlayer && <div className = 'PlayerSelector'>
        <div className = "top">
          <h1 className="h1"> Premier League Player Stats</h1>
          <p className = 'par'> Select Year to begin</p>
          <p className = 'par'> Then search any player by last name</p>
        </div>
      <div className="bottomHeader">
        <select 
            name = 'levels' 
            id = 'levels' value = {year}
            onChange ={(e) => setYear(e.target.value)}
            className = 'yearSelect'> 
          <option value = {'2023'}> Select a Value </option>
          <option value = {'2023'}> 2023/24 </option>
          <option value = {'2022'}> 2022/23 </option>
          <option value = {'2021'}> 2021/22 </option>
          <option value = {'2020'}> 2020/21 </option>
          <option value = {'2019'}> 2019/20 </option>
          <option value = {'2018'}> 2018/19 </option>
          <option value = {'2017'}> 2017/18 </option>
          <option value = {'2016'}> 2016/17 </option>
          <option value = {'2015'}> 2015/16 </option>
        </select>
      </div>



      <div className = "searchBar">

                    <input
                    className = 'bar'
                type="search"
                placeholder="Search by last name"
                onKeyDown= {handleKeyDown}
                onChange = {(e) => setSearchInput(e.target.value)}
                value={searchInput} />

                <div className="buttonBox"> 

                    <button class='enterButton' onClick= {()=> setChosenPlayer(searchInput)} > Enter </button>

                </div>

                      
      </div>
      </div>}

      {chosenPlayer && words && <div className="question-area">
        <h1> Player: {chosenPlayer}</h1>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700"/>

          <div class="wrapper">
            
            <div class="fut-player-card">
            
              <div class="player-card-top">
                <div class="player-master-info">
                  <div class="player-position"><span>

                 {pos.slice(0,3)}

                    
                    </span></div>
                  <div class="player-club">   
                              <img src = {team}></img>
                  </div>
                  <div class="player-nation">   
                  
                              <img src = {league}></img>
 
                  </div>
                </div>
                <div class="player-picture">
                <img src= {playerPhoto} ></img>
                    
                  <div class="player-extra"><span></span><span></span></div>
                </div>
              </div>
              
              <div class="player-card-bottom">
                <div class="player-info">
                  
                  <div class="player-name">

                  <span>{playerName}</span>
                  
                  </div>
                
                  <div class="player-features">
                    <div class="player-features-col"><span>
                        <div class ='player-feature-value'> 
                        <span> {goals}</span>
                          </div>
                        <div class="player-feature-title">Gls</div></span><span>
                        
                        <div class="player-feature-value"> <span> {assists}</span>
                          </div>
                         
                          <div class="player-feature-title"> Ast</div></span><span>
                        
                        <div class="player-feature-value">
                           <span>{played}</span>
                           </div>
                        <div class="player-feature-title">Games</div></span></div>
                    <div class="player-features-col"><span>
                        <div class="player-feature-value">{dribbles}</div>
                        <div class="player-feature-title">Dribbles</div></span>
                        <span>
                        <div class="player-feature-value"> {shotsOnTarget}

                           </div>


                        <div class="player-feature-title">Shots On Tar</div>
                        </span><span>
                        <div class ='player-feature-value'> 
                                <span> {tackles}</span>
                          </div>
                        <div class="player-feature-title">Tackles</div></span>
                        
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        


       

         

          

          

     

      

          
        </div>};

       

        </div> );

}

export default App;

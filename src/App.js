import axios from 'axios';
import { useEffect, useState } from 'react';




const App = () =>{
  var [chosenPlayer, setChosenPlayer] = useState(null);

  var [chosenID, setChosenID] = useState(null);
  
  const [words, setWords] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [year, setYear] = useState('2023');
  const [pos, setPos] = useState('');
  const [team, setTeam] = useState('');
  const [teamName, setTeamName] = useState('');
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
  const [playersList, setPlayersList] = useState('');
  




  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  
  const resetButton = () =>{
    setChosenPlayer(null);
    setChosenID(null);  
    setPlayersList([]);
    console.log('reset');
    

  }
  

  const getPlayer = () => {

    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/players',
      params: {
        season: year,
        search: chosenPlayer,
        league: '39',
        id: chosenID
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
   

    
 
    setPlayersList(response.data.response);
    console.log(response.data.response);
    console.log(response.data.response.length);
    


    if (response.data.response.length == 1){
          var player1 = response.data.response[0];
          setChosenID(player1.player.id);

          console.log(player1.statistics);
          console.log(player1.player);

          player1.statistics.map(stat=>

                setPos(stat.games.position)
      
              );

          player1.statistics.map(stat=>


              setTeam(stat.team.logo));

          player1.statistics.map(stat=>
              setTeamName(stat.team.name));

          player1.statistics.map(stat=>
              setLeague(stat.league.logo));

          player1.statistics.map( stat =>

            {if (stat.games.appearences){
              setPlayed(stat.games.appearences)
            }
            else{
              setPlayed('0')

            }} );

          setPhoto(player1.player.photo);
        
          setName(player1.player.name);
                      
          player1.statistics.map( stat =>

            {if (stat.goals.total){
              setGoals(stat.goals.total)
            }
            else{
              setGoals('0')

            }}
            );
            
            

          player1.statistics.map( stat =>

            {if (stat.goals.assists){
              setAssists(stat.goals.assists)
            }
            else{
              setAssists('0')

            }}
            );

            
            
              
            

          player1.statistics.map( stat =>

            {if (stat.dribbles.success){
              setDribbles(stat.dribbles.success)
            }
            else{
              setDribbles('0')

            }}
            );

            
          player1.statistics.map( stat =>

            {if (stat.shots.on){
              setShotsOnTarget(stat.shots.on)
            }
            else{
              setShotsOnTarget('0')

            }}
            );


              
          player1.statistics.map( stat =>

            {if (stat.tackles.total){
              setTackles(stat.tackles.total)
            }
            else{
              setTackles('0')

            }}
            );
              

          player1.statistics.map( stat =>

            {if (stat.games.appearences){
              setPlayed(stat.games.appearences)
            }
            else{
              setPlayed('0')

            }}
            );
            

          setWeight(player1.player.weight);

          setHeight(player1.player.height);
          
          setName(player1.player.name);

          setAge(player1.player.age);
                                  
          setNationality(player1.player.nationality);
                                      

          player1.statistics.map( stat =>

            {if (stat.shots.on){
              setShotsOnTarget(stat.shots.on)
            }
            else{
              setShotsOnTarget('0')

            }}
            );
          
                                            
                      

          player1.statistics.map( stat =>

            {if (stat.shots.total){
              setTotalShots(stat.shots.total)
            }
            else{
              setTotalShots('0')

            }}
            );
              
                                                  
                        

          player1.statistics.map( stat =>

            {if (stat.passes.total){
              setPasses(stat.passes.total)
            }
            else{
              setPasses('0')

            }}
            );



            
                                                        
                      
          player1.statistics.map( stat =>

            {if (stat.passes.key){
              setKeyPasses(stat.passes.key)
            }
            else{
              setKeyPasses('0')

            }}
            );


            
                                                              
                      
          player1.statistics.map( stat =>

            {if (stat.passes.accuracy){
              setPassPercent(stat.passes.accuracy)
            }
            else{
              setPassPercent('0')

            }}
            );





            
                                                                    
                      
          player1.statistics.map( stat =>

            {if (stat.tackles.total){
              setTackles(stat.tackles.total)
            }
            else{
              setTackles('0')

            }}
            );




            
                                                                          
                      
          player1.statistics.map( stat =>


            {if (stat.tackles.blocks){
              setBlocks(stat.tackles.blocks)
            }
            else{
              setBlocks('0')

            }}
            );
            
                                                                                
                      
          player1.statistics.map( stat =>

            {if (stat.tackles.interceptions){
              setInterceptions(stat.tackles.interceptions)
            }
            else{
              setInterceptions('0')

            }}
            );
            
                                                                                      
                        
          player1.statistics.map( stat =>

            {if (stat.cards.yellow){
              setYellow(stat.cards.yellow)
            }
            else{
              setYellow('0')

            }}
            );


                
                                                                                            
          
          player1.statistics.map( stat =>
            {if (stat.cards.red){
              setRed(stat.cards.red)
            }
            else{
              setRed('0')

            }}
            );
                    
                                                                                                            
          player1.statistics.map( stat =>


            {if (stat.cards.ellowRed){
              setYellowRed(stat.cards.yellowRed)
            }
            else{
              setYellowRed('0')

            }}
            );


    }
    else{



    }


    
           
              
                                                                                                  
              
    
  }).catch(function (error){
    console.log(error);
   }) ;
  }


  console.log('words');
  console.log(words);


  //console.log(played);
  
 
  //console.log(words.results);

  useEffect( () =>{
    console.log('chosenPlayer');
    console.log(chosenPlayer);
    if (chosenPlayer) getPlayer()

  }, [chosenPlayer])

  useEffect( () =>{
    setChosenPlayer(null);
    if (chosenID) getPlayer()

  }, [chosenID])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
       setChosenPlayer(searchInput)
    }
  }

  return (





    <div className="App">
      {!(chosenID) && <div className = 'PlayerSelector'>
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
          <option value = {'2023'}> Select a Season </option>
          <option value = {'2023'}> 2023/24 </option>
          <option value = {'2022'}> 2022/23 </option>
          <option value = {'2021'}> 2021/22 </option>
          <option value = {'2020'}> 2020/21 </option>
          <option value = {'2019'}> 2019/20 </option>
          <option value = {'2018'}> 2018/19 </option>
          <option value = {'2017'}> 2017/18 </option>
          <option value = {'2016'}> 2016/17 </option>
          <option value = {'2015'}> 2015/16 </option>
          <option value = {'2014'}> 2014/15 </option>
          <option value = {'2013'}> 2013/14 </option>
          <option value = {'2012'}> 2012/13 </option>
          <option value = {'2011'}> 2011/12 </option>
          <option value = {'2010'}> 2010/11 </option>
          <option value = {'2009'}> 2009/10 </option>
          <option value = {'2008'}> 2008/09 </option>
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

                

                { (playersList.length >1) &&  
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Player Options</label>
                </div>
                { (playersList.length >1) && 
                    <select 
                            name = 'levels' 
                            id = 'levels' 
                            onChange ={(e) => 
                              
                              setChosenID(e.target.value) }
                              
                            > 
                            <option value = "select a player"> Select Player </option>
                            
    
                            {playersList.map(players => 
                            
                            <option  value = {players.player.id}> {players.player.name} </option>)}
                         
                         
                    </select> }
          </div>
     }

                <div className="buttonBox"> 

                

                    <button class='enterButton btn btn-primary' data-toggle="button" aria-pressed="false" autocomplete="off" onClick= {()=> 

                      
                      
                      setChosenPlayer(searchInput)} > Enter </button>

                </div>

                      
      </div>
      </div>}

      {(chosenID || chosenPlayer) && (playersList.length == 1) && words && <div className="question-area">
      

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700"/>

          <div class="wrapper">

            
            <div class = "statBox">


                    <div class="statHeader">
                      <span> Player: {playerName}</span>
                    </div>

                    <div class="player-stat">
                      <span> Position: {pos}</span>
                    </div>

                    <div class="player-stat">
                      <span> Nationality: {nationality}</span>
                    </div>

                    <div class="player-stat">
                      <span> Club: {teamName}</span>
                    </div>

                    <div class="player-stat">
                      <span> Height: {height}</span>
                    </div>
                    <div class="player-stat">
                      <span> Weight: {weight}</span>
                    </div>
                    <div class="player-stat">
                      <span> Current age: {age}</span>
                    </div>

                    <div class = " statHeader">
                        <span> {year} Season Stats </span>
                    </div>

                    <div class="player-stat">
                      <span> Total Shots: {totalShots}</span>
                    </div>
                    <div class="player-stat">
                      <span> Shots On Target: {shotsOnTarget}</span>
                    </div>

                    <div class="player-stat">
                      <span> Total Passes: {passes}</span>
                    </div>
                    <div class="player-stat">
                      <span> Key Passes: {keyPasses}</span>
                    </div>

                    <div class="player-stat">
                      <span> Dribbles: {dribbles}</span>
                    </div>
                    <div class="player-stat">
                      <span> Goals: {goals}</span>
                    </div>
                    <div class="player-stat">
                      <span> Assists: {assists}</span>
                    </div>

                    <div class="player-stat">
                      <span> Successfull Pass Percentage: {passPercent}</span>
                    </div>

                    <div class="player-stat">
                      <span> Blocks: {blocks}</span>
                    </div>

                    <div class="player-stat">
                      <span> Interceptions: {interceptions}</span>
                    </div>

                    <div class = " statHeader">
                        <span> Player Offences</span>
                    </div>

                    <div class="player-stat">
                      <span> Yellow Cards: {yellow}</span>
                    </div>
                    <div class="player-stat">
                      <span> Red Cards: {red}</span>
                    </div>

                  

                    <div class="player-stat">
                      <span> Yellow to Red: {yellowRed}</span>
                    </div>


                    
                   
              
              


            </div>
            <div class = "playerBox">
              <div class = 'player'>
                <div class = "topBarPlayer">
                 

                  <div>
                  <h1 class='playerNameBox'> Player: {playerName}</h1>
                  </div>

                  <div class = 'ButtonBox'>
                    <button class = "BackBtn" onClick= {()=> resetButton()  }> Back to Search </button>
                  </div>
              </div>

              <div class = 'playerWrapper'>
              
              
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
              </div>
            </div>
          </div>

        


       

         

          

          

     

      

          
        </div>}

       

        </div> );

}

export default App;

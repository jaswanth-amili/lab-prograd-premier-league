//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var obj ={};
    obj.name= managerName;
    obj.age= managerAge;
    obj.team= currentTeam;
    obj.trophies= trophiesWon;
  return [obj.name, obj.age, obj.team, obj.trophies];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function  createFormation(inputArr){
  let obj = null;
  if(inputArr.length!==0){
    obj = {defender:inputArr[0], 
    midfield:inputArr[1],
    forward:inputArr[2]
    };
  }
  return  obj;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(debutYear){
  return players.filter(player => player.debut === debutYear);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter(player => player.position === position);
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award =0){
  if (award == 0)
  {
    return [  ];
  }
  else
  { 
    
  let filtered =[];
  players.map(player =>{
   // if(player.awards.forEach(obj => {
   //    if(obj.name === award){
   //      filtered.push(Object.assign({},player));        
   //    }
   //  }));
    player.awards.filter(obj => {
      if(obj.name === award){
        //Pushing object into new Array;
        filtered.push(Object.assign({},player));        
      }
    })
  }); 
    return filtered;
  }

  // else return [];
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName=0, noOfTimes){  
  if (awardName == 0)
  {
    return [  ];
  }
  else
  { 
  let filtered =[];
  players.map(player =>{
    let count = 0;
    player.awards.map(obj => {
      if(obj.name === awardName){
          count++;
      }      
    })
    if(count === noOfTimes){
      filtered.push(Object.assign({},player)); 
    }
  }); 
    return filtered;
  }
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName=0, country){
  if(awardName == 0){
    return [  ];
  }
  else
  { 
  let filtered =[];
  players.map(player =>{
    
    player.awards.map(obj => {
      if(obj.name === awardName && player.country === country){
        filtered.push(Object.assign({},player));
      }
    })
  }); 
    return filtered;
  }
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards = 0, team =0, age=0){
  if(noOfAwards == 0 && team===0 && age===0){
    return [  ];
  }
  else{
    let filtered =[];
    players.map(player =>{
      if(player.team === team && player.awards.length>=noOfAwards && player.age < age)
        filtered.push(Object.assign({},player));
    });
    return filtered;
  }
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

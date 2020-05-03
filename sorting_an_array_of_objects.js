/* Suppose we have an araay of Objects with various properties.
   We want to sort the array of those similar objects based on a particular property
   or also a combonation of two or more properties.
   We will achieve this using the Compare function*/
  
  
// An array of a few Soccer Players

const players = [
  { name: 'Cristiano Ronaldo', team: 'Juventus', age:35 },
  { name: 'Lionel Messi', team: 'Barcelona', age:32 },
  { name: 'Eden Hazard', team: 'Real Madrid', age: 29 },
  { name: 'Neymar Jr', team: 'Paris Saint-German', age:28 },
];
//Note that these statistics can change, these are correct as per 3 May,2020

/*We can use the following compare function to sort this array of players according to their teams*/

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const teamA = a.team.toUpperCase();
  const teamB = b.team.toUpperCase();

  let comparison = 0;
  if (teamA > teamB) {
    comparison = 1;
  } 
  else if (teamA < teamB) {
    comparison = -1;
  }
  //If teamA===teamB, no change occurs
  
  return comparison;
}
//NOTE: A positive value of the return value means teamA comes after teamB and vice-versa

//Function Call

players.sort(compare);

/*returns:-
 (4) [{…}, {…}, {…}, {…}]
0: {name: "Lionel Messi", team: "Barcelona", age: 32}
1: {name: "Cristiano Ronaldo", team: "Juventus", age: 35}
2: {name: "Neymar Jr", team: "Paris Saint-German", age: 28}
3: {name: "Eden Hazard", team: "Real Madrid", age: 29}
length: 4
__proto__: Array(0)
*/

//Similarly 'compare' function can also be used to sort the players according to their age : Try to figure out yourself :p
  
  

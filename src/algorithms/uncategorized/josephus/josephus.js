export default class Josephus {
  numberOfSoldiers;
  circleOfSoldiers;
  livingCount;

  constructor(numSoldiers) {
    this.numberOfSoldiers = numSoldiers > 1 ? numSoldiers : 2;
    this.circleOfSoldiers = new Array(this.numberOfSoldiers).fill(true);
    this.livingCount = this.numberOfSoldiers;
  }

  setNumSoldiers(numSoldiers) {
    this.numberOfSoldiers = numSoldiers;
    this.reset();
  }

  getNumSoldiers() {
    return this.numberOfSoldiers;
  }

  reset() {
    this.circleOfSoldiers = new Array(this.numberOfSoldiers).fill(true);
    this.livingCount = this.numberOfSoldiers;
  }

  solveBF() {
    if (this.numberOfSoldiers < 2) return 0;

    let lastKnight = -1;
    let dead = Array();

    for (let i=this._findThirdLiving(0); this.livingCount > 1; i = this._findThirdLiving(i)) {
      
      this._markDead(i)
      dead.push(i+1);
      i = this._findNextLiving(i);

      if (this.livingCount === 1) lastKnight = i;
    }
    this.reset();
    return lastKnight;
  }

  solveVisual() {
    if (this.numberOfSoldiers < 2) return 0;

    let lastKnight = -1;

    console.log('\nThe Romans prepare to clear the caves.\n');

    let dead = Array();

    for (let i=this._findThirdLiving(0); this.livingCount > 1; i = this._findThirdLiving(i)) {
      
      this._markDead(i)
      dead.push(i+1);
      console.log('\tKnight', i+1, 'is slain.');
      i = this._findNextLiving(i);
      console.log('Knight', i+1, 'prepares to strike the next blow.')

      if (this.livingCount === 1) {
        console.log('But sees no one meet his gaze...');
        lastKnight = i;
      }
    }

    console.log('\nK'+(lastKnight+1), 'is the last knight standing.');

    console.log('\nSlain knights:', dead.toString());

    this.reset();

    return lastKnight;
  }

  _findNextLiving(index) {
    for (let i = (index+1)%this.numberOfSoldiers; this.livingCount>0; i = (i+1)%this.numberOfSoldiers) {
      if (this.circleOfSoldiers[i] === true) return i;
    }

    return -1;
  }

  _findThirdLiving(index) {
    let counter = 0;

    for (let i = (index+1)%this.numberOfSoldiers; this.livingCount>1; i = (i+1)%this.numberOfSoldiers) {

      if (this.circleOfSoldiers[i] === true) {
        if (counter < 3) ++counter;
      }

      if (counter === 3) return i;
    }

    return -1;
  }

  _markDead(index) {
    this.circleOfSoldiers[index] = false;
    --this.livingCount;
    return index;
  }
}

function printJosephusSolution(circleOfKnights) {
  console.log('\nSolution for Circle of', circleOfKnights.getNumSoldiers(),'\n– Last Knight at Index:', circleOfKnights.solveBF());
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
const knights1 = new Josephus(-1);
knights1.solveVisual();

const knights2 = new Josephus(6);
knights2.solveVisual();

const knights3 = new Josephus(8);
knights3.solveVisual();
printJosephusSolution(knights3);

printJosephusSolution(new Josephus(40));

// RUN: deno run josephus.js


// --------------------------- Terminal Output: ---------------------------
// The Romans prepare to clear the caves.
//
//         Knight 2 is slain.
// Knight 1 prepares to strike the next blow.
// But sees no one meet his gaze...
//
// K1 is the last knight standing.
//
// Slain knights: 2
//
// The Romans prepare to clear the caves.
//
//         Knight 4 is slain.
// Knight 5 prepares to strike the next blow.
//         Knight 2 is slain.
// Knight 3 prepares to strike the next blow.
//         Knight 1 is slain.
// Knight 3 prepares to strike the next blow.
//         Knight 3 is slain.
// Knight 5 prepares to strike the next blow.
//         Knight 6 is slain.
// Knight 5 prepares to strike the next blow.
// But sees no one meet his gaze...
//
// K5 is the last knight standing.
//
// Slain knights: 4,2,1,3,6
//
// The Romans prepare to clear the caves.
//
//         Knight 4 is slain.
// Knight 5 prepares to strike the next blow.
//         Knight 8 is slain.
// Knight 1 prepares to strike the next blow.
//         Knight 5 is slain.
// Knight 6 prepares to strike the next blow.
//         Knight 2 is slain.
// Knight 3 prepares to strike the next blow.
//         Knight 1 is slain.
// Knight 3 prepares to strike the next blow.
//         Knight 3 is slain.
// Knight 6 prepares to strike the next blow.
//         Knight 7 is slain.
// Knight 6 prepares to strike the next blow.
// But sees no one meet his gaze...
//
// K6 is the last knight standing.
//
// Slain knights: 4,8,5,2,1,3,7
//
// Solution for Circle of 8
// – Last Knight at Index: 5
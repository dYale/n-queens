/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution =  new Board({n: n});

  var recur = function(r,c){
    //if toggle counter = n value
    if(solution._isInBounds(r,c) && !(solution.hasAnyRooksConflicts())) {
      solution.togglePiece(r,c);
    } 
    if(solution._isInBounds(r,c)){
      recur(++r, ++c);
    }
  }

  recur(0,0);
  //internal function to call recusively
  //need to recursively call in all 4 directions
  //check if that new location is in conflict with anything in line
  //if it is not than save that index and return
  //repeat without that index as an option



  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var outerRecur = function (r,c) {
    r = r || 0;
    c = c || 0;
    var x = new Board({n: n})
    var recur = function(r,c){
      //if toggle counter = n value

      if(x._isInBounds(r,c) && !(x.hasAnyRooksConflicts())) {
        x.togglePiece(r,c);
        solutionCount++;
      } 
      if(x._isInBounds(r,c)){
        recur(++r, c);
        recur(r, ++c);
      }
    }
    if (solutionCount === 0) {
      recur(0,0);
    } else {
      outerRecur(++r, c);
      outerRecur(r, ++c);
    }
  }

  outerRecur();

  return solutionCount;  
  
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
// count previous solutions, put in recusive function as argument then concat them within a for loop into 1 array at the end
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

 
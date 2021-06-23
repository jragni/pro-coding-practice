function wordScores(strings) {
  // @params: array of strings
  // @output: array of scores
  let scores = [];

  for (let string of strings) {
    // Refactoring the code
    // let score = 0;

    // for (let char of string) {
    //   score += LETTER_SCORE[char.toUpperCase()];
    // }
    // isNaN(score) ? scores.push(null) : scores.push(score); 
    scores.push(getScore(string));
  }
  return scores;
}

function getScore(word){
  let score = 0;

  for (let char of word) {
    score += LETTER_SCORE[char.toUpperCase()];
  }
  return isNaN(score) ? null : score; 

}

const LETTER_SCORE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};

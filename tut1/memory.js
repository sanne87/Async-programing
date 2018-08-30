function randomAnswers(){
  const answers = [1,1,2,2,3,3,4,4,5];

  answers.sort(function(a,b){
    return 0.5 - Math.random();
  })
}

function setUp() {
  const grid = getElementsByTagName('td');
  const answers = randomAnswers();

  for (let i = 0; i < grid.length; i++) {
    let cell = grid[i];

    cell.completed = false;
    cell.clicked = false;
    cell.value = answers[i];
  }

}

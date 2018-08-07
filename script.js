var beerSong = function() {
  for (var bottlesAfter = 99; bottlesAfter >= 0; bottlesAfter -= 1) {
    var numBottles = bottlesAfter--;
    if (numBottles === 1) {
      console.log(
        numBottles +
          " Bottle of beer on the wall, " +
          numBottles +
          " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall!"
      );
    } else {
      console.log(
        numBottles +
          " Bottles of beer on the wall, " +
          numBottles +
          " bottles of beer. Take one down, pass it around, " +
          bottlesAfter +
          " bottles of beer on the wall!"
      );
    }
  }
};

console.log(beerSong());

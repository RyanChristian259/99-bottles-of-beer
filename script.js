let bottlesOfBeerSong = function() {
  for (let bottles = 98; bottles >= 0; bottles--) {
    let bottlesBefore = bottles + 1;
    if (bottlesBefore >= 2) {
      console.log(
        bottlesBefore +
          " Bottles of beer on the wall, " +
          bottlesBefore +
          " bottles of beer. Take one down, pass it around, " +
          bottles +
          " bottles of beer on the wall!"
      );
    } else {
      console.log(
        bottlesBefore +
          " Bottle of beer on the wall, " +
          bottlesBefore +
          " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall!"
      );
    }
  }
};

console.log(bottlesOfBeerSong());

var doorSets = [
    [true, false, false],
    [false, true, false],
    [false, false, true]
];

var scores = {
    true: 0,
    false: 0
};

var tests = 10000000;

for (var i = 0, l = tests; i < l; i++) {
    var doorSet = JSON.parse(JSON.stringify(doorSets[Math.floor(Math.random() * 3)]));

    var choice1 = doorSet.splice(Math.floor(Math.random() * 3), 1)[0];
    var reveal = doorSet.splice(doorSet.indexOf(false), 1)[0];
    var choice2 = doorSet.pop();

    scores[choice2]++;
}

console.log("Wins: " + (100 * scores[true] / tests) + "%, Losses: " + (100 * scores[false] / tests) + "%");
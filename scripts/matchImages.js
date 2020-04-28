const fs = require('fs');
const { crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers } = require('./villagers');

// crossed referenced with 
// https://animalcrossing.fandom.com/wiki/Villager_list_(New_Horizons)
// couldnt just search the page via webcrawler bc
// some phrases of other villagers would be the name we're looking for
// + need to check manually anyway


let personalityTypes = [crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers];

let folderNames = ['cranky', 'jock', 'lazy', 'normal', 'peppy', 'smug',
  'snooty', 'uchi'];

let mismatches = {};

function findMismatch() {
  for (let i = 0; i < personalityTypes.length; i++) {
    let testFolder = `./frontend/src/assets/villagers/${folderNames[i]}`;
    let files = [];

    fs.readdirSync(testFolder).forEach(file => {
      files.push(file.slice(0, -4));
    });

    let currSubset = [];

    for (let j = 0; j < personalityTypes[i].length; j++) {
      let currVillager = files.find(villager => villager === personalityTypes[i][j]);

      if (currVillager === undefined) {
        currSubset.push(personalityTypes[i][j])
      }
    }

    mismatches[folderNames[i]] = currSubset;
  };
  return mismatches;
}

console.log(findMismatch())



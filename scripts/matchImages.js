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

function findDuplicates() {
  let villagers = {};

  // add all villagers into a count dictionary
  // return villagers whose name appears more than once

  for (let i = 0; i < personalityTypes.length; i++) {
    for (let j = 0; j < personalityTypes[i].length; j++) {
      if (!villagers[personalityTypes[i][j]]) {
        villagers[personalityTypes[i][j]] = 1;
      } else {
        villagers[personalityTypes[i][j]]++;
      }
    }
  }

  let duplicates = [];

  for (let key in villagers) {
    if (villagers[key] > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

function findMismatch() {
  for (let i = 0; i < personalityTypes.length; i++) {
    let currFolder = `../frontend/src/assets/villagers/${folderNames[i]}`;
    let files = [];

    fs.readdirSync(currFolder).forEach(file => {
      files.push(file.slice(0, -4));
    });

    let currSubset = [];

    // compare files in current folders to 
    // names in villager master list 

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
console.log('duplicates: ', findDuplicates())



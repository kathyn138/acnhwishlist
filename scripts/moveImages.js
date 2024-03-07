const fs = require('fs');
const path = require('path');
const { crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers } = require('./villagers');

let personalityTypes = [crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers];

let folderNames = ['cranky', 'jock', 'lazy', 'normal', 'peppy', 'smug',
  'snooty', 'uchi'];

// create folders for personality types
for (let name of folderNames) {
  fs.mkdir(path.join(__dirname, `../frontend/src/Assets/Villagers/${name}`), (err) => {
    if (err) throw err;
  });
}

// move villager images into folders sorted by personality types
for (let i = 0; i < personalityTypes.length; i++) {
  for (let j = 0; j < personalityTypes[i].length; j++) {
    let currVillager = personalityTypes[i][j];
    let currFolder = folderNames[i];

    fs.rename(path.join(__dirname, `../frontend/src/Assets/Villagers/${currVillager}.png`),
      path.join(__dirname,`../frontend/src/Assets/Villagers/${currFolder}/${currVillager}.png`), (err) => {
        if (err) throw err;
        console.log(`Move ${currVillager} complete!`);
      });
  }
}

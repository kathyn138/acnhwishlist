const axios = require('axios');
const util = require('util')
const fs = require('fs');
let content = ''


axios.get('https://www.ign.com/wikis/animal-crossing-new-horizons/Villagers_and_Other_Characters').then(function(resp) {
  let pattern = /https:\/\/oyster.+?\/animal-crossing-new-horizons\/.+?\.(?:jpg|gif|png)/g;
  content = resp.data.match(pattern);
  let unique = new Set(content);

  fs.writeFile('./imageUrls.txt', util.inspect(unique), "utf8", function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Successfully wrote to file!');
  });

  console.log('writing file...');
});
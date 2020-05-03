const axios = require('axios');
const util = require('util')
const fs = require('fs');
let content = ''

// all images that we want have commanlities in their url: 
// 1) https://oyster
// 2) animal-crossing-new-horizons
// 3) ends in .jpg, .gif, or .png

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

  console.log('Writing file...');
});
const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../README.md', {encoding: 'utf8'});

if (/Updated\sAt.*/.test(data)) {
  const updatedData = data.replace(/Updated\sAt.*/, `Updated At : ${new Date()}`)

  fs.writeFileSync(__dirname + '/../README.md', updatedData);
} else {
  const updatedData = data + `\nUpdated At : ${new Date()}`;

  fs.writeFileSync(__dirname + '/../README.md', updatedData);
}


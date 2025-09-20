const si = require('systeminformation');

si.fsSize()
  .then(data => {
    console.log('Filesystem size info:', data);
  })
  .catch(err => {
    console.error('Error fetching fsSize:', err);
  });

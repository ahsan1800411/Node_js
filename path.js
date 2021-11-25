// Path Module

// const path = require('path');
import path from 'path';

// console.log(path.basename('g:\\node.js\\path.js', '.js'));
// console.log(path.basename(__filename));
// console.log(__filename);

// console.log(path.dirname('g:\\node.js\\path.js'));
// console.log(path.dirname(__filename));

// console.log(path.extname('g:\\node.js\\path.js'));
// console.log(path.extname(__filename));

// docs/javascript/map

console.log(path.join('/docs', 'javascript', 'map'));
// console.log(path.join('/docs', 'javascript', 'map', '..', '..'));

// console.log(path.normalize('g:\\\\node.js\\\\path.js'));

console.log(path.parse('g:\\node.js\\index.js').base);

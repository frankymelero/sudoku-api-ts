const { execSync } = require('child_process');

execSync('tsc', { stdio: 'inherit' });

execSync('node ./dist/app.js', { stdio: 'inherit' });
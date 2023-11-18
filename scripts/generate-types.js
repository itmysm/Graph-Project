const fs = require('fs');
const file = require('../src/locales/en/translations.json');
const json2ts = require('json2ts');

const jsonString = JSON.stringify(file);
const result = json2ts.convert(jsonString);

// Specify the path where you want to save the TypeScript file
const outputPath = '../src/types/locales/index.ts';

// Write the result to the TypeScript file
fs.writeFileSync(outputPath, result);

console.log(`TypeScript definitions have been saved to ${outputPath}`);
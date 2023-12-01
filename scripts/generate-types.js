// this script create types based locale en/translations.json to make development easier.

console.log("🔰 Start generate types from translations.json");

const fs = require('fs');
const file = require('../src/locales/en/translations.json');
const json2ts = require('json2ts');

const jsonString = JSON.stringify(file);
const result = json2ts.convert(jsonString);

// Specify the path where you want to save the TypeScript file
const outputPath = './src/types/locales/index.ts';

// Write the result to the TypeScript file
fs.writeFileSync(outputPath, result);

console.log(`✅ TypeScript types have been saved to ${outputPath} \n`);
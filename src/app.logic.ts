import { mkdirSync, writeFileSync } from 'fs';
import { yarg } from './config/plugins';

const { b: base, l: limit, s: showTable } = yarg;


let output = '';

const header = `
===========================================
        Tabla del ${ base }
===========================================\n
`;

for ( let number = 1; number <= limit; number++ ) {
  output += `${ base } x ${ number } = ${ base * number }\n`;
}

output = header + output;

if (showTable) console.log(output);


const outputPath = `output`;

mkdirSync(outputPath, { recursive: true });
writeFileSync(`${ outputPath }/table-of-${ base }.txt`, output);

console.log('File created!');

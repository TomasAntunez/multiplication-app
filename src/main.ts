import { yarg } from './config/plugins';
import { App } from './presentation';


( async () => {
  await main();
})();


async function main() {

  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;

  App.run({ base, limit, showTable, fileName, fileDestination });

};

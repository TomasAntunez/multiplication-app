import { CreateTable, SaveFile } from "../domain/use-cases";


interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}


export class App {

  static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
    console.log('Server running...');

    const table = new CreateTable().execute({ base, limit });

    const fileWasSaved = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    if (showTable) console.log(table);

    ( fileWasSaved )
      ? console.log('File created!')
      : console.log('File not created');
  }

}

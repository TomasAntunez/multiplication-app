
interface CreateTableUseCase {
  execute: (options: Options) => string;
}

interface Options {
  base: number;
  limit?: number;
}


export class CreateTable implements CreateTableUseCase {

  constructor(
    /**
     * DI - Dependency Injection
     */
  ) {}

  execute({ base, limit = 10 }: Options) {
    let outputMessage =
      '\n===========================================\n' +
      `         Tabla del ${ base }               \n` +
      '===========================================\n\n';

    for ( let number = 1; number <= limit; number++ ) {
      outputMessage += `${ base } x ${ number } = ${ base * number }\n`;
    }

    return outputMessage;
  }

}

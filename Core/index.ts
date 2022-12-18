// ! Export all modules from Core
export * from './settings';
import { Commands } from './commands';

function ArguMents_Handler() {
    const ArguMents = process.argv;

    for (let index = 2; index < 4; index++) {
        const ArguMent = ArguMents[index]

        if (ArguMent.match('#') || ArguMent.match('#')) {
            Commands.forEach((Command_) => {
                Command_.alias.forEach((Alias) => {
                    if (ArguMent === `${Command_.prefix}${Alias}`) {
                        console.log('Command Found', ArguMent); // ! Fucntion Add Heare for Command
                    }
                });
            });
        } else if (ArguMent.includes('%') || ArguMent.includes('%')) {
            Commands.forEach((Command_) => {
                Command_.alias.forEach((Alias) => {
                    if (ArguMent === `${Command_.prefix}${Alias}`) {
                        console.log('Template Found', ArguMent); // ! Fucntion Add Heare for Template
                    }
                });
            });
        } else {
            console.log('Command or Template Not Found'); // ! Fucntion Add Heare for Error Throw
        }
    }
}


// ! Debugger
console.clear();
ArguMents_Handler();

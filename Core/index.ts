// ! Export all modules from Core
export * from './settings';
import { Commands } from './commands';

function ArguMents_Handler(): Array<Function> {
    const ArguMents = process.argv;

    const cmds: Array<Function> = [];

    for (let index = 2; index < 4; index++) {
        const ArguMent = ArguMents[index]

        if (ArguMent.match('#') || ArguMent.match('#')) {
            Commands.forEach((Command_) => {
                Command_.alias.forEach((Alias) => {
                    if (ArguMent === `${Command_.prefix}${Alias}`) {
                        console.log('Command Found', ArguMent); // ! Fucntion Add Heare for Command
                        cmds.push(Command_.function);
                    }
                    return cmds;
                });
            });
        } else if (ArguMent.includes('%') || ArguMent.includes('%')) {
            Commands.forEach((Command_) => {
                Command_.alias.forEach((Alias) => {
                    if (ArguMent === `${Command_.prefix}${Alias}`) {
                        console.log('Template Found', ArguMent); // ! Fucntion Add Heare for Template
                        cmds.push(Command_.function);
                    }
                    return cmds;
                });
            });
        } else {
            return cmds;
        }
    }
}

function Execute() {
    const commands = ArguMents_Handler();

    if (commands.length === 0) {
        console.log('No Commands Found');
        process.exit(1);
    }
    

    commands.forEach(async (command) => {
        await command();
    })
}


// ! Debugger
console.clear();
ArguMents_Handler();

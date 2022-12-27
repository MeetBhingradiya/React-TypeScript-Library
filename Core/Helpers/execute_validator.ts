import { Commands } from "../Database";

function Validate(): any {
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

export { Validate };
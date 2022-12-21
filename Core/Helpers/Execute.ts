import { exec, spawn } from 'child_process';

interface Execute_Type {
    Command: string;
    ArguMents: Array<string>;
    Output: Function;
    Errors: Function;
    Standard_Erros: Function;
    Exit: Function;
}
function Execute({
    Command,
    ArguMents,
    Output,
    Errors,
    Standard_Erros,
    Exit,
}: Execute_Type) {

    exec(`${Command} ${ArguMents.join(' ')}`, (error, stdout, stderr) => {
        if (error) {
            Errors(error);
            return;
        } else
            if (stderr) {
                Standard_Erros(stderr);
                return;
            } else {
                try {
                    Output(stdout);
                    console.log(`[@TeamSM/RTLT] Command -> ${Command} ${ArguMents.join(' ')}.`);
                } catch (error) {
                    Exit(error);
                    console.log(`[@TeamSM/RTLT] Command contains Errors-> ${Command} ${ArguMents.join(' ')}.`);
                }
            }
    });
}
export { Execute };
export type { Execute_Type };
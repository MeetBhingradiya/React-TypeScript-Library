// ! Export all modules from Core
export * from './Helpers/settings';
import { Command_Type, Commands } from './Database/commands';
import { Execute } from './Helpers/Execute';
import { Validate } from './Helpers';

function Main(): Array<Function> {
    return Validate();
}
console.clear();
Main();
import { Command_Type } from "../Database"

function Command_Detect(): Command_Type {
    return {
        name: 'Test',
        prefix: '#',
        description: 'TestApp Template',
        alias: ['test', 'TEST', 'Test'],
        type: 'Command',
        function: () => { console.log('Test') }
    }
}

export { Command_Detect };
import { Command_Type } from "../Database"

function Template_Detect(): Command_Type {
    return {
        name: 'Test',
        prefix: '#',
        description: 'TestApp Template',
        alias: ['test', 'TEST', 'Test'],
        type: 'Template',
        function: () => { console.log('Test') }
    }
}

export { Template_Detect };
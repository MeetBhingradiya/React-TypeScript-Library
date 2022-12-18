interface Command_Type {
    name?: String;
    prefix?: String;
    description?: String;
    alias?: Array<String>;
    type?: 'Command' | 'Template';
    function?: Function;
}

const Commands: Array<Command_Type> = [
    {
        name: 'add',
        prefix: '#',
        description: 'Add a new package or testapp',
        alias: ['add', 'ADD', 'Add'],
        type: 'Command',
    },
    {
        name: 'remove',
        prefix: '#',
        description: 'Remove a package or testapp',
        alias: ['remove', 'REMOVE', 'Remove'],
        type: 'Command',
    },
    {
        name: 'update',
        prefix: '#',
        description: 'Update a package or testapp',
        alias: ['update', 'UPDATE', 'Update'],
        type: 'Command',
    },
    {
        name: 'help',
        prefix: '#',
        description: 'Get help',
        alias: ['help', 'HELP', 'Help'],
        type: 'Command',
    },
    {
        name: 'build',
        prefix: '#',
        description: 'Create Build the project',
        alias: ['build', 'BUILD', 'Build'],
        type: 'Command',
    },
    {
        name: 'Reset',
        prefix: '#',
        description: 'Reset the project',
        alias: ['reset', 'RESET', 'Reset'],
        type: 'Command',
    },
    {
        name: 'Package',
        prefix: '%',
        description: 'Package Template',
        alias: ['package', 'PACKAGE', 'Package'],
        type: 'Template',
    },
    {
        name: 'Test',
        prefix: '%',
        description: 'TestApp Template',
        alias: ['test', 'TEST', 'Test'],
        type: 'Template',
    },
];

export { Commands };
export type { Command_Type };
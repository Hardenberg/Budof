'use strict';

import arg from 'arg';
import inquirer from 'inquirer';

function parseArgumentsIntoOptions(rawArgs){
    const args = arg(
        {
            '--test-data': Boolean,
            '-t': '--test-data',
            '--yes': Boolean,
            '-y': '--yes',
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        testData: args['--test-data'] || false,
    };
}

async function promptForMissingOptions(options){
    if (options.skipPrompts) {
        return {
            ...options,
            testData: options.testData || false,
        };
    }
    const questions = [];
    if (!options.testData){
        questions.push({
            type: 'confirm',
            name: 'testData',
            message: 'Install with Test-Data',
            default: false,
        })
    }
    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        testData: options.testData || answers.testData,
    };
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    console.log(options);
}


const inquirer = require('inquirer')
const fs = require('fs')
// import { Circle, Square, Triangle } from './lib/shapes.js'

const questions = [
    {
        type: 'text',
        message: 'Enter text',
        name: 'text',
    },
    {
        type: 'list',
        message: 'Select a shape',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape,'
    },
    {
        type: 'text',
        message: 'Enter a color',
        name: 'color'
    },
]

const generateSVG = (text, shape, color) => {
    // const shapes = new shape
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>

</svg>`
}
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const userInputs = generateSVG(answers)
        console.log(userInputs)

        fs.writeFile('logo.svg', userInputs, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
    })
}
init()
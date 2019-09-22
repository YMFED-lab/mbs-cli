const ora = require('ora')
const chalk = require('chalk')
const { prompt } = require('inquirer')
const symbols = require('log-symbols')
const handlebars = require('handlebars')
const download = require('download-git-repo')
const { writeFileSync, readFileSync, existsSync } = require('fs')

let tplList = require(`${__dirname}/../repository/templates`)

const question = [
    {
        type: 'input',
        name: 'project',
        message: 'Project name:',
        validate (val) {
          if (val !== '') {
            return true
          }
          return 'Project name is required!'
        }
    },
    {
        name: 'description',
        message: 'description of the project:',
        default:'a simple spa project'
    },
    {
        name: 'author',
        message: 'Please enter the author name:'
    }
]

module.exports = prompt(question).then((answers) => {
    const spinner = ora('Downloading template...');
    spinner.start()
    download(`direct:${tplList['template2']['url']}#${tplList['template2']['branch']}`, `./${answers.project}`, {clone: true}, (err) => {
        if(err){
            spinner.fail();
            console.log(symbols.error, chalk.red(err));
        }else{
            spinner.succeed();
            const fileName = `${answers.project}/package.json`;
            const meta = {
              name:answers.project,
              description: answers.description,
              author: answers.author
            }
            if(existsSync(fileName)){
              const content = readFileSync(fileName).toString();
              const result = handlebars.compile(content)(meta);
              writeFileSync(fileName, result);
            }
            console.log(symbols.success, chalk.green('Project initialization completed'));
        }
    })
})
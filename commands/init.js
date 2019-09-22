const ora = require('ora')
const chalk = require('chalk')
const { prompt } = require('inquirer')
const symbols = require('log-symbols')
const handlebars = require('handlebars')
const download = require('download-git-repo')
const { writeFileSync, readFileSync, existsSync } = require('fs')

let tplList = require(`${__dirname}/../repository/templates`)

const questions = [
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
      type: 'input',
      name: 'author',
      message: 'author name:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'description of the project:',
      default: 'a simple spa project',
    },
    {
      type: 'input',
      name: 'place',
      message: 'Where to init the project:',
      default: './'
    }
  ]

module.exports = prompt(questions).then(answers => {
    const spinner = ora('Downloading template...');
    spinner.start()
    download(`direct:${tplList['template1']['url']}#${tplList['template1']['branch']}`, `${answers.place}/${answers.project}`, {clone: true}, (err) => {
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
            console.log(meta);
            if(existsSync(fileName)){
              console.log("come in...")
              const content = readFileSync(fileName).toString();
              const result = handlebars.compile(content)(meta);
              writeFileSync(fileName, result);
            }
            console.log(symbols.success, chalk.green('New project has been initialize successfully!'));
        }
    })
})
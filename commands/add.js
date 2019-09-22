const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { showTable } = require(`${__dirname}/../utils`)

let tempList = require(`${__dirname}/../repository/templates`)

const question = [
  {
    type: 'input',
    name: 'name',
    message: 'Set the custom name of the template:',
    validate (val) {
      if (tempList[val]) {
        return 'Template is existed!'
      } else if (val === '') {
        return 'Name is required!'
      } else {
        return true
      }
    }
  },
  {
    type: 'input',
    name: 'branch',
    message: 'branch of the template:',
    validate (val) {
      if (val !== '') {
        return true
      }
      return 'branch is required!'
    }
  },
  {
    type: 'input',
    name: 'url',
    message: 'Url of the template:',
    validate (val) {
      if (val !== '') {
        return true
      }
      return 'Url is required!'
    }
  }
]

module.exports = prompt(question).then(({ name, branch, url }) => {
  tempList[name] = {}
  tempList[name]['branch'] = branch
  tempList[name]['url'] = url
  writeFile(`${__dirname}/../repository/templates.json`, JSON.stringify(tempList), 'utf-8', (err) => {
    if (err) {
      console.log(err)
    }
    showTable(tempList, 'New template has been added successfully!')
  })
})

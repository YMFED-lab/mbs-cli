const Table = require('cli-table')
const chalk = require('chalk')

const table = new Table({
  head: ['Template Name', 'Branch', 'Url'],
  style: {
    head: ['green']
  }
})

function showTable (tempList, Exp) {
  const list = Object.keys(tempList)
  if (list.length) {
    list.forEach((key) => {
      table.push([key, tempList[key]['branch'], tempList[key]['url']])
      if (table.length === list.length) {
        console.log(table.toString())
        if (Exp) {
          console.log(chalk.green(`\u2714 ${Exp}`))
        }
        process.exit()
      }
    })
  } else {
    console.log(table.toString())
    if (Exp) {
      console.log(chalk.green(`\u2714 ${Exp}`))
    }
    process.exit()
  }
}
exports.showTable = showTable

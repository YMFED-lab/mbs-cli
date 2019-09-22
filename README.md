![Scion Logo](./logo.png)





# mbs-cli

rapid development project tool.



# Installation

```
npm install mbs-cli -g
```
or
```
git clone http://git.ym/g-web/mbs-cli.git

cd mbs && npm install

npm link
```

# Usage
Open your terminal and type `mbs` or `mbs -h` , you'll see the help infomation below:
```
  Usage: mbs <rapid development project tool>


  Commands:

    add|a             Add a new template
    list|l            List all the templates
    init|i            Generate a new project
    init simple|ins   Generate a simple project
    delete|d          Delete a template
    create|c          Generate a new project by choose a template
  
  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

> Note that if you are using `MacOS`, `sudo` was required while using commands `add` and `delete`.



# Commands

### create | c

you can use this command to generate a  project by  choose a third-party template.

```
$ mbs create

? Project name: demo
? Choose template you want: (Use arrow keys)
> vue-webpack-pc - 基于webpack构建的vue项目模板
  react-webpack-pc - 基于webpack构建的react项目模板
  angular-webpack-pc - 基于webpack构建的angular项目模板
  discover your template - 更多海量模板等你发掘与收藏.
? Choose template you want: vue-webpack-pc - 基于webpack构建的vue项目模板
? Please enter the author name: jay
? Please enter a description of the project: a simple spa project
? Where to init the project: ./
√ Downloading template...
√ New project has been initialize successfully!
```



### init | i

you can use this command to generate a standard project.
```
$ mbs init

? Project name: project1
? Please enter the author name: jay
? Please enter a description of the project: unit test
? Where to init the project: ./

✔New project has been initialized successfully!
```



### init simple | ins

you can use this command to generate a simple project.

```
$ mbs ins

? Project name: project1
? Please enter the author name: jay
? Please enter a description of the project: unit test
? Where to init the project: ./

✔New project has been initialized successfully!
```



### add | a

This command would help you to add a new template to the `templates.json`, which will be used by `mbs` to generate projects.

```
$ mbs add

? Set the custom name of the template: template1
? branch of the template: master
? Url of the template: http://git.ym/Chenmh/bs-init-template.git
┌───────────────┬────────┬───────────────────────────────────────────┐
│ Template Name │ Branch │ Url                                       │
├───────────────┼────────┼───────────────────────────────────────────┤
│ template1     │ master │ http://git.ym/Chenmh/bs-init-template.git │
└───────────────┴────────┴───────────────────────────────────────────┘
✔ New template has been added successfully!
```

`mbs` use [download-git-repo](https://github.com/flipxfx/download-git-repo) to down load git repos. After answering 3 questions, you'll add a new template to `mbs`.



### list | l

It shows you the templates list.

```
$ mbs list

┌───────────────┬──────────┬───────────────────────────────────────────┐
│ Template Name │ Branch   │ Url                                       │
├───────────────┼──────────┼───────────────────────────────────────────┤
│ template1     │ standard │ http://git.ym/Chenmh/bs-init-template.git │
├───────────────┼──────────┼───────────────────────────────────────────┤
│ template2     │ simple   │ http://git.ym/Chenmh/bs-init-template.git │
└───────────────┴──────────┴───────────────────────────────────────────┘
```

It's easy, right?

### delete | d
To delete a template, you could use this command:
```
$ mbs delete

? Which template you want to delete? template1 
┌───────────────┬────────┬───────────────────────────────────────────┐
│ Template Name │ Branch │ Url                                       │
├───────────────┼────────┼───────────────────────────────────────────┤
│ template2     │ master │ http://git.ym/Chenmh/bs-init-template.git │
└───────────────┴────────┴───────────────────────────────────────────┘
✔ Template has been deleted successfully
```

# Template
The most important part of mbs is `template`. The official template information is listed in templates.json, and the third-party templates are listed in remote-templates.json.A template means a project sample, which has a simple or complex file structure.

You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into mbs's `templates.json`.

# License
MIT.










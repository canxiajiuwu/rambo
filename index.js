#!/usr/bin/env node
const commander = require('commander');
const package = require('./package.json');
const initAction = require('./commands/init')
//版本号查询
commander
    .version(package.version)
    .option('-v, --version','Check the version');

//project init
commander
    .command('init [name]')
    .option('-d, --dev','get develpment version')
    .description('创建vue项目')
    .action(initAction)

// 利用commander解析命令行输入，必须写在所有内容最后面
commander.parse(process.argv);


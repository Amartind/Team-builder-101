const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const team = require("./util/generateHtml")
const generateHtml = require('./util/generateHtml')
const emptyTeam = []
const getName = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is this employees name?",
        name:"name",
        
    }])
}
const getRole = ()=>{
    inquirer.prompt([{
        type:"list",
        message:"What is this employees role?",
        name:"role",
        choices:["Engineer", "Intern"]        
    }]).then(({newEmployee}) => {

    })
}
const getId = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is this employees ID?",
        name:"id",
        
    }])
}
const getEmail = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is this employees email?",
        name:"email",
        
    }])
}

const getOuttaHere = ()=>{
    inquirer.prompt([{
        type:"list",
        message:"Would you like to add a employee?",
        name:"quit",
        choices:["Yes", "Quit"]
        
    }]).then(ans => {
        if (ans == "Quit"){
            generateHtml()
        } else {
            return
        }
    })
}

const getOfficeNumber = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is their office number?",
        name:"office",
        
    }])
}
const getSchool = ()=>{
    inquirer.prompt([{
        type:"input",
        message:"What is this employees school?",
        name:"school",
        
    }])
}
const getGithub = ()=>{
  
    inquirer.prompt([{
        type:"input",
        message:"What is this employees github?",
        name:"github",
        
    }])
    
}
const buildTeamManager = async () =>{
    try {
        await getOuttaHere();
        const topGuyName = await getName();
        const topGuyId = await getId();
        const topGuyEmail = await getEmail();
        const topGuyOfficeNumber = await getOfficeNumber();
        const topGuy = new Manager();
        topGuy.name.push(topGuyName)
        topGuy.id.push(topGuyId)
        topGuy.email.push(topGuyEmail)
        topGuy.officeNumber.push(topGuyOfficeNumber)
        emptyTeam.push(topGuy)
        console.log(emptyTeam)
        buildTeam()
    } catch (err) {
        console.log(err)
    }
}

buildTeamManager();

function buildTeam(){

}
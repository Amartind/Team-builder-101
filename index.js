const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const team = require("./util/generateHtml")
const generateHtml = require('./util/generateHtml')
const emptyTeam = []


function buildTeam(){
    inquirer
    .prompt([{
        type:"list",
        message:"Would you like to add a employee?",
        name:"quit",
        choices:["Yes", "Quit"]
                
            }
    ])
    .then(ans => {
        if (ans.quit == "Quit"){
            fs.writeFile("index.html",team(emptyTeam),(err,data)=>{
                if(err){
                    throw err;
                }
                console.log("complete!")})
        } else {
           inquirer.prompt([{
                type:"list",
                message:"What is this employees role?",
                name:"role",
                choices:["Engineer", "Intern"]        
            }
            ]).then(ans => {
                if(ans.role == "Engineer"){inquirer
                    .prompt([{
                        type:"input",
                        message:"What is this employees name?",
                        name:"name",

                    },
                    {
                        type:"input",
                        message:"What is this employees email?",
                        name:"email",
                    },
                    {
                        type:"input",
                        message:"What is this employees ID?",
                        name:"id",
                    },
                    {
                        type:"input",
                        message:"What is this employees github?",
                        name:"github",

                    }]).then(ans => {
                        const newEngi = new Engineer();
                        newEngi.name=ans.name
                        newEngi.email=ans.email
                        newEngi.id=ans.id
                        newEngi.github=ans.github
                        emptyTeam.push(newEngi)
                        console.log(emptyTeam)
                        buildTeam();
                    })

                } else if (ans.role == "Intern"){
                    inquirer
                    .prompt([{
                        type:"input",
                        message:"What is this employees name?",
                        name:"name",
                        
                    },
                    {
                        type:"input",
                        message:"What is this employees email?",
                        name:"email",
                    },
                    {
                        type:"input",
                        message:"What is this employees ID?",
                        name:"id",
                    },
                    {
                        type:"input",
                        message:"What is this employees school?",
                        name:"school",
                        
                    }]).then(ans => {
                    const newIntern = new Intern();
                    newIntern.name=ans.name
                    newIntern.email=ans.email
                    newIntern.id=ans.id
                    newIntern.school=ans.school
                    emptyTeam.push(newIntern)
                    console.log(emptyTeam)
                    buildTeam();
                    })
                }
                
            })

        }
            })

}
    
function buildTeamManager(){
    inquirer
    .prompt([{
        type:"input",
        message:"What is this employees name?",
        name:"name",
        
    },
    {
        type:"input",
        message:"What is this employees email?",
        name:"email",
    },
    {
        type:"input",
        message:"What is their office number?",
        name:"office",
    },
    {
         type:"input",
         message:"What is this employees ID?",
         name:"id",
         
    }
]).then((response)=>{
    //whole manager object is response
        const topGuy = new Manager();
        topGuy.name = response.name
        topGuy.email = response.email
        topGuy.id = response.id
        topGuy.officeNumber = response.office
        emptyTeam.push(topGuy)
        console.log(emptyTeam)
        buildTeam()
    })


}

buildTeamManager();

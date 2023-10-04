// Create a class for Tasks
class Task{
    // name is name of task
    // date created is the current timestamp
    // priority is the priority level, higher number is higher priority
    constructor(name) {
        this.name = name;
        this.dateCreated = new Date();
    }
}

// create an array for the ToDo objects
// starts off as empty
var Tasks = [];

//---------------------------------------------------
// we need prompt syncs to get user input.
// make sure Node and npm is installed and then do
// npm install prompt-sync
// in the command line

// const prompt = require('prompt-sync')();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

//----------------------------------------------------

// create a function that allows users to create a Task
function createTask(){
    const prompt = require('prompt-sync')();
    const name = prompt("Enter task name: ");
    Tasks.push(new Task(name));
}

// create a function that allows users to print out all Tasks
function printAllTasks(){
    for(var i = 0; i< Tasks.length; i++){
        console.log("Task Name: "+Tasks[i].name +"\n\tDate Created: " + Tasks[i].dateCreated);
    }
}

function updateATask(){
    // if there are no tasks, we cannot update any tasks.
    if (Tasks.length === 0){
        return;
    }
    const prompt = require('prompt-sync')();
    var oldName;
    var flagExists = false;
    var index;
    while (true){
        oldName = prompt("Enter an Existing Task Name: ");

        // see if the old task exists.
        for (var i = 0; i < Tasks.length; i++){
            if (oldName === Tasks[i].name){
                flagExists = true;
                index = i;
            }
        }
        // the old tasks exists and we found it, so we can change it
        if (flagExists){
            var newName = prompt("Enter a new Task Name: ");
            Tasks[index].name = newName;
            return;
        }else{
            console.log("We could not find that task");
            console.log("Try again?");
        }
    }
}

function deleteATask(){
    // if there are no tasks, we cannot delete any tasks.
    if (Tasks.length === 0){
        return;
    }
    const prompt = require('prompt-sync')();
    var oldName;
    var flagExists = false;
    var index;
    while (true){
        oldName = prompt("Enter an Existing Task Name: ");

        // see if the old task exists.
        for (var i = 0; i < Tasks.length; i++){
            if (oldName === Tasks[i].name){
                flagExists = true;
                index = i;
            }
        }
        // the old tasks exists and we found it, so we can change it
        if (flagExists){
            console.log("Deleting that Task ");
            Tasks.splice(index, 1);
            return;
        }else{
            console.log("We could not find that task");
            console.log("Try again?");
        }
    }
}

// the main function is the actual app that runs all of the other functions.
function main(){
    console.log("Hello World");
    const prompt = require('prompt-sync')();
    var userInput;

    while(true){
        console.log("--------Menu------------");
        console.log("0: Exit");
        console.log("1: Create a new Task");
        console.log("2: Print all Tasks");
        console.log("3: Update a Task");
        console.log("4: Delete a Task");
        console.log("------------------------");
        userInput = prompt('Enter your option: ');

        switch(userInput){
            case "0":
                console.log("Exiting the program");
                return;
            case "1":
                createTask();
                break;
            case "2":
                printAllTasks();
                break;
            case "3":
                updateATask();
                break;
            case "4":
                deleteATask();
                break;
            default:
                consaole.log("Unknown Input, Try Again! ");
                break;
        }
    }

}

// runs the main function
main();
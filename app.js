'use strict';

// function searchByName(){
//     // Grabbing the values from our nameForm form and inputs.
//     let firstNameInput = document.forms['nameForm']['fname'].value;
//     let lastNameInput = document.forms['nameForm']['lname'].value;

//     // "people" is coming from the data.js file. We have access to it within this JavaScript file.
//     let filteredPeople = people.filter(function (person) {
//         if(person.firstName === firstNameInput && person.lastName === lastNameInput){
//             return true;
//         }
//         return false;
//     });
    
//     // Rather than console logging, you need to append the filteredPeople to a table.
//     if(filteredPeople.length > 0){
//         console.log(filteredPeople);
//     }else{
//         console.log('Sorry, looks like there is no one with that name.');
//     }
// }

// let userInput= correctUserInput(prompt("Enter string here."));

function correctUserInput(string){
    let correctedInput =[];
        for (let i = 0; i < string.length; i++){
            if (i != 0){
                string[i].toString();
                correctedInput += string[i].toLowerCase();
            }
            else if(i == 0){
                string[i].toString();
                correctedInput += string[i].toUpperCase();
            }
        }
    return correctedInput;
}
// console.log("test", userInput);

people.map(function(el)){
    document.getElementById("people").innerHTML += `<tr>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.gender}</td>
    <td>${el.dob}</td>
    <td>${el.height}</td>
    <td>${el.weight}</td>
    <td>${el.eyeColor}</td>
    <td>${el.occupation}</td>
    <td>${el.parents}</td>
    <td>${el.currentSpouse}</td>
    </tr>`
}

function filterPeople(userFormInputs){
    people.filter(function(el)){
        document.getElementById("people").innerHTML == `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
        </tr>`
    }
    descendantsButton(){
        if () == true{
            function filterPeople(userFormInputs.id == people.parents){
                people.filter(function(el)){
                    document.getElementById("people").innerHTML == `<tr>
                    <td>${el.firstName}</td>
                    <td>${el.lastName}</td>
                    <td>${el.gender}</td>
                    <td>${el.dob}</td>
                    <td>${el.height}</td>
                    <td>${el.weight}</td>
                    <td>${el.eyeColor}</td>
                    <td>${el.occupation}</td>
                    <td>${el.parents}</td>
                    <td>${el.currentSpouse}</td>
                    </tr>`
                }
            }
        }
    }
    immediateFamilyButton(){
        if () == true{
            function filterPeople(userFormInputs.parents, userFormInputs.currentSpouse,userFormInputs.id == people.parents, userFormInputs.parents == people.parents){
                people.filter(function(el)){
                    document.getElementById("people").innerHTML == `<tr>
                    <td>${el.firstName}</td>
                    <td>${el.lastName}</td>
                    <td>${el.gender}</td>
                    <td>${el.dob}</td>
                    <td>${el.height}</td>
                    <td>${el.weight}</td>
                    <td>${el.eyeColor}</td>
                    <td>${el.occupation}</td>
                    <td>${el.parents}</td>
                    <td>${el.currentSpouse}</td>
                    </tr>`
                }
            }
        }
    }
}
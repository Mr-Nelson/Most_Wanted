'use strict';
// function correctUserInput(string){
//     let correctedInput =[];
//         for (let i = 0; i < string.length; i++){
//             if (i != 0){
//                 string[i].toString();
//                 correctedInput += string[i].toLowerCase();
//             }
//             else if(i == 0){
//                 string[i].toString();
//                 correctedInput += string[i].toUpperCase();
//             }
//         }
//     return correctedInput;
// }

function buildTable(){
    people.map(function(el) {
        document.getElementById("master").innerHTML += `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        </tr>`
    })
}

function resetTable() {
    people.map(function(el){
        document.getElementById("results").innerHTML = "";
  })
}  

function filterPeople (){
    let userFormInputs = [ 
    document.forms["form"]["fname"].value,
    document.forms["form"]["lname"].value,
    document.forms["form"]["gender"].value,
    document.forms["form"]["dob"].value,
    document.forms["form"]["height"].value,
    document.forms["form"]["weight"].value,
    document.forms["form"]["eyeColor"].value,
    document.forms["form"]["occupation"].value
]
    let results = people;

    if(userFormInputs[0] != ""){
        results = searchByFirstName(userFormInputs[0], results)
    }
    if(userFormInputs[1] != ""){
        results = searchByLastName(userFormInputs[1], results)
    }
    if(userFormInputs[2] != ""){
        results = searchByGender(userFormInputs[2], results)
    }
    if(userFormInputs[3] != ""){
        results = searchByDOB(userFormInputs[3], results)
    }
    if(userFormInputs[4] != ""){
        results = searchByHeight(userFormInputs[4], results)
    }
    if(userFormInputs[5] != ""){
        results = searchByWeight(userFormInputs[5], results)
    }
    if(userFormInputs[6] != ""){
        results = searchByEyeColor(userFormInputs[6], results)
    }
    if(userFormInputs[7] != ""){
        results = searchByOccupation(userFormInputs[7], results)
    }
    results.map(function(el) {
        document.getElementById("results").innerHTML += `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        </tr>`
    })
    if(results.length == 1){
        selectedPerson = results[0]
    }        
    if (results.length == 0) {
        alert ("Sorry, this is not in devCodeCamp's Most Wanted.")
    }
}

function searchByFirstName(firstName, results){
    let filteredPeople = results.filter(function(person){
        if(person.firstName == firstName){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByLastName(lastName, results){
    let filteredPeople = results.filter(function(person){
        if(person.lastName ==lastName){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByGender(gender, results){
    let filteredPeople = results.filter(function(person){
        if(person.gender == gender){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByDOB(dob, results){
    let filteredPeople = results.filter(function(person){
        if(person.dob == dob){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}    
function searchByHeight(height, results){
    let filteredPeople = results.filter(function(person){
        if(person.height == height){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByWeight(weight, results){
    let filteredPeople = results.filter(function(person){
        if(person.weight == weight){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByEyeColor(eyeColor, results){
    let filteredPeople = results.filter(function(person){
        if(person.eyeColor == eyeColor){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}
function searchByOccupation(occupation, results){
    let filteredPeople = results.filter(function(person){
        if(person.occupation == occupation){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople
}

let selectedPerson;

function searchForDescendants(person, object){
    let filteredPeople = people.filter(function(person){
        if(person.parents[0] === selectedPerson["id"] || person.parents[1] === selectedPerson["id"]){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople;
}
 
function searchForParents(person, object){
    let filteredPeople = people.filter(function(person){
        if(person.id === selectedPerson.parents[0] || person.id === selectedPerson.parents[1]){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople;
}
function searchForSiblings(person, object){
    let filteredPeople = people.filter(function(person){
        if(person.id === selectedPerson.parents[0] || person.id === selectedPerson.parents[1] &&
            people.parents[0] === person.id || people.parents[1] === person.id){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople;       
}
function searchForSpouse(person, object){
    let filteredPeople = people.filter(function(person){
        if(person.id === selectedPerson.currentSpouse){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredPeople;     
}

// function searchBySiblings(person) {
//     let filteredSiblings = people.filter(function (people) {
//         if(person.parents === person.parents && person.id !=person.id) {
//             return true;
//         }
//         return false;
//     });
//     if(filteredSiblings.length > 0) {
//         return filteredSiblings;
//     }
//     else{
//         alert("Person has no known Sibling in this this Database.");
//         return;
        
//     }
// }

// function searchBySpouse(person) {
//     let filterSpouse = people.filter(function (person) {
//         if(person.currentSpouse ==(person.id)){
//             return true;
//         }
//         return false;
//     });
//     if(filterSpouse.length > 0){
//         return filterSpouse
//     }
//     else{
//         alert("Person has no known Spouse in this Database.");
//         return;
//     }
// }


function callFamilyTree (){

    let familyTree = people

    if(selectedPerson != "")
        familyTree = searchForDescendants(selectedPerson, people)
    }
    if(selectedPerson != ""){
        familyTree = searchForParents(selectedPerson, people)
    }
    if(selectedPerson != ""){
        familyTree = searchForSpouse(selectedPerson, people)
    }
    if(selectedPerson != ""){
        familyTree = searchForSiblings(selectedPerson, people)
    }

    familyTree.map(function(el) {
        document.getElementById("familyTable").innerHTML += `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <tr>`
    })
   
    if (familyTree.length == 0) {
        alert ("Sorry, this individual does not have family.")
    }




// function searchById( Id, results){
//     let filteredPeople = results.filter(function(person){
//         if(person.occupation == occupation){
//             return true;
//         }
//         else{
//             return false;
//         }
//     })
//     return filteredPeople
// }

// function intersect(array1, array2){
//     if (array2 === undefined  || array2.length === 0) {
//         return array1;
//     }
//     else{
//         let filterResult = array1.filter(x => array2.includes(x));
//         if (filterResult.length === 0){
//             return array1;
//     }
//     else {
//             return filterResult;
//         }
        
//     }
// }

//  function finalSearch(){
//      let finalSearchOutput = people;

//      let finalSearchByFirstName = searchByFirstName();
//             results = intersect(results, finalSearchByFirstName);

//      let finalSearchByLastName = searchByLastName();
//             results = intersect(results, finalSearchByLastName);
//      let finalSearchByGender = searchByGender();
//             results = intersect(results, finalSearchByGender);
//      let finalSearchByDOB = searchByDOB();
//             results = intersect(results,finalSearchByDOB);
//      let finalSearchByHeight = searchByHeight();
//             results = intersect(results, finalSearchByHeight);
//      let finalSearchByWeight = searchByWeight();
//             results = intersect(results, finalSearchByWeight);
//      let finalSearchByOccupation = searchByOccupation();
//             results = intersect(results, finalSearchByOccupation);

//          return finalSearchOutput;
//  }

// function searchByParents(person) {
//     let i = 0;
//     let filterParents = [];
//     do {    
//         people.filter(function (person) {
//             if(person.id == person[i]) {
//             filterParents.push(person);
//                 return true;
//             }
//             return false;
//         });
//         i += 1;
//     } while(i < person.length); 
//     if(filterParents.length > 0) {
//         return filterParents;
//     }else{
//         alert("Person is not known to have Parent in this Database.")
//     }
// }

// function searchBySibling(person) {
//     let filterSibling = people.filter(function (people) {
//         if(person.parents === person.parents && person.id !=person.id) {
//             return true;
//         }
//         return false;
//     });
//     if(filterSibling.length > 0) {
//         return filterSibling;
//     }else{
//         alert("Person has no known Sibling in this this Database.");
//         return;
        
//     }
// }

// function searchBySpouse(person) {
//     let filterSpouse = people.filter(function (person) {
//         if(person.currentSpouse ==(person.id){
//             return true;
//         }
//         return false;
//     });
//     if(filterSpouse.length > 0){
//         return filterSpouse
//     }else{
//         alert("Person has no known Spouse in this Database.");
//         return;
//     }
// }
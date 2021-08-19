//---------------------------task 1-----------------------------------------------
let words = ["Bilbo", "Gandalf", "Nazgul"]
let numbers = [1, 2, 3, 4, 5];

//MAP START
function map(arr, mapper) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = mapper(arr[i]);
    }
    return result;
}
console.log(map(["Bilbo", "Gandalf", "Nazgul"], a => a[1] === "a"));
//MAP END

//SOME START
function some(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) return true;
    }
    return false;
}
console.log(some(["Bilbo", "Gandalf", "Nazgul"], (a) => a == "Nazgul"));
//SOME END

//MAP EVERY
function every(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == predicate()) continue;
        else return false;
    }
    return true;
}
console.log(every(["11", "11", "10"], () => "11"));
//END EVERY

//MAP REDUSE
function reduce (arr, predicate, startValue) {
    let result = startValue + arr[0] ;
    for (let i = 1; i < arr.length; i++) {
        result = predicate(arr[i], result);
    }
    return result;
}
console.log(reduce(numbers, (sum, current) => current + sum, 10));
console.log(reduce(words, (sum, current) => current + sum, "plus_"));
//END REDUSE




//------------------------task 2------------------------------------------
let user0 = "Василий Васильевич Иванов 380958326595";
let user1 = "Петр Васильевич Петров 380655626491";
let user2 = "Николай Николаевич Столяров 380654126881";
let user3 = "Адольф Спиридонович Шмыг 380993334181";
let users = [user0, user1, user2, user3];

//START SUBTASK A
function matchesFirsLetterName (users) {
    let result = [];
    let k = 0;
    for (let i = 0; i < users.length; i++) {
        let target = " ";
        let pos = 0;
        let userTemp = [];
        for (let j = 0; ; j++) {
            let posTemp = pos;
            let found = users[i].indexOf(target, pos);
            if (found !== -1) userTemp[j] = users[i].slice(posTemp , found);
            else {
                userTemp[j] = users[i].slice(posTemp);
                break;
            }
            pos = found + 1;

        }
        let searchLetter = userTemp[0].charAt(0);
        if (userTemp[1].indexOf(searchLetter, 0) === 0) {
            result[k] = userTemp;
            k++;
        }
    }
    return result;
}
console.log(matchesFirsLetterName(users));
//END SUBTASK A



//START SUBTASK B
function surnameIncials (users) {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        let target = " ";
        let pos = 0;
        let userTemp = [];
        for (let j = 0; ; j++) {
            let posTemp = pos;
            let found = users[i].indexOf(target, pos);
            if (found !== -1) userTemp[j] = users[i].slice(posTemp , found);
            else {
                userTemp[j] = users[i].slice(posTemp);
                break;
            }
            pos = found + 1;
        }
        result[i] = userTemp[2] + " " + userTemp[0].charAt(0) + "." + userTemp[1].charAt(0) + ".";

    }
    return result;
}
console.log(surnameIncials(users));
//END SUBTASK B


//START SUBTASK С
function searchContactByPhone (users, numberPhoneSearch) {
    let result = [];
    let k = 0;
    for (let i = 0; i < users.length; i++) {
        let target = " ";
        let pos = 0;
        let userTemp = [];
        for (let j = 0; ; j++) {
            let posTemp = pos;
            let found = users[i].indexOf(target, pos);
            if (found !== -1) userTemp[j] = users[i].slice(posTemp , found);
            else {
                userTemp[j] = users[i].slice(posTemp);
                break;
            }
            pos = found + 1;
        }
        if (String(userTemp[3]).indexOf(String(numberPhoneSearch)) !== -1) {
            result[k] = userTemp[0] + " " + userTemp[3];
            k++
        }
    }
    return result;
}

let numberPhoneSearch = parseInt(prompt("Введите номер для поиска", 380));

console.log(searchContactByPhone(users, numberPhoneSearch));
//END SUBTASK С


//START SUBTASK D
function searchPhoneTrue (users, numberPhoneSearch) {
    for (let i = 0; i < users.length; i++) {
        let target = " ";
        let pos = 0;
        let userTemp = [];
        for (let j = 0; ; j++) {
            let posTemp = pos;
            let found = users[i].indexOf(target, pos);
            if (found !== -1) userTemp[j] = users[i].slice(posTemp , found);
            else {
                userTemp[j] = users[i].slice(posTemp);
                break;
            }
            pos = found + 1;
        }
        if (userTemp[3] == numberPhoneSearch) return true;
    }
    return false;
}

let numberPhoneSearchTrue = parseInt(prompt("Введите номер для поиска", 380654126881));

console.log(searchPhoneTrue(users, numberPhoneSearchTrue));
//END SUBTASK D






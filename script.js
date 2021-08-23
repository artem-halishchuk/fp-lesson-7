//---------------------------task 1-----------------------------------------------
let words = ["Bilbo", "Gandalf", "Nazgul"]
let numbers = [1, 2, 3, 4];

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

//EVERY
function every(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) return false;
    }
    return true;
}
console.log(every(["11", "11", "10"], (a) => a == "11"));
//EVERY END

//REDUSE START
function reduce (arr, predicate, startValue) {
    let result = startValue + arr[0];// = startValue + arr[0] ;
    for (let i = 0; i < arr.length; i++) {
        result = predicate(arr[i], result);
    }
    return result;
}
console.log(reduce([1, 2, 3, 4], (a, current) => current + a, "A"));
console.log(reduce(words, (sum, current) => current + sum, "plus_"));
//REDUSE END




//------------------------task 2------------------------------------------
let user0 = {
    firstName: "Василий",
    lastName: "Иванов",
    parentsName: "Васильевич",
    phone: "380958326595",
};
let user1 = {
    firstName: "Петр",
    lastName: "Петров",
    parentsName: "Васильевич",
    phone: "380655626491",
};
let user2 = {
    firstName: "Николай",
    lastName: "Столяров",
    parentsName: "Николаевич",
    phone: "380654126881",
};
let user3 = {
    firstName: "Адольф",
    lastName: "Шмыг",
    parentsName: "Спиридонович",
    phone: "380993334181",
};
let users = [user0, user1, user2, user3];

//START A
function matchesFirsLetterName(inValue) {
    let result = inValue.filter(item => item.firstName[0] === item.parentsName[0]);
    return result;
}
console.log(matchesFirsLetterName(users));
//END A

//START B
function transformLastnameInitials(inValue) {
    let result = inValue.map(item => [item.lastName, item.firstName[0], item.parentsName[0]].join(" "));
    //let result = inValue.map(item => item.lastName+" "+item.firstName[0]+"."+item.parentsName[0]+".");
    return result;
}
console.log(transformLastnameInitials(users));
//END B

//START C
function searchPhone(inValue, phone) {
    let result = inValue.filter(item => item.phone.indexOf(phone) === 0)
                        .map(item => [item.lastName, item.phone].join(" - "));
    return result;
}
console.log(searchPhone(users, 38065));
//END C

//START D
function searchPhoneTrue(inValue, phone) {
    let result = inValue.some(item => item.phone == phone);
    return result;
}
console.log(searchPhoneTrue(users, 380993334181));
//END D




//Task 1
function trimString(string, from, to) {
    return string.slice(from, to);
}

console.log(trimString("SLON", 1, 2))


//Task 2
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
    },
};

function colorsString() {
    let red = colors["ru pum pu ru rum"].red;
    let blue = colors["ru pum pu ru rum"].blue;
    console.log(red + " " + blue)
}

colorsString()


//Task 3
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}

function salaryCount() {
    let maxSalaries = 0;
    let sum = 0;
    let keys = Object.keys(salaries);
    for (let i = 0; i < keys.length; i++) {
        maxSalaries = Math.max(maxSalaries, salaries[keys[i]])
        sum += salaries[keys[i]]
    }
    let full = sum / keys.length;
    return "Самая высокая зарплата у " + keys.find(key => salaries[key] === maxSalaries) + " и зарабатывает он  " + maxSalaries + "$" + "\n Общаая зарплата всех сотрудников: " + full + "$";
}

console.log(salaryCount());


//Task 4
let userData = {
    userLogin: "",
    userPassword: "",
    confirmedLogin: "",
    confirmedPassword: ""
};
userData.userLogin = prompt("Введите ваш логин");
userData.userPassword = prompt("Введите пароль");
userData.confirmedLogin = prompt("повторите ваш логин");
userData.confirmedPassword = prompt("Повторите ваш пароль");
if (userData.userLogin === userData.confirmedLogin && userData.userPassword === userData.confirmedPassword && userData.userPassword && userData.userLogin && userData.confirmedLogin && userData.confirmedPassword !== null) {
    alert("Добро пожалоВать!")
} else {
    alert("логин или пароль не совпадают")
}
console.log(userData);


// ADVANCED
// level
// Task 1
const money = prompt("введите баланс вашей карты в $");
const phonePrice = 100;
const accessory = 10;
const tax = 2;
const buyPrice = phonePrice + accessory;

function buyingPhones() {
    let howPhones = 0;
    if (money >= buyPrice + tax) {
        for (; (buyPrice + tax) * (howPhones + 1) <= money; howPhones++) {

        }
    } else {
        alert("У вас не достаточно средств")
    }
    return howPhones;
}

console.log("вы купили " + buyingPhones() + " телефонов")

function sumMoneyShopPhones() {
    let sumMoney = buyingPhones() * (buyPrice + tax);
    return sumMoney.toFixed(2)
}

function sumTax() {
    let sumTax = buyingPhones() * tax;
    return sumTax;
}

const restMoney = money - sumMoneyShopPhones();

console.log("Цена за все телефоны c налогом составила: " + sumMoneyShopPhones() + "$" + " на вашей карте осталось: " + restMoney + "$" + " Сумма налога составила: " + sumTax() + "$")


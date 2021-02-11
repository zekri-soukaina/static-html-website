"this first file test "

console.log("hello world");


const isTodaySunny = false;
const isDayLight = true;

// const isItNight = false;

//terrayss  assigning a vairabel
const weatherMessage = isTodaySunny //condition
    ?
    "have a nice sunny day" //if its true
    :
    "dont forget your umbrella"; //if its not true


console.log(weatherMessage);

//if else

if (isDayLight && !isTodaySunny) { //if (isTodaySunny && !isItNight)
    console.log("have a nice sunny day");
} else {
    console.log("stay inside");
}
//object 
const me = {
    firstName: " soukaina",
    lastName: "zekri",
    age: 28,
    height: 1.66,
};
console.log(`${me.firstName} is :`, me.age);

const monday = {
    name: "Monday",
    dayOfWeek: 1,
    weather: "fine",
    work: true,
};
const tuesday = {
    name: "tuesday",
    dayOfWeek: 2,
    weather: "sunny",
    work: true,
};
const wednesday = {
    name: "wednesday",
    dayOfWeek: 3,
    weather: "rainy",
    work: true,
};
const thursday = {
    name: "thursday",
    dayOfWeek: 4,
    weather: "cloudy",
    work: true,
};
const friday = {
    name: "friday",
    dayOfWeek: 5,
    weather: "snow",
    work: true,
};

//array is a list 
const weekNames = ["monday", "tuesday", "wednesday", "thursday", "friday"];
console.log(`day 3 is:`, weekNames[2]);
console.log("how long is the week", weekNames.length);


// Array of objects
const week = [monday, tuesday, wednesday, thursday, friday];
console.log("my week array", week);

// loop
for (let i = 0; i < 5; i++) {
    console.log(`day ${i+1} of the week is :`, week[i].name);
}

// function
function weatherForTheWholeWeek() {
    for (let i = 0; i < 5; i++) {
        console.log(`weather for ${week[i].name} is going to be :`, week[i].weather);

    }
}
weatherForTheWholeWeek();

function weatherForSpecificDay(dayNum) {
    if (dayNum > week.length || dayNum <= 0) {
        console.log("Pick a day between 1 and 5 to get your result");
        return null;
    }
    const dayOfWeek = week[dayNum - 1];
    const weather = dayOfWeek.weather;
    console.log(`weather for ${dayOfWeek.name}:`, weather);


}
weatherForSpecificDay(0);
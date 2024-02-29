const d = new Date();


//time
let Hours = d.getHours();
document.getElementById("Hours").innerHTML = Hours + ":";

let Minutes = d.getMinutes();
document.getElementById("Minutes").innerHTML = Minutes + ":";

let Seconds = d.getSeconds();
document.getElementById("Seconds").innerHTML = Seconds + ":";
//ampm
if (Hours <= 12) {
    document.getElementById("ampm").innerHTML = "am";
} else {
    document.getElementById("ampm").innerHTML = "pm";
}



//date

let day = ["sunday", "monday", "tuesdat", "Wensday", "thursday", "friday", "seturday"]

let a = day[d.getDay()];
document.getElementById("days").innerHTML = a + ",";


let month = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nev", "dec"]

let b = month[d.getMonth()];
document.getElementById("months").innerHTML = b;

let date = d.getDate();
document.getElementById("date").innerHTML = date;

let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
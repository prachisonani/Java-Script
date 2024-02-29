const d = new Date();

//https://codepen.io/eddyerburgh/pen/yOjdqo
//time
let Hours = d.getHours();
document.getElementById("Hours").innerHTML = Hours;

let Minutes = d.getMinutes();
document.getElementById("Minutes").innerHTML = Minutes;

let Seconds = d.getSeconds();
document.getElementById("Seconds").innerHTML = Seconds;
//ampm
if (Hours <= 12) {
    document.getElementById("ampm").innerHTML = "am";
} else {
    document.getElementById("ampm").innerHTML = "pm";
}



//date

let day = ["Sunday", "Monday", "Tuesday", "Wednseday", "Thursday", "Friday", "Saturday"]

let a = day[d.getDay()];
document.getElementById("days").innerHTML = a + ",";


let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nev", "Dec"]

let b = month[d.getMonth()];
document.getElementById("months").innerHTML = b;

let date = d.getDate();
document.getElementById("date").innerHTML = date;

let year = d.getFullYear();
document.getElementById("year").innerHTML = year;


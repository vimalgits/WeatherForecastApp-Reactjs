import weather from "./weather.js";
let currCity = "noida"
const searchInput = document.getElementById("inputnm");
document.getElementById("inputnm").value = currCity;

weather(currCity);
function weatherbtnclick() {
    currCity = searchInput.value;
    weather(currCity);
    return false;
}
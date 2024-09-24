export default async function weather(currCity) {
    const res = await fetch("https://api.weatherapi.com/v1/current.json?key=641e8c8183b84a2b86b184734231710&q=" + currCity + "&aqi=no#&units=metric");
    var data = await res.json();
    console.log(data);
    console.log(data.current.temp_c);
    document.getElementById("citynm").innerHTML = data.location.name;
    document.getElementById("tempinC").innerHTML = data.current.temp_c + " °C";
    document.getElementById("tempinF").innerHTML = data.current.temp_f + " °F";


}


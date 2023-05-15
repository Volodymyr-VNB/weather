
let weatherWeb = document.querySelector('.weather');
let getCity = "";
let client = document.createElement("div");
let clientInput = document.createElement("input");
let button =  document.createElement("button");

weatherWeb.appendChild(client); 
client.append(clientInput,button);

client.className= "client line";
clientInput.className= "clientItem";
clientInput.placeholder = "назва міста, індекс";
clientInput.value = "Харків"
button.className= "button";
button.textContent="OK";
// button.onclick = win();
let h1 = document.createElement ("h1");
        let p1 = document.createElement ("p");
        let p2 = document.createElement ("p");
        let p3 = document.createElement ("p");
        let p4 = document.createElement ("p");
        let p5 = document.createElement ("p");
        let p6 = document.createElement ("p");
        let p7 = document.createElement ("p");
        let p8 = document.createElement ("p");
        let p9 = document.createElement ("p");
        let p10 = document.createElement ("p");
        let p11 = document.createElement ("p");
        
        let div1 = document.createElement ("div");
        let div2 = document.createElement ("div");
        let div3 = document.createElement ("div");
        let div4 = document.createElement ("div");
        let div5 = document.createElement ("div");
        let div6 = document.createElement ("div");
        let div7 = document.createElement ("div");
        let div8 = document.createElement ("div");
        let line2 = document.createElement ("div");
        let wind = document.createElement ("div");
        let winddirection = document.createElement ("div");
        
        div1.className = "icon";
        div2.className = "city";
        div3.className = "cityBlok";
        div4.className = "termometr line";
        div5.className = "vice line";
        div6.className = "row";
        div7.className = "vologist line";
        div8.className = "vidimost line";
        line2.className = "line2 line";
        wind.className = "wind line";
        
        winddirection.className = "winddirection line";

        p1.className = "khmarno";
        let icon_bagr ="";
      
        div1.append(p1,p11);
        div4.append(p2, p3);
        div6.append(div4, div5, div7 , div8);
        div5.append(p4, p5);
        div7.append(p6);
        div8.append(p7);
        line2.append(wind,winddirection);
        wind.append(p8, p10);
        winddirection.append(p9);
        weatherWeb.append (div3, div6, line2);
        div3.append (div2, h1 , div1)




 let addCity = document.querySelector(".button");
 
 
async function win(){
    if (getCity === "") { getCity = 'Золочів';} 
    else 
        {console.log("==", getCity ,"==") };
     
    let cityHttp =`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&lang=UA&APPID=5d066958a60d315387d9492393935c19`;
    // http://api.openweathermap.org/data/2.5/forecast?q=${getCity}&units=metric&lang=UA&APPID=5d066958a60d315387d9492393935c19
    // http://api.openweathermap.org/data/3.0/onecall?q=хАРКІВ&units=metric&lang=UA&APPID=5d066958a60d315387d9492393935c19
    console.log("+++", cityHttp ,"==")
    let response = await fetch(cityHttp);
    
    return response;
}

addCity.addEventListener("click", getInput2 );

function getInput2 () {
getCity = document.querySelector('.clientItem').value;
console.log("main",getCity);

win()
    .then((data) => data.json())
    .then((items) => {
        // console.log(items);
        
        h1.innerHTML =`${items.name} <br>  ${items.coord.lon}, ${items.coord.lat}  `;
        for (const iterator of items.weather) {
            p1.innerHTML = iterator.description; 
            icon_bagr = "url(https://openweathermap.org/img/w/"+iterator.icon+".png)";
            div1.style.backgroundImage = icon_bagr;
        }
        p2.innerHTML = `${items.main.temp}&#176; `; 
        p3.innerHTML = `відчувається як  ${items.main.feels_like}`; 
        p4.innerHTML = `&#8593; землі, гПа  ${items.main.grnd_level}`; 
        p5.innerHTML = `&#8595; моря, гПа  ${items.main.sea_level}`; 
        p6.innerHTML = `${items.main.humidity}%`; 

        p7.innerHTML = `${items.visibility} м.`; 
        p8.innerHTML = `${items.wind.speed} м/с`; 
        p9.innerHTML = `Напрямок вітру, градуси (метеорологічний)  ${items.wind.deg}`; 
        p10.innerHTML = `пориви ${items.wind.gust}м/с`; 
        p11.innerHTML = `Хмарність ${items.clouds.all}% `; 
    });    

}
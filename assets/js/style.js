// document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

// document.querySelector('body').addEventListener('click', deleteLocation);

// function getLocationInfo(e) {
//     const zip = document.querySelector('.zip').Value;

//     fetch(`http://api.zippopotam.us/us/${zip}`)
//         .then(response => {
//             if (response.status != 200) {
//                 document.querySelector(`#output`).innerHTML = `<articl class="message is-danger"><div class="message-body">Invalid Zipcode, please try again</div></article>`;
//                 throw Error(response.statusText);
//             } else {
//                 return response.json();
//             }
//         })
//         .then(data => {
//             let output = '';
//             data.places.forEach(place => {
//                 output += `<article class="message is-primary">
//                 <div class="message-header">
//                 <P>Location Info</p> 
//                 <button class="delete"></button>
//                  </div>
//                   <div class="message-body">
//                    <ul>
//                     <li><strong>City: </strong>${place['place name']} </li> 
//                      <li><strong>State: </strong>${place['state']} </li> 
//                       <li><strong>Longitude: </strong>${place['longitude']} </li> 
//                        <li><strong>Latitude: </strong>${place['latitude']} </li>
//                         </ul>
//                          </div>
//                          </article>`;
//             });

//             document.querySelector('#output').innerHTML = output;
//         })
//         .catch(err => console.log(err));

//     e.preventDefault();
// }

// function showIcon(icon) {
//     document.querySelector('.icon-remove').style.display = 'none';
//     document.querySelector('.icon-check').style.display = 'none';
//     document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
// }

// function deleteLocation(e) {
//     if (e.target.className == 'delete') {
//         document.querySelector('.message').remove();
//         document.querySelector('.zip').value = '';
//         document.querySelector('.icon-check').remove();
//     }
// }



// amazon ///////////////////////////////////////////////////////////////////////////////



// const dropdownbtn = document.querySelectorAll(".dropdownbtn")
// const dropdownbox = document.querySelectorAll(".dropdownbox")



// dropdownbtn.forEach((dropb,index)=>{
//     dropb.addEventListener("mouseover",()=>{

//         dropdownbox[index].classList.remove("active")
//     })
//     dropb.addEventListener("mouseout",()=>{

//         dropdownbox[index].classList.add("active")
//     })
// })


//// school /////////////////////////////////////////////////////////////////////////////

// const menu = document.querySelector("#mobile-menu");
// const menulinks = document.querySelector(".navbar-menu");

// //display mobile menu
// const mobilmenu = ()=>{
//     menu.classList.toggle("is-active")
//     menulinks.classList.toggle("active")

// }
// menu.addEventListener("click", mobilmenu)





// // slide image js start  
// let slideIndex = [1];
// let slideId = ["mySlides1"]
// showSlides(1, 0);
// // show

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }
// // slide image js end  


//// weather /////////////////////////////////////////////////////

const apiKey = "97ed86b99fdcf738c7a080e0fa9fde20";
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    alert("City not found! Please try again.");
    return;
  }
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/7774/7774417.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src = "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png";
  }

  // Clear input box after search
  searchBox.value = "";
}


searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

// Add Enter key support
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();  // simulate button click
  }
});

// Default city
checkWeather("Delhi");

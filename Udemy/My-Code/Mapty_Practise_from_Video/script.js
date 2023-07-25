'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// *Code Starts From Here...
  
//? Unchanged

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position){
        // console.log(position);
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        // console.log(latitude, longitude);
        // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        
        const coords = [latitude, longitude];
        const map = L.map('map').setView(coords, 18);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Got removed as it works as a blip

        // L.marker(coords) // Or L.marker([latitude, longitude]) could be used
        // .addTo(map)
        // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        // .openPopup();

        map.on('click', function(mapEvent) {
            // console.log(mapEvent);

            const {lat, lng} = mapEvent.latlng;
            // console.log(lat, lng);

            L.marker([lat, lng])
            .addTo(map)
            .bindPopup('Pin')
            .openPopup();
        });
    },
     function(){
    alert("Location not found");
    });
};


//? Changed

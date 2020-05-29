
 (function(){   

     'use strict';
    /**Esto es un mapa estilo google maps */
    document.addEventListener('DOMContentLoaded', function(){
        if(document.querySelector( '#mapa' )){
            var map = L.map('mapa').setView([19.48314, -99.245703], 16);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([19.48314, -99.245703]).addTo(map)
            .bindPopup('Gimnasio acatlan')
            .openPopup();
            }
            
    });
    console.log("Hola mundo");
})();
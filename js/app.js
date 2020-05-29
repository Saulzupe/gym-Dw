(function(){   

    'use strict';
   document.addEventListener('DOMContentLoaded', function(){
       if(document.querySelector( '#c-pick' )){
          
        var poblacion = [
            {Region:'GYM',       Actividad: 'Taekwondo', Cantidad: 4 },
            {Region:'GYM',       Actividad: 'Pesas',     Cantidad: 41 },
            {Region:'GYM',       Actividad: 'Aereobics', Cantidad: 316 },
            {Region:'Airelibre', Actividad: 'Football',  Cantidad: 47 },
            {Region:'Airelibre', Actividad: 'Americano', Cantidad: 66 },
            {Region:'Airelibre', Actividad: 'Animacion', Cantidad: 80 },
     ];
 
     var pobActi_keys    = poblacion.map(function(x){return x.Actividad});
     var pobActi_Values  = poblacion.map(function(x){return [x.Actividad, x.Cantidad]; });
 
     var charPie = c3.generate({
         bindto: '#c-pick',
         data: {
             columns : pobActi_Values,
             keys    : pobActi_keys,
             type    : 'pie',
             color   : function(color, d){
                 var actividad = (d.id) ? d.id : d;
                 return (actividad == 'Taekwondo' ? '#FFC400' : color);
             }  
         }
     });
 
     var data1 = {
         x: [1, 2, 3, 4],
         y: [1, 2, 3, 4],
         type: 'lines',
         name:'Datos 1',
         line:{ width: 5, color:'red',dash:'solid'},
         marker:{ size: 10, color:'blue'}
       };
       
       var data = [data1];
       
       Plotly.newPlot('chart', data,{title:'Grafica de Ejemplo con Plot.ly'});
           }
           
   });


   /**Ploty */
   
   

})();
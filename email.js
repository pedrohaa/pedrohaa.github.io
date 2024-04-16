$(document).ready(function(){ 
   var user = "pedro.azevedo.de.amorim";
    var domain = "cs.ox.ac.uk";

    var em = user + "@" + domain;
    console.log(em);
    $( ".email" ).append(em);
});

$(document).ready(function(){ 
    var user = "pedro.azevedodeamorim";
    var domain = "cs.ox.ac.uk";
    
    var em = user + "@" + domain;
    console.log(em);
    $( ".email" ).append(em);
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

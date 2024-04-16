$(document).ready(function(){ 
   var user = "pamorim";
    var domain = "cs.cornell.edu";

    var em = user + "@" + domain;
    console.log(em);
    $( ".email" ).append(em);
});

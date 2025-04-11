var toggled = false;

$(document).ready(function(){ 
    if(window.matchMedia){
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            darkMode();
        }
    }
    var user = "pedro.azevedodeamorim";
    var domain = "cs.ox.ac.uk";
    
    var em = user + "@" + domain;
    //console.log(em);
    $( ".email" ).append(em);
});

function switchColor(fragment, color1, color2){
    for (var i = 0; i < fragment.length; i++){
        if (!toggled) {
            fragment[i].style.color = color1;
        }
        else{
            fragment[i].style.color = color2;
        }
    }
}

function switchBackground(fragment, color1, color2){
    for (var i = 0; i < fragment.length; i++){
        if (!toggled) {
            fragment[i].style.background = color1;
        }
        else{
            fragment[i].style.background = color2;
        }
    }
}

var moleskinePaperColor = "#FDF6E3";
var cornellRed = "#B31B1B";
var zenburnBackground = "#3f3f3f";
var black = "#000000";
var zenburnBlue = "#8CD0D3";

function darkMode() {

    console.log(window.matchMedia('(prefers-color-scheme:dark)'));
    
    //Switch font color
    var paragraph = document.getElementsByTagName("p");
    switchColor(paragraph, moleskinePaperColor, black);

    var links = document.getElementsByTagName("a");
    switchColor(links, zenburnBlue, cornellRed);

    var email = document.getElementsByClassName("email");
    switchColor(email, moleskinePaperColor, black);

    var papers = document.getElementsByClassName("papers");
    switchColor(papers, moleskinePaperColor, black);

    var myheader = document.getElementsByClassName("myheader");
    switchColor(myheader, moleskinePaperColor, black);

    var mysubheader = document.getElementsByClassName("mysubheader");
    switchColor(mysubheader, moleskinePaperColor, black);

    //Switch background color
    var row = document.getElementsByClassName("row");
    switchBackground(row, zenburnBackground, moleskinePaperColor);
    
    toggled = !toggled;
    //element.classList.toggle("dark-mode");
}

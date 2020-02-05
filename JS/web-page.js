


var projectsname = prompt('how many projects do you know?');
console.log(projectsname);
var interact;

if (projectsname = 4 ) {
    interact = 'good job' ;
}

else if (projectsname >= 5 ) {
    interact = 'wow, very good!' ;
}

document.write('<h3>'+interact+'</h3>');


var architects = prompt('how many architects do you know?');
console.log(architects);
var respond;

if (architects = 4 ) {
respond = 'good job' ;
}

else if (architects >= 5 ) {
respond = 'wow, very good!' ;
}


document.write('<h2>'+respond+'</h2>');



var survey = prompt('on a scale of 10 how much you are enjoying the website?');
console.log(survey);
var thanking;
    
if (survey >= 8 ) {
thanking = 'Thank you very much!' ;
}
    
else if (survey >= 5 && survey<= 7 ) {
thanking = 'Thank you!' ;
}
    
else if ( survey <= 4 ) {
thanking = 'Thank you, hope you enjoy next time'
}

document.write('<h1>'+thanking+'</h1>');

'use strict';

document.querySelector('.navbar img').addEventListener('click' , function(){


    document.querySelector('.content').style.visibility = 'visible';
    document.querySelector('.profile').style.visibility = 'hidden';
    document.querySelector('.resume').style.visibility = 'hidden';
    document.querySelector('.certificate').style.visibility = 'hidden';

})

document.querySelector('.profile-button').addEventListener('click' , function(){

    document.querySelector('.profile-button').style.borderBottom ='solid';
    document.querySelector('.resume-button').style.borderBottom ='none';
    document.querySelector('.certificate-button').style.borderBottom ='none';


    document.querySelector('.content').style.visibility = 'hidden';
    document.querySelector('.profile').style.visibility = 'visible';
    document.querySelector('.resume').style.visibility = 'hidden';
    document.querySelector('.certificate').style.visibility = 'hidden';

})

document.querySelector('.resume-button').addEventListener('click', function(){

    document.querySelector('.resume-button').style.borderBottom ='solid';
    document.querySelector('.profile-button').style.borderBottom ='none';
    document.querySelector('.certificate-button').style.borderBottom ='none';


    document.querySelector('.content').style.visibility ='hidden';
    document.querySelector('.profile').style.visibility ='hidden';
    document.querySelector('.resume').style.visibility = 'visible';
    document.querySelector('.certificate').style.visibility = 'hidden';

})

document.querySelector('.certificate-button').addEventListener('click', function(){

    document.querySelector('.resume-button').style.borderBottom ='none';
    document.querySelector('.profile-button').style.borderBottom ='none';
    document.querySelector('.certificate-button').style.borderBottom ='solid';


    document.querySelector('.content').style.visibility ='hidden';
    document.querySelector('.profile').style.visibility ='hidden';
    document.querySelector('.resume').style.visibility = 'hidden';
    document.querySelector('.certificate').style.visibility = 'visible';

})
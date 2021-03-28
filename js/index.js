console.log("your index.js file has loaded correctly!")

document.documentElement.style.setProperty('--animate-duration', '2s');



window.addEventListener('scroll', function(e){
    const target = document.querySelectorAll('.scroll');
    
    /*console.log(target.style);*/

    /*target.style.transform = 'translate3d(0px, 150px, 0px)'*/
    
    /*console.log(window.pageYOffset);*/

    var scrolled = window.pageYOffset;
    /*var rate = scrolled * 0.5;

    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';*/

    var index = 0, length = target.length;
    for(index; index < length; index++){
        var pos = window.pageYOffset * target[index].dataset.rate;
       
        if(target[index].dataset.direction === 'verticle'){

        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';

    }
    };
    
});
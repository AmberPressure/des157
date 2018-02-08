document.addEventListener('DOMContentLoaded', function() {
    console.log('reading script');

    //capture images into variables
    var laptop = document.getElementById('laptop');
    var bottle = document.getElementById('bottle');
    var book = document.getElementById('book');
    //capture closing variables
    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');
    var close3 = document.getElementById('close3');

    //laptop hover event listener
    laptop.addEventListener('mouseover', function() {
        laptop.style.opacity = 1;
        laptop.src = 'images/laptop.png';
    });
    //laptop mouseout event listener
    laptop.addEventListener('mouseout', function() {
        laptop.style.opacity = 0;
        laptop.src = 'images/laptop.png';
    });
    //laptop click
    laptop.addEventListener('click', function() {
        laptopInfo.style.opacity = 1;
    });
    //close info
    close1.addEventListener('click', function() {
        laptopInfo.style.opacity = 0;
    });

    //bottle hover event listener
    bottle.addEventListener('mouseover', function() {
        bottle.style.opacity = 1;
        bottle.src = 'images/bottle.png';
    });
    //bottle mouseout event listener
    bottle.addEventListener('mouseout', function() {
        bottle.style.opacity = 0;
        bottle.src = 'images/bottle.png';
    });
    //bottle click
    bottle.addEventListener('click', function() {
        bottleInfo.style.opacity = 1;
    });
    //close info
    close2.addEventListener('click', function() {
        bottleInfo.style.opacity = 0;
    });

    //book hover event listener
    book.addEventListener('mouseover', function() {
        book.style.opacity = 1;
        book.src = 'images/book.png';
    });
    //book mouseout event listener
    book.addEventListener('mouseout', function() {
        book.style.opacity = 0;
        book.src = 'images/book.png';
    });
    //book click
    book.addEventListener('click', function() {
        bookInfo.style.opacity = 1;
    });
    //close info
    close5.addEventListener('click', function() {
        bookInfo.style.opacity = 0;
    });

});

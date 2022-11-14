// 1. Change the span with the class `mess-with-me` to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)

let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";

// 2.  Change the paragraph with the class `mess-with-me` to have a background color of green.


// tag.classname grabs the first instance of thattag with the className

let paraMess = document.querySelector('p.mess-with-me');

paraMess.style.background = "green";

// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

let hiddenDino = document.querySelector("#hide-me");
hiddenDino.style.display = 'none';
// hiddenDino.style.opacity = '0';

// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstDino = document.querySelector("#triceratops");
firstDino.style.width = '324px'

// EVENT LISTENERS

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

spanMess.addEventListener('click', function(){

    spanMess.style.color = "orange";
});

// 2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red';

})

// 3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

firstDino.addEventListener('click', function(){
    firstDino.style.feather = '10px';

})


// 4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

let row = document.addEventListener('#row');
let switchColorButton = document.querySelector('#toggle');

switchColorButton.addEventListener('click', function(){
    console.log('TESTING BUTTON!')

    if(row.style.background ==='white'){
        row.style.background = "purple";
    }else if(row.style.background ==="purple")
        row.style.background = "";

})


// 5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!



'use strict';

let musicArray = ["Beyonce", "Green Day", "Nirvana", "Britney Spears"];

$(document).readdy(function() {
    for (let i = 0; i < musicArray.lenth; i++) {
        $("music-buttons").append("<button type='button' onclick='searchGif(\"" + musicArray[i] + "\" class='btn btn-primary' value=' " + musicArray[i] + "'> " + musicArray[i] + " </button>");
    }
});

//function 
function musicButtonClick() {
    let userInput = $('#music-input').val();
    searchGif(userInput);
}

//ADD FUNCTION FOR SUBMIT BUTTON

//ajax function to pull search results from api
function searchGif(gifName) {
    const queryURL = 'http://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=2VIPcfUXYNtkRHNHc3wJD7ecxfnVY2nx';
    $.ajax({
        url: queryURL,
        type: 'GET',
    })
    .done(function(response) {
        //console.log(response);
        displayGif(response);
    })
}

//GET RATINGS DISPAYED
//APPEND IMAGE TO HTML
// USE .ON CLICK TO MAKE GIFS MOVE WHEN CLICKED

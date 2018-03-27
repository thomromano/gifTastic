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
function submitButton() {
    let userInput = $('#music-input').val();
    if (userInput) {
        $('#music-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value='" + userInput + "'> " + userInput + "</button>");
    }
}
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

function displayGif(response) {
    $('#musicians').empty();
    for(let i = 0; i < response.data.length; i++) {
        let rating = "<div class='rating'> Rating: "+ (response.data[i].rating) + "</div>";
        let image = rating + '<img src= "' + response.data[i].images.fixed_height_still.url + '"data-still="' + response.data[i].images.fixed_height_still.url + '"data-animate"' + response.data[i].images.fixed_height.url + '"data-state="still" class="movImage" style="width:250px; height:250px">';
    
    image = '<div class="col-md-4">' + image + "</div>";
    $('#musicians').apppend(image);
    }
}

$('.movImage').on('click', function() {
    let state = $(this).attr('data-state');
    if (state === 'still') {
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', 'still');
    }
    
});




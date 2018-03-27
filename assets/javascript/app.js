'use strict';

$(document).ready(function () {

            $('button').on('click', function () {
                        let music = $(this).data('name');
                        let queryURL = 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=2VIPcfUXYNtkRHNHc3wJD7ecxfnVY2nx';

                        $.ajax({
                                url: queryURL,
                                //url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=2VIPcfUXYNtkRHNHc3wJD7ecxfnVY2nx',
                                method: 'GET',
                            })
                            .done(function (response) {
                                //console.log(response)
                                let results = response.data;
                                for (let i = 0; i < results.length; i++) {
                                    let musicDiv = $('<div/>');
                                    let musicP = $('<p/>');
                                    musicP.text(results[i].rating);
                                    var musicImage = $('<img/>');

                                    musicImage.addClass('Img')

                                    musicImage.attr('src', results[i].images.fixed_height.url);

                                    musicImage.attr('data-still', results[i].images.fixed_height_still.url)

                                    musicImage.attr('data-animate', results[i].images.fixed_height.url)

                                        .attr('data-state', 'still');

                                    musicDiv.append(p);

                                    musicDiv.append(musicImage);

                                    musicDiv.prependTo($('#gifs'));

                                

                    //gif annimate when clicked
                    $('.movImage').on('click', function () {
                        let state = $(this).attr('data-state');
                        if (state === 'still') {
                            $(this).attr('src', $(this).attr("data-animate"));
                            $(this).attr('data-state', 'animate');
                        } else {
                            $(this).attr('src', $(this).attr("data-still"));
                            $(this).attr('data-state', 'still');
                        }

                    });

                    let music = ['']
                    //ADD FUNCTION FOR SUBMIT BUTTON
                    function submitButton() {
                        let userInput = $('#music-input').val();
                        if (userInput) {
                            $('#music-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value='" + userInput + "'> " + userInput + "</button>");
                        }
                        // $('#add-music').on('click', function () {
                        //             let musicButton = $("#music-input").val();

                        //             let newButton = $("<button/>").addClass("btn btn-info music").attr("data-name", musicButton).html(musicButton).css({
                        //                g
                        //             });
                        //             $("#musicButtons").append(newButton);
                        //         }

                        //             function musicButtonClick() {
                        //                 let userInput = $('#music-input').val();
                        //                 searchGif(userInput);
                        //             }

                        //             
                        //             }


                        //             function displayGif(response) {
                        //                 $('#musicians').empty();
                        //                 for (let i = 0; i < response.data.length; i++) {
                        //                     let rating = "<div class='rating'> Rating: " + (response.data[i].rating) + "</div>";
                        //                     let image = rating + '<img src= "' + response.data[i].images.fixed_height_still.url + '"data-still="' + response.data[i].images.fixed_height_still.url + '"data-animate"' + response.data[i].images.fixed_height.url + '"data-state="still" class="movImage" style="width:250px; height:250px">';

                        //                     image = '<div class="col-md-4">' + image + "</div>";
                        //                     $('#musicians').apppend(image);
                        //                 }
                        //             }
                        //         })
                        // })


                        // //try something different
                        // let musicArray = [""];

                        // $(document).ready(function () {
                        //     for (let i = 0; i < musicArray.lenth; i++) {
                        //         $("#music-buttons").append("<button type='button' onclick='searchGif(\"" + musicArray[i] + "\" class='btn btn-primary' value=' " + musicArray[i] + "'> " + musicArray[i] + " </button>");
                        //     }
})
                                });

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    function handleSuccess(game) {
        for (i = 0; i < game.length; i++) {
            $('#listview').append( `<li> Game: ${game[i].title}, Avatar: ${game[i].avatar}</li>`);
        }
    }

    function  handleError() {
        console.log('something went wrong');
        $('#listview').text('Failed to load books, is the server working?');
    }

    //Read all Videogames
    $.ajax({
        method: 'GET',
        url: '/api/games',
        success: handleSuccess,
        error: handleError
    })

});

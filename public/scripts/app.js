console.log("Sanity Check: JS is working!");
let allGames = [];
let $gameList;

$(document).ready(function(){
    $gameList = $('#game-list');

    //list all games on index page
    function gameListSuccess(game) {
        for (i = 0; i < game.length; i++) {
            $('#game-list').append( `<li> Game: ${game[i].title}, Avatar: ${game[i].avatar}</li>`);
        }
    }

    function gameListError() {
        console.log('something went wrong');
        $('#game-list').text('Failed to load books, is the server working?');
    }

    $.ajax({
        method: 'GET',
        url: '/api/games',
        success: gameListSuccess,
        error: gameListError
    });

    //HTML to append when new game is added
    function getGameHtml(game) {
        return `<p>${game.title}, ${game.avatar}</p>`;
    }

    //maps through array of games and returns it as a string
    function getAllGamesHtml(games) {
        return games.map(getGameHtml).join("");
    }

    //renders all new games to index page
    function render () {
        $gameList.empty();
        let gameHtml = getAllGamesHtml(allGames);
        $gameList.append(gameHtml);
    }

    //create a new game
    function newGameSuccess(json) {
        $('#game-form input').val('');
        allGames.push(json);
        render();
    }

    function newGameError() {
        console.log('There was an error with adding a new game.');
    }

    $('#game-form').on('submit', function(e){
        e.preventDefault();
        console.log('you clicked');
        $.ajax({
            method: 'POST',
            url: '/api/games',
            data: $(this).serialize(),
            success: newGameSuccess,
            error: newGameError
        });
    });

});

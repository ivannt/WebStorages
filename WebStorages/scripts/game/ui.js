
define(['lib/jQuery'], function () {
    'use strict';

    var ui = (function () {
        function getGivenNumber() {
            var $num = $('#input').val();
            $('#input').val('');

            return $num;
        }

        function fillHighScores(scores) {
            var scoreUl = $('#highScoresUl');

            //remove undefined values
            for (var i = 0; i < scores.length; i++) {
                if (typeof (scores[i]) == 'undefined') {
                    scores = scores.slice(0, [i]);
                    break;
                }
            }

            var len = scores.length;

            for (var i = 0; i < (len < 10 ? len : 10) ; i++) {
                var currentLi = $('<li>').attr('id', 'score' + [i]);
                currentLi.html((i + 1) + '. ' + scores[i].name + ' ,score: ' + scores[i].score);
                scoreUl.append(currentLi);
            }
        }

        function getPlayerName() {
            return prompt('Enter your Name: ', 'Anonymous');
        }

        function finalMessage(moves) {
            alert('You won !!! in' + moves + ' moves!');
        }

        function showCurrentResult(result) {
            var triesUl = $('#numbersUl'),
                currentLi = $('<li>');

            currentLi.html(result.givenNum + ' : ');

            for (var i = 0; i < result.ram; i++) {
                var ramImg = $('<img>').attr('src', '../../styles/images/ram1.gif');
                currentLi.append(ramImg);
            }

            for (var i = 0; i < result.sheep; i++) {
                var sheepImg = $('<img>').attr('src', '../../styles/images/sheep1.gif');
                currentLi.append(sheepImg);
            }

            triesUl.append(currentLi);
        }

        return {
            getGivenNumber: getGivenNumber,
            fillHighScores: fillHighScores,
            getPlayerName: getPlayerName,
            finalMessage: finalMessage,
            showCurrentResult: showCurrentResult
        }

    })();

    return ui;
})
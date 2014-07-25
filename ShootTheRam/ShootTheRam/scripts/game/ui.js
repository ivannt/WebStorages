///<reference path="../libs/jQuery.js" />

define(['lib/jQuery'], function (ivan) {
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
                if (typeof (scores[i]) === 'undefined') {
                    scores = scores.slice(0, [i]);
                    break;
                }
            }

            var len = scores.length;

            for (var i = 0; i < (len < 10 ? len : 10) ; i++) {
                var currLi = $('<li>').attr('id', 'moves' + [i]);
                currLi.html((i + 1) + '. ' + scores[i].name + ' , moves: ' + scores[i].score);
                scoreUl.append(currLi);
            }
        }

        function getNickname() {
            return prompt('Enter Your Name: ', 'Anonymous');
        }

        function finalMessage(moves) {
            alert('You win whit ' + moves + ' guesses!');
        }

        function showCurrentResult(result) {
            var triesUl = $('#numbersUl'),
                $currLi = $('<li>');

            $currLi.html(result.givenNum + ' : ');

            for (var i = 0; i < result.ram; i++) {
                var ramImg = $('<img>').attr('src', '../images/ram1.gif');
                $currLi.append(ramImg);
            }

            for (var i = 0; i < result.sheep; i++) {
                var sheepImg = $('<img>').attr('src', '../images/sheep1.gif');
                $currLi.append(sheepImg);
            }

            triesUl.append($currLi);
        }

        return {
            getGivenNumber: getGivenNumber,
            fillHighScores: fillHighScores,
            getNickname: getNickname,
            finalMessage: finalMessage,
            showCurrentResult: showCurrentResult
        }

    })();

    return ui;
})
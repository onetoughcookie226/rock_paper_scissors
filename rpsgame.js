$(document).ready(function () {
    //arrays of weapens
    var weapons = ['rock', 'paper', 'scissors'];

    //Apply animated shake class to the fists. declare the functions
    function leftFistShake() {
        $("#left-fist").addClass("animated shake") ;
    }
    function rightFistShake() {
        $("#right-fist").addClass("animated shake");
    }
    //click on buttons and both fists shake

    $(".buttons").click(function() {
        leftFistShake.call(this);
        rightFistShake.call(this);
    });

    // Declaring function to hide right-fist and left-fist
    function rightFistResult() {
        $("#right-fist").css('display','none');
        $("#left-fist").css('display','none');
    }

    //Display rightFistResult
    function rightFistResultPaper() {
        $("#result-right-paper").css('display', 'inline-block');
    }

    function rightFistResultRock() {
        $("#result-right-rock").css ('display', 'inline-block');
    }

    function rightFistResultScissors() {
        $("#result-right-scissors").css ('display', 'inline-block');
    }

  //when paper is selected, shake right-fist, hide right-fist, display paper

    $("#paper").click(function() {
        setTimeout(function () {rightFistResult.call(this)}, 2000);
        setTimeout(function() {rightFistResultPaper.call(this)}, 2000);
    });

    $("#rock").click(function() {
        setTimeout(function() {rightFistResult.call(this)}, 2000);
        setTimeout(function () {rightFistResultRock.call(this)}, 2000);
    });

    $("#scissors").click(function() {
       setTimeout(function() {rightFistResult.call(this)}, 2000);
        setTimeout(function(){rightFistResultScissors.call(this)}, 2000);
    });

    //left fist randomly displays a weapon

    // //Display leftFistResult

    function leftFistResult() {
        var randomNum = Math.floor (Math.random() * (weapons.length -1)) +0;
        // document.getElementById('result-left-rock').src = weapons[randomNum];
        // $("#left-first-rock").css('display', 'inline-block');
        console.log("look here!");
        console.log(randomNum);
    }



//logic part
//keep the score
// show game over after 3 times lost

//shake fists after clicking the buttons"

    //keep scores of the loses.
    });

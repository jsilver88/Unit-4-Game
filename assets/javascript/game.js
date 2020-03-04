$(document).ready(function(){

    var wins = 0;
    var losses = 0;
    var score = 0;


    var randNum = Math.floor(Math.random() * 120) + 1;
        console.log("random number is: " + randNum);
        $(".random-number").text(randNum);

    
    var emerald = Math.floor(Math.random() * 12) + 1;
        console.log("Emerald: " + emerald);
        $("#emerald").html("<img src=" + "assets/images/Emerald.jpg" + " value=" + emerald + ">");
    
    var lapis = Math.floor(Math.random() * 12) + 1;
        console.log("Lapis: " + lapis);
        $("#lapis").html("<img src=" + "assets/images/Lapis_Lazuli.jpg" + " value=" + lapis + ">");

    var quartz = Math.floor(Math.random() * 12) + 1;
        console.log("Quartz: " + quartz);
        $("#quartz").html("<img src=" + "assets/images/Nether_Quartz.jpg" + " value=" + quartz + ">");

    var diamond = Math.floor(Math.random() * 12) + 1;
        console.log("Diamond: " + diamond);
        $("#diamond").html("<img src=" + "assets/images/diamond.jpg" + " value=" + diamond + ">");

    
    function reset (){
        score = 0;
        $(".score-tron").text(score);

        randNum = Math.floor(Math.random() * 100) + 1;
        console.log("random number is: " + randNum);
        $(".random-number").text(randNum);

    
        emerald = Math.floor(Math.random() * 10) + 1;
        console.log("Amethyst value: " + emerald);
        $("#emerald").html("<img src=" + "assets/images/Emerald.jpg" + " value=" + emerald + ">");

        lapis = Math.floor(Math.random() * 10) + 1;
        console.log("Sapphire value: " + lapis);
        $("#lapis").html("<img src=" + "assets/images/Lapis_Lazuli.jpg" + " value=" + lapis + ">");

        quartz = Math.floor(Math.random() * 10) + 1;
        console.log("Ruby value: " + quartz);
        $("#quartz").html("<img src=" + "assets/images/Nether_Quartz.jpg" + " value=" + quartz + ">");

        diamond = Math.floor(Math.random() * 10) + 1;
        console.log("Obsidian value: " + diamond);
        $("#diamond").html("<img src=" + "assets/images/diamond.jpg" + " value=" + diamond + ">");


        $("img").on("click", function(){
            var totalScore = score += parseInt($(this).attr("value"));
            $(".score-tron").text(totalScore);
            
            if (totalScore === randNum){
                wins ++;
                $(".wins").text("Wins: " + wins);
                reset();
                
            } else if (totalScore > randNum){
                losses++;
                $(".losses").text("Losses: " + losses);
                reset();
            }
        });

        
    };
        
        
        
        
        $("img").on("click", function(){
            var totalScore = score += parseInt($(this).attr("value"));
            $(".score-tron").text(totalScore);
            
            if (totalScore === randNum){
                wins ++;
                $(".wins").text("Wins: " + wins);
                reset();
                
            } else if (totalScore > randNum){
                losses++;
                $(".losses").text("Losses: " + losses);
                reset();
            }
        });
})


/* Game starts once user loads page

    Random number is generated once page is loaded
    All 4 of the Minecraft crystals have a different value each time game starts
    User clicks on each crystal to find out values
    User has to add up to the randomly generated number to win
    If user goes above the random number they lose; game stops; and restarts.
    If they match the random number, user wins and game is over.
    Game resets after each win/loss.

*/

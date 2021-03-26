class Quiz{
    constructor() {
        
    }

    getState() {
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state) {
        database.ref('/').update({
            gameState:state
        });
    }

    async start() {
        if (gameState == 0) {
            contestant = new Contestant();
            var contestantRef = await database.ref('contestantCount').once('value');
            if(contestantRef.exists()) {
                contestantCount = contestantRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play() {
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340,50);
        text("----------------------------",320, 65);

        Contestant.getContestantInfo();

        if (allContestants !== undefined) {
            var display_answers = 230;
        

        for (var plr in allContestants) {
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer) {
                fill("green");
            }
            else {
                fill("red");
            }
            display_answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_answers);
        }
    }
}
}
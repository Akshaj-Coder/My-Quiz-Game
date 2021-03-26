class Question{
    constructor() {
        this.input = createInput("Enter your name here");
        this.input1 = createInput("Enter the Correct Option No.");
        this.title = createElement('h1');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.submit = createButton("Submit");
    }
    hide() {
        this.title.hide();
        this.input.hide();
        this.submit.hide();
        this.input1.hide();
    }

    display() {
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question :- What Starts with Letter 'E', but has only one letter");
        this.question.position(150,80);
        this.option1.html("1: Everyone ");
        this.option1.position(150,100);
        this.option2.html("2: Envelope ")  
        this.option2.position(150,120);
        this.option3.html("3: Estimate " );
        this.option3.position(150, 140);
        this.option4.html("4: Example" );
        this.option4.position(150, 160);

        this.input.position(400,230);
        this.input1.position(150,230);
        this.submit.position(600,230);
        this.submit.mousePressed(()=>{
            this.title.hide();
            this.input.hide();
            this.input1.hide();
            this.submit.hide();
            contestant.name = this.input.value();
            contestant.answer = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
    });
}
}

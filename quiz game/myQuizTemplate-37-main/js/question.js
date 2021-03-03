class question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
   this.title.html("MYquizgame");
   this.title.position(350,0);

   this.question.html("Who is the father of computer science??")
   this.question.position(150,80)
   this.option1.html("charles babbage")
   this.option1.position(150,100)
   this.option2.html("Alan turing")
   this.option2.position(150,120)
   this.option3.html("Nicola tesla")
   this.option3.html(150,130);

   this.input1.position(150,230);
    }
  }
  
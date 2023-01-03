class Question{
    constructor(){
        this.questions = [
            "What do you want to do in future / after you graduate? What are your plans for future?",
                "What is Data Science?",
                "Why Data Science?",
                "What do you want after work and travel?",
                "Why do want to work in America/USA/United States? Why do you want to join/participate in this program? Why do you want to attend this program? Why do you want to be a participant of this program?",
                "What department are you going to work at? / What jobs will you do? What job are you going to do?",
                "Do you have experience as a Counter Helper?",
                "What does a Counter Helper do?",
                "When will you go/when will you arrive in the USA? When do you plan to travel / arrive in the USA?",
                "When does your school close?",
                "When does your school open?",
                "How long will you stay in America?",
                "What dates are you going to work in America?",
                "Do you know the details about your job?",
                "Did you read anti trafficking pamphlet, and did you understand it?",
                "What do you want to do in future? ",
                "Why do you want to work as a Counter Helper?",
                "Do you want to visit any cities in the USA?",
                "Where will you go in the USA? Where are you going to go in the USA? Where are you going to in America?",
                "How much money are you planning to take with you to the United States?",
                "Why do you want to spend your holiday duration in the USA by doing a hard job like this?",
                "If you do not have experience, how did you get the job?",
                "Tell me about your school?",
                "What is the Counter Help?",
                "What is Computer Science?",
                "Who is paying your university tuition?",
                "Do you get whole or partial scholarship?",
                "How much do you get in scholarship?",
                "Why U.S.?",
                "Why New Hampshire?",
                "Why are your scores decreasing?",
                "What did you do last summer?",
                "From where did you learn this program?",
                "What your family do?",
                "Why are your last term scores low?",
                "Why you left your job?",
                "What course did you choose last term?",
                "What did you learn in Computer Networks course?",
                "What did you learn in Philosophy course?",
                "What did you learn in Modeling of Layer Systems course?",
                "What did you learn in Numeric Methods course?",
                "What did you learn in Analysis and Preparation Methods of Algorithms course?",
                "What did you learn in Physics course?",
                "What did you learn in Applied Programs Packet course?",
                "What did you learn in Theory of Probability and Mathematical Statistics course?",
                "What did you learn in Discrete Mathematics course?",
                "What did you learn in Database course?",
                "What did you learn in History of Azerbaijan course?",
                "What did you learn in Operations Application and Games Theory course?",
                "What did you learn in “Formation Technology of Web Sites” course?",
                "What did you learn in Programming Technologies course?",
                "What did you learn in Foreign Language course?",
                "What did you learn in Differential Equations course?",
                "What did you learn in Mathematical Analysis course?",
                "What did you learn in Computer Architecture course?",
                "What did you learn in Principles of Programming course?",
                "What did you learn in Analytic Geometry course?",
                "What did you learn in Linear Algebra course?",
                "What did you learn in Azerbaijani Language and Culture of Speech course?",
        ];
    }

    play(){
        let random = Math.floor(Math.random()*this.questions.length);
        let question = this.questions[random];
        this.questions.splice(random, 1);
        return question;
    }
}

async function buttonPlay(event){
    if (question.questions.length == 0) return;
    if (question.questions.length == 1) event.target.style.display = 'none';
    
    event.target.disabled = true;

    document.querySelector('p').innerText = question.play();
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = document.querySelector('p').innerText;

    await new Promise(_ => {
        window.speechSynthesis.speak(speech);
    });

    event.target.disabled = false;
}

const question = new Question();

document.querySelector('button').addEventListener('click', event => buttonPlay(event));

document.querySelector('input').onchange = function(){    
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function(){
        let lines = this.result.split(/\r?\n/);
        question.questions = lines;
    };
    reader.readAsText(file);
};

document.querySelector('input').addEventListener('click', function(){
    if (document.querySelector('button').style.display == 'none') document.querySelector('button').style.display = 'inline';
});
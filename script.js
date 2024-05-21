let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.ceil(Math.random() * 100);
// let answer = 39;
let no_of_guesses = 0;
let guessed_nums = [];
const max_guesses = 10;

function play() {
    let user_guess = document.getElementById("guess").value;

    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (no_of_guesses >= max_guesses) {
            if (user_guess == answer) {
                msg1.textContent = "CONGRATS YOU WIN";
                msg1.style.color = "green";
                msg1.style.fontSize = "30px";
                msg2.textContent = "HURRAY!!";
                msg2.style.color = "green";
                msg3.textContent = "You got it with " + no_of_guesses + " guesses";
            } else {
                msg1.textContent = "GAME OVER";
                msg1.style.color = "red";
                msg2.textContent = "The correct number was " + answer;
                msg2.style.color = "red";
                msg2.style.fontSize = "45px";
                msg3.textContent = "Guessed numbers were: " + guessed_nums.join(", ");
            }
            document.getElementById("my_btn").disabled = true;
            return;
        }

        if (user_guess < answer) {
            msg1.textContent = "YOUR GUESS IS TOO LOW";
            msg1.style.color = "red";
            msg2.textContent = "TRY AGAIN";
            msg2.style.color = "red";
            msg2.style.fontSize = "25px";
            msg3.textContent = "Guessed numbers are: " + guessed_nums.join(", ");
        } else if (user_guess > answer) {
            msg1.textContent = "YOUR GUESS IS TOO HIGH";
            msg1.style.color = "red";
            msg2.textContent = "TRY AGAIN";
            msg2.style.color = "red";
            msg2.style.fontSize = "25px";
            msg3.textContent = "Guessed numbers are: " + guessed_nums.join(", ");
        } else if (user_guess == answer) {
            msg1.textContent = "CONGRATS YOU WIN";
            msg1.style.color = "green";
            msg1.style.fontSize = "30px";
            msg2.textContent = "HURRAY!!";
            msg2.style.color = "green";
            msg3.textContent = "You got it with " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
    }
}

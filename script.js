// MOYIN'S JAVASCRIPT
/* Get the value from the input box */
const answer = document.querySelector('#answer')
const reply = document.getElementById('error')


// Writing the functions
function validateAnswer() {

    const finalAnswer = answer.value;

    let num = finalAnswer * 5
    
    if(Number.isNaN(num) == true) {
        showError('Input is not a number, please input a number')
        reply.style.color = 'red'
        answer.value = ' '
    } else {
        showAnswer()
    }

}

function showAnswer() {
    
    const finalAnswer = answer.value;
    
    if (finalAnswer == 83159) {
        showError('You are right, Congratulations')
        reply.style.color = 'green'
        answer.value = ' '
    } else {
        showError('You are wrong, try again')
        reply.style.color = 'red'
        answer.value = ' '
    }

}

function showError(message) {
    reply.innerHTML = message
}





// TIFE'S JAVASCRIPT
const error_message_1 = document.getElementById('error-1')
const correct_message_1 = document.getElementById('correct-1')


const box_1 = document.querySelector('#box-1')
const box_2 = document.querySelector('#box-2')
const box_3 = document.querySelector('#box-3')
const box_4 = document.querySelector('#box-4')
const box_5 = document.querySelector('#box-5')

function confirmAnswer() {
    if (box_1.value == 8 && box_2.value == 3 && box_3.value == 1 && box_4.value == 5 && box_5.value == 9) {
        correct_message_1.textContent = "YOU ARE CORRECT"
    } else {
        error_message_1.textContent = 'YOU ARE WRONG, PLEASE TRY AGAIN'
    }
}

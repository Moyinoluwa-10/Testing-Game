/* Get the value from the input box */
const answer = document.querySelector('#answer')
const error_message = document.getElementById('error')
const correct_message = document.getElementById('correct')

// Writing the function
function validateAnswer() {
    const finalAnswer = answer.value;
    if (finalAnswer == 83159) {
        correct_message.style.display = 'block'
    } else {
        error_message.style.display = 'block'
    }

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

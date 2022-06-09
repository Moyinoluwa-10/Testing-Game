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
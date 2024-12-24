// Q&A Form Submission
const qaForm = document.getElementById('qa-form');
const qaAnswers = document.getElementById('qa-answers');

qaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('qa-name').value;
    const question = document.getElementById('qa-question').value;

    if (question) {
        const questionItem = document.createElement('div');
        questionItem.classList.add('qa-item');
        questionItem.innerHTML = `<strong>${name}</strong>: ${question}`;
        qaAnswers.appendChild(questionItem);

        // Simple response (This could be dynamic if linked to a database or FAQ)
        setTimeout(() => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('qa-item');
            answerItem.innerHTML = `<strong>Instructor</strong>: This is a great question! We will answer it shortly.`;
            qaAnswers.appendChild(answerItem);
        }, 2000);

        qaForm.reset();
    }
});

const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Event listener for the button click
    toggleButton.addEventListener('click', () => {
        // Check if the body has the 'dark-mode' class
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Dark Mode'; // Change button text
        } else {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Light Mode'; // Change button text
        }
    });
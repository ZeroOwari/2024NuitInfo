window.onload = function() {
    const consequencesDiv = document.querySelector('.consequences');
    if (consequencesDiv) {
        const paragraphs = consequencesDiv.querySelectorAll('p');

        paragraphs.forEach(paragraph => {
            const button = document.createElement('button');
            button.textContent = paragraph.textContent;
            consequencesDiv.appendChild(button);
            paragraph.remove();
        });
    }
};
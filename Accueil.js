<script type="text/javascript">
window.onload = function() {
    const consequencesDiv = document.querySelector('.consequences');
    const paragraphs = consequencesDiv.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        const button = document.createElement('button');
        button.textContent = paragraph.textContent;
        consequencesDiv.appendChild(button);
        paragraph.remove();
    });
};
</script>
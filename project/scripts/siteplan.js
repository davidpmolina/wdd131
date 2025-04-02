document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const wireframeContent = this.nextElementSibling; // Get the next sibling (wireframe-content)
            wireframeContent.classList.toggle('show');
            this.classList.toggle('active');
        });
    });
});
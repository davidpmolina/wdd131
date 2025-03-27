document.addEventListener('DOMContentLoaded', function() {
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleString();
});
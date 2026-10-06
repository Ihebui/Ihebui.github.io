document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');
    const statusMessage = document.getElementById('status-message');

    buttons.forEach(button => {
        // When mouse enters the button area
        button.addEventListener('mouseenter', () => {
            const projectName = button.getAttribute('data-project');
            statusMessage.textContent = `Clicking will take you to ${projectName}...`;
            statusMessage.style.opacity = '1';
        });

        // When mouse leaves the button area
        button.addEventListener('mouseleave', () => {
            statusMessage.style.opacity = '0';
            // Short timeout to clear text cleanly after fade out
            setTimeout(() => {
                if (statusMessage.style.opacity === '0') {
                    statusMessage.innerHTML = '&nbsp;';
                }
            }, 300);
        });
    });
});

const viewRoleButtons = document.querySelectorAll('.view-role');
viewRoleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const jobId = button.getAttribute('data-job-id');
        const jobDetails = document.getElementById(`job-details-${jobId}`);
        jobDetails.style.display = 'block';
    });
});
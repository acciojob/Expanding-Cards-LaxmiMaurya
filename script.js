//your JS code here. If required.
function expandCard(panelNumber) {
    // Remove 'active' class from all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // Add 'active' class to the clicked panel
    const clickedPanel = document.getElementById(`panel-${panelNumber}`);
    clickedPanel.classList.add('active');
}
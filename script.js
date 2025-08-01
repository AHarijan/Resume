function downloadPDF() {
    var link = document.createElement('a');
    link.href = './Assest/Resume/Alakar Harijan Resume.pdf';
    link.download = 'Alakar Harijan Resume.pdf';
    link.click();
}

function initTypedEffect() {
    if (typeof Typed === 'undefined') {
        console.error('Typed.js library is not loaded');
        return;
    }


    const targetElement = document.getElementById('type');
    if (!targetElement) {
        console.error('Target element with ID "type" not found');
        return;
    }


    const typed = new Typed('#type', {
        strings: [
            "Data Analyst", 
            "Data Analyst", 
            "Full Stack Developer", 
            "Web Designer", 
            "Freelancer"
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        endDelay: 2000,
        cursorChar: '',
    });


    return typed;
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initTypedEffect);

// Optional: Make function available globally if needed
window.initTypedEffect = initTypedEffect;



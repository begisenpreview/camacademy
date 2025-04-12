window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    
    // Record the start time
    const startTime = performance.now();
    
    // Calculate remaining time to ensure exactly 1.5 seconds
    const totalDuration = 1500; // 1.5 seconds in milliseconds
    
    // Use requestAnimationFrame for more precise timing
    function updatePreloader() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime < totalDuration) {
            // Still loading, continue animation
            requestAnimationFrame(updatePreloader);
        } else {
            // Exactly 1.5 seconds have passed, hide preloader
            preloader.classList.add('fade-out');
            
            // Remove preloader after fade animation completes
            setTimeout(function () {
                preloader.style.display = 'none';
                body.style.overflow = 'auto'; // Re-enable scrolling
            }, 500);
        }
    }
    
    // Start the animation loop
    requestAnimationFrame(updatePreloader);
});
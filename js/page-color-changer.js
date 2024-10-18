//Script runs after the DOM has fully loaded.
document.addEventListener("DOMContentLoaded", function() {
    // Declare and initialize some constants for the input slider elements, the page body
    const redColorSlider = document.getElementById("red");
    const blueColorSlider = document.getElementById("blue");
    const greenColorSlider = document.getElementById("green");
    
    // Building a function to collect the values from the constants and change the background color
    function changeBackgroundColor() {
        // Collecting values from Sliders
        const red = redColorSlider.value;
        const blue = blueColorSlider.value;
        const green = greenColorSlider.value;

        // Updating the background color 
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    // Event listeners for all sliders to call a function
    redColorSlider.addEventListener("input", changeBackgroundColor);
    blueColorSlider.addEventListener("input", changeBackgroundColor);
    greenColorSlider.addEventListener("input", changeBackgroundColor);

    // Initial background color setting
    changeBackgroundColor();     
});

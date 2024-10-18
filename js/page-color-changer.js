document.addEventListener("DOMContentLoaded", function() {

    const redColorSlider = document.getElementById("red");
    const blueColorSlider = document.getElementById("blue");
    const greenColorSlider = document.getElementById("green");

    function changeBackgroundColor() {
        // Collecting values from Sliders
        const red = redColorSlider.value;
        const blue = blueColorSlider.value;
        const green = greenColorSlider.value;

        // Updating the background color 
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }




    
});

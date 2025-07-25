function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	
	const radiusInput = document.getElementById("radius");
	const volumeInput = document.getElementById("volume");

	const radius = parseFloat(radiusInput.value)
	if (isNaN(radius) || radius < 0) {
		volumeInput.value = "NaN";
		return;
	}
	const volume = (4/3)*Math.PI*math.pow(radius, 3);
	volumeInput.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

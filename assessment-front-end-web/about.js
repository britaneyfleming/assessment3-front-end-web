console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let duckyImage = document.getElementById("pic1") 
duckyImage.addEventListener('mouseover', function(event){
	alert("You look amazing!")
})

const button = document.getElementById("theme");
const nav = document.querySelector('nav');
const body = document.querySelector("div.container");
const footer = document.querySelector('footer');



button.addEventListener("click", e=>{
	e.preventDefault();
	
	nav.style.backgroundColor = "#D46606";
	body.style.backgroundColor = "#707070";
	body.style.color = "white";
	footer.style.backgroundColor = "white"
	footer.style.color = "#707070";
	button.style.backgroundColor = "#117AF2"

})

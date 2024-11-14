let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};
window.onscroll = () => {
	menu.classList.remove("bx-x");
	navbar.classList.remove("active");
};
const typed = new Typed(".multiple-text", {
	strings: [
		"Physical Fitness",
		"Weight Gain",
		"Strength Training",
		"Fat Lose",
		"Weightlifting",
		"Running",
	],
	typeSpeed: 60,
	backSpeed: 60,
	backDelay: 1000,
	loop: true,
});
document.getElementById('closeBtn').addEventListener('click', function() {
    document.querySelector('.inBody').style.display = 'none';
});
document.getElementById("tryNow").addEventListener("click",() => {
	document.querySelector('.inBody').style.display = 'flex';
	loopps();
})



function loopps() {
    const displayElement = document.querySelector('.inBody-display-weight');
		const typed1 = new Typed(".inBody-display-weight", {
			strings: [
				"6", "18", "1", "14", "9", "13", "3", "11", "17", "4",
				"20", "8", "5", "16", "7", "12", "10", "19", "2", "15"
			],
			typeSpeed: 40,
			backSpeed: 40,
			backDelay: 100,
			loop: true,
			onStringTyped: (arrayPos, self) => {
				let typedValue = +self.strings[arrayPos];
				displayElement.innerHTML = `${typedValue}`;
			}
		}); 
}

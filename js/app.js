let data = {
	fullName: "Jose Diaz",
	position: "Junior Developer",
	socials: [
		{
			id: "fb",
			service: "Facebook",
			url: "https://www.facebook.com/jsmith24",
			icon: "fab fa-facebook-f",
		},
		{
			id: "ig",
			service: "Instagram",
			url: "https://www.instagram.com/jsmith24",
			icon: "fab fa-instagram",
		},
		{
			id: "db",
			service: "Dribble",
			url: "https://www.dribble.com/jsmith24",
			icon: "fab fa-dribbble",
		},
		{
			id: "gl",
			service: "google",
			url: "https://www.google.com/jsmith",
			icon: "fab fa-dribbble",
		},
	],
};
let appData = (data) => {
	let body = document.getElementsByTagName("body")[0];
	let root = document.createElement("div");
	let style = document.createElement("style");
	let card = document.createElement("section");
	let html = `
<div class="card__wrapper">
<img
    src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg"
    class="card__user-img"
/>
<div class="card__info">
    <span class="card__name">${data.fullName}</span>
    <span class="card__title">${data.position}</span>
</div>
<div class="card__socials">
    
</div>
</div>`;
	let cssStyles = `
.card {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(50px);
}
.card__wrapper {
	height: 400px;
	padding: 20px;
	max-width: 300px;
	width: 100%;
	background: white;
	box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.card__user-img {
	border: 2px solid #2c5eff;
	height: 70px;
	width: 70px;
	margin: 2rem 0 1.5rem;
	border-radius: 50%;
	object-fit: cover;
	object-position: center;
}
.card__info {
	margin-bottom: .5rem;
}
.card__name {
	text-align: center;
	display: block;
	font-weight: 600;
	font-size: 1rem;
	margin-bottom: 0.5rem;
}
.card__title {
	display: block;
	font-size: 0.7rem;
	margin-bottom: 2rem;
	text-align: center;
}
.card__icon {
	width: 200px;
	padding: 10px;
	border-radius: 3px;
	border: 1px solid black;
	margin-bottom: 0.4rem;
	overflow: hidden;
	display: flex;
	justify-items: center;
	justify-content: center;
	align-items: center;
	transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
	cursor: pointer;
}
.card__icon-box {
	width: 25px;
	display: inline-block;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.card_-icon--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.card__icon--fb {
	color: #2c5eff;
	border: 1px solid #2c5eff;
}
.card__icon--fb:hover {
	background: #2c5eff;
	color: aliceblue;
}
.card__icon--ig {
	color: #773fe7;
	border: 1px solid #773fe7;
}
.card__icon--ig:hover {
	background: #773fe7;
	color: aliceblue;
}
.card__icon--db {
	color: #f962b1;
	border: 1px solid #f962b1;
}
.card__icon--db:hover {
	background: #f962b1;
	color: aliceblue;
} 
`;
	body.prepend(root);
	root.classList.add("root");
	root.prepend(card);
	root.style.cssText = `
background: url('https://wallpaperaccess.com/full/636909.jpg');
background-size: cover;
background-position: center;
`;
	root.prepend(style);
	card.classList.add("card");
	style.innerHTML = cssStyles;
	//here is were the card is created then
	//pulled through cardsocials
	card.innerHTML = html;
	//finds card socials its self/variable
	let cardSocials = card.getElementsByClassName("card__socials")[0];

	let temp = `  
<div class="card__icon card__icon--fb">
<span class="card__icon-box">
<i class="fab fa-facebook-f"></i>
</span>
<span class="card__icon--title"> Facebook </span>
</div> `;
	data.socials.forEach((item, index) => {
		let tempNode = document.createElement("div");
		tempNode.classList.add("card__icon", `card__icon--${item.id}`);
		tempNode.innerHTML = `<span class="card__icon-box">
    <i class='${item.icon}'></i>
    </span>
    <span class="card__icon--title">${item.service}</span>`;
		cardSocials.append(tempNode);
	});
};
appData(data);

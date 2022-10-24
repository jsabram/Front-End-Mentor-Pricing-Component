const checkbox = document.querySelector('.checkbox');
const pricesAnually = document.querySelectorAll('.card__price--annually');
const pricesMonthly = document.querySelectorAll('.card__price--monthly');

const updatePrices = () => {
	if (checkbox.checked == true) {
		pricesAnually.forEach((price) => (price.style.display = 'none'));
		pricesMonthly.forEach((price) => (price.style.display = 'block'));
	} else {
		pricesAnually.forEach((price) => (price.style.display = 'block'));
		pricesMonthly.forEach((price) => (price.style.display = 'none'));
	}
};

checkbox.addEventListener('click', updatePrices);

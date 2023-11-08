const swiper = new Swiper('.intro-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.intro-slider-btn.next',
		prevEl: '.intro-slider-btn.prev',
	},

});
const sizesSwiper = new Swiper('.sizes-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 10,
	// Navigation arrows
	navigation: {
		nextEl: '.sizes-slider-btn.next',
		prevEl: '.sizes-slider-btn.prev',
	},

	breakpoints: {
		// when window width is >= 640px
		500: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		900: {
			slidesPerView: 4,
		},
		1100: {
			slidesPerView: 5,
		},

	},

});

function changeImage() {
	const imagesBlocks = document.querySelectorAll('.change-image-js')
	if (imagesBlocks) {
		for (const imagesBlock of imagesBlocks) {
			const image = imagesBlock.querySelector('[data-pic]')
			const imageBtns = imagesBlock.querySelectorAll('[data-src]')
			for (const btn of imageBtns) {
				btn.addEventListener('click', (e) => {
					if (btn.dataset.src) {
						imageBtns.forEach(el => el.classList.remove('active'))

						btn.classList.add('active')

						image.src = `${btn.dataset.src}`
						return
					}
				})
			}

		}
		document.querySelector('[data-src]').click()
	}
}
changeImage()

function tabs() {
	const tabsBlock = document.querySelectorAll('[data-tabs]')
	if (tabsBlock) {
		for (const block of tabsBlock) {
			const btns = block.querySelectorAll('[data-id]')
			for (const btn of btns) {
				btn.addEventListener('click', () => {
					btns.forEach(el => el.classList.remove('active'))
					btn.classList.add('active')
					const target = document.querySelector(`[data-target="${btn.dataset.id}"]`)
					document.querySelectorAll('[data-target]').forEach(el => el.classList.remove('active'))
					target.classList.add('active')
				})
			}
			document.querySelector('[data-id]').click()
		}
	}
}

tabs()
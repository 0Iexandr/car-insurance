;(() => {
	const menuBtnRef = document.querySelector('[data-menu-button]')
	const closeBtnRef = document.querySelector('[data-close-button]')
	const mobileLink = document.querySelectorAll('.mobile__link')

	menuBtnRef.addEventListener('click', () => {
		const expanded =
			menuBtnRef.getAttribute('aria-expanded') === 'true' || false

		menuBtnRef.classList.toggle('is-open')
		menuBtnRef.setAttribute('aria-expanded', !expanded)
	})
	closeBtnRef.addEventListener('click', () => {
		const expanded =
			menuBtnRef.getAttribute('aria-expanded') === 'false' || true
		menuBtnRef.classList.toggle('is-open')
		menuBtnRef.setAttribute('aria-expanded', !expanded)
	})

	mobileLink.forEach(item => {
		item.addEventListener('click', function () {
			menuBtnRef.classList.remove('is-open')
			document.body.classList.remove('overflow')
		})
	})

	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	}

	refs.openModalBtn.addEventListener('click', toggleModal)
	refs.closeModalBtn.addEventListener('click', toggleModal)

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden')
	}
})()

document
	.querySelector('.booking-form')
	.addEventListener('submit', function (e) {
		e.preventDefault()
		const formData = new FormData(this)
		const entires = formData.entries()

		for (var input of entires) {
			if (input[1] !== '') {
				console.log(input[0] + ': ' + input[1])
			}
		}
	})

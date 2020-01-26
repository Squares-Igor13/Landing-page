window.addEventListener('DOMContentLoaded', function() {

	'use strict'

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent')


	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show')
			tabContent[i].classList.add('hide')
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide')
			tabContent[b].classList.add('show')
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target

		if(target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					hideTabContent(0)
					showTabContent(i)
					break
				}
			}
		}
	})


	//Timer ----1313--------------------------------------


	let deadLine = '2020-04-26'

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/1000/60/60)),
			seconds = Math.floor((t/1000) % 60)

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	}
	

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000)

		function updateClock() {
			
			let t = getTimeRemaining(endTime)
			hours.textContent = update(t.hours)
			minutes.textContent = update(zero(t.minutes))
			seconds.textContent = update(zero(t.seconds))

			if(t.total <= 0) {
				clearInterval(timeInterval)
			}
		}
	}

	setClock('timer', deadLine)

	function update(num) {
		return (num < 0) ? '00' : num
	}

	function zero(num) {
		if(num < 10 && num > 0) {
			return num = '0' + num
		} else {
			return num
		}
	}





})
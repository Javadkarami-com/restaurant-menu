// Function to fetch and display the JSON data
function fetchMenu() {
	fetch('js/foodData.json') // Adjust the path if necessary
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText)
			}
			return response.json() // Parse the JSON data
		})
		.then(data => {
			displayMenuBreakfast(data) // Call a function to display the data
			displayMenuPreCourse(data) // Call a function to display the data
			displayMenuMainCourse(data) // Call a function to display the data
			displayMenuDrink(data) // Call a function to display the data
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error)
		})
}

// Function to display the menu data
function displayMenuBreakfast(data) {
	const menuDiv = document.getElementById('breakfast')
	const items = data.menu['breakfast'] // Access the specific part of the JSON
	items.forEach(item => {
		const itemDiv = document.createElement('div')
		itemDiv.innerHTML = `<li class="tf-box-row mb-12">
								<a href="/description.html?name=${item.name}" class="img-box">
									<img src="${item.image}" alt="${item.name}" style="width: 73px;"/>
								</a>
								<div class="content-box">
									<h5><a href="/description.html?name=${item.name}">${item.name}</a></h5>
									<ul class="review"></ul>
									<div class="box-price">
										<ul class="price">
											<li class="accent">${item.price} تومان</li>
										</ul>
									</div>
								</div>
							</li>`
		menuDiv.appendChild(itemDiv)
	})
}
function displayMenuPreCourse(data) {
	const menuDiv = document.getElementById('precourse')
	const items = data.menu['precourse'] // Access the specific part of the JSON
	items.forEach(item => {
		const itemDiv = document.createElement('div')
		itemDiv.innerHTML = `<li class="tf-box-row mb-12">
								<a href="/description.html?name=${item.name}" class="img-box">
									<img src="${item.image}" alt="${item.name}" style="width: 73px;"/>
								</a>
								<div class="content-box">
									<h5><a href="/description.html?name=${item.name}">${item.name}</a></h5>
									<ul class="review"></ul>
									<div class="box-price">
										<ul class="price">
											<li class="accent">${item.price} تومان</li>
										</ul>
									</div>
								</div>
							</li>`
		menuDiv.appendChild(itemDiv)
	})
}
function displayMenuMainCourse(data) {
	const menuDiv = document.getElementById('maincourse')
	const items = data.menu['maincourse'] // Access the specific part of the JSON
	items.forEach(item => {
		const itemDiv = document.createElement('div')
		itemDiv.innerHTML = `<li class="tf-box-row mb-12">
								<a href="/description.html?name=${item.name}" class="img-box" style="width: 73px;">
									<img src="${item.image}" alt="${item.name}" />
								</a>
								<div class="content-box">
									<h5><a href="/description.html?name=${item.name}">${item.name}</a></h5>
									<ul class="review"></ul>
									<div class="box-price">
										<ul class="price">
											<li class="accent">${item.price} تومان</li>
										</ul>
									</div>
								</div>
							</li>`
		menuDiv.appendChild(itemDiv)
	})
}
function displayMenuDrink(data) {
	const menuDiv = document.getElementById('drink')
	const items = data.menu['drink'] // Access the specific part of the JSON
	items.forEach(item => {
		const itemDiv = document.createElement('div')
		itemDiv.innerHTML = `<li class="tf-box-row mb-12">
								<a href="/description.html?name=${item.name}" class="img-box">
									<img src="${item.image}" alt="${item.name}" style="width: 73px;" />
								</a>
								<div class="content-box">
									<h5><a href="/description.html?name=${item.name}">${item.name}</a></h5>
									<ul class="review"></ul>
									<div class="box-price">
										<ul class="price">
											<li class="accent">${item.price} تومان</li>
										</ul>
									</div>
								</div>
							</li>`
		menuDiv.appendChild(itemDiv)
	})
}

// Call the function to fetch the menu
fetchMenu()

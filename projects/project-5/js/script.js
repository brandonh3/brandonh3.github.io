const menuSections = [
    'coffee', 'brews', 'reds', 'whites', 'bites', 'dessert', 'beansBag'
]

// GENERATE MENU ITEMS
let menuURL = 'https://brandonh3.github.io/data/menu.json'
const menu = new XMLHttpRequest()
menu.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const menuList = JSON.parse(menu.responseText)

       for(let i = 0; i < menuSections.length; i++) {
           for(let x = 0; x < menuList[menuSections[i]].length; x++) { 
            document.getElementById(menuSections[i]).innerHTML += `
                <li class="menu-item">
                    <p class="menu-item-name">
                        ${menuList[menuSections[i]][x].name}
                    </p>
                    <p class="menu-item-desc">
                        ${menuList[menuSections[i]][x].desc}
                    </p>
                    <p class="menu-item-price">
                        ${menuList[menuSections[i]][x].price}
                    </p>
                </li>
            `
           }
       }
    }
}
menu.open('GET', menuURL, true)
menu.send()


// GENERATE BUSINESS INFO
let businessURL = 'https://brandonh3.github.io/data/business.json'
const business = new XMLHttpRequest()
business.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const businessInfo = JSON.parse(business.responseText)

        const businessHours = businessInfo.hours
        const address = businessInfo.address
        const phone = businessInfo.phone

        document.getElementById('hours').innerHTML = `
            <p>${businessHours.weekdays}</p>
            <p>${businessHours.weekends}</p>
            <p>${businessHours.sunday}</p>
        `

        document.getElementById('address').innerHTML = `
            <p>${address.street}</p>
            <p>${address.unit}
            </p>${address.city}, ${address.state} ${address.zip}
            </p>
        `

        document.getElementById('phone').innerHTML = `
        <a class="ph" href="tel:+6789961400">${phone.number}</a>
        `
    }
};
business.open('GET', businessURL, true)
business.send()


// MENU SECTIONS
const coffeeMenu = document.getElementById('coffee')
const brewsMenu = document.getElementById('brews')
const redsMenu = document.getElementById('reds')
const whitesMenu = document.getElementById('whites')
const bitesMenu = document.getElementById('bites')
const dessertMenu = document.getElementById('dessert')
const beansBagMenu = document.getElementById('beansBag')
const hoursInfo = document.getElementById('hours')
const addressInfo = document.getElementById('address')
const phoneInfo = document.getElementsByClassName('phone')

// MENU ITEMS & BUSINESS INFO
const coffeeShop = [
    {
        coffee: [
            {
                name: 'Americano',
                desc: 'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.',
                price: '2.95 | 3.95'
            },
            {
                name: 'Medium-Roast',
                desc: 'A medium roasted coffee that is soft, mellow and flavorful.',
                price: '2.45 | 3.45'
            },
            {
                name: 'Cappuccino',
                desc: 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.',
                price: '3.95 | 4.95'
            },
            {
                name: 'Decaf Roast',
                desc: 'A smooth, well-rounded blend with subtly rich flavors of chocolate and toasted nuts.',
                price: '2.45 | 3.45'
            },
            {
                name: 'Espresso',
                desc: 'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.',
                price: '2.45 | 3.45'
            },
            {
                name: 'Caffè Latte',
                desc: 'Our dark, rich espresso balanced with steamed milk and a light layer of foam.',
                price: '3.95 | 4.95'
            },
            {
                name: 'Caramel Macchiato',
                desc: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.',
                price: '4.95 | 5.95'
            },
            {
                name: 'Caffè Mocha',
                desc: 'Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream.',
                price: '4.45 | 5.45'
            },
            {
                name: 'White Chocolate Mocha',
                desc: 'Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.',
                price: '4.45 | 5.45'
            },
            {
                name: 'Frozen Coffee',
                desc: 'Decadent syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery sauce layer the love on top.  Available in caramel, mocha, white chocolate and peppermint mocha.',
                price: '4.95 | 5.95'
            },
        ],
        brews: [
            {
                name: 'Euphonia',
			    desc: 'Pilsner - German | 5% ABV | New Realm Brewing Company',
			    price: '14oz Draft - 5.95'
            },
            {
                name: 'Hoplandia',
			    desc: 'IPA - American | 7.3% ABV | New Realm Brewing Company',
			    price: '14oz Draft - 6.95'
            },
            {
                name: 'Hazy Like a Fox',
			    desc: 'IPA - New England | 6.5% ABV | New Realm Brewing Company',
			    price: '14oz Draft - 6.95'
            },
            {
                name: 'Pilotlight Coffee Porter',
			    desc: 'Porter - American | 8% ABV | New Realm Brewing Company',
			    price: '14oz Draft - 7.95'
            },
            {
                name: 'United Craft Lager',
			    desc: 'Lager - American Light | 4.5% ABV | New Realm Brewing Company',
			    price: '14oz Draft - 5.95'
            },
            {
                name: 'Más Macho',
			    desc: 'IPA - Imperial / Double | 9.3% ABV | New Realm Brewing Company',
			    price: '12oz Draft - 6.95'
            },
        ],
        reds: [
            {
                name: '2017 Tempranillo, Bodegas Lanzaga, LZ, Rioja, Spain',
                desc: 'Light | Berries | Elegant',
                price: '12 | 48'
            },
            {
                name: '2015 Tintilla, Vara y Pulgar, Cadiz, Spain',
                desc: 'Medium | Fruity | Spice',
                price: '13 | 52'
            },
            {
                name: '2017 Cabernet Franc Blend, Quieto, Mendoza, Argentina',
                desc: 'Full | Ripe | Bold',
                price: '12 | 48'
            },
        ],
        whites: [
            {
                name: '2018 Viura, Azul y Garanza, Navarra, Spain',
                desc: 'Light | Citrus | Crisp',
                price: '8 | 45'
            },
            {
                name: '2018 Verdejo, Menade, Rueda, Spain',
                desc: 'Medium | Fruity | Mineral',
                price: '11 | 44'
            },
            {
                name: '2018 Petit Manseng Blend, 1752, Cerro Chapeau, Uruguay',
                desc: 'Full | Ripe | Spice',
                price: '12 | 48'
            },
        ],
        bites: [
            {
                name: 'Brat & Pretzel Bites',
                desc: 'Served with scratch-made beer cheese & spicy brown mustard.',
                price: '7.95'
            },
            {
                name: 'Chicken Wings',
                desc: 'Tossed in your choice of sauce & served with ranch or blue cheese.<br><br> Buffalo Mild/Hot, Sweet Teriyaki, Smoked BBQ, Lemon Pepper',
                price: '6pc - 6.95 | 12pc - 12.95'
            },
            {
                name: 'Creole Shrimp & Crab Dip',
                desc: 'Served with pita chips.',
                price: '8.95'
            },
            {
                name: 'Chips & Queso',
                desc: 'Scratch-made beer cheese queso served with fresh tortilla chips.',
                price: '6.95 | Guacamole add 2.95'
            }
        ],
        dessert: [
            {
                name: 'NY Style Cheesecake',
                desc: 'Topped with whipped cream.',
                price: '3.95 | Fresh Strawberries add 1.95'
            },
            {
                name: 'Homemade Cobbler',
                desc: 'Your choice of apple, blueberry or peach. Baked fresh daily.',
                price: '3.95 | à La Mode add 1.95'
            },
            {
                name: 'Oreo Balls',
                desc: 'A blend of crushed Oreos and cream cheese, rolled into a ball and dipped in your choice of chocolate or white chocolate.',
                price: '6pc - 3.95 | 10pc - 5.95'
            }
        ],
        beansBag: [
            {
                name: 'Light Roast',
                desc: 'Sweet, vibrant notes.',
                price: '12oz - 6.95 | 20oz - 9.95'
            },
            {
                name: 'Medium Roast',
                desc: 'Flavors of chocolate & toasted nuts.',
                price: '12oz - 6.95 | 20oz - 9.95'
            },
            {
                name: 'Dark Roast',
                desc: 'Rich, bold flavors of caramelly sweetness.',
                price: '12oz - 6.95 - | 20oz - 9.95'
            }
        ],
    },
    {
        hours: [
            {
                weekdays: 'Monday - Thursday | 6AM - 11PM',
                weekends: 'Friday & Saturday | 6AM - 1AM',
                sunday: 'Sunday | 7AM - 7PM'
            },
        ],
        address: [
            {
                street: '1270 Spring St. NW',
                unit: 'Suite 4a',
                city: 'Atlanta',
                state: 'GA',
                zip: '30309'
            },
        ],
        phone: [
            {
                number: '(678) 996-1400'
            },
        ],
    }
]

// GENERATE MENU ITEMS
// List of items in coffeeShop menu array
const menuList = [
    'coffee', 'brews', 'reds', 'whites', 'bites', 'dessert', 'beansBag'
]
// Sections of the menu
const menuSections = [
    coffeeMenu, brewsMenu, redsMenu, whitesMenu, bitesMenu, dessertMenu, beansBagMenu
]

// Loop thru sections of the menu, add items from coffeeShop menu array
for(let i = 0; i < menuList.length; i++) {
    for(let x = 0; x < coffeeShop[0][menuList[i]].length; x++) {
        menuSections[i].innerHTML += `
            <li class="menu-item">
            <p class="menu-item-name">
                ${coffeeShop[0][menuList[i]][x].name}
            </p>
            <p class="menu-item-desc">
                ${coffeeShop[0][menuList[i]][x].desc}
            </p>
            <p class="menu-item-price">
                ${coffeeShop[0][menuList[i]][x].price}
            </p>
            </li>
        `  
    }  
}

// GENERATE BUSINESS INFO
// Add business hours to footer
hoursInfo.innerHTML = `
    <p>${coffeeShop[1].hours[0].weekdays}</p>
    <p>${coffeeShop[1].hours[0].weekends}</p>
    <p>${coffeeShop[1].hours[0].sunday}</p>
`
addressInfo.innerHTML = `
    <p>${coffeeShop[1].address[0].street}</p>
    <p>${coffeeShop[1].address[0].unit}
    </p>${coffeeShop[1].address[0].city}, ${coffeeShop[1].address[0].state} ${coffeeShop[1].address[0].zip}
    </p>
`

for(let i = 0; i < phoneInfo.length; i++) {
    phoneInfo[i].innerHTML = `
    <a class="ph" href="tel:+6789961400">(678) 996-1400</a>
    `
}



/*
// GENERATE BUSINESS INFO
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
business.open("GET", "../json/business.json", true)
business.send()

*/
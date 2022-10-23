window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu')
    const navigation = document.querySelector('.navbar-list')
    const navigationItems = document.querySelectorAll('.navbar-item')

    menuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active')
        menuBtn.classList.toggle('openmenu')

    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            navigation.classList.remove('active') 
            menuBtn.classList.remove('openmenu')
        })
    })
})
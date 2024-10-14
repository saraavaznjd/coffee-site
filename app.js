const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const menu = document.querySelector('#menu')
const productSubmenu = document.querySelector('#product-submenu')
const productSubmenuOpen = document.querySelector('#product-submenu-open')
const contactSubmenu = document.querySelector('#contact-submenu')
const contactSubmenuOpen = document.querySelector('#contact-submenu-open')


const openSubmenu = submenu => {
    submenu.classList.toggle('h-0')
    submenu.classList.toggle('group-hover:h-auto')
    submenu.classList.toggle('opacity-0')
    submenu.classList.toggle('group-hover:opacity-100')
    submenu.classList.toggle('invisible')
    submenu.classList.toggle('group-hover:visible')
    submenu.classList.toggle('group-hover:p-4')
}

menuOpen.addEventListener('click',() => {
    menuOpen.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    menu.classList.toggle('-right-[650px]')
    menu.classList.toggle('right-0')
})

menuClose.addEventListener('click',() => {
    menuClose.classList.toggle('hidden')
    menuOpen.classList.toggle('hidden')
    menu.classList.toggle('-right-[650px]')
    menu.classList.toggle('right-0')
    if(productSubmenuOpen.classList.contains('group-hover:h-auto')){
        openSubmenu(productSubmenuOpen)
    }else if(contactSubmenuOpen.classList.contains('group-hover:h-auto')){
        openSubmenu(contactSubmenuOpen)
    }
})

productSubmenu.addEventListener('click', () => {
    openSubmenu(productSubmenuOpen)
})

contactSubmenu.addEventListener('click',()=>{
    openSubmenu(contactSubmenuOpen)
})
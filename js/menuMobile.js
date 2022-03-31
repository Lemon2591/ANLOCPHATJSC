

    const closeMenuMobile = document.getElementById('ti-close-menu');
    const openMenuMobile = document.getElementById('ti-mobie-menu');
    const menuMobile = document.getElementById('memu-mobile');
    
    function openMenuMobileRouter () {
        menuMobile.classList.add('close-menu-mobile')
    }

    closeMenuMobile.addEventListener('click',openMenuMobileRouter);


    function closeMenuMobileRouter () {
        menuMobile.classList.remove('close-menu-mobile')
    }

    openMenuMobile.addEventListener('click',closeMenuMobileRouter);


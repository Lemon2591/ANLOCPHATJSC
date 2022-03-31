    const toggleEventIconDown = document.getElementById('togle-list-item-icon-down')

    const toggleEventIconUp = document.getElementById('togle-list-item-icon-up')

    const listItemItem = document.getElementById('show-hiden-list-item')
   
    
    function eventShowListItem () {

        listItemItem.classList.remove('event-togle-list-item')

        toggleEventIconDown.style.display='none';

        toggleEventIconUp.style.display='block';
    }

    function eventhideListItem () {

        listItemItem.classList.add('event-togle-list-item')

        toggleEventIconDown.style.display='block';

        toggleEventIconUp.style.display='none';
    }

    toggleEventIconDown.addEventListener('click', eventShowListItem)
    
    toggleEventIconUp.addEventListener('click', eventhideListItem)





    /* */


    const toggleEventIconDown1 = document.getElementById('togle-list-item-icon-down1')

    const toggleEventIconUp1 = document.getElementById('togle-list-item-icon-up1')

    const listItemItem1 = document.getElementById('show-hiden-list-item1')
   
    
    function eventShowListItem1 () {

        listItemItem1.classList.remove('event-togle-list-item1')

        toggleEventIconDown1.style.display='none';

        toggleEventIconUp1.style.display='block';
    }

    function eventhideListItem1 () {

        listItemItem1.classList.add('event-togle-list-item1')

        toggleEventIconDown1.style.display='block';

        toggleEventIconUp1.style.display='none';
    }

    toggleEventIconDown1.addEventListener('click', eventShowListItem1)
    
    toggleEventIconUp1.addEventListener('click', eventhideListItem1)



    /** */


    

    const toggleEventIconDown2 = document.getElementById('togle-list-item-icon-down2')

    const toggleEventIconUp2 = document.getElementById('togle-list-item-icon-up2')

    const listItemItem2 = document.getElementById('show-hiden-list-item2')
   
    
    function eventShowListItem2 () {

        listItemItem2.classList.remove('event-togle-list-item2')

        toggleEventIconDown2.style.display='none';

        toggleEventIconUp2.style.display='block';
    }

    function eventhideListItem2 () {

        listItemItem2.classList.add('event-togle-list-item2')

        toggleEventIconDown2.style.display='block';

        toggleEventIconUp2.style.display='none';
    }

    toggleEventIconDown2.addEventListener('click', eventShowListItem2)
    
    toggleEventIconUp2.addEventListener('click', eventhideListItem2)
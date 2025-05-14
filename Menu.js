document.addEventListener('DOMContentLoaded', function() {
    const hamburguerMenu = document.querySelector('.hamburguer');
    const menuNavegacion = document.querySelector('.menu-navegacion');

    if (hamburguerMenu && menuNavegacion) {
        hamburguerMenu.addEventListener('click', ()=>{
            menuNavegacion.classList.toggle("spread");
        });

        window.addEventListener('click', e=>{
            if(menuNavegacion.classList.contains('spread')
                && e.target != menuNavegacion && e.target != hamburguerMenu){
                   menuNavegacion.classList.toggle("spread");
                   }
        });
    }
});
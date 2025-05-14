

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contendorLight = document.querySelector('.imagen-Light')
const hamburguer1 = document.querySelector('.hamburguer')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))  

    })
});

contendorLight.addEventListener('click', (e)=>{
    if (e.target !== imagenesLight) {
        contendorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburguer1.style.opacity = '1';
    }      
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contendorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'

}
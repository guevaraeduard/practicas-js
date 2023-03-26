$(document).ready(function () {
    //para mover un elemento por la pagina 
    $('.elemento').draggable();
    //Redimensionar
    $('.elemento').resizable();
    //Seleccionar elementos
    $('.lista').sortable();

    //Drop
    $('#area').droppable({
        drop:function(){
            console.log('has soltado algo');
        }            
    });
});
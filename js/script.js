
//function agregarLike( elemento ){
//    console.log( document.querySelector(".numLikes") );
//   console.log( elemento.closest(".top") );
//let spanNumLikes = document.querySelector( ".numLikes");
//numLikes = Number( spanNumLikes.innerText );
//numLikes += 1 ;
//spanNumLikes.innerText = numLikes; 
//}

function agregarLike(elemento) {
    let spanNumLikes = elemento.closest(".top").querySelector(".numLikes");
    let numLikes = Number(spanNumLikes.innerText);
    numLikes += 1;
    spanNumLikes.innerText = numLikes;
}

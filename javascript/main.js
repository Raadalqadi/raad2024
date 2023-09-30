/* open list and close list */
function open (){
    document.getElementById("lists").classList.add("open");
    document.getElementById("openlist").classList.add("close");
    document.getElementById("closelist").classList.add("open");
}

function close (){
    document.getElementById("lists").classList.remove("open");
    document.getElementById("openlist").classList.remove("close");
    document.getElementById("closelist").classList.remove("open");
}

  let Olist = document.getElementById("openlist").addEventListener("click",open);
  let Clist = document.getElementById("closelist").addEventListener("click",close);

  /* end open and close list */
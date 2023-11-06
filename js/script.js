function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
function aleatorio(){
    var x = rand(1,8);
    const img = document.getElementById("#item-8");

    if(x ==1){
        img.setAttribute("src","imgs/G.png");
    }

    else if (x==2){
        img.setAttribute("src","imgs/D.png");
    }

    else if (x==3){
        img.setAttribute("src","imgs/R.png");
    }

    else if (x==4){
        img.setAttribute("src","imgs/Ni.png");
    }

    else if (x==5){
        img.setAttribute("src","imgs/Na.png");
    }

    else if (x==6){
        img.setAttribute("src","imgs/I.png");
    }

    else if (x==7){
        img.setAttribute("src","imgs/B.png");
    }

    else{
        img.setAttribute("src","imgs/Da.png");
    }
}

    function allowDrop(ev) {
        ev.preventDefault();
    }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
      





   



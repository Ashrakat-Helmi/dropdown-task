let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.onclick = function(){
   if(div.classList[0] == "list"){
       div.classList.remove('list')
   }else{
    div.classList.add('list')
   }

}
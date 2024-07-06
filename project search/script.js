let btn = document.getElementsByClassName('btn')[0];
let input = document.getElementsByClassName('box')[0];
let body = document.getElementById('body');
btn.addEventListener('click',()=>{
        input.classList.add('active');
});
body.addEventListener('click',()=>{
    input.classList.remove('active');
});
input.addEventListener('click',(e)=>{
e.stopPropagation(); 

})
let panel = document.querySelectorAll('.panel');
panel.forEach(ele=>{
    ele.addEventListener('click',()=>{
        remove();
        ele.classList.add('active');
    })
});
function remove(){
    panel.forEach(ele=>{
        ele.classList.remove('active');
    });
}
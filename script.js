// const img1 = document.getElementById('img1')
// const img2 = document.getElementById('img2')
const dragDrop = document.getElementById('drag-drop');

dragDrop.addEventListener('dragstart', e => {  
    if(e.target.tagName==='IMG'){
        e.dataTransfer.setData('id', e.target.id); 
    }   
});

dragDrop.addEventListener("dragover", e => {  
    if(e.target.tagName==='IMG'){
        e.preventDefault(); 
    }                     
});

dragDrop.addEventListener('drop', e => {
    if(e.target.tagName==='IMG'){
        const id = e.dataTransfer.getData("id");
        let x = document.getElementById(id).parentElement.id;    
        e.target.parentElement.appendChild(document.getElementById(id));   
        document.getElementById(x).appendChild(document.getElementById(e.target.id));    
    }    
})

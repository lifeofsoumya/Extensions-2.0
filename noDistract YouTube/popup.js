const Sidebar = document.querySelector('#items > ytd-item-section-renderer');
const Comments = document.querySelector('#comments');
const Category = document.querySelector('#scroll-container');

let isSidebar =1 , isCategory =1, isComments=1;

document.querySelector('#hide-side').addEventListener('click', ()=>{
    if(isSidebar === 1){
        isSidebar = 0;        
    }
    else {isSidebar = 1}
})
document.querySelector('#hide-scroll').addEventListener('click', ()=>{
    if(isCategory === 1){
        isCategory = 0;        
    }
    else {isCategory = 1}
})
document.querySelector('#hide-comment').addEventListener('click', ()=>{
    if(isComments === 1){
        isComments = 0;        
    }
    else {isComments = 1}
})



chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(tab.url === "https://youtube.com/"){
        if(isSidebar === 0){
            Sidebar.style.display = "none";
        }
        if(isCategory === 0){
            Category.style.display = "none";
        }
        if(isComments === 0){
            Comments.style.display = "none";
        }
    
    }
})



let currentFolder = folderStructure;
let breadcrumbs = ["Home"];

function renderFolder(folder) {
    const fileContainer = document.getElementById("file-container");
    fileContainer.innerHTML = "";

    folder.children.forEach((item, i) => {
        const div = document.createElement("div");
        div.classList.add(item.type);
        div.innerHTML = `
            <div class="${item.type}-icon" s='${i}'>
                ${item.type === "folder" ? getFolderIcon() : `
                    <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#e8eaed">
<path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
</svg>
                    `
            }
            </div>
            <div class="item-name">${item.name}</div>
        `;
  
        div.onclick = () => {
            if (item.type === "folder") {
               
                if(item.children === undefined){
                    showModal("OOPS! No Items!", "Sorry, Unfortunetly, This file has no items yet")
                }else{
                    openFolder(item);
                }
            }else if(item.type = "file"){
                if (item.link === undefined || "") {
                    showModal("OOPS! The Link is not specified",`'${item.name}' has not contents or it was not put the root link of it.`);  
            } 
                else {
                    openFile(item.link)
                }
                
            }
        };










        fileContainer.appendChild(div);
    });
}




function openFile(ln){
    let checkLn = ln.slice(0, 1) + ln.slice(ln.length -1)
    ln = ln.slice(1, ln.length-1)
    if(checkLn === "[]"){
        showModal(ln)
    }
}






function openFolder(folder) {
    currentFolder = folder;
    breadcrumbs.push(folder.name);
    updateBreadcrumbs();
    renderFolder(folder);
}

function goBack() {
    if (breadcrumbs.length > 1) {
        breadcrumbs.pop();
        const parentFolder = getFolderByBreadcrumbs(breadcrumbs);
        currentFolder = parentFolder;
        updateBreadcrumbs();
        renderFolder(parentFolder);
    }
}

function getFolderByBreadcrumbs(path) {
    let folder = folderStructure;
    for (let i = 1; i < path.length; i++) {
        folder = folder.children.find((child) => child.name === path[i]);
    }
    return folder;
}

function updateBreadcrumbs() {
    const breadcrumbContainer = document.getElementById("breadcrumb-container");
    breadcrumbContainer.innerHTML = `&nbsp;>&nbsp;${breadcrumbs.join("&nbsp;>&nbsp;")}`;
}

function getFolderIcon() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect x="4" y="16" width="56" height="36" rx="4" fill="#FFD95C"/>
            <path d="M28 16L22 10H8C6.89543 10 6 10.8954 6 12V16H28Z" fill="#FFB700"/>
<path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
        </svg>
    `;
}

// Initialize
renderFolder(currentFolder);
updateBreadcrumbs();

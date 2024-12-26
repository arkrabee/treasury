const sidebar_layout = `
                <div class="top-bar">
                    <input type="text" id="sidebar-search" placeholder="Search...">
                    <div class="icon">✏️</div>
                </div>
                <div class="menu">
                    <a href="ark.html">Retrieve</a>
                    <a href="">Option 2</a>
                    <a href="#">Option 3</a>
                    <a href="pp.html">Privacy policy</a>
                </div>

`



let navbar = document.querySelectorAll(".navbar");

for(let i = 0; i < navbar.length; i++){
    navbar[i].innerHTML = det.name;
}

document.querySelector(".sidebar").innerHTML = sidebar_layout;
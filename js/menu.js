const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("mainMenu");
const menuItemHeadings = document.querySelectorAll(".menuItemHeadings");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector("#hamburger");

// Logic for Main Menu Icon
menuToggle.addEventListener("click", function (){
    if (mainMenu.classList.contains("menuExpanded")) {
        menuToggle.classList.add("toggle_shrinked");
        menuToggle.classList.remove("toggle_expanded");
        menuToggle.style.marginLeft = 0;
        menuItemHeadings.forEach(heading => heading.style.display = "none");
        menuItems.forEach(menuItem => menuItem.style.width = "auto");
        mainMenu.classList.remove("menuExpanded");
        mainMenu.classList.add("menuShrinked");
        // document.documentElement.style.setProperty('--menuWidth', 'calc(100vw - 93%)');
        document.documentElement.style.setProperty('--menuWidth', '93px');
        // document.documentElement.style.setProperty('--mainContentWidth', 'calc(100vw - 7%)');
        document.documentElement.style.setProperty('--mainContentWidth', 'calc(100vw - 93px)');
        // mainMenu.style.alignItems = "center";
        mainMenu.style.alignItems = "center";
    }

    else if(mainMenu.classList.contains("menuShrinked")){
        menuToggle.classList.add("toggle_expanded");
        menuToggle.classList.remove("toggle_shrinked");
        menuToggle.style.marginLeft = "6px";
        menuItemHeadings.forEach(heading => heading.style.display = "flex");
        menuItems.forEach(menuItem => menuItem.style.width = "100%");
        mainMenu.classList.remove("menuShrinked");
        mainMenu.classList.add("menuExpanded");
        // document.documentElement.style.setProperty('--menuWidth', 'calc(100vw - 79%)');
        document.documentElement.style.setProperty('--menuWidth', '303px');
        // document.documentElement.style.setProperty('--mainContentWidth', 'calc(100vw - 21%)');
        document.documentElement.style.setProperty('--mainContentWidth', 'calc(100vw - 303px)');
        mainMenu.style.alignItems = "start";
    }
});

// Logic for Header hamburger icon
hamburger.addEventListener("click", function (){

    if (mainMenu.classList.contains("menuExpanded")) {
        mainMenu.classList.remove("menuExpanded");
        mainMenu.classList.add("hamShrinked");
        menu.style.display = "none";
    }

    else if(mainMenu.classList.contains("hamShrinked")){
        mainMenu.classList.remove("hamShrinked");
        mainMenu.classList.add("menuExpanded");
        menu.style.display = "flex";
    }
})

function scrollView(target) {
    document.querySelector('.' + target).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function initNavbarItems() {
    document.querySelectorAll('.items > a').forEach(item => {
        item.onclick = () => scrollView(item.id);
    });
}

function updateNavbarItems() {
    let hoverANavbarItem = false;
    document.querySelectorAll('.navbar-item').forEach(item => {
        let c = window.getComputedStyle(item).getPropertyValue('border-top-style');
        hoverANavbarItem = c == "hidden" || hoverANavbarItem;
    });
    document.querySelectorAll('.active-navbar-item').forEach(item => item.className = hoverANavbarItem ? "active-navbar-item2" : "active-navbar-item");
}

function onScroll() {
    let active = null;
    document.querySelectorAll(".categories > div").forEach(category => {
        let bottom = category.getBoundingClientRect().bottom;
        if (bottom > 500 && (!active || bottom < active.getBoundingClientRect().bottom))
            active = category;
    });

    document.querySelectorAll(".items > a").forEach(item => {
        item.className = item.id == active.className ? "active-navbar-item" : "navbar-item";
    });
}

function onResize() {
    document.querySelector(".navbar").style.display = window.innerWidth < 980 ? "none" : "flex";
}

function init() {
    initNavbarItems();
    onResize();
}

addEventListener("load", init);
addEventListener("mousemove", updateNavbarItems);
addEventListener("scroll", onScroll);
addEventListener("resize", onResize)
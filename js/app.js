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
        if (c == "hidden")
            hoverANavbarItem = true;
    });
    if (hoverANavbarItem)
        document.querySelectorAll('.active-navbar-item').forEach(item => item.className = "active-navbar-item2");
    else
        document.querySelectorAll('.active-navbar-item2').forEach(item => item.className = "active-navbar-item");
}

function onScroll() {
    let active = null;
    document.querySelectorAll(".categories > div").forEach(category => {
        let bottom = category.getBoundingClientRect().bottom;
        if (bottom > 500 && (!active || bottom < active.getBoundingClientRect().bottom))
            active = category;
    });

    document.querySelectorAll(".items > a").forEach(item => {
        if (item.id == active.className)
            item.className = "active-navbar-item";
        else
            item.className = "navbar-item";
    });
}

addEventListener("load", initNavbarItems);
addEventListener("mousemove", updateNavbarItems);
addEventListener("scroll", onScroll);
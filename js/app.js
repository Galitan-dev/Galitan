function scrollView(target) {
    document.querySelector('.' + target).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function initNavbarItems() {
    document.querySelectorAll('.items > a').forEach(item => {
        console.log("Initializing navbar-item " + item.id);
        item.onclick = () => scrollView(item.id);
    });
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
addEventListener("scroll", onScroll);
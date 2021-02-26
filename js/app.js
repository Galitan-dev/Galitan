function scrollView(target) {
    document.querySelector('.' + target).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

function updateNavbarItems() {
    let hoverANavbarItem = false;
    document.querySelectorAll('.navbar-item').forEach(item => {
        let c = window.getComputedStyle(item).getPropertyValue('border-top-style');
        hoverANavbarItem = c == "hidden" || hoverANavbarItem;
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
        item.className = item.id == active.className ? "active-navbar-item" : "navbar-item";
    });
    updateNavbarItems();
    // initInputs()
}

function onResize() {
    document.querySelector(".navbar").style.display = window.innerWidth < 980 ? "none" : "flex";
    document.querySelector(".contact textarea").style.width = window.innerWidth / 2;
    document.querySelector(".contact textarea").style.minWidth = window.innerWidth / 2;
    document.querySelector(".contact textarea").style.maxWidth = window.innerWidth / 2;
}

function init() {
    onScroll();
    onResize();
}

function onSubmit() {
    const firstname = document.querySelector("#firstname").value,
        lastname = document.querySelector("#lastname").value,
        email = document.querySelector("#email").value,
        discord = document.querySelector("#discord").value,
        message = document.querySelector("#message").value;

    $.ajax({
        type: "POST",
        url: "http://galitan.tk/php/sendToDiscord.php",
        data: {firstname: firstname, lastname: lastname, email: email, discord: discord, message: message},
        success : function(data){
            console.log('message succesfully sended !');
        },
        error: function (data) {
            console.log('error while sending message: ' + data)
        }
    });
}

addEventListener("load", init);
addEventListener("mousemove", updateNavbarItems);
addEventListener("scroll", onScroll);
addEventListener("resize", onResize)

document.querySelector('#submit').onclick = onSubmit;
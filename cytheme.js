let cyTheme = document.querySelector("#cyTheme"), savedTheme = localStorage.getItem("cyTheme");

function enable_cyTheme() {
    document.body.classList.add("cyTheme");
    cyTheme.classList.add("fa-sun");
    localStorage.setItem("cyTheme", "enabled");
}

function disable_cyTheme() {
    document.body.classList.remove("cyTheme");
    cyTheme.classList.remove("fa-sun");
    localStorage.setItem("cyTheme", null);
}

if (savedTheme === "enabled") { enable_cyTheme(); }

cyTheme.addEventListener("click", () => {
    const savedTheme = localStorage.getItem("cyTheme");
    if (savedTheme !== "enabled") { enable_cyTheme(); } else { disable_cyTheme(); }
})

//CYTHEME - 2020;
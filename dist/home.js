// const searchIcon = document.getElementById("search-icon");
// const searchContainer = document.getElementById("search-container");
// const searchBox = document.getElementById("search-box");
// const searchBoxContainerIcon = document.getElementById("search-icon-container");
// const searchBoxIcon = document.getElementById("search-box-icon");
// const hamberger = document.getElementById("hamberger");

// // Header Element Show & Hide:
// searchIcon.addEventListener("click", () => {
//     searchBox.classList.toggle("hidden");
//     searchBoxContainerIcon.classList.toggle("hidden");

//     // Toggle the search icon class between fa-magnifying-glass and fa-xmark
//     if (searchIcon.classList.contains("fa-magnifying-glass")) {
//         searchIcon.classList.remove("fa-magnifying-glass");
//         hamberger.classList.remove("fa-bars");
//         searchIcon.classList.add("fa-xmark");
//         searchBox.style.position = "fixed";
//         searchBox.style.top = "6rem";
//         searchBox.style.left = "1rem";
//         searchBox.style.width = "95%";
//         searchBoxIcon.style.position = "fixed";
//         searchBoxIcon.style.top = "7.5rem";
//         searchBoxIcon.style.zIndex = "11";
//     } else {
//         searchIcon.classList.remove("fa-xmark");
//         searchIcon.classList.add("fa-magnifying-glass");
//         hamberger.classList.add("fa-bars");
//     }
// });


// ----------------- Section - 1 ----------------- //

// Auto typing
let autoType = new Typed(".auto-type", {
    strings : ["AFFORDABLE", "EASY", "PRACTICAL"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true,
    cursorChar: '<span class="typed-cursor" style="color: #e86969;">|</span>'
})



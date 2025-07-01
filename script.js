const btn = document.getElementById("btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
    img.classList.add("roll");

    setTimeout(() => {
        let rand = Math.floor(Math.random() * 6) + 1;
        // console.log(rand);
        img.setAttribute("src", `imgs/dice${rand}.png`);
        img.classList.remove("roll");
    }, 1000);
});

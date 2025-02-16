document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".label-text a");
    const title = document.querySelector("h1");
    const body = document.body;

    const locations = {
        "Tokyo": { title: "TOKYO", class: "tokyo-background" },
        "Kyoto": { title: "KYOTO", class: "kyoto-background" },
        "Osaka": { title: "OSAKA", class: "osaka-background" },
        "Shibuya": { title: "SHIBUYA", class: "shibuya-background" }
    };

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const cityName = this.textContent.trim();

            if (locations[cityName]) {
                title.setAttribute("data-aos", "fade-out"); 
                
                setTimeout(() => {
                    title.textContent = locations[cityName].title;
                    title.setAttribute("data-aos", "fade-up");

                    body.className = "";
                    body.classList.add(locations[cityName].class);

                    AOS.refresh();
                }, 300);
            }
        });
    });
});

var app = new Vue ({
        el: "#head",
        data: {
            img: "img/logo.png",
            navBar: ["Home",
                    "Service", 
                    "About", 
                    "Videos", 
                    "Blog", 
                    "Store"],
            btn: "Schedule a workout",
            i: ["fas fa-search",
                "fas fa-shopping-cart"],    
        }
    });

new Vue ({
        el: "#foot",
        data: {
            img: "img/logo.png",
            text: "Ac aliquarium neque sgittis diam faucibus vitae purus rurpis phasellus. Pellentesque consrcuruir amert ourus ultucrs maurois.",
            icons: ["fab fa-facebook-square",
                    "fab fa-instagram",
                    "fab fa-youtube",
                    "fab fa-twitter",
                    "fab fa-invision"],
            ulTitle: "RECENT POST",
            posts: ["The Best protein shake",
                    "ultimate cardio workout",
                    "New juices available now",
                    "Tips to find training partners",
                    "20 best healty reciuopes"],
            contact : "CONTACT INFORMATION",
            adress: "4746 Tipple road Michigan 48449",
            mobile: "Mobile: 1.800.000.0000",
            email: "Email: info@your-company.com",
            copyright: "©Copyright 2012-2020|Avada theme by ThemeFusion |All rights reserved|powered by Wordpress"
        }
    });

let menu;

document.addEventListener("DOMContentLoaded", loadJson);

let modtager = document.querySelector(".templateModtager");
let template = document.querySelector(".myTemplate");


async function loadJson() {
    let minListe = await fetch("menu.json");
    menu = await minListe.json();
    //console.log(menu);

    // find og filtrer retter efter kategori og gem dem i nyt array 
    let forretter = menu.filter(ret => ret.kategori == 'forretter');
    let hovedretter = menu.filter(ret => ret.kategori == 'hovedretter');
    let desserter = menu.filter(ret => ret.kategori == 'desserter');
    let drikkevarer = menu.filter(ret => ret.kategori == 'drikkevarer');
    let sideorders = menu.filter(ret => ret.kategori == 'sideorders');


    document.querySelector("#filter-alle").addEventListener("click", () => {
        visMenu(menu, "Menu")
    });
    document.querySelector("#filter-forretter").addEventListener("click", () => {
        visMenu(forretter, "Forretter")
    });
    document.querySelector("#filter-hovedretter").addEventListener("click", () => {
        visMenu(hovedretter, "Hovedretter")
    });
    document.querySelector("#filter-desserter").addEventListener("click", () => {
        visMenu(desserter, "Desserter")
    });
    document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
        visMenu(drikkevarer, "Drikkevarer")
    });
    document.querySelector("#filter-sideorders").addEventListener("click", () => {
        visMenu(sideorders, "Sideorders")
    });


    visMenu(menu, "Menu");
}


function visMenu(menu, overskrift) {
    modtager.innerHTML = "";
    document.querySelector("[data-overskrift]").textContent = overskrift;

    menu.forEach(hverRet => {
        let klon = template.cloneNode(true).content;

        klon.querySelector(".navn").textContent = hverRet.navn;
        klon.querySelector(".billede").setAttribute("src", "imgs/small/" + hverRet.billede + "-sm.jpg");
        klon.querySelector(".billede").alt = "billede af " + hverRet.billede;

        klon.querySelector(".pris").textContent = "pris:" + " " + hverRet.pris + " " + "kr";
        klon.querySelector(".kortbeskrivelse").textContent = hverRet.kortbeskrivelse;
        klon.querySelector(".langbeskrivelse").textContent = hverRet.langbeskrivelse;

        modtager.appendChild(klon);
    })

}

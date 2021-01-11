'use strick'
const ana = document.documentElement.style.scrollBehavior = "smooth"
//!-----------NAVBAR----------------------------------------
const novbor = document.querySelector("#navbar")
window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
        novbor.style.backgroundColor = "#00c3ff"
    } else {
        novbor.style.backgroundColor = "blue"
    };
});
//!-----------ANASAYFA--------------------------------------
const main = document.createElement("section");
main.setAttribute("id", "anasayfa")
main.style.height = "100vh";
document.body.appendChild(main);

const title = document.createElement("h1");
title.innerHTML = "Giriş";
title.style.textAlign = "center"
main.appendChild(title);

const prag01 = document.createElement("p");
prag01.innerText = "Donec bibendum gravida augue, ac placerat libero pellentesque et. Maecenas venenatis suscipit blandit. Sed lobortis et libero et ultrices. Vestibulum ornare tincidunt nisi, eget cursus risus ornare sit amet. Morbi id lorem ultrices, hendrerit velit eget, suscipit augue. Morbi non tempor nisl. In rutrum nulla sapien, vitae eleifend est ultricies et. Etiam porttitor, mi in efficitur feugiat, nulla massa euismod eros, eget eleifend nulla erat vitae leo. Curabitur magna sem, rhoncus quis dolor at, ultrices sodales risus. Cras vitae tempus nunc. Vivamus accumsan risus ut velit rhoncus, at gravida felis blandit. Vivamus fermentum diam sed dolor mollis faucibus. Fusce in augue ut lorem elementum hendrerit.";
prag01.style.fontSize = "25px";
main.appendChild(prag01);
//!-----------HAKKIMIZDA--------------------------------------
const main01 = document.createElement("section");
main01.setAttribute("id", "hak");
main01.style.paddingTop = "55px"
main01.style.height = "100vh";
document.body.appendChild(main01);

const title01 = document.createElement("h1");
title01.innerText = "HAKKIMIZDA";
title01.style.textAlign = "center";
main01.appendChild(title01);

const prag02 = document.createElement("p");
prag02.innerText = "Donec bibendum gravida augue, ac placerat libero pellentesque et. Maecenas venenatis suscipit blandit. Sed lobortis et libero et ultrices. Vestibulum ornare tincidunt nisi, eget cursus risus ornare sit amet. Morbi id lorem ultrices, hendrerit velit eget, suscipit augue. Morbi non tempor nisl. In rutrum nulla sapien, vitae eleifend est ultricies et. Etiam porttitor, mi in efficitur feugiat, nulla massa euismod eros, eget eleifend nulla erat vitae leo. Curabitur magna sem, rhoncus quis dolor at, ultrices sodales risus. Cras vitae tempus nunc. Vivamus accumsan risus ut velit rhoncus, at gravida felis blandit. Vivamus fermentum diam sed dolor mollis faucibus. Fusce in augue ut lorem elementum hendrerit.";
prag02.style.fontSize = "25px";
main01.appendChild(prag02);
//!--------------GİRİŞ---------------------------------------------------
function basss(){
    history.go(-1);
}

//!--------------FOOTER-------------------------------------------------------------------
 const foter=document.createElement("footer");
 foter.innerText="Tüm Haklarımız Saklıdır";
 foter.style.textAlign="center";
 foter.style.backgroundColor="blue";
 foter.style.color="white"
 foter.style.padding="10px"
 document.body.appendChild(foter)
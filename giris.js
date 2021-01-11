

//!--------------------------GİRİŞ------------------------------------------
const main02 = document.createElement("section");
main02.setAttribute("id", "giris")
main02.style.height = "90vh";
main02.style.display = "table-caption";
main02.style.marginLeft = "75vh";
main02.style.marginTop="20vh";
document.body.appendChild(main02);

const label01 = document.createElement("label");
label01.innerText = "KullanıcıAdı:";
label01.style.color="white"
label01.style.fontSize="30px"
main02.appendChild(label01);

const form = document.createElement("input");
form.setAttribute("type", "text");
form.style.width="50vh";
form.style.height="4vh";
form.style.fontSize="21px";
main02.appendChild(form);

const label02 = document.createElement("label");
label02.innerText = "Şifre:";
label02.style.color="white"
label02.style.fontSize="30px"
main02.appendChild(label02);





const form01 = document.createElement("input");
form01.setAttribute("type", "password");
form01.style.width="50vh";
form01.style.height="4vh";
form01.style.fontSize="21px";
main02.appendChild(form01);

const form02 = document.createElement("button");
form02.innerText = "Gönder";
form02.style.padding="3vh";
form02.style.borderRadius="30vh";
form02.style.marginLeft="10vh";
form02.style.marginTop="4vh";
form02.style.paddingLeft="10vh";
form02.style.paddingRight="10vh";
form02.setAttribute("onclick"," butonfonk()");
main02.appendChild(form02);

function butonfonk() {
    const Admin="admin"
    const sifre="12345"
    if(Admin==form.value && sifre==form01.value)
    {document.open('http://127.0.0.1:5500/index.html', '_self', 'width=800, height=600',)}
    else(
        alert("Tekrar deneyin")
    );

};
//!------------------
const foter=document.createElement("footer");
foter.innerText="Tüm Haklarımız Saklıdır";
foter.style.textAlign="center";
foter.style.backgroundColor="grey";
foter.style.color="white"
foter.style.padding="10px"
document.body.appendChild(foter)

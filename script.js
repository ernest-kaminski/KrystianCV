const menuBtn = document.querySelector(".icon");
const mobileMenu = document.querySelector(".menu");
const aboutMeBtn = document.querySelector(".lets-start");
const main = document.querySelector(".name");
const scrollBreakAboutMe = document.querySelector(".scroll-break-about-me");
const scrollBreakHobby = document.getElementById("hobbies");
const scrollBreakContact = document.getElementById("contact");


const scrollToAboutMe = () => {
    scrollBreakAboutMe.scrollIntoView({behavior: "smooth"})
}

const scrollToHobby = () => {
    scrollBreakHobby.scrollIntoView({behavior: "smooth"})
    //scrollTo({ top: 1300, behavior: 'smooth' })
}

const scrollToContact = () => {
    scrollBreakContact.scrollIntoView({behavior: "smooth"})
}

const closeOrOpenMobileMenu = () => {
    if(mobileMenu.classList.contains("hidden")){
        mobileMenu.classList.remove("hidden")
        mobileMenu.classList.add("visible")
    }else{
        mobileMenu.classList.add("hidden")
        mobileMenu.classList.remove("visible")
    }
}

document.getElementById("top").addEventListener("click", () => {
    scrollToAboutMe()
    closeOrOpenMobileMenu()
}); 

document.getElementById("center").addEventListener("click", () => {
    scrollToHobby()
    closeOrOpenMobileMenu()
}); 

document.getElementById("bottom").addEventListener("click", () => {
    scrollToContact()
    closeOrOpenMobileMenu()
}); 

main.addEventListener("click", () => {
    scrollTo({ top: 0, behavior: 'smooth' })
})

menuBtn.addEventListener("click", () => {
    closeOrOpenMobileMenu()
})

aboutMeBtn.addEventListener("click", () => {
    scrollToAboutMe()
})

//wzięte żywcem z Twojego skryptu, ewentualne jakieś kosmetyczne zmiany

const btn = document.getElementById("joke-btn");
const showjoke = document.querySelector(".joke-space");
const joke = [
    "Jak się czuje ogórek w towarzystwie śmietany? Mizernie. ",
    "Dresiarz idzie do lasu a jakiś człowiek go pyta: gdzie idziesz? A dresiarz odpowiada: po ziomki. ",
    "Ile dni górnik ma urlopu po śmierci? 3 a potem znów pod ziemię",
    "Jak nazywa sie płacz małego raczka? Wycieraczka",
    "Spotyka się dwóch programistów: - Słyszałem, że straciłeś pracę. Jak to jest być bezrobotnym? - To było najgorsze pół godziny mojego życia!",
    "Żona do programisty: idź do sklepu kup 5 bułek, a jak będą jajka kup 10. Programista będąc w sklepie: - Są jajka? Sprzedawczyni: - Tak, są. Programista: To poproszę 10 bułek.",
    "Co robi programista po 8 piwach? cout",
    "int kobieta; //kobieta zmienną jest",
    "Rozmawia dwóch informatyków, jeden mówi do drugiego: - Słuchaj, może pożyczysz mi 500 PLN, no powiedzmy 512 tak dla równego rachunku.",
    "Impreza informatyków. Wódka leje się szerokopasmowym strumieniem. Dwóch adminów pije bruderszafta:- To co? Mówmy sobie po IP!",
    " Dlaczego programista na umycie głowy zużywa całą butelkę szamponu? – Bo w instrukcji jest napisane: nałożyć, spłukać, czynność powtórzyć.",
  ];

  let number = Math.trunc(Math.random() * 6) + 1;

  btn.addEventListener("click", function () {
    number = Math.trunc(Math.random() * joke.length);
    showjoke.textContent = joke[number];
  });
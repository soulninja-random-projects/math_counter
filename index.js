// soulninja plus
// https://api.countapi.xyz/update/soulninja/soul-counter/?amount=1
// soulninja minus
// https://api.countapi.xyz/update/soulninja/soul-counter/?amount=-1

// kairav plus
// https://api.countapi.xyz/update/soulninja/kairav-count/?amount=1
// kairav minus
// https://api.countapi.xyz/update/soulninja/kairav-count/?amount=-1

const my_plus = document.getElementById("my-plus");
const my_minus = document.getElementById("my-minus");
const kair_plus = document.getElementById("kair-plus");
const kair_minus = document.getElementById("kair-minus");
const soul = document.getElementById("soul");
const kair = document.getElementById("kair");

function myPlus() {
    fetch('https://api.countapi.xyz/update/soulninja/soul-counter/?amount=1')
        .then(res => res.json())
        .then(res => {
            soul.innerHTML = res.value;
        })
}
function myMinus() {
    fetch('https://api.countapi.xyz/update/soulninja/soul-counter/?amount=-1')
        .then(res => res.json())
        .then(res => {
            soul.innerHTML = res.value;
        })
}

function kairPlus() {
    fetch('https://api.countapi.xyz/update/soulninja/kairav-count/?amount=1')
        .then(res => res.json())
        .then(res => {
            kair.innerHTML = res.value;
        })
}
function kairMinus() {
    fetch('https://api.countapi.xyz/update/soulninja/kairav-count/?amount=-1')
        .then(res => res.json())
        .then(res => {
            kair.innerHTML = res.value;
        })
}
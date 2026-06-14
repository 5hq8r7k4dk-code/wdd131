const card = document.querySelector('.card');
const attacked = document.querySelector('#attacked_button');
const level_up = document.querySelector('#level_up_button');
let level = 5
let health = 100
let displayedLevel = document.querySelector('#level');
let displayedHealth = document.querySelector('#health');

level_up.addEventListener('click', function(){
    level += 1;
    displayedLevel.innerHTML = `<b>Level: </b>${level}`;
});

attacked.addEventListener('click', function(){
    health -= 20;
    displayedHealth.innerHTML = `<b>Health: </b>${health}`;
    if (health === 0) {
        alert("Character Died");
    }
});

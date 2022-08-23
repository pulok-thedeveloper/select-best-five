const buttons = document.getElementsByClassName('select-btn');
let playerAdded = 0;
for(const button of buttons){
    button.addEventListener("click", function (event) {
        playerAdded++;
        if(playerAdded<6){
            const playerName = event.target.parentNode.querySelector('.player-name').innerText;

            const listContainer = document.getElementById("list-container");
            const li = document.createElement("li");
            li.classList.add("item");
            li.innerText = playerAdded+". "+playerName;
            listContainer.appendChild(li);
            event.target.setAttribute("disabled", true);
            event.target.style.backgroundColor = 'gray';
        }
        else{
            alert('You can select only five players');
        }
    });
}

document.getElementById('calculate-player-expenses').addEventListener('click',function(){
    const perPlayerPrice = getInputFieldValueById('per-player-field');
    const playerExpenses = perPlayerPrice*playerAdded;
    document.getElementById('player-expenses').innerText = playerExpenses;
})

document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const managerExpense = getInputFieldValueById('manager-field');
    const coachExpense = getInputFieldValueById('coach-field');
    const playerExpenses = getTextElementValueById('player-expenses');
    const totalExpense = playerExpenses + managerExpense + coachExpense;
    document.getElementById('total-expense').innerText = totalExpense;
})
const buttons = document.getElementsByClassName('select-btn');
let count = 0;
for(const button of buttons){
    button.addEventListener("click", function (event) {
        count++;
        if(count<6){
            const playerName = event.target.parentNode.querySelector('.player-name').innerText;

            const listContainer = document.getElementById("list-container");
            const li = document.createElement("li");
            li.classList.add("item");
            li.innerText = count+". "+playerName;
            listContainer.appendChild(li);
        }
        else{
            alert('You can select only five players');
        }
    });
}


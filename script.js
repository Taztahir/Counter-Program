// increase and decrease

const heading = document.getElementById("heading");
const answer = document.getElementById("answer");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn")
const decreaseBtn = document.getElementById("decreaseBtn");
count = 0;

increaseBtn.onclick = function(){
    count++;
    answer.textContent = count;
    heading.textContent = "INCREASING..."
}
resetBtn.onclick = function(){
    count = 0;
    answer.textContent = count;
    heading.textContent = "INCREASE AND DECREASE"
}
decreaseBtn.onclick = function(){
    count--;
    answer.textContent = count;
    heading.textContent = "DECREASING..."
}

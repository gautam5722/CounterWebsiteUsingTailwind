
const counting =  document.querySelector('#counter');

const increment = () => {
    let countValue = parseInt(counting.innerHTML);
    countValue = countValue + 1;
    counting.innerHTML = countValue;
};

const decrement = () => {
    let countValue = parseInt(counting.innerHTML);
    countValue = countValue - 1;
    counting.innerHTML = countValue;
    
};
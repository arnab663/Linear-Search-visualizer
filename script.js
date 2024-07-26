function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateArray(){
    const min = 0, max = 100
    let arr = []
    for(i=0; i<20; i++){
        const randomElement = Math.floor(Math.random()*((max-min)+1));
        arr.push(randomElement)
    }
    return arr
}


async function linearSearch() {
    const arrayElements = document.getElementsByClassName('bar');
    const prevKey = document.querySelector('#found');
    if (prevKey) {
        prevKey.removeAttribute('id');
        prevKey.classList.remove('found', 'highlight');
    }

    const searchValue = parseInt(document.getElementById('search-key').value, 10);

    if(!searchValue){
        alert("Enter some value to search !!")
        return
    }

    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].classList.add('highlight');
        await sleep(500);
        if (parseInt(arrayElements[i].textContent, 10) === searchValue) {
            arrayElements[i].classList.add('found');
            arrayElements[i].setAttribute('id', 'found');
            setTimeout(()=>{
                alert("Element found !!")
                arrayElements[i].classList.remove('found','highlight');
            },200)
            return;
        }
        
        arrayElements[i].classList.remove('highlight');
    }
    
    setTimeout(()=>{alert(`${searchValue} not found`)},200);
}


function displayArray(array){
    const barContainer = document.getElementById('bar-container');
    barContainer.innerHTML = ""

    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value}%`;
        const valueText = document.createElement('span')
        valueText.textContent = value;
        bar.appendChild(valueText)
        barContainer.appendChild(bar);
    });
}

function generateAndDisplayArray(){
    const array = generateArray()
    displayArray(array)
}

document.addEventListener('DOMContentLoaded', () => {
    generateAndDisplayArray()
});
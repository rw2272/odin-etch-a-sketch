function changeColor() {
    this.style.backgroundColor = document.querySelector("#favcolor").value;
    return false;
}

function addcontent(){

    if(document.querySelector('#quantity').value<1 || document.querySelector('#quantity').value > 99){
        console.log('error')
        alert("Error: your number is not between 1 and 99")
    }
    else{
        //remove existing element
        document.querySelectorAll(".gridbox").forEach(el => el.remove())

        // create new grid
        for(i = 0; i < document.querySelector('#quantity').value ** 2; i++){
            test = document.createElement("div")
            test.setAttribute('class', 'gridbox');
            test.style.aspectRatio = 1; 
            test.addEventListener("mouseover", (el) => {console.log(el.target)})
            test.addEventListener("mouseover", changeColor);
            document.querySelector("#grid").append(test);
        }

        document.querySelector("#grid").style.gridTemplateColumns = `repeat(${document.querySelector('#quantity').value}, auto)`;
        document.querySelector("#grid").style.gridTemplateRows = `repeat(${document.querySelector('#quantity').value}, auto)`;

        //NOTE: CORRECT WORKING WAY:
        // const el = document.createElement('div')
        
        // document.querySelector("#content").append(el)

        // el.setAttribute('id', 'my-id');
        // el.style.backgroundColor = 'salmon';
        // el.style.color = 'white';
        // el.style.width = '150px';
        // el.style.height = '150px';
        // el.textContent = 'Hello world';

        }
    }
        

button.addEventListener("click", addcontent)

document.querySelectorAll(".gridbox").forEach(el => el.addEventListener("mouseover", changeColor))


// button2.addEventListener("click", button2function)

// function button2function(){
//     console.log(document.querySelector("#favcolor").value);
// }
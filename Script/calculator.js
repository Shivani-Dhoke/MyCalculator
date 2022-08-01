let screen = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => { 
           
        if (e.target.innerHTML == '=') {
            console.log(e.target)
            screen = eval(screen)
            document.querySelector('input').value = screen;

        }
        else if(e.target.innerHTML == 'AC'){
            screen = "";
            document.querySelector('input').value = screen;

        }
        else{
            screen = screen + e.target.innerHTML;
            // console.log(e.target)
        document.querySelector('input').value = screen;
    }
    })
})

let i = 0

const heading = document.querySelector('.heading')


heading.addEventListener("wheel", (e) => {
    let y = e.deltaY;

    if(y < 0 ){
       i--
    }
    if(y > 0 ){
        i++
    }

    console.log(i);
    heading.style.width = `${i}%`; 
});


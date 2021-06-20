//fectching names for the header


fetch('./data.json')
.then(res => res.json())
.then(data => { 
    console.log(data)
    data.forEach(planet => {
        
        let res = `<p>
            ${planet.name}
        </p>`
        
        const names = document.getElementById('planet_names')
        names.innerHTML += res
    });
   
})


//The earth core shows on mouse over
const earthImg = () =>{
    let earth = document.getElementById('earth')
    earth.src = 'assets/planet-earth-internal.svg'
}
//The earth image reverts
const earthImgRevert = () =>{
    let earth = document.getElementById('earth')
    earth.src = 'assets/planet-earth.svg' 
}

const hide_para2_3 = () =>{
    let para1 = document.getElementById('para1')
    let para2 = document.getElementById('para2')
    let para3 = document.getElementById('para3')

    para1.style.display = 'block'
    para2.style.display = 'none'
    para3.style.display = 'none'


}

const hide_para1_3 = () =>{
    let para1 = document.getElementById('para1')
    let para2 = document.getElementById('para2')
    let para3 = document.getElementById('para3')

    para1.style.display = 'none'
    para2.style.display = 'block'
    para3.style.display = 'none'


}


const hide_para1_2 = () =>{
    let para1 = document.getElementById('para1')
    let para2 = document.getElementById('para2')
    let para3 = document.getElementById('para3')

    para1.style.display = 'none'
    para2.style.display = 'none'
    para3.style.display = 'block'


}


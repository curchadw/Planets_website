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

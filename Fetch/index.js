  "use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    let url = "https://pokeapi.co/api/v2/pokemon";
    async function mostrarData(){
        let res= await fetch(url);
        let data= await res.json();
        console.log(data.results);
        data.results.forEach(e => {
            console.log(e);
            document.querySelector("#data").innerHTML+=
            `<tr>
                <td> ${e.name} </td> <td> ${e.url} </td> <td> ${e.type} </td></tr>`
        });
      }mostrarData();
})

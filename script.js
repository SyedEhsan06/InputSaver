// let val = document.getElementById("inp").innerText
const btn = document.getElementById("btn-id")
const input = document.getElementById("inp");
let delbtn = document.getElementById("delbtn")
const ul = document.getElementById("ul")
let saved = []


const savedofLocal = JSON.parse(localStorage.getItem("saved"))

if (savedofLocal) {
    saved = savedofLocal
    renderSaved()
}

// console.log(input)
btn.addEventListener("click", function () {
    saved.push(input.value)
    input.value = ""
    localStorage.setItem("saved",JSON.stringify(saved))

    renderSaved()
})
function renderSaved(params) {
    let listItems = ""
    for (let i = 0; i < saved.length; i++) {
        // listItems += "<li><a  target='_blank' href=' " + saved[i] + " '>" + saved[i] + "</li>"
        listItems += `
            <li>
             <a target='_blank' href='${saved[i]}'>
                ${saved[i]}
            </a>
            </li>
`
    }
    ul.innerHTML = listItems
}

delbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    saved = []
    renderSaved()
    console.log("Your Saved Data Deleted")
})
import { getAuthors, setAuthorId } from "./dataAccess.js";


export const AuthorSelector = ()=>{
    let html = `<label for="authorSelection">Author</label><br>
    <select name="authorSelection">`
    const authorsHTML = getAuthors().map(author =>{
        return `<option value="${author.id}">${author.name}</option>`
    })
    html += authorsHTML.join("")
    html += `</select>`
    return html
}

document.addEventListener("change",
    (event)=>{
        if (event.target.name === "authorSelection"){
            console.log("selected")
            setAuthorId(parseInt(event.target.value)) 
        }
    })
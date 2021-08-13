import { getRecipients, setRecipientId } from "./dataAccess.js"



export const RecipientSelector = ()=>{
    let html = `<label for="recipientSelection">Select Recipient</label><br><select name="recipientSelection">`
    const recipientHTML = getRecipients().map(recipient =>{
        return `<option value="${recipient.id}">${recipient.name}</option>`
    })
    html += recipientHTML.join("")
    html += `</select>`
    return html
}




document.addEventListener("change",
    (event)=>{
        if (event.target.name === "recipientSelection"){
            console.log("selected")
            
            setRecipientId(parseInt(event.target.value)) 
        }
    })
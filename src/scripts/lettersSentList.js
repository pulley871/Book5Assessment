import { getLetters,foundAuthor, foundRecipients, foundTopics, deleteLetter, getTransientState, getSelectedTopics} from "./dataAccess.js";


export const LettersList = ()=>{
    const letters = getLetters()
    let html = ""
    const lettersHTML = letters.map((letter)=>{
        const author = foundAuthor(letter.authorId)
        const recipient = foundRecipients(letter.recipientId)
        const selectedTopics = getSelectedTopics().filter((topic)=> topic.letterId === letter.id)
        return `<article class="sentLetter">
                    <ul>
                        <li>Author: ${author.name}(${author.email})</li>
                        <li>Recipient: ${recipient.name}(${recipient.email})</li>
                        <li>Letter Conent: ${letter.content}</li>
                        <li>Date: ${letter.date}</li>
                    </ul>
                    <div class="allTopics">
                    ${selectedTopics.map((topic)=>{
                        const foundTopic = foundTopics(topic.topicId)
                        return `<div class="topicContainer"><p>${foundTopic.name}</p></div>`
                    }).join("")}
                    </div>
                    <button id="deleteLetter--${letter.id}" class="deleteButton">Delete Letter</button>
                </article>`
    }).join("")
    html += lettersHTML
    return html
}


document.addEventListener("click",
    (event) =>{
        if (event.target.id.startsWith("deleteLetter")){
            const [,eventId] = event.target.id.split("--")
            deleteLetter(parseInt(eventId))
        }
    })
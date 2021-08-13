import { getTransientState,getAuthors, getRecipients, getTopics, sendLetter, sendSelectedTopic, getLetters} from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

const topicObject = ()=>{
    const transientState = getTransientState()
    const letters = getLetters()
    const topicArray = transientState.topics.map((topic)=>{
        if (letters.length > 0){
            const lastIndex = letters.length -1
            const lastLetterId = letters[lastIndex].id
            topic.letterId = lastLetterId + 1
            sendSelectedTopic(topic)
            console.log(getTransientState().topics)
        }else{
            topic.letterId = 1
            sendSelectedTopic(topic)
        }
    })

}

const letterObject = ()=>{
    const transientState = getTransientState()
    const object = {
        authorId: transientState.authorId,
        content: document.getElementById("letterContent").value,
        recipientId: transientState.recipientId,
        date: new Date(Date.now()).toString().substr(4, 11)
    }
    return object
}
export const SubmitButton = ()=>{
    return `<button id="submitOrder">Send Message</button>`
}
document.addEventListener("click",
    (event)=>{
        if (event.target.id === "submitOrder"){
            
            sendLetter(letterObject())
            topicObject()
        }
    })
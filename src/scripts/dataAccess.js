const database = {
    letters: [],
    authors: [],
    recipients: [],
    topics:[],
    selectedTopics: [],
    transientState: {topics:[]}
}

export const getLetters = ()=> database.letters.map((letter)=>({...letter}))
export const getAuthors = ()=> database.authors.map((author)=>({...author}))
export const getRecipients = () => database.recipients.map((recipient)=>({...recipient}))
export const getTopics = ()=> database.topics.map((topic)=>({...topic}))
export const getSelectedTopics = ()=> database.selectedTopics.map((topic)=>({...topic}))
export const getTransientState = () => database.transientState
export const setAuthorId = (id)=> database.transientState.authorId = id
export const setRecipientId = (id)=> database.transientState.recipientId = id
export const PushTopicId = (id)=> database.transientState.topics.push(id)
export const PopTopicId = (num) => database.transientState.topics.splice(num, 1)
    

const API = 'http://localhost:8088';

//fetch all data
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letter) => {
                database.letters = letter
            }
        )
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (author) => {
                database.authors = author
            }
        )
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipient) => {
                database.recipients = recipient
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topic) => {
                database.topics = topic
            }
        )
}
export const fetchSelectedTopics = () => {
    return fetch(`${API}/selectedTopics`)
        .then(response => response.json())
        .then(
            (topic) => {
                database.selectedTopics = topic
            }
        )
}
// send letter
const mainContainer = document.querySelector("#mainContainer")
export const sendLetter = (object) =>{
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }
    return fetch(`${API}/letters`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}
export const sendSelectedTopic = (object) =>{
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }
    return fetch(`${API}/selectedTopics`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                database.transientState.topics = []
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}
//delete Json object
export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, {method: "DELETE"})
    .then(()=>{mainContainer.dispatchEvent(new CustomEvent("stateChanged"))})
}



//found methods to find specific items
export const foundAuthor = (id) =>{
    const foundAuthor = getAuthors().find((author)=> author.id === id)
    return foundAuthor
}

export const foundRecipients = (id) =>{
    const foundRecipient = getRecipients().find((recipient)=> recipient.id === id)
    return foundRecipient
}
export const foundTopics = (id) =>{
    const foundTopic = getTopics().find((topic)=> topic.id === id)
    return foundTopic
}
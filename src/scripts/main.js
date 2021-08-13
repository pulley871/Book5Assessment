import {fetchLetters, fetchAuthors, fetchRecipients, fetchTopics, fetchSelectedTopics} from "./dataAccess.js"
import { LettersHtml } from "./letters.js";

const mainContainer = document.querySelector("#mainContainer");

const render = () =>{
    fetchSelectedTopics()
    fetchAuthors()
    fetchLetters()
    fetchRecipients()
    fetchTopics()
    .then(()=> mainContainer.innerHTML = LettersHtml() )
}
render();

mainContainer.addEventListener("stateChanged",(event)=>{
    render()
})
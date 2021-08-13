import { AuthorSelector } from "./authors.js"
import { letterBuilderHtml } from "./letterBuilder.js"
import { LettersList } from "./lettersSentList.js"
import { RecipientSelector } from "./recipients.js"
import { SubmitButton } from "./SubmitLetter.js"
import { TopicsHtml } from "./topics.js"


export const LettersHtml = () =>{
    return `<h1>Letters</h1> 
    <div>
    ${AuthorSelector()}
    </div>
    <div class="letterConatiner">
    ${letterBuilderHtml()}
    </div>
    <div>
    ${TopicsHtml()}
    </div>
    <div>${RecipientSelector()}</div>
    <div class="submitButton">${SubmitButton()}</div>
    <div>
        <h2>Sent Letters</h2>
        ${LettersList()}
    </div>`
    
}
import { PushTopicId, getSelectedTopics, getTopics, getTransientState, PopTopicId } from "./dataAccess.js"



export const TopicsHtml = () =>{
    let html = `<ul id="topicList">`
    const topics = getTopics().map((topic)=>{
        return `<li><input type="checkBox" name="topics--${topic.name}" value="${topic.id}"></li><label for="${topic.name}">${topic.name}</label>`
    })
    html += topics.join("")
    html += `</ul>`
    return html
}



document.addEventListener("change",
    (event)=>{
        if (event.target.name.startsWith("topics")){
            console.log(event.target.value)
            const IdObject = {topicId: parseInt(event.target.value)}
            const topicArray = getTransientState().topics
            if (topicArray.length > 0){
                if (topicArray.some((topic)=> topic.topicId === IdObject.topicId)){
                    const index = topicArray.findIndex(x => x.topicId ===IdObject.topicId)
                    PopTopicId(index)
                    console.log(getTransientState().topics)
                }else{
                     PushTopicId(IdObject)
                     console.log(getTransientState().topics)

                 }

            }else{
                PushTopicId(IdObject)
                console.log(getTransientState().topics)

            }
        }
    })
import React from "react";


function makeEmojiList(minutes) {
    
    const interval = minutes <30 ? 5 : 10;
}

function Article ({ title, date = "January 1, 1970", preview, minutes }){

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} . {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
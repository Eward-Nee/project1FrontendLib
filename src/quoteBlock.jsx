import React, { useState } from "react";

function QuoteBlock() {
    const [quoteText, setQuoteText] = useState("")
    const [quoteAuthor, setQuoteAuthor] = useState("")
    const [onstart, setOnStart] = useState(true)

    if (onstart) {
        setOnStart(false)
        newQuote()
    }

    function newQuote() {
        try {
            fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://quote-generator-api-six.vercel.app/api/quotes/random'))
                .then(res => res.json())
                .then(data => {
                    const quoteData = JSON.parse(data.contents);
                    console.log(quoteData);
                    setQuoteAuthor(quoteData.category);
                    setQuoteText(quoteData.quote);
                });
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className="d-flex justify-content-center align-items-center">
            <div id="quote-box" className="w-50 text-center">
                <p id="text">{quoteText}</p>
                <h5 id="author">{quoteAuthor}</h5>
                <br />
                <button id="new-quote" onClick={newQuote}>Get a new quote</button>
                <br />
                <a href="twitter.com/intent/tweet" id="tweet-quote">tweet the quote</a>
                <br /><br />

            </div>

        </div>
    )
}

export default QuoteBlock
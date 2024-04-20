"strict mode";
const btnGetQuote = document.querySelector(".new-quote");
const quote = document.querySelector(".quote--text");
const author = document.querySelector(".author");
const btnTweet = document.querySelector(".tweet");

const getQuote = async function () {
  try {
    const response = await fetch(
      `https://api.quotable.io/quotes/random?maxLength=150`
    );
    const data = await response.json();
    quote.textContent = data[0].content;
    author.textContent = data[0].author;
  } catch (err) {
    console.error(err);
  }
};

function shareOnTwitter() {
  try {
    // Get the quote text
    const quoteText = quote.innerText;
    const twitterShareURL = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(twitterShareURL, "_blank", "width=400,height=300");
  } catch (error) {
    console.error("Failed to copy quote text: ", error);
    // Handle any error that occurs while copying the text
  }
}

btnGetQuote.addEventListener("click", getQuote);

btnTweet.addEventListener("click", shareOnTwitter);

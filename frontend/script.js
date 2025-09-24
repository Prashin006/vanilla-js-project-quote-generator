const API_BASE =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : 'https://vanilla-js-quote-generator-backend.onrender.com';

const url = new URL(`${API_BASE}/api/quote`);

let QUOTE_KEY = 'quote',
  AUTHOR_KEY = 'author';
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
const btn = document.getElementById('new-quote');

if (localStorage.getItem(QUOTE_KEY) && localStorage.getItem(AUTHOR_KEY)) {
  quote.innerText = localStorage.getItem(QUOTE_KEY);
  author.innerText = localStorage.getItem(AUTHOR_KEY);
} else {
  fetchQuoteAndSave();
}

btn.addEventListener('click', fetchQuoteAndSave);

async function fetchQuoteAndSave() {
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();
  const [json] = data;
  quote.innerText = json.quote;
  author.innerText = json.author;
  localStorage.setItem(QUOTE_KEY, json.quote);
  localStorage.setItem(AUTHOR_KEY, json.author);
}

setInterval(fetchQuoteAndSave, 300 * 1000);

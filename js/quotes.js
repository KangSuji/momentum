const quotes = [
  {
    quotes: "Where there is no desire, there will be no industry.",
  },
  {
    quotes: "All fortune is to be conquered by bearing it.",
  },
  {
    quotes: "Nature never deceives us; it is always we who deceive ourselves.",
  },
  {
    quotes: "We give advice, but we cannot give conduct.",
  },
  {
    quotes: "By doubting we come at the truth.",
  },
  {
    quotes: "Good fences makes good neighbors.",
  },
  {
    quotes: "Envy and wrath shorten the life.",
  },
  {
    quotes: "Pain past is pleasure.",
  },
  {
    quotes:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
  },
  {
    quotes: "Waste not fresh tears over old griefs.",
  },
];

const quote = document.querySelector("#quote span:first-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quotes;

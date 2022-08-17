const quotes = [
  {
    quote:
      'Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.',
    author:
      'Margaret Mead',
  },
  {
    quote:
      'We accept the love we think we deserve.',
    author:
      'Stephen Chbosky',
  },
  {
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author:
      'Marilyn Monroe',
  },
  {
    quote:
      "I have not failed.I've just found 10,000 ways that won't work.",
    author:
      'Thomas A.Edison',
  },
  {
    quote:
      'To the well - organized mind, death is but the next great adventure.',
    author:
      'J.K.Rowling',
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one.I hope someday you'll join us. And the world will live as one.",
    author:
      'John Lennon',
  },
  {
    quote:
      'You only live once, but if you do it right, once is enough.',
    author:
      'Mae West',
  },
  {
    quote:
      "A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.",
    author:
      'Jane Austen',
  },
  {
    quote:
      'The fool doth think he is wise, but the wise man knows himself to be a fool.',
    author:
      'William Shakespeare',
  },
  {
    quote:
      'Knowing yourself is the beginning of all wisdom.',
    author:
      'Aristotle',
  },
];

const quote = document.querySelector('.quote-container span:first-child');
const author = document.querySelector('.quote-container span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
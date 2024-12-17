const book = {
  title: 'string',
  author: 'string',
  publishedDate: new Date(),
};

fetch('http://localhost:3000/books', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(book),
})
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  });

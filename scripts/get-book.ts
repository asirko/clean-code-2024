fetch('http://localhost:3000/books/2')
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  });

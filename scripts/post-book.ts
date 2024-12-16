fetch('http://localhost:3000/books')
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  });

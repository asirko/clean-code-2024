const body = {
  name: 'string',
  description: 'string',
  level: 3,
  isPublished: false,
  ingredients: [
    {
      label: 'label',
      recipeId: 3,
    },
  ],
};

fetch('http://localhost:3000/recipes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  });

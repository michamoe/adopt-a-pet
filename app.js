const express = require('express')
const app = express()
const port = 3000
const petList = require("./petList");


app.get("/animals/:pet_type", (req, res) => {

    const petType = req.params.pet_type;
    const petListPets = petList[petType].map(pet => `<li>${pet}</li>`).join('');
    const indexAnimals = `
        <h1>List of ${petType}</h1>
        <ul>
            ${petListPets}
        </ul>
    `;
    res.send(indexAnimals);
})


app.get("/", (req, res) => {

    const index = `
        <h1>Adopt a Pet!</h1>
        <p>Browse through the links below to find your new furry friend:</p>
        <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
        </ul>
        `;

    res.send(index);
  });

  
  app.get("animals/:pet_type/:pet_id", (req, res) => {
    const petType = req.params.pet_type;
    const petId = req.params.pet_id;
    const petIdPets = petList[petType.petId].map(pet => `<li>${pet}</li>`).join('')
    
    const findPet = `
        <h1>${pet.name}</h1>
        <img src="${pet.url}" />
        <p>${pet.description}</p>
        <ul>
        <li>Breed: ${pet.breed}</li>
        <li>Age: ${pet.age}</li>
        </ul>
        `;

    res.send(findPet);
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


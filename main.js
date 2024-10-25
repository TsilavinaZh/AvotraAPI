// const express = require('express');
// const app = express();
// const port = 3000;

// // Exemple de données JSON
// const json1 = [
//   {
//     "id": 1,
//     "cover_image_url": "https://images.pexels.com/photos/19899084/pexels-photo-19899084/free-photo-of-empty-kitchen-interior-with-white-furniture.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "name": "Appartement moderne dans le centre-ville",
//     "month_price": "120.000Ar",
//     "commodities": [
//       "2 douches",
//       "1 terrasse",
//       "1 niche pour chien",
//       "cage d'oiseaux",
//       "4 chambres",
//       "2 chambres amis"
//     ],
//     "proprietaire": {
//       "image": "https://example.com/owner1.jpg",
//       "lastname": "Dupont",
//       "firstname": "Jean",
//       "tel": "+1234567890",
//       "email": "jean.dupont@example.com",
//       "totalOffers": 5,
//       "totalStars": 4
//     },
//     "location_adresse": "0712 L 20",
//     "location_city": "Ambavahadimangatsiaka",
//     "description": "Appartement lumineux avec vue sur parc, entièrement rénové.",
//     "longText": "Universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere..."
//   },
//   {
//     "id": 2,
//     "cover_image_url": "https://images.pexels.com/photos/19899084/pexels-photo-19899084/free-photo-of-empty-kitchen-interior-with-white-furniture.jpeg?auto=compress&cs=tinysrgb&w=800",
//     "name": "Appartement moderne dans le centre-ville",
//     "month_price": "120.000Ar",
//     "commodities": [
//       "2 douches",
//       "1 terrasse",
//       "1 niche pour chien",
//       "cage d'oiseaux",
//       "4 chambres",
//       "2 chambres amis"
//     ],
//     "proprietaire": {
//       "image": "https://example.com/owner1.jpg",
//       "lastname": "Dupont",
//       "firstname": "Jean",
//       "tel": "+1234567890",
//       "email": "jean.dupont@example.com",
//       "totalOffers": 5,
//       "totalStars": 4
//     },
//     "location_adresse": "0712 L 20",
//     "location_city": "Ambavahadimangatsiaka",
//     "description": "Appartement lumineux avec vue sur parc, entièrement rénové.",
//     "longText": "Universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere..."
//   }
// ];

// const json2 = [
//   {
//     "id": 1,
//     "post": "Avis sur notre nouvelle maison : spacieuse, lumineuse, et bien située.",
//     "userName": "Avotra Ranaivoson",
//     "userPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "postPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "totalComment": 12,
//     "totalLike": 15
//   },
//   {
//     "id": 2,
//     "post": "Avis sur notre nouvelle maison : spacieuse, lumineuse, et bien située.",
//     "userName": "Avotra Ranaivoson",
//     "userPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "postPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "totalComment": 12,
//     "totalLike": 15
//   }
// ];

// const json3 = [
//   {
//     "id": 1,
//     "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "lastname": "Avotra1",
//     "firstname": "RANAIVOSON",
//     "tel": "(+261)321908264",
//     "email": "ranaivosonnomenjanaharyavotra@gmail.com",
//     "totalOffers": 3,
//     "totalStars": 5
//   },
//   {
//     "id": 2,
//     "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "lastname": "Avotra2",
//     "firstname": "RANAIVOSON",
//     "tel": "(+261)321908264",
//     "email": "ranaivosonnomenjanaharyavotra@gmail.com",
//     "totalOffers": 3,
//     "totalStars": 5
//   },
//   {
//     "id": 3,
//     "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
//     "lastname": "Avotra3",
//     "firstname": "RANAIVOSON",
//     "tel": "(+261)321908264",
//     "email": "ranaivosonnomenjanaharyavotra@gmail.com",
//     "totalOffers": 3,
//     "totalStars": 5
//   }
// ];


// // Route pour le premier JSON
// app.get('/api/appartement', (req, res) => {
//   res.json(json1);
// });

// // Route pour le deuxième JSON
// app.get('/api/post', (req, res) => {
//   res.json(json2);
// });

// // Route pour le troisième JSON
// app.get('/api/user', (req, res) => {
//   res.json(json3);
// });

// // Démarrer le serveur
// app.listen(port, () => {
//   console.log(`Serveur en cours d'exécution à http://localhost:${port}`);
// });












const express = require('express');
const cors = require('cors'); // Ajoutez CORS ici
const app = express();
const port = 3000;

// Activez CORS pour toutes les requêtes
app.use(cors());


const json1 = [
  {
    "id": 1,
    "cover_image_url": "https://images.pexels.com/photos/19899084/pexels-photo-19899084/free-photo-of-empty-kitchen-interior-with-white-furniture.jpeg?auto=compress&cs=tinysrgb&w=800",
    "name": "Appartement moderne dans le centre-ville",
    "month_price": "120.000Ar",
    "commodities": [
      "2 douches",
      "1 terrasse",
      "1 niche pour chien",
      "cage d'oiseaux",
      "4 chambres",
      "2 chambres amis"
    ],
    "proprietaire": {
      "image": "https://example.com/owner1.jpg",
      "lastname": "Dupont",
      "firstname": "Jean",
      "tel": "+1234567890",
      "email": "jean.dupont@example.com",
      "totalOffers": 5,
      "totalStars": 4
    },
    "location_adresse": "0712 L 20",
    "location_city": "Ambavahadimangatsiaka",
    "description": "Appartement lumineux avec vue sur parc, entièrement rénové.",
    "longText": "Universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere..."
  },
  {
    "id": 2,
    "cover_image_url": "https://images.pexels.com/photos/19899084/pexels-photo-19899084/free-photo-of-empty-kitchen-interior-with-white-furniture.jpeg?auto=compress&cs=tinysrgb&w=800",
    "name": "Appartement moderne dans le centre-ville",
    "month_price": "120.000Ar",
    "commodities": [
      "2 douches",
      "1 terrasse",
      "1 niche pour chien",
      "cage d'oiseaux",
      "4 chambres",
      "2 chambres amis"
    ],
    "proprietaire": {
      "image": "https://example.com/owner1.jpg",
      "lastname": "Dupont",
      "firstname": "Jean",
      "tel": "+1234567890",
      "email": "jean.dupont@example.com",
      "totalOffers": 5,
      "totalStars": 4
    },
    "location_adresse": "0712 L 20",
    "location_city": "Ambavahadimangatsiaka",
    "description": "Appartement lumineux avec vue sur parc, entièrement rénové.",
    "longText": "Universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere..."
  }
];

const json2 = [
  {
    "id": 1,
    "post": "Avis sur notre nouvelle maison : spacieuse, lumineuse, et bien située.",
    "userName": "Avotra Ranaivoson",
    "userPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "postPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "totalComment": 12,
    "totalLike": 15
  },
  {
    "id": 2,
    "post": "Avis sur notre nouvelle maison : spacieuse, lumineuse, et bien située.",
    "userName": "Avotra Ranaivoson",
    "userPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "postPicture": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "totalComment": 12,
    "totalLike": 15
  }
];

const json3 = [
  {
    "id": 1,
    "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "lastname": "Avotra1",
    "firstname": "RANAIVOSON",
    "tel": "(+261)321908264",
    "email": "ranaivosonnomenjanaharyavotra@gmail.com",
    "totalOffers": 3,
    "totalStars": 5
  },
  {
    "id": 2,
    "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "lastname": "Avotra2",
    "firstname": "RANAIVOSON",
    "tel": "(+261)321908264",
    "email": "ranaivosonnomenjanaharyavotra@gmail.com",
    "totalOffers": 3,
    "totalStars": 5
  },
  {
    "id": 3,
    "image": "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "lastname": "Avotra3",
    "firstname": "RANAIVOSON",
    "tel": "(+261)321908264",
    "email": "ranaivosonnomenjanaharyavotra@gmail.com",
    "totalOffers": 3,
    "totalStars": 5
  }
];






// Route pour le premier JSON
app.get('/api/appartement', (req, res) => {
  res.json(json1);
});

// Route pour le deuxième JSON
app.get('/api/post', (req, res) => {
  res.json(json2);
});

// Route pour le troisième JSON
app.get('/api/user', (req, res) => {
  res.json(json3);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution à http://localhost:${port}`);
});

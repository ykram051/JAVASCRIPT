const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCCvBvOXZyxVoLvZqJDkOGfERbkFaWXsT8",
    authDomain: "um6p-course-df4f2.firebaseapp.com",
    projectId: "um6p-course-df4f2",
    storageBucket: "um6p-course-df4f2.appspot.com",
    messagingSenderId: "661353095202",
    appId: "1:661353095202:web:8ad0735050c4e74968aa7b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const recipesData = [
  {
    nom: "Saumon Rôti aux Asperges Rôties",
    description: "Un plat délicieux et nutritif, facile à préparer",
    ingredients: [
      { nom: "Filets de saumon", quantité: 450, unité: "g" },
      { nom: "Asperges vertes", quantité: 250, unité: "g" },
      { nom: "Huile d'olive", quantité: "2 cuillères à soupe", unité: "" },
      { nom: "Sel et poivre", quantité: "au goût", unité: "" },
      { nom: "Citron, en jus", quantité: "1/2", unité: "unité" }
    ],
    instructions: [
      "Préchauffer le four à 200°C.",
      "Sécher les filets de saumon avec du papier absorbant et les assaisonner de sel, de poivre et d'herbes fraîches (facultatif).",
      "Disposer les filets de saumon sur une plaque de cuisson tapissée de papier sulfurisé.",
      "Laver et sécher les asperges vertes.",
      "Couper les extrémités dures des asperges et les enrober d'huile d'olive.",
      "Disposer les asperges autour des filets de saumon.",
      "Enfourner pendant 15-20 minutes, ou jusqu'à ce que le saumon soit cuit et que les asperges soient tendres.",
      "Servir immédiatement avec un jus de citron pressé."
    ],
    temps_preparation: 10,
    temps_cuisson: 20,
    regime: "Omnivore",
    portions: 2,
    tags: ["facile", "rapide", "santé", "poisson"],
    image: "https://imgs.search.brave.com/EuahDasYS5H5NRWgWmwA-HWGhv6NCkeof1L74Nlrkco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYWMu/aW1nLnBtZHN0YXRp/Yy5uZXQvZml0L2h0/dHAuM0EuMkYuMkZw/cmQyLWJvbmUtaW1h/Z2UuMkVzMy13ZWJz/aXRlLWV1LXdlc3Qt/MS4yRWFtYXpvbmF3/cy4yRWNvbS4yRmZh/Yy4yRjIwMTguMkYw/Ny4yRjMwLjJGYjcy/OWYwZGEtMjg2MS00/ODE4LWEwYTEtZWQ0/YTI0ZTlmNzE1LjJF/anBlZy84NTB4NDc4/L3F1YWxpdHkvOTAv/Y3JvcC1mcm9tL2Nl/bnRlci9yb3RpLWRl/LXNhdW1vbi1hdXgt/ZXBpbmFyZHMtZXQt/YXV4LWFzcGVyZ2Vz/LmpwZWc",
    authorID: "userID_1",
    comments: [
      {
        recipeID: "recipeID_1",
        userID: "userID_2",
        comment: "J'adore cette recette ! Facile à préparer et tellement délicieuse.",
        timestamp: "2024-06-05T12:00:00Z"
      },
      {
        recipeID: "recipeID_2",
        userID: "userID_1",
        comment: "Cette salade est devenue un incontournable à la maison. Merci pour la recette !",
        timestamp: "2024-06-05T13:30:00Z"
      }
    ]
  },
  {
    nom: "Poulet Curry Coco",
    description: "Un délicieux plat exotique aux saveurs épicées et crémeuses.",
    ingredients: [
      { nom: "Filets de poulet", quantité: 500, unité: "g" },
      { nom: "Lait de coco", quantité: "400 ml", unité: "" },
      { nom: "Curry en poudre", quantité: "2 cuillères à soupe", unité: "" },
      { nom: "Oignon", quantité: 1, unité: "unité" },
      { nom: "Ail", quantité: 2, unité: "gousses" },
      { nom: "Gingembre frais", quantité: "1 pouce", unité: "" },
      { nom: "Huile végétale", quantité: "2 cuillères à soupe", unité: "" },
      { nom: "Sel", quantité: "au goût", unité: "" },
      { nom: "Poivre noir moulu", quantité: "au goût", unité: "" },
      { nom: "Coriandre fraîche", quantité: "pour la garniture", unité: "" }
    ],
    instructions: [
      "Couper le poulet en morceaux et le faire dorer dans une poêle avec de l'huile.",
      "Ajouter l'oignon, l'ail et le gingembre hachés et faire revenir jusqu'à ce qu'ils soient dorés.",
      "Saupoudrer le curry en poudre sur le poulet et mélanger.",
      "Verser le lait de coco, saler et poivrer selon votre goût.",
      "Laisser mijoter à feu doux pendant 15-20 minutes jusqu'à ce que la sauce épaississe.",
      "Servir chaud garni de coriandre fraîche et accompagner de riz basmati.",
      "Bon appétit !"
    ],
    temps_preparation: 15,
    temps_cuisson: 25,
    regime: "Omnivore",
    portions: 4,
    tags: ["exotique", "épicé", "crémeux"],
    image: "https://imgs.search.brave.com/RzRHgZGIWuAXfMW7PHzpuZelAMZXyQ0RoDL7hpIupfA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3Vpc2luZWF6LmNv/bS82NjB4NjYwLzIw/MTgvMDEvMDQvaTEz/NDg4NS0uanBlZw",
    authorID: "userID_2",
    comments: [
      {
        recipeID: "recipeID_3",
        userID: "userID_1",
        comment: "Ce plat est incroyable ! J'ai voyagé en Inde à chaque bouchée.",
        timestamp: "2024-06-06T18:30:00Z"
      },
      {
        recipeID: "recipeID_3",
        userID: "userID_3",
        comment: "Un délice ! Ma famille en redemande à chaque repas.",
        timestamp: "2024-06-06T19:45:00Z"
      }
    ]
  },
  {
    nom: "Salade César",
    description: "Une salade fraîche et savoureuse avec une vinaigrette crémeuse.",
    ingredients: [
      { nom: "Laitue romaine", quantité: 1, unité: "tête" },
      { nom: "Poulet grillé", quantité: 200, unité: "g" },
      { nom: "Croûtons", quantité: "une poignée", unité: "" },
      { nom: "Parmesan râpé", quantité: "50", unité: "g" },
      { nom: "Sauce César", quantité: "au goût", unité: "" },
      { nom: "Sel", quantité: "au goût", unité: "" },
      { nom: "Poivre", quantité: "au goût", unité: "" }
    ],
    instructions: [
      "Laver et couper la laitue romaine en morceaux.",
      "Ajouter le poulet grillé coupé en dés, les croûtons et le parmesan râpé dans un grand bol.",
      "Assaisonner avec la sauce César, le sel et le poivre. Mélanger délicatement.",
      "Servir frais et garnir de parmesan supplémentaire si désiré."
    ],
    temps_preparation: 15,
    temps_cuisson: 0,
    regime: "Omnivore",
    portions: 2,
    tags: ["salade", "fraîcheur", "poulet", "crémeux"],
    image: "https://imgs.search.brave.com/CbbcEpFY7YIItNyRLY36rdT5tozWF_rNHNJcCZBf84Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWct/My5qb3VybmFsZGVz/ZmVtbWVzLmZyL3Yx/bVg2Zm9Db1l0N2d1/a1BLZFFiRWtJNUZG/Zz0vNzUweDUwMC8x/MzA3MDFmOGMzMjk0/N2VlYWJmYWViM2Ji/ZjAyZjJhNS9jY21j/bXMtamRmLzM5OTY1/NDI5LmpwZw",
    authorID: "userID_2",
    comments: [
      {
        recipeID: "recipeID_4",
        userID: "userID_1",
        comment: "Une salade simple mais tellement délicieuse ! La vinaigrette est parfaite.",
        timestamp: "2024-06-07T13:00:00Z"
      },
      {
        recipeID: "recipeID_4",
        userID: "userID_3",
        comment: "J'adore cette salade pour sa fraîcheur. Parfaite pour un repas léger.",
        timestamp: "2024-06-07T14:30:00Z"
      }
    ]
  },
  {
    nom: "Pâtes Carbonara",
    description: "Un plat italien classique avec une sauce crémeuse et des lardons.",
    ingredients: [
      { nom: "Spaghettis", quantité: 400, unité: "g" },
      { nom: "Lardons", quantité: 150, unité: "g" },
      { nom: "Œufs", quantité: 3, unité: "unité" },
      { nom: "Crème fraîche", quantité: "100 ml", unité: "" },
      { nom: "Parmesan râpé", quantité: "50", unité: "g" },
      { nom: "Sel", quantité: "au goût", unité: "" },
      { nom: "Poivre", quantité: "au goût", unité: "" }
    ],
    instructions: [
      "Faire cuire les spaghettis dans une grande casserole d'eau bouillante salée.",
      "Dans une poêle, faire revenir les lardons jusqu'à ce qu'ils soient croustillants.",
      "Dans un bol, battre les œufs avec la crème fraîche et le parmesan râpé.",
      "Égoutter les pâtes et les ajouter dans la poêle avec les lardons.",
      "Verser la sauce aux œufs sur les pâtes chaudes et mélanger rapidement.",
      "Assaisonner avec du sel et du poivre selon votre goût.",
      "Servir immédiatement avec du parmesan supplémentaire si désiré."
    ],
    temps_preparation: 10,
    temps_cuisson: 10,
    regime: "Omnivore",
    portions: 4,
    tags: ["italien", "crémeux", "rapide"],
    image: "https://imgs.search.brave.com/guVLzOcon95JEIwO8wr9SRHoQ4U27REHJWmsX9pamoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM2/NjEwMDk4L3Bob3Rv/L3NwYWdoZXR0aS1i/b2xvZ25lc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU42/Tm0wVk5PaUgtNGpY/ODhZa3dpYTdtcHJF/R1k3ejVZVXc3WlNW/aHY1Y0E9",
    authorID: "userID_3",
    comments: [
      {
        recipeID: "recipeID_5",
        userID: "userID_1",
        comment: "Un classique indémodable. Facile à faire et toujours délicieux.",
        timestamp: "2024-06-08T12:00:00Z"
      },
      {
        recipeID: "recipeID_5",
        userID: "userID_2",
        comment: "J'adore cette recette, simple et savoureuse.",
        timestamp: "2024-06-08T14:30:00Z"
      }
    ]
  },
  {
    nom: "Ratatouille",
    description: "Un plat provençal coloré et savoureux à base de légumes d'été.",
    ingredients: [
      { nom: "Aubergine", quantité: 1, unité: "unité" },
      { nom: "Courgette", quantité: 2, unité: "unité" },
      { nom: "Poivron rouge", quantité: 1, unité: "unité" },
      { nom: "Tomates", quantité: 4, unité: "unité" },
      { nom: "Oignon", quantité: 1, unité: "unité" },
      { nom: "Ail", quantité: 3, unité: "gousses" },
      { nom: "Huile d'olive", quantité: "3 cuillères à soupe", unité: "" },
      { nom: "Herbes de Provence", quantité: "1 cuillère à soupe", unité: "" },
      { nom: "Sel", quantité: "au goût", unité: "" },
      { nom: "Poivre", quantité: "au goût", unité: "" }
    ],
    instructions: [
      "Couper tous les légumes en dés.",
      "Dans une grande poêle, faire revenir l'oignon et l'ail dans l'huile d'olive.",
      "Ajouter l'aubergine et cuire pendant 5 minutes.",
      "Ajouter les courgettes, les poivrons et cuire pendant 5 minutes de plus.",
      "Ajouter les tomates, les herbes de Provence, le sel et le poivre.",
      "Laisser mijoter à feu doux pendant 30 minutes en remuant de temps en temps.",
      "Servir chaud ou à température ambiante."
    ],
    temps_preparation: 15,
    temps_cuisson: 30,
    regime: "Végétalien",
    portions: 4,
    tags: ["végétalien", "légumes", "provençal"],
    image: "https://imgs.search.brave.com/awgr-juRxEXJoXx6DjdMagkjInTSMyjyoXM3koLjcFY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnV6emZlZWQuY29t/L3ZpZGVvLWFwaS1w/cm9kL2Fzc2V0cy9l/YjQ0NTcwNTE5MjY0/ODY0ODE0MjY0Zjdm/MGE1ZTQ3YS9CRlYx/MzkwOV9CYWtlZFJh/dGF0b3VpbGxlLVRo/dW1iVGV4dGxlc3Mx/MDgwLmpwZz9vdXRw/dXQtZm9ybWF0PWF1/dG8mb3V0cHV0LXF1/YWxpdHk9YXV0byZy/ZXNpemU9NjAwOio",
    authorID: "userID_4",
    comments: [
      {
        recipeID: "recipeID_6",
        userID: "userID_1",
        comment: "Un plat sain et savoureux, parfait pour l'été.",
        timestamp: "2024-06-09T10:00:00Z"
      },
      {
        recipeID: "recipeID_6",
        userID: "userID_2",
        comment: "Délicieux et plein de saveurs. J'adore cette recette.",
        timestamp: "2024-06-09T11:45:00Z"
      }
    ]
  },
  {
    nom: "Tarte Tatin",
    description: "Un dessert français classique avec des pommes caramélisées.",
    ingredients: [
      { nom: "Pommes", quantité: 6, unité: "unité" },
      { nom: "Sucre", quantité: "150 g", unité: "" },
      { nom: "Beurre", quantité: "100 g", unité: "" },
      { nom: "Pâte feuilletée", quantité: 1, unité: "rouleau" },
      { nom: "Cannelle", quantité: "1 cuillère à café", unité: "" }
    ],
    instructions: [
      "Préchauffer le four à 180°C.",
      "Peler, épépiner et couper les pommes en quartiers.",
      "Dans une poêle allant au four, faire fondre le beurre et ajouter le sucre pour caraméliser.",
      "Ajouter les pommes et cuire jusqu'à ce qu'elles soient tendres et caramélisées.",
      "Saupoudrer de cannelle.",
      "Dérouler la pâte feuilletée sur les pommes en rentrant les bords à l'intérieur de la poêle.",
      "Cuire au four pendant 25-30 minutes jusqu'à ce que la pâte soit dorée.",
      "Laisser refroidir légèrement avant de renverser la tarte sur un plat de service."
    ],
    temps_preparation: 15,
    temps_cuisson: 30,
    regime: "Végétarien",
    portions: 6,
    tags: ["dessert", "classique", "pomme"],
    image: "https://imgs.search.brave.com/RTu4L23nFV1XIQiMQSozCSGD-z8WjW7QKSUMEmdGf_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM1LzUzLzE4/LzM2MF9GXzEzNTUz/MTg3MV84QjltSHha/UFFSd3NpRnZRbWZs/TVFEMlhRRGFBaVZk/Zy5qcGc",
    authorID: "userID_5",
    comments: [
      {
        recipeID: "recipeID_7",
        userID: "userID_1",
        comment: "Un dessert délicieux et facile à préparer.",
        timestamp: "2024-06-10T12:00:00Z"
      },
      {
        recipeID: "recipeID_7",
        userID: "userID_3",
        comment: "Un classique indémodable, parfait pour les occasions spéciales.",
        timestamp: "2024-06-10T14:00:00Z"
      }
    ]
  },
  {
    nom: "Guacamole",
    description: "Une trempette mexicaine fraîche et savoureuse à base d'avocats.",
    ingredients: [
      { nom: "Avocats", quantité: 3, unité: "unité" },
      { nom: "Tomate", quantité: 1, unité: "unité" },
      { nom: "Oignon rouge", quantité: 1, unité: "unité" },
      { nom: "Coriandre fraîche", quantité: "une poignée", unité: "" },
      { nom: "Jus de citron vert", quantité: "2 cuillères à soupe", unité: "" },
      { nom: "Sel", quantité: "au goût", unité: "" },
      { nom: "Poivre", quantité: "au goût", unité: "" }
    ],
    instructions: [
      "Écraser les avocats dans un bol.",
      "Ajouter la tomate et l'oignon finement hachés.",
      "Incorporer la coriandre hachée et le jus de citron vert.",
      "Assaisonner avec du sel et du poivre selon votre goût.",
      "Mélanger délicatement et servir frais avec des chips de tortilla."
    ],
    temps_preparation: 10,
    temps_cuisson: 0,
    regime: "Végétalien",
    portions: 4,
    tags: ["mexicain", "trempette", "frais"],
    image: "https://imgs.search.brave.com/4Exm80JT1dqIJ9wk6CY_A3vSOeObf2_m2lwgnLHG-40/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NTI4NzYxL3Bob3Rv/L2d1YWNhbW9sZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SUxNbjl5VmM1WmI5/Qk5EMWRpa2lDN3Zx/dVNWQWpQZW0ybHVF/MVlRbjkzTT0",
    authorID: "userID_6",
    comments: [
      {
        recipeID: "recipeID_8",
        userID: "userID_1",
        comment: "Le meilleur guacamole que j'ai jamais goûté. Parfait pour les fêtes.",
        timestamp: "2024-06-11T12:00:00Z"
      },
      {
        recipeID: "recipeID_8",
        userID: "userID_2",
        comment: "Simple et délicieux, j'adore cette recette.",
        timestamp: "2024-06-11T14:00:00Z"
      }
    ]
  }
];
const categoriesData = [
    {
      name: "Végétalien",
      description: "Un régime qui exclut tous les produits d'origine animale.",
      exampleFoods: [
        "Fruits",
        "Légumes",
        "Légumineuses",
        "Noix",
        "Graines"
      ],
      photo: "https://www.exemple.com/regimes/images/vegetalien.png"
    },
    // Add more categories here if needed
  ];

  const addCategoriesToFirestore = async (categoriesData) => {
    try {
      // Authenticate the user
      
      for (const category of categoriesData) {
        await db.collection("categories").add(category);
      }
      console.log("Categories added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding categories to Firestore: ", error);
    }
  };
const addRecipesToFirestore = async (recipesData) => {
  try {
    // Loop through each recipe and add it to Firestore
    for (const recipe of recipesData) {
      // Use set with merge to add or update the document
      await db.collection("recipes").add(recipe);
    }
    console.log("Recipes added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding recipes to Firestore: ", error);
  }
};


addRecipesToFirestore(recipesData);
 addCategoriesToFirestore(categoriesData); 
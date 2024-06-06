<template>
    <div class="profile-view">
      <HeaderComp />
      <div class="profile-container">
        <div class="user-info" v-if="user">
          <h1>Profil de l'Utilisateur</h1>
          <p><strong>Nom:</strong> {{ user.displayName }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
        <div v-else>
          <p>Chargement des informations de l'utilisateur...</p>
        </div>
        <div class="user-recipes">
          <h2>Mes Recettes</h2>
          <div v-if="userRecipes.length">
            <div v-for="recipe in userRecipes" :key="recipe.id" class="recipe-card">
              <h3>{{ recipe.nom }}</h3>
              <img :src="recipe.image" :alt="recipe.nom" class="recipe-image" />
              <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }" class="details-link">Détails</router-link>
            </div>
          </div>
          <div v-else>
            <p>Vous n'avez ajouté aucune recette.</p>
          </div>
          <div v-if="error" class="error-message">{{ error }}</div>
        </div>
      </div>
      <FooterComp />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { projectFirestore, projectAuth } from '../firebase/Config.js';
  import HeaderComp from '../components/HeaderComp.vue';
  import FooterComp from '../components/FooterComp.vue';
  
  export default {
    name: 'ProfileView',
    components: {
      HeaderComp,
      FooterComp,
    },
    setup() {
      const user = ref(null);
      const userRecipes = ref([]);
      const error = ref(null);
  
      onMounted(async () => {
        user.value = projectAuth.currentUser;
        if (user.value) {
          try {
            const res = await projectFirestore.collection('recipes')
              .where('userId', '==', user.value.uid)
              .get();
  
            userRecipes.value = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          } catch (err) {
            error.value = err.message;
          }
        } else {
          error.value = "Utilisateur non connecté.";
        }
      });
  
      return { user, userRecipes, error };
    },
  };
  </script>
  
 
  <style scoped>
  .profile-view {
    display: flex;
    flex-direction: column;
    background-color: #f3f4f6;
    min-height: 100vh;
  }
  
  .profile-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .user-info, .user-recipes {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .user-info h1, .user-recipes h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .user-info p {
    font-size: 1.1rem;
    color: #555;
  }
  
  .recipe-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .recipe-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  .recipe-card h3 {
    font-size: 1.5rem;
    margin: 0;
    padding: 15px;
    color: #fff;
    background-color: #ff9800;
    text-align: center;
  }
  
  .recipe-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .details-link {
    display: block;
    text-align: center;
    padding: 10px 0;
    margin: 10px 15px;
    border-radius: 5px;
    background-color: #ff9800;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .details-link:hover {
    background-color: #e68900;
    transform: translateY(-2px);
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin: 20px;
  }
  </style>
  
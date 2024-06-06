<template>
  <div>
    <HeaderComp />
    <div class="recipes-view">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <h1 class="recipe-title">{{ recipe.nom }}</h1>
        <img :src="recipe.image" :alt="recipe.nom" class="recipe-image" />
        <p class="recipe-description">{{ recipe.description }}</p>
        <router-link :to="{ name: 'RecipeDetailView', params: { id: recipe.id } }" class="details-link">Details</router-link>
        <router-link :to="{ name: 'EditRecipe', params: { id: recipe.id } }" class="edit-link">Edit</router-link>
        <button @click="deleteRecipe(recipe.id)" class="delete-button">
          <i class="fa fa-trash"></i> Delete Recipe
        </button>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/Config.js';
import { ref, onMounted } from 'vue';
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
  name: 'RecipesView',
  components: {
    HeaderComp,
    FooterComp,
  },
  setup() {
    const recipes = ref([]);
    const error = ref(null);

    const loadRecipes = async () => {
      try {
        const res = await projectFirestore.collection('recipes').get();
        recipes.value = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      } catch (err) {
        error.value = err.message;
      }
    };

    onMounted(() => {
      loadRecipes();
    });

    return { recipes, error };
  },
  methods: {
    async deleteRecipe(id) {
      try {
        await projectFirestore.collection('recipes').doc(id).delete();
        console.log("Document successfully deleted!");
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
      } catch (error) {
        console.error("Error removing document: ", error);
      }
    }
  }
};
</script>

<style scoped>
.recipes-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
}

.recipe-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.recipe-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.recipe-title {
  font-size: 1.5rem;
  margin: 0;
  padding: 15px;
  color: #333;
  background-color: #ff9800;
  text-align: center;
}

.recipe-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.recipe-description {
  padding: 15px;
  font-size: 1rem;
  color: #555;
  text-align: justify;
}

.details-link,
.edit-link,
.delete-button {
  display: block;
  text-align: center;
  padding: 10px 0;
  margin: 10px 15px;
  border-radius: 5px;
  background-color: #ff9800;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.details-link:hover,
.edit-link:hover,
.delete-button:hover {
  background-color: #e68900;
}

.error-message {
  color: red;
  text-align: center;
  margin: 20px;
}

.delete-button {
  background-color: #f44336;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>

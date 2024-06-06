<template>
    <div class="category">
      <HeaderComp />
      <div class="container py-5">
        <h1>{{ category }} Recipes</h1>
        <div v-if="recipes.length" class="recipes-grid">
          <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
            <h2>{{ recipe.name }}</h2>
            <p>{{ recipe.description }}</p>
          </div>
        </div>
        <div v-else class="no-recipes">
          <p>No recipes found for this category.</p>
        </div>
      </div>
      <FooterComp />
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { projectFirestore } from '@/firebase/Config';
  import HeaderComp from '../components/HeaderComp.vue';
  import FooterComp from '../components/FooterComp.vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'CategoryView',
    components: {
      HeaderComp,
      FooterComp,
    },
    setup() {
      const recipes = ref([]);
      const route = useRoute();
      const category = ref(route.params.category);
  
      const fetchRecipes = async (category) => {
        try {
          console.log(`Fetching recipes for category: ${category}`);
          recipes.value = [];
          const querySnapshot = await projectFirestore.collection('recipes').where('regime', '==', category).get();
          querySnapshot.forEach((doc) => {
            recipes.value.push({ id: doc.id, ...doc.data() });
          });
          console.log(`Found ${recipes.value.length} recipes for category: ${category}`);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      watch(
        () => route.params.category,
        (newCategory) => {
          category.value = newCategory;
          fetchRecipes(newCategory);
        },
        { immediate: true }
      );
  
      return {
        recipes,
        category,
      };
    },
  };
  </script>
  
  <style scoped>
  .category {
    padding: 20px;
    background-color: #f0f2f5;
    min-height: 100vh;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .recipe-card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .recipe-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .recipe-card h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #ff9800;
  }
  
  .recipe-card p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .no-recipes {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }
  </style>
  
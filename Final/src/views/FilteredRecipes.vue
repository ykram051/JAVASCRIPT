<template>
  <div>
    <h1>Recettes Filtrées</h1>
    <input type="text" v-model="searchQuery" placeholder="Rechercher par nom...">
    <div v-for="recipe in filteredRecipes" :key="recipe?.id">
      <h1>{{ recipe?.nom }}</h1>
      <img :src="recipe?.image" :alt="recipe?.nom" />
      <p>{{ recipe?.description }}</p>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'; // Added computed import
import { projectFirestore } from '@/firebase/Config.js';
import { useRouter } from 'vue-router';

const recipes = ref([]);
const error = ref(null);
const searchQuery = ref('');

const loadRecipes = async () => {
  try {
    const res = await projectFirestore.collection('recipes').get();
    recipes.value = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(() => {
  console.log('Mounted');
  loadRecipes();
});

const router = useRouter();
console.log(router.params.id);
const keyword = ref(router.params.id || '');
console.log(keyword);

const filteredRecipes = computed(() => {
  return recipes.value.filter(recipe => recipe && recipe.nom && recipe.nom.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

</script>

<style scoped>
/* Add your styles here */
</style>

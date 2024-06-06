<template>
    <div class="edit-recipe">
      <HeaderComp />
  
      <main class="container py-5">
        <div class="card p-4 shadow-lg border-0">
          <form @submit.prevent="editRecipe">
            <div class="form-group row mb-3">
              <label for="name" class="col-sm-3 col-form-label">Nom de la Recette</label>
              <div class="col-sm-9">
                <input type="text" id="name" class="form-control" v-model="name" required />
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="image" class="col-sm-3 col-form-label">URL de l'Image</label>
              <div class="col-sm-9">
                <input type="text" id="image" class="form-control" v-model="image" required />
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="description" class="col-sm-3 col-form-label">Description</label>
              <div class="col-sm-9">
                <textarea id="description" class="form-control" v-model="description" rows="3" required></textarea>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="ingredients" class="col-sm-3 col-form-label">Ingrédients</label>
              <div class="col-sm-9">
                <input type="text" id="ingredients" class="form-control" v-model="ingredients" required />
                <small class="form-text text-muted">Séparés par une virgule</small>
              </div>
            </div>
            <div class="form-group row mb-4">
              <label for="instructions" class="col-sm-3 col-form-label">Instructions</label>
              <div class="col-sm-9">
                <textarea id="instructions" class="form-control" v-model="instructions" rows="5" required></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-warning w-100 text-dark fw-bold">Modifier la Recette</button>
          </form>
        </div>
      </main>
  <FooterComp/>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { projectFirestore } from '@/firebase/Config';
  import { useRoute } from 'vue-router';
  import HeaderComp from '@/components/HeaderComp.vue';
  import FooterComp from '@/components/FooterComp.vue';

  
  export default {
    name: 'EditRecipeView',
        Compenents: {
            HeaderComp,
            FooterComp
        },
    setup() {
      const route = useRoute();
      const recipeId = route.params.id;
  
      const name = ref('');
      const image = ref('');
      const description = ref('');
      const ingredients = ref('');
      const instructions = ref('');
  
      const fetchRecipe = async () => {
        try {
          const recipeDoc = await projectFirestore.collection('recipes').doc(recipeId).get();
          if (recipeDoc.exists) {
            const recipeData = recipeDoc.data();
            name.value = recipeData.name;
            image.value = recipeData.image;
            description.value = recipeData.description;
            ingredients.value = recipeData.ingredients.join(', ');
            instructions.value = recipeData.instructions;
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };
  
      onMounted(() => {
        fetchRecipe();
      });
  
      const editRecipe = async () => {
        try {
          await projectFirestore.collection('recipes').doc(recipeId).update({
            name: name.value,
            image: image.value,
            description: description.value,
            ingredients: ingredients.value.split(',').map(ingredient => ingredient.trim()),
            instructions: instructions.value,
            updatedAt: new Date()
          });
          alert('Recette modifiée avec succès!');
        } catch (error) {
          console.error('Error editing recipe:', error);
          alert('Erreur lors de la modification de la recette.');
        }
      };
  
      return {
        name,
        image,
        description,
        ingredients,
        instructions,
        editRecipe
      };
    }
  };
  </script>
  
  <style scoped>
.edit-recipe {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.bg-orange {
  background-color: #ff9800 !important;
}

header {
  text-align: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column; 
  margin-bottom: 1.5rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group .form-control {
  width: 100%;
  border-radius: 5px;
}

.form-control:focus {
  box-shadow: 0 0 5px rgba(255, 152, 0, 0.5);
  border-color: #ff9800;
}

.btn {
  border-radius: 5px; 
  font-weight: bold; 
  text-transform: uppercase; 
}

footer {
  text-align: center;
  margin-top: auto;
}
</style>
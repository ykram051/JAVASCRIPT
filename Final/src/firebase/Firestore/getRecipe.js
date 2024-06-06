import  firebase  from "firebase/app";
import "firebase/firestore";
import { projectFirestore } from '../Config.js'
import { ref } from 'vue'

const getRecipe = (id) => {

  const recipe = ref({});
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore.collection('recipes').doc(id).get()
      if (!res.exists) {
        throw Error('That recipe does not exist')
      }
      recipe.value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { recipe, error, load } 
}

const getRecipesByIds = (ids) => {
  const recipes = ref([]);
  const error = ref(null);

  const load = async () => { 
    try {
      const querySnapshot = await projectFirestore.collection('recipes')
      .where(firebase.firestore.FieldPath.documentId(), 'in', ids)
      .get();
      
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      recipes.value = documents;
    }
    catch(err) {
      error.value = err.message
    }
  }

  return {recipes, error, load}
}

export { getRecipe, getRecipesByIds}
import { projectFirestore } from './Config.js';
import { ref } from 'vue';

const getrecipes = () => {
  const recipes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection('recipes').get();
      recipes.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { load, recipes, error };
};

export default getrecipes;

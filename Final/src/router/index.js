import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/authView.vue';
import HomeView from '../views/HomeView.vue';
import ProfileView from '../views/ProfileView.vue';
import AddRecipeView from '../views/AddRecipeView.vue';
import RecipeDetailView from '../views/RecipeDetailView.vue';
import RecipesView from '@/views/RecipesView.vue';
import EditRecipeView from '@/views/EditRecipeView.vue';
import { isLogged, waitForAuthInit } from '@/firebase/getUser';
import CategoryView from '../views/categoryView.vue';
import FilteredRecipes from '../views/FilteredRecipes.vue';

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthView,
    meta: { requiresAuth: false }
  },
  {
    path: '/homeview',
    name: 'HomeView',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetailView',
    component: RecipeDetailView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesView }, 
  {
    path: '/addrecipe',
    name: 'AddRecipe',
    component: AddRecipeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/editrecipe/:id',
    name: 'EditRecipe',
    component: EditRecipeView,
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: CategoryView,
    props: true,
  },

  {
    path: '/filtered-recipes/:id', 
    name: 'FilteredRecipes',
    component: FilteredRecipes,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  waitForAuthInit().then(() => {
    const isAuthenticated = isLogged();

    if (requiresAuth && !isAuthenticated) {
      next({ path: '/' });
    } else {
      next();
    }
  });
});

export default router;

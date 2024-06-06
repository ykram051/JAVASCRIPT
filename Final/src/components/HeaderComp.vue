<template>
    <header>
      <img src="/images/logo.png" alt="Logo" class="logo" />
      <nav>
        <router-link to="/HomeView" class="nav-link">Home</router-link>
        <router-link to="/recipes" class="nav-link">Recipes</router-link>
        <router-link to="/addrecipe" class="nav-link">Add Recipe</router-link>
        <router-link to="/profile" class="nav-link">Profile</router-link>
        <form @submit.prevent="handleSearch" class="search-form">
          <input type="text" v-model="query" placeholder="Search Recipes..." />
          <button type="submit" class="search-btn">Search</button>
        </form>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComp',
    data() {
      return {
        query: '',
        category: ''
      };
    },
    methods: {
      handleSearch() {
       
        this.$router.push(
`/filtered-recipes/${this.query}`);
      }
    }
  };
  </script>
  <style scoped>
  header {
    background-color: #ff9900;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  }
  
  .logo {
    width: 100px;
    height: auto;
  }
  
  nav {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
    transition: color 0.3s ease;
    position: relative; 
  }
  
  .nav-link:hover {
    color: #333;
  }
  
  .search-form {
    display: flex;
    align-items: center;
  }
  
  .search-btn {
    margin-left: 10px;
    background-color: #333;
    color: white;
    border: none;
    padding: 8px 15px; 
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
  }
  
  .search-btn:hover {
    background-color: #555;
  }
  
  .nav-link::after {
    content: '';
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  </style>
  
<template>
    <div class="app-footer">
      <nav>
        <ul>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/mentions-legales">Mentions Légales</router-link></li>
        </ul>
      </nav>
      <div class="social-media">
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp'
  }
  </script>
  
  <style scoped>
  .app-footer {
    padding: 1rem;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  nav ul li {
    display: inline;
  }
  
  .social-media a {
    margin: 0 0.5rem;
    color: #007bff;
    text-decoration: none;
  }
  </style>
  
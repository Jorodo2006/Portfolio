<template>
    <v-sheet
      id="hero"
      dark
      class="d-flex align-center justify-center text-center"
      height="100vh"
      style="background: linear-gradient(135deg, #000000, #311b92, #000000);"
    >
      <v-container>
        <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">{{ hero.name }}</h1>
        <h2 class="text-h5 text-md-h4 font-weight-light mb-3">{{ hero.title }}</h2>
        <p class="text-h6 font-weight-light mb-8" style="max-width: 800px; margin-left: auto; margin-right: auto;">
          {{ hero.subtitle }}
        </p>
        
        <div>
          <v-btn color="primary" x-large class="ma-2" href="#projects">
            <v-icon left>mdi-briefcase</v-icon>
            Ver Proyectos
          </v-btn>
          <v-btn outlined x-large class="ma-2" :href="`mailto:${contact.email}`">
            <v-icon left>mdi-email</v-icon>
            Contactar
          </v-btn>
        </div>
  
        <div class="mt-8">
          <v-btn icon :href="hero.linkedin" target="_blank" class="ma-2">
            <v-icon size="32">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon :href="hero.github" target="_blank" class="ma-2">
            <v-icon size="32">mdi-github</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    props: ['hero', 'contact']
  };
  </script>
  
  <style scoped>
  h1, h2, p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  </style>
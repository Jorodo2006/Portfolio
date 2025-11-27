<template>
    <v-sheet id="contact" color="surface" dark class="py-16 text-center">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-4">Contacto</h2>
        <p class="text-h5 font-weight-light mb-8" style="max-width: 600px; margin: 0 auto;">
          {{ contact.message }}
        </p>
        
        <v-btn
          x-large
          variant="outlined"
          :href="`mailto:${contact.email}`"
        >
          <v-icon left size="28">mdi-email</v-icon>
          {{ contact.email }}
          
        </v-btn>
      </v-container>
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    props: ['contact']
  };
  </script>
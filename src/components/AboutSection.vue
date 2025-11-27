<template>
    <v-sheet id="about" color="background" class="py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-10">Sobre Mí</h2>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="text-body-1 text-lg-h6 font-weight-light mb-6" style="line-height: 1.8;">
              {{ paragraph }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    props: ['about']
  };
  </script>
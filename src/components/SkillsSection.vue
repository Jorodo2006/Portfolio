<template>
    <v-sheet id="skills" color="background" dark class="py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-10">Tecnologías</h2>
        <v-row>
          <v-col cols="12" sm="6" lg="3">
            <v-card class="h-100" color="surface" elevation="5">
              <v-card-title class="text-h5">
                <v-icon color="primary" left>mdi-desktop-mac</v-icon>
                Frontend
              </v-card-title>
              <v-list color="transparent" dense>
                <v-list-item v-for="skill in skills.frontend" :key="skill">
                  <v-list-item-title>{{ skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card class="h-100" color="surface" elevation="5">
              <v-card-title class="text-h5">
                <v-icon color="success" left>mdi-server</v-icon>
                Backend
              </v-card-title>
              <v-list color="transparent" dense>
                <v-list-item v-for="skill in skills.backend" :key="skill">
                  <v-list-item-title>{{ skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card class="h-100" color="surface" elevation="5">
              <v-card-title class="text-h5">
                <v-icon color="warning" left>mdi-database</v-icon>
                Bases de Datos
              </v-card-title>
              <v-list color="transparent" dense>
                <v-list-item v-for="skill in skills.databases" :key="skill">
                  <v-list-item-title>{{ skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card class="h-100" color="surface" elevation="5">
              <v-card-title class="text-h5">
                <v-icon color="info" left>mdi-cellphone-link</v-icon>
                Multiplataforma & Herramientas
              </v-card-title>
              <v-list color="transparent" dense>
                <v-list-item-subtitle class="ms-4 my-2 text-white">Multiplataforma</v-list-item-subtitle>
                <v-list-item v-for="skill in skills.multiplatform" :key="skill">
                  <v-list-item-title>{{ skill }}</v-list-item-title>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item-subtitle class="ms-4 my-2 text-white">Herramientas</v-list-item-subtitle>
                <v-list-item v-for="skill in skills.tools" :key="skill">
                  <v-list-item-title>{{ skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
    props: ['skills']
  };
  </script>
  
  <style scoped>
  .h-100 {
    height: 100%;
  }
  </style>
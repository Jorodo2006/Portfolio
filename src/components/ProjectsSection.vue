<template>
    <v-sheet id="projects" color="background" class="py-16">
      <v-container>
        <h2 class="text-h3 text-center font-weight-bold mb-10">Proyectos</h2>
        <v-row>
          <v-col cols="12" md="6" lg="4" v-for="project in projects" :key="project.id">
            <v-card class="h-100 d-flex flex-column" color="surface" elevation="5">
              <v-img :src="project.image" height="250px" cover>
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              
              <v-card-title class="font-weight-bold text-h5">
                {{ project.title }}
              </v-card-title>
              
              <v-card-text class="flex-grow-1">
                <p class="text-body-1">{{ project.description }}</p>
                
                <div class="mt-4">
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    small
                    color="secondary"
                    class="ma-1"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </v-card-text>
              
              <v-divider></v-divider>
  
              <v-card-actions class="pa-4">
                <v-btn text color="primary" :href="project.github" target="_blank">
                  <v-icon left>mdi-github</v-icon>
                  GitHub
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="project.demo" color="primary" :href="project.demo" target="_blank">
                  <v-icon left>mdi-open-in-new</v-icon>
                  Demo
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    props: ['projects']
  };
  </script>
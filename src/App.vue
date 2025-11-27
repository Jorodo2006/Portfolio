<template>
  <v-app>
    <v-app-bar color="surface" elevation="2">
      <v-container class="d-flex align-center">
        <v-toolbar-title class="font-weight-bold">{{ portfolioData.hero.name }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <div class="d-none d-md-flex">
          <v-btn text @click="scrollTo('hero')">Inicio</v-btn>
          <v-btn text @click="scrollTo('about')">Sobre Mí</v-btn>
          <v-btn text @click="scrollTo('skills')">Tecnologías</v-btn>
          <v-btn text @click="scrollTo('projects')">Proyectos</v-btn>
          <v-btn text @click="scrollTo('contact')">Contacto</v-btn>
        </div>

        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary location="right" color="surface">
      <v-list dense>
        <v-list-item link @click="scrollTo('hero'); drawer = false;">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollTo('about'); drawer = false;">
          <v-list-item-title>Sobre Mí</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollTo('skills'); drawer = false;">
          <v-list-item-title>Tecnologías</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollTo('projects'); drawer = false;">
          <v-list-item-title>Proyectos</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="scrollTo('contact'); drawer = false;">
          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HeroSection :hero="portfolioData.hero" :contact="portfolioData.contact" />
      <AboutSection :about="portfolioData.about" />
      <SkillsSection :skills="portfolioData.skills" />
      <ProjectsSection :projects="portfolioData.projects" />
      <ContactSection :contact="portfolioData.contact" />
    </v-main>

    <v-footer color="surface" class="py-4">
      <v-container class="text-center">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} {{ portfolioData.hero.name }}. Todos los derechos reservados.</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
// Importa los componentes
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
// Importa los datos
import { portfolioData } from './data/portfolioData';

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  },
  data() {
    return {
      portfolioData: portfolioData, // Hace los datos accesibles en el template
      drawer: false, // Controla el menú móvil
    };
  },
  methods: {
    // Método para el scroll suave
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style>
/* Estilo global para que el scroll sea suave */
html {
  scroll-behavior: smooth;
}
/* Pequeño ajuste para que las anclas no queden tapadas por el app-bar */
section[id] {
  scroll-margin-top: 64px; /* Altura del app-bar (ajusta si es necesario) */
}
</style>
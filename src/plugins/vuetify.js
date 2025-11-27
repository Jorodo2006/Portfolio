/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "formalDark",
    themes: {
      formalDark: {
        dark: true,
        colors: {
          primary: "#6200EA", // Deep Purple
          secondary: "#BB86FC", // Light Purple
          background: "#121212", // Black
          surface: "#1E1E1E", // Dark Grey
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});

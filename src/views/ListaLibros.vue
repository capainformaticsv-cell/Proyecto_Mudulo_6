<template>
  <div class="lista-libros-view">
    <h2>Lista de Libros</h2>
    <p v-if="libros.length === 0">No hay libros disponibles 📚</p>
    <div class="grid">
      <Libro v-for="(libro, index) in libros" :key="index" :libro="libro" @eliminar="eliminarLibro(index)" />
    </div>
  </div>
</template>

<script>
import Libro from "../components/Libro.vue";

export default {
  name: "ListaLibros",
  props: {
    libros: {
      type: Array,
      required: true
    }
  },
  components: { Libro },
  methods: {
    eliminarLibro(index) {
      this.$emit("eliminar-libro", index);
    }
  }
};
</script>
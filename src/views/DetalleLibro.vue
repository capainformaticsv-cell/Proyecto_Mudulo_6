<template>
  <div class="detalle-libro">
    <h2>Detalle del Libro</h2>
    <div v-if="libro">
      <h3>
        {{ libro.titulo }}
        <span v-if="libro.destacado">⭐</span>
      </h3>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>
    </div>
    <div v-else>
      <p>Libro no encontrado 📚</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalleLibro",
  props: {
    libro: Object // se pasa desde el router con props: true
  }
};
</script>

<style scoped>
.detalle-libro {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fffbea;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
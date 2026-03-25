<template>
  <div class="libro" :class="{ destacado: libro.destacado }">
    <h3>
      {{ libro.titulo }}
      <span v-if="libro.destacado">⭐</span>
    </h3>
    <p>Autor: {{ libro.autor }}</p>
    <p>Categoría: {{ libro.categoria }}</p>
    <p v-if="libro.descripcion">Descripción: {{ libro.descripcion }}</p>

    <button @click="$emit('eliminar')">Eliminar</button>
  </div>
</template>


<script>
export default {
  name: "Libro",
  props: {
    libro: {
      type: Object,
      required: true
    },
    mostrarDetalle: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.libro {
  width: 90%;
  /* ocupa el % de la columna */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.libro.destacado {
  border: 2px solid gold;
  background: #fffbea;
}


.libro h3 {
  margin: 0;
  color: #6b4f3f;
}

.libro p {
  margin: 4px 0;
  font-size: 0.95rem;
}
</style>
<template>
  <div class="formulario">
    <h2>Gestor de Libros</h2>
    <form @submit.prevent="agregarLibro">
      <label for="titulo">Título:</label>
      <input id="titulo" v-model="nuevoLibro.titulo" required />

      <label for="autor">Autor:</label>
      <input id="autor" v-model="nuevoLibro.autor" required />

      <label for="categoria">Categoría:</label>
      <select id="categoria" v-model="nuevoLibro.categoria" required>
        <option value="">Seleccione una categoría</option>
        <option value="Novela">Novela</option>
        <option value="Infantil">Infantil</option>
        <option value="Ciencia">Ciencia</option>
      </select>

      <label for="descripcion">Descripción:</label>
      <textarea id="descripcion" v-model="nuevoLibro.descripcion"></textarea>

      <!-- Checkbox destacado -->
      <label class="destacado-label">
        <input type="checkbox" v-model="nuevoLibro.destacado" class="hidden-checkbox" />
        Libro destacado ⭐
      </label>


      <button type="submit">Agregar</button>
    </form>

    <!-- Vista previa -->
    <div class="preview">
      <h3>Vista previa</h3>
      <p>
        <strong>Título:</strong> {{ nuevoLibro.titulo }}
        <span v-if="nuevoLibro.destacado">⭐</span>
      </p>
      <p><strong>Autor:</strong> {{ nuevoLibro.autor }}</p>
      <p><strong>Categoría:</strong> {{ nuevoLibro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ nuevoLibro.descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  data() {
    return {
      nuevoLibro: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
        destacado: false
      }
    };
  },
  methods: {
    agregarLibro() {
      this.$emit("libro-agregado", { ...this.nuevoLibro });
      this.nuevoLibro = {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
        destacado: false
      };
    }
  }
};
</script>

<style scoped>
form {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #4a3f35;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

/* Oculta el checkbox pero mantiene su funcionalidad */
.hidden-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Opcional: estilo para la etiqueta */
.destacado-label {
  cursor: pointer;
  font-weight: bold;
  color: #6b4f3f;
}
</style>
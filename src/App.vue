<template>
  <div id="app">
    <h1>Aplicativo Stock de Libros</h1>
    <!-- Mostrar nombre del usuario -->
    <p>Bienvenido Sr., {{ userName }}</p>
    <!-- Lista de libros -->
    <h2>Lista de Libros Disponibles</h2>
    <p v-if="libros.length === 0">No hay libros disponibles 📚</p>

    <!-- Transition para animar cada libro -->
    <transition-group name="fade" tag="div" class="lista-libros">
      <Libro v-for="(libro, index) in libros" :key="index" :libro="libro" @eliminar="eliminarLibro(index)" />
    </transition-group>

    <!-- Botón solo visible si hay libros -->
    <button v-if="libros.length > 0" @click="vaciarLibros" class="btn-danger">
      Vaciar base de datos 📂
    </button>

    <div id="app">
      <!-- Formulario para añadir libros -->
      <BookForm @libro-agregado="agregarLibro" />
    </div>
  </div>
</template>


<script>
import Libro from "./components/Libro.vue";
import BookForm from "./components/BookForm.vue";

export default {
  name: "App",
  components: { Libro, BookForm },
  data() {
    return {
      // Model (MVVM)
      userName: "Pablo",
      libros: [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", categoria: "Novela", destacado: false },
        { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "Infantil", destacado: true },
        { titulo: "Cronicas de Narnia", autor: "Clive Staples Lewis", categoria: "Infantil", destacado: false },
        { titulo: "Charlie y la Fabrica de Chocolates", autor: "Roald Dahl", categoria: "Infantil", destacado: true }
      ]
    };
  },
  methods: {
    agregarLibro(libro) {
      // Retraso de 2 segundos antes de agregar
      setTimeout(() => {
        this.libros.push(libro);
      }, 2000);
    },
    eliminarLibro(index) {
      const libro = this.libros[index];
      const confirmado = window.confirm(
        `¿Estás seguro que deseas eliminar el libro "${libro.titulo}" de la lista?`
      );
      if (confirmado) {
        this.libros.splice(index, 1);
      }
    },
    vaciarLibros() {
      const confirmado = window.confirm(
        "¿Estás seguro que deseas vaciar toda la base de datos de libros?"
      );
      if (confirmado) {
        this.libros = [];

      }
    }

  }
};
</script>


<style>
body {
  overflow-x: hidden;
}

#app {
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom, #fdfcf7, #f5f2e7);
  min-height: 100vh;
  padding: 20px;
  color: #333;
}

h1 {
  color: #4a3f35;
  font-size: 2.4rem;
  margin-bottom: 10px;
  border-bottom: 2px solid #6b4f3f;
  display: inline-block;
  padding-bottom: 5px;
}

h2 {
  margin-top: 30px;
  color: #6b4f3f;
}


nav {
  margin-bottom: 20px;
}

button {
  background-color: #6b4f3f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  margin: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}


button:hover {
  background-color: #4a3f35;
}

/* Grid de 2 columnas, cada una ocupa el 50% */
.lista-libros {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* dos columnas iguales */
  gap: 20px;
  /* espacio entre tarjetas */
  margin-top: 20px;
}

/* Animación fade */
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo especial para el botón de vaciar */
.btn-danger {
  background-color: #c0392b;
  /* rojo intenso */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  margin: 10px 0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-danger:hover {
  background-color: #922b21;
  /* rojo más oscuro al pasar el mouse */
}

</style>
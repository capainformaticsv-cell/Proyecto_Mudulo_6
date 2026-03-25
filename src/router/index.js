import { createRouter, createWebHistory } from 'vue-router'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const routes = [
  { path: '/libros', component: ListaLibros, props: true },
  { path: '/libros/:id', component: DetalleLibro, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
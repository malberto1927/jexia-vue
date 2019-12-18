<template>
    <div style="display: flex;">
      <div style="margin: 0px 20px 0px 20px;">
        <h2>Crear Usuario</h2>
        <p v-if="errorMessage" style="color: red">{{errorMessage}}</p>
        <p v-if="successMessage" style="color: green">{{successMessage}}</p>
        <label for="">Nombre: </label>
        <input type="text" v-model="name" @input="clearMessges">
        <br>
        <button @click="storeAuthor">Guardar</button>
      </div>
      <div style="margin: 0px 20px 0px 20px;">
        <h2>Lista de autores</h2>
        <ul>
          <li v-for="author in authors" :key="author.id">{{ author.name }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AuthorForm',
  data () {
    return {
      name: '',
      authors: [],
      errorMessage: null,
      successMessage: null
    }
  },
  created () {
    this.$jexia.dataset('authors').select().execute()
      .then(result => { this.authors = result })
      .catch(error => {
        this.errorMessage = error.message
      })
  },
  methods: {
    storeAuthor () {
      this.$jexia.dataset('authors').insert({
        name: this.name
      }).execute().then(result => {
        this.successMessage = 'Saved!!!'
        this.authors.push(...result)
        this.name = ''
      }).catch(error => {
        this.errorMessage = error.message
      })
    },
    clearMessges () {
      this.successMessage = null
      this.errorMessage = null
    }
  }
}
</script>

<style scoped>

</style>

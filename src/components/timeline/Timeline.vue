<template>
  <div>
    <menu-component></menu-component>

    <div class="wrapper">
      <tabs></tabs>
    
      <!-- <div class="wrapper-card">
        <div v-for="project in projects" :key="project.id" class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="'./static/img/' + project.image" alt="Image">
            </figure>
          </div>   
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../../../static/img/bg-hello-page.jpg" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ project.title }}</p>
                <p class="subtitle is-6">@projeto</p>
              </div>
            </div>
        
            <div class="content">
              
              {{ project.description }}

              <a>@projeto</a>.
              <a>#categoria</a>
              <a>#categoria</a>
              <br>
              <small>09:09 AM - 25 Agosto 2017</small>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { bulmaComponentGenerator } from 'vue-bulma-components'
import tabsComponent from '../tabs/Tabs'
import menuComponent from '../menu/Menu'
import { listProjects } from '../../services/projects/ProjectService'

export default {
  name: 'timeline',

  components: {
    box: bulmaComponentGenerator('box'),
    'tabs': tabsComponent,
    'menu-component': menuComponent
  },

  data () {
    return {
      projects: []
    }
  },

  methods: {
    fetchProjects () {
      listProjects()
        .then(data => {
          this.projects = data
        })
    }
  },

  mounted () {
    this.fetchProjects()
  },

  computed: {
    list () {
      return this.projects
    }
  }
}
</script>

<style lang="stylus" scoped>
.card 
  margin-bottom: 40px;  
</style>


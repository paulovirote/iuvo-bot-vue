<template>
  <div>
    <div class="tabs is-centered is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span>{{ filters.all }}</span>
          </a>
        </li>
        <li>
          <a>
            <span>{{ filters.animals }}</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>

export default {
  name: 'tabsComponent',

  data () {
    return {
      filters: {
        all: 'all',
        animals: 'animals'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.tabs
  margin-top: 70px

</style>


<template>
  <div class="wrapp">
    <h2 class="title"> Login </h2>

    <div class="weather-image-wrapper">
      <img src="../../assets/images/account.svg" alt="Criar conta" class="account-image">
    </div>

    <form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        class="color"
        v-model="email"
        label="E-mail"
        :rules="emailRules"
        data-vv-name="email"
        required>
      </v-text-field>
      <v-text-field
        class="color"
        type="password"
        v-model="pass"
        label="Senha"
        data-vv-name="pass"
        required>
      </v-text-field>

      <router-link :to="{ name: 'Home' }">
        <v-btn class="btn-color submitBtn" @click="submit">Entrar</v-btn>
      </router-link>
    </form>
  </div>
</template>
<script>
export default {
  name: 'signUp',

  data: () => ({
    valid: true,
    pass: '',
    name: '',
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => (v && v.length <= 10) || 'Nome deve ter menos de 10 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
        'E-mail deve ser válido'
    ],
    phone: '',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: null
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   phone: this.phone,
        //   checkbox: this.checkbox
        // });
      }
    },

    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapp {
  padding: 20px 25px;
  font-family: 'Dosis', sans-serif;
}

.color, .input-group--text-field input {
  caret-color: #fff !important;
  color: #fff !important;
}

.submitBtn
  color #fff
  padding-left: 2.75em
  padding-right: 2.75em
  transition: background-color .3s ease
  background-color #6a94e6
  border 2px solid #6a94e6
  width: 80%;
  max-width 300px
  border-radius: 100px;
  bottom 15px
  font-size 1.25rem
  font-family: 'Dosis', sans-serif;

.submitBtn:active, .submitBtn:hover
  background-color #6086d0

.account-image 
  width: 100px

.title
  font-size 40px !important
  color #fff
  margin: 5px 0 20px
</style>

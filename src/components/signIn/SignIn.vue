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
        v-model="pass"
        label="Senha"
        data-vv-name="pass"
        required>
      </v-text-field>

      <v-btn class="btn-color" @click="submit">Entrar</v-btn>
    </form>
  </div>
</template>
<script>
export default {
  name: 'signUp',

  data: () => ({
    valid: true,
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
  padding: 50px 20px;
}

.color, .input-group--text-field input {
  caret-color: #fff !important;
  color: #fff !important;
}

.btn-color {
  background: #00d1b2;
  color: #fff !important;
}

.account-image 
  width: 100px

.title
  font-size 40px !important
  color #fff
  margin: 5px 0 50px
</style>

<template>
  <router-view :loggedInUser="loggedInUser"></router-view>
</template>

<script>
import Form from './components/Form.vue'
import Boarding from './components/Boarding.vue'
export default {
  components:{
    Form,Boarding
  }
}
</script>
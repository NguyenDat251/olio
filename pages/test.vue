<template>
  <v-layout column justify-center align-center>
    <div class="text-center">Hello World!</div>
  </v-layout>
</template>

<script>


export default {
  components: {},
  methods: {
    makeRequest: function(){
      this.$api.OrderAPI.updateOrderComment(359, function(error, data){
        console.log("Received Order Comments:");
        console.log(data);
      });
    },
    start: function() {
      console.log("STart");
      let $this = this;
      this.$api.AdminAPI.getToken(function(error, data){
        console.log("Received Token:");
        console.log(data);
        $this.makeRequest();
      });
    }
  },
  created: function() {
    console.log("Created");
    if(process.server){
      this.start();
    }
  }
};
</script>

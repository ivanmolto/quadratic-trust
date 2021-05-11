<template>
  <div class="mt-20 mb-20 max-w-full mx-auto flex flex-row justify-center space-x-4">
    <div class="w-96">
      <input class="w-full bg-white border-2 border-trust-blue rounded-lg p-4 text-trust-blue" type="text" placeholder="SEARCH USER">
    </div>
    <div>
      <button class="bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue p-4 hover:border-transparent rounded-lg">SEARCH</button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #0F00B7;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #0F00B7;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #0F00B7;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #0F00B7;
}
</style>
<template>
  <div class="hidden sm:block max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between mb-32">
    <nuxt-link exact to="/">
      <h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl px-8">
        <span class="block text-trust-blue">QUADRATIC TRUST</span>
      </h2>
    </nuxt-link>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4 px-8">
      <nuxt-link to="/about">
        <div class="inline-flex items-center justify-center px-8 py-2 font-semibold text-xl text-trust-blue">
          ABOUT
        </div>
      </nuxt-link>
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-8 py-2 border border-trust-blue text-xl text-trust-blue font-semibold rounded-md hover:text-white bg-transparent hover:bg-trust-blue hover:border-transparent">
          LOG IN
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>
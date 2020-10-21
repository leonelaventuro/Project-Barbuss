<script>
import Footer from '@/components/Footer'
export default {
  components: { Footer }
}
</script>

<template>
  <div class="layout">
    <slot />
    <Footer/>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style src="@/assets/avenir/avenir.css"></style>
<style>

</style>

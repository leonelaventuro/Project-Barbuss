<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<template>

  <div class="grid-item">
    <div class="grid-item__container">
      <img class="grid-item__container__img" :src="data.image" alt="">
      <span class="grid-item__container__name">{{ data.name }}</span>
      <span class="grid-item__container__role">{{ data.role }}</span>
      <p class="grid-item__description">{{ data.description }}</p>
      <a class="grid-item__email" :href="`mailto:${data.email}`">{{ data.email }}</a>
      <div class="grid-item__container-arrow">
        <span class="grid-item__container-arrow__text">GET IN TOUCH</span>
        <img class="grid-item__container-arrow__arrow" src="/images/arrow-red.svg" alt="">
      </div>
    </div>

 
  </div>

</template>

<style lang="scss" scoped>
  .grid-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__nav-buttons{
      display: flex;
      justify-content: center;

    }
    &__container{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0px;
      font-family: 'Montserrat', sans-serif;
      &__img{
        max-width: 320px;
      }
      &__name{

        font-weight: bold;
      }
      &__role{

        margin: 0;
      }
      &__description{

      }
      &__email{

        text-decoration: none;
        color: $color-font-text;
      }       
    }
    &__container-arrow{

        &__text{
          color: $color-primary;
          font-family: 'Futura', sans-serif;
          font-weight: bold;          
        }
        &__arrow{}
    } 
      

    @include media(">0", "<tablet"){ 
      margin: 0 30px;
      &__container{
        margin: 30px 0 10px 0;
        &__img{}
        &__name{
          margin: 20px 0 0 0;
          font-size: 0.9rem;
      
        }
        &__role{
          font-size: 0.7rem;
        }
        &__description{}
        &__email{
          font-size: 0.7rem;
          text-decoration: none;
        }
      }
      &__container-arrow{
        margin: 30px 0 0 0;
        &__text{
          margin: 0 30px 0 0;
        }
        &__arrow{}
      }         
    }
    @include media(">tablet"){
      margin: 0 30px 0 0;
      &__container{
        &__img{}
        &__name{
          font-size: 1.3rem;
          margin: 15px 0 3px 0;
        }
        &__role{
          font-size: 1.18rem;
        }
        &__description{}
        &__email{
          font-size: 1.1rem;
          margin: 30px 0;
        }
      }
      &__container-arrow{
        margin: 50px 0 0 0;
        &__text{
          margin: 0 10px 0 0;
        }
        &__arrow{
          margin: 0 0 0 40px;
        }
      } 
  }
}

</style>
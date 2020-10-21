<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      current: 0
    }
  }
}
</script>

<template>
  <div class="services">
    <h3 class="services__title">What we do</h3>
    <hr class="services__title__line">
    <nav class="services__nav">
      <button
        v-for="(item, ind) in data"
        :key="ind"
        @click="current = ind"
        class="services__nav__button"
        :class="{ 'services__nav__button--active': current === ind }">
        {{ item.title }}
      </button>
    </nav>
    
    <div class="services__container">
      <article
        v-for="(item, ind) in data"
        :key="ind"
        class="services__container__service"
        :class="{ 'services__container__service--active': current === ind }">
        
        <div class="services__container__service__left">
          <h3 class="services__container__service__left__title">{{ item.title }}</h3>
          <hr class="services__container__service__left__line">
          
          <div
            v-for="(subitem, ind2) in item.items"
            :key="ind2"
            class="services__container__service__left__sub">
            <h4 class="services__container__service__left__sub__title">{{ subitem.title }}</h4>
            <p class="services__container__service__left__sub__description">{{ subitem.description }}</p>
          </div>
          <button class="services__container__service__button">{{ item.button }}</button>

        </div>
        <div class="services__container__service__right">
          <div class="services__container__service__right__container-img">
            <img class="services__container__service__right__container-img__img" src="/images/services/marine.png" alt="">
          </div>
        </div>
        
      
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .services {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: $color-font-text;
    &__title{
      margin-bottom: 25px;
      font-family: 'Avenir', sans-serif;
      &__line{
        width: 330px;
        margin-left: -170px;
        border-top: 1px solid;
      }
    }
 
    &__nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      &__button {
        font-family: 'Avenir', sans-serif;
        color: $color-font-heading;
        background-color: $color-background;
        padding: 30px 30px;
        border: 0;
        border-bottom-color: $color-font-heading;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        font-size: 0.84rem;
        cursor: pointer;
        &--active {  
          color: $color-primary;
          border-bottom-color: $color-primary;
          font-size: 1rem;
          outline: none;
        }
      }
      &__container{
        width: 100%;
        &__img{
          width: 100%;
        }
      }
    }

    &__container {
      position: relative;
      height: 600px;
      margin: 0;
      &__service {
        opacity: 0;
        position: absolute;
        height: 100%;
        &__button{
          border: none;
          color: $color-primary;
          background-color: $color-background;
          font-family: 'Futura', sans-serif; 
          padding: 0;
          margin: 0;
        }
        &__left {

          &__title {
            font-size: 1.1rem;
            font-family: 'Montserrat', sans-serif;  
            color: $color-font-text;
          }
          &__line{
            width: 160px;
            margin-left: -2px;
            border-top: 1px solid;
          }
          &__sub {
            font-size: 0.8rem;
            font-family: 'Montserrat', sans-serif;
            &__title {
              font-weight: 500;
            }

            &__description {
              font-size: 0.8rem;
              line-height: 20px;
              font-weight: 500;
              font-family: 'Avenir', sans-serif;
            }
          }
          
        }

        &__right {
          &__container-img{

            &__img{
              width: 100%;
            }
          }
        }

        &--active {
          opacity: 1;
        }
      }
    }

    @include media(">0", "<tablet"){
    margin: 100px 35px 500px 35px;
      &__title{
      font-size: 1.2rem;
        &__line{
              width: 330px;
              margin: 15px 0 40px -180px ;
        }
      }
      &__nav {

        &__button {
          width: 120px;
          height: 100px;
          padding: 20px 0;
          margin-right: 15px;
          border-bottom-width: 2px;
          border-bottom-style: solid;
          font-size: 0.7rem;
          &--active{
            color: $color-primary;
            border-bottom-color: $color-primary;
            font-size: 0.8rem;
          }
        }
      }

      &__container {
        &__service {
            display: flex;
            flex-direction: column;
          &__button{
    
          }
          &__left {
            margin: 0 50px 0 40px;
            &__title {
              font-size: 1.2rem;
              margin-top: 0;
            }
            &__line{
              margin: 20px 0;
            }
            &__sub {
        
              &__title {
                font-size: 0.9rem;
                font-weight: 800;
              }
              &__description {
                font-size: 0.8rem;
                margin: 15px 0;
              }
            }
          }

          &__right {
            order: -1;
            &__container-img{
              
              max-width: 100%;
              margin: 70px 0;
            &__img{
              width: 100%;
            }
          }
          }

          &--active {
            opacity: 1;
          }
          &__button{
         
          }
        }
        
      }
    }
  

    @include media(">tablet"){
      display:flex;
      justify-content: center;
      padding: 0 100px;
      &__title{
        margin: 20px 0 50px 70px;
        font-size: 2rem;
        &__line{
          width: 330px;
          margin: 15px 0 40px -180px ;
        }
      }

      &__nav {
        &__button {
          width: 120px;
          height: 100px;
          padding: 20px 0;
          margin-right: 15px;
          border-bottom-width: 2px;
          border-bottom-style: solid;
          font-size: 0.9rem;
          &--active{
            color: $color-primary;
            border-bottom-color: $color-primary;
            font-size: 1rem;
          }
        }
      }

      &__container {
        margin: 100px 0 0 0;

        &__service {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            grid-column-gap: 10%;
          &__button{

          }
          &__left {

            margin: 0 50px 0 0;
            &__title {
              font-size: 1.2rem;
              margin-top: 0;
            }
            &__line{
              margin: 20px 0;
            }
            &__sub {
        
              &__title {
                font-size: 1rem;
                font-weight: 800;
              }
              &__description {
                font-size: 0.9rem;
                margin: 15px 0;
              }
            }
          }

          &__right {

            &__container-img{
              width: 100%;
              &__img{
                width: 100%;
              }
            }
          }

          &--active {
            opacity: 1;
          }
          &__button{
            display: none;
          }
        }
        
      }
    }
  }
</style>
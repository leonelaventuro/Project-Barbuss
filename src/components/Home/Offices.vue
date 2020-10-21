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
  },
  computed: {
    _offices () {
      return (this.data[this.current] ? this.data[this.current].offices : undefined) || []
    }
  }
}
</script>


<template>
  <div class="offices">
    <div class="offices__box">
      <h3 class="offices__box__title">Where we are</h3>
      <hr class="offices__box__line">
    </div>
    <div class="offices__container">
      <nav class="offices__container__nav">
        <button
          v-for="(item, ind) in data"
          :key="ind"
          @click="current = ind"
          class="offices__container__nav__button">
          {{ item.group }}
        </button>
        <img class="offices__container__nav__arrow" src="/images/arrow-white.svg" alt="">
      </nav>
      <div class="offices__container__grid">
        <div
          v-for="(item, ind) in _offices"
          :key="ind"
          class="offices__container__grid__item">
          <h4 class="offices__container__grid__item__title">{{ item.title }}</h4>
          <span class="offices__container__grid__item__subtitle">{{ item.subtitle }}</span>
          <a :href="item.address.url" class="offices__container__grid__item__address">{{ item.address.text }}</a>
          <a :href="`tel:${item.phone.split(/[ -]+/).join('')}`" class="offices__container__grid__item__phone">{{ item.phone }}</a>
          <a :href="item.email" class="offices__container__grid__item__email">{{ item.email }}</a>
        </div>
      </div>
    </div>
    <div class="offices__arrow">
      <img class="offices__arrow__img" src="/images/arrow-white.svg" alt="">
      <g-link class="offices__arrow__link">ALL LOCATIONS</g-link>
    </div>
  </div>


</template>

<style lang="scss" scoped>
  .offices {
    background-color: $color-primary;
    color: $color-primary-font;
    padding: 100px 50px;
    letter-spacing: 1px;
    &__box{
      margin: 0 0 50px 0;
      &__title{
        margin: 0 0 40px 0;
        font-size: 1.2rem;
        font-family: 'Avenir', sans-serif;
      }
      &__line{
        width: 330px;
        margin: 15px 0 15px -170px ;
      }
    }

    &__container{
      &__nav {
        display: flex;
        justify-content: space-between; 
        width: 200px;
        &__button {
          font-family: 'Futura', sans-serif;
          cursor: pointer;
          border: none;
          background-color: $color-primary;
          color: $color-primary-font;
          padding: 0;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      }

      &__grid {
        &__item {
          display: flex;
          flex-direction: column;
          font-family: 'Montserrat', sans-serif;
          &__title {
            text-transform: uppercase;
            font-weight: bold;
          }

          &__subtitle {
            font-weight: bold;
          }

          &__address {
            text-decoration: none;
            line-height: 25px;
            color: $color-primary-font
          }

          &__phone {
            text-decoration: none;
            color: $color-primary-font
          }

          &__email {
            text-decoration: none;
            color: $color-primary-font;
            font-weight: bold;
          }
        }
      }
    }
    @include media(">0", "<tablet"){
      &__box{
        &__title{

        }
        &__line{
          width: 330px;
          margin: 15px 0 15px -170px ;
        }
      }
      &__container{      
        &__nav {
          &__button {
            font-size: 0.9rem;
          }
          &__arrow{
            display: none;
          }
        }

        &__grid {
          &__item {
            &__title {
              margin: 50px 0 30px 0;
              padding: 0 50% 0 0;
              font-size: 1.15rem;
            }
            &__subtitle {
              margin: 0 0 7px 0;
              font-size: 0.85rem;
            }
            &__address {
              font-size: 0.7rem;
              margin: 0 0 7px 0; 
              width: 189px;
            }
            &__phone {
              text-decoration: none;
              color: $color-primary-font;
              margin: 0 0 7px 0;
              font-size: 0.7rem;
            }
            &__email {
              text-decoration: none;
              color: $color-primary-font;
              font-size: 0.8rem;
            }
          }
        }
      }
      &__arrow{
        margin: 80px 0 0 0;
        &__link{
          margin: 0 20px;
          font-size: 0.7rem;
          color: $color-primary-font;  
          text-decoration: none; 
        }
        &__img{
          transform: scaleX(-1);
        }
      }
    }
    @include media(">tablet"){
      padding: 150px 170px;
      &__box{
        margin: 0 0 90px 0;
        &__title{
          margin: 0 0 60px 0;
          font-size: 1.2rem;
        }
        &__line{
          width: 330px;
          margin: 15px 0 15px -210px ;
        }
      }
      &__container{
        display: grid;
        grid-template-columns: minmax(250px, 20%) 1fr;
        &__nav {
          &__button {
            cursor: pointer;
            border: none;
            background-color: $color-primary;
            color: $color-primary-font;
            padding: 0;
            font-size: 0.8rem;
            
          }
        }

        &__grid {
          &__item {
            display: flex;
            flex-direction: column;
            &__title {
              width: 110px;
              text-transform: uppercase;
              font-size: 1.1rem;
            }

            &__subtitle {
              font-size: 0.9rem;
            }

            &__address {
              font-size: 0.7rem;
              width: 230px;
              text-decoration: none;
              color: $color-primary-font

            }

            &__phone {
              font-size: 0.7rem;
              text-decoration: none;
              color: $color-primary-font
            }

            &__email {
              font-size: 0.8rem;
              text-decoration: none;
              color: $color-primary-font
            }
          }
        }
      }
      &__arrow{
        display: none;
      }
    }
  }
</style>
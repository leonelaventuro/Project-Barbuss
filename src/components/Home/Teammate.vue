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
    _teammate () {
      return this.data[this.current]
    },
    _shortAbout () {
      return this._teammate.shortAbout.split("\n")
    }
  },
  methods: {
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    changeTeammate () {
      const newIndex = this.getRandomInt(0, this.data.length)
      this.current = newIndex
    }
  }
}
</script>

<template>

  <div class="teammate">
    <div class="teammate__text">
      <h3 class="teammate__text__title">Meet the Team</h3>
      <hr class="teammate__text__line">
      <div class="teammate__text__box">
        <div class="teammate__text__box__boxtext">
          <p class="teammate__text__box__boxtext__paragraph">This is<strong> Jonas.</strong></p>
          <p class="teammate__text__box__boxtext__paragraph">He works in our Management Team.</p>
        </div>

      </div>
    </div>
    <div class="teammate__card">
      <img class="teammate__card__img" :src="_teammate.image" alt="">
      <div class="teammate__card__text">
        <h3 class="teammate__card__text__name"><strong>{{ _teammate.name }}</strong></h3>
        <p class="teammate__card__text__job">{{ _teammate.role }}</p>
        <p class="teammate__card__text__email">{{ _teammate.email }}</p>
        <g-link class="teammate__card__text__linkedin"><img class="home__teammate__container__card__text__linkedin" src="/images/linkedin_circle.svg" alt="">{{ _teammate.linkedin }}</g-link>
      </div>
      <div class="teammate__card__overlay" @click="changeTeammate">
        MEET ANOTHER TEAMMATE
        <img class="teammate__card__overlay__icon" src="/images/arrow.svg" alt="">
      </div>
    </div>
    <div class="teammate__links">
      <g-link to="/team" class="teammate__links__link">
        MEET ANOTHER TEAMMATE
        <img class="teammate__links__link__icon" src="/images/arrow-red.svg" alt="">
      </g-link>
      <div class="teammate__links__link teammate__links__link--onlymobile" @click="changeTeammate">
        MEET THE WHOLE TEAM
        <img class="teammate__links__link__icon" src="/images/arrow-red.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .teammate{
    display: grid;
    &__text{ 
      display: flex;
      flex-direction: column;
      color: $color-font-text;
      &__title{
        font-weight: 800;
        font-style: normal;
        font-family: 'Avenir', sans-serif;
      }
      &__line{
        border-top: 1px solid;
      }
      &__box{
        &__boxtext{
          &__paragraph{
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: normal; 
          } 
        }
      }
    
    }
    &__card{
      display: flex;
      flex-direction: column;

      &__img {
        width: 100%;
        height: auto;
      }

      &__text{
          display: flex;
          flex-direction: column;
          color: $color-font-text;
          font-family: 'Montserrat', sans-serif;
        &__name{
        }
        &__job{
        }
        &__email{

        }
      }

      &__overlay {
        cursor: pointer;
        font-weight: bold;
        font-family: 'Futura', sans-serif;
      }
    }
    &__links {
      &__link {
        font-weight: bold;
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        font-family: 'Futura', sans-serif;
        color: $color-primary;
      }
      &__icon{
        color: $color-primary;
      }
    }
    
    ////////////media mobile TEAMMATE
    @include media(">0", "<tablet") {
      grid-template-rows: 1fr;
      align-items: center;
      padding: 30px;
      &__text{
          margin-bottom: 33px;
        &__title{
          margin-bottom: 30px;
          font-size: 1.2rem;
        }
        &__line{
          width: 330px;
          margin-left: -170px;
          margin-bottom: 30px;
        }
        &__box{
          &__boxtext{
            &__paragraph{
              font-size: 0.8rem; 
            } 
          }
        }
      }
      &__card{
        &__text{
          &__name{
            margin: 30px 0 2px 0;
            font-size: 1rem;
          }
          &__job{
            margin: 0;
            font-size: 0.8rem;
          }
          &__email{
            font-size: 0.8rem;
          }
          &__linkedin{
            margin: 0;
            font-size: 0.8rem;
            text-decoration: none;
            color: $color-font-text;
          }
        }

        &__overlay {
          display: none;
        }
      }

      &__links {
        margin: 30px 0 40px;
        text-align: right;
        &__link {
          font-size: 0.7rem;
          margin: 15px 0 15px 0;
          
          &__icon{
            margin: 0 15px;
            padding: 2px;  
          }
          &--onlymobile {
            display: block;
          }
        }

      }
    }

    /////////media desktop TEAMMATE
    @include media(">tablet"){
      max-width: 1000px;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      justify-content: space-between;
      grid-column-gap: 10%;
      padding: 150px 100px 50px 100px;

      &__text{
        &__title{
          margin: 0 0 60px 0;
          font-size: 2rem;
        }
        &__line{
        width: 100vw;
        margin-left: -93vw;
        margin-bottom: 50px;
        }
        &__box{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &__boxtext{
            &__paragraph{
              font-size: 1rem;
              margin: 15px 0;
            } 
          }

        }
      }

      &__card{
        max-width: 400px;
        position: relative;

        &__text{
          &__name{
            font-size: 1rem;
            margin: 15px 0 3px 0;
          }
          &__job{
            font-size: 0.84rem;
            margin: 0;
          }
          &__email{
            font-size: 0.8rem;
            margin: 30px 0;
          }
          &__linkedin{
            font-size: 0.8rem;
            margin: 0 0 0 5px;
            text-decoration: none;
            color: $color-font-text;
          }
        }

        &__overlay {
          position: absolute;
          top: 39%;
          right: 0;
          margin-right: -85px;
          font-size: 0.8rem;
          &__icon{
            margin-left: 30px;
          }

        }
      }

      &__links {
        margin: 70px 0 100px 0;
        &__link {
          display:flex;
          align-items: center;
          font-size: 0.8rem;
          &__icon{
            margin-left: 30px;
          }
          &--onlymobile {
            display: none;
          }
        }
      }

    }
    &__arrows{
      text-align: left;
      margin: 60px 0 0 0;
    }
  }
</style>
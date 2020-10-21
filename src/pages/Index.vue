<script>
import Services from '@/components/Home/Services'
import Offices from '@/components/Home/Offices'
import Teammate from '@/components/Home/Teammate'
import mock from '@/mock'
export default {
  components: { Services, Offices, Teammate },
  metaInfo () {
    return {
      title: ''
    }
  },
  data () {
    return {
      mock
    }
  }
}
</script>

<template>
  <Layout class="home">
    <section class="home__hero">
      <h2>Seamless claims Management and Recovery Services </h2>
    </section>
    <header class="home__header">

    <div class="home__header__logo"><img src="/images/barbuss_logo.svg" alt=""></div>
    <div class="home__header__items">
      <ul class="home__header__items__list">
        <li class="home__header__items__list__item">Who we are</li>
        <li class="home__header__items__list__item">What we do</li>
        <li class="home__header__items__list__item">Where we are</li>
      </ul>
    <div class="home__header__items__list__linkedin"><img src="/images/linkedIn_logo.svg" alt=""></div> 
    </div>
    </header>

    <section  class="home__about"> 
      <div class="home__about__container">
        <div class="home__about__container__text">
          <h3 class="home__about__container__text__title">Who we are</h3>
          <hr class="home__about__container__text__line">
          <h4 class="home__about__container__text__subtitle">Our Purpose</h4>
          <p class="home__about__container__text__paragraph">
            We are team players that help our 
            clients to improve results, by developing
            our members and impacting the markets that 
            we are active in, by being innovative and 
            creating better leaders. 
          </p>
          <h4 class="home__about__container__text__subtitle">Our Beliefs</h4>
          <ul class="home__about__container__text__list">
            <li class="home__about__container__text__list__item">Proactivity.</li>
            <li class="home__about__container__text__list__item">Constant Improvement.</li>
            <li class="home__about__container__text__list__item">Closeness to Clients.</li>
            <li class="home__about__container__text__list__item">Transparency.</li>
            <li class="home__about__container__text__list__item">Respect for our employees, clients and third parties.</li>
            <li class="home__about__container__text__list__item">Knowledge sharing.</li>
          </ul>
        </div>
      </div>
      <div class="home__about__img">
          <img class="home__about__img__primary-img" src="/images/tower.png" alt="">
        </div>
    </section>


    <section class="home__teammate">
      <Teammate :data="mock.team" />
    </section>


    <section class="home__quote">
      “We strongly believe in talent development and innovation as drivers for our growth! If you believe, as we do, in proactivity, constant improvement, transparency, and knowledge sharing, we invite you to look at our open vacancies.”
    </section>


    <section class="home__services">
      <Services :data="mock.services" />
    </section>


    <section class="home__offices">
      <Offices :data="mock.offices" />
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
  .home {
    &__hero {
      // https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/
      // Propiedades comunes, independientemente del tamaño del viewport
      // Todas las variables de sass las vas a encontrar en el archivo src/assets/scss/globals.scss
      background-color: $color-primary;
      color: $color-primary-font;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100vh;
      box-sizing: border-box;
      letter-spacing: -0.015em;
      font-family: 'Montserrat', sans-serif;
      
      // Las media queries van de menor a mayor
      // https://eduardoboucas.github.io/include-media/
      @include media(">0", "<tablet") {
        padding: 20px;
        font-size: 1.2rem;
      }

      // Solo definimos adentro de esto las variables que cambian
      @include media(">tablet") {
        padding: 40px;
        font-size: 2rem;
        line-height: 170%;
      }
    } //// inicio header
    &__header{
      background-color: $color-primary;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Avenir', sans-serif;
        &__logo{
          width: 150px;
          margin: 18px 0 18px 84px;
          padding: 0;
          cursor: pointer;
        }
        &__items{
          display: flex;
          align-items: center;
          cursor: pointer;  
          &__list{
            display: flex;
            padding: 0;
            list-style: none;
            color: $color-primary-font;  
            &__linkedin{
              color: $color-primary-font;
              width: 40px;
            }
          }
        }
    /////media de header    
    @include media(">0", "<tablet") {
      &__logo{
        width: 150px;
        margin: 18px 0 18px 30px;
        padding: 0;
      }
        &__items{
          display: none;
          &__list{
            display: none;
            flex-direction: row;
            font-size: 0.7rem;
            &__linkedin{
              display: none;
            }
          }
        }
    }
    @include media(">tablet") {
      &__logo{
        width: 150px;
        margin: 18px 0 18px 64px;
        padding: 0;
      }
        &__items{
          &__list{
            font-size: 0.8rem;
            &__item{
              margin: 0 40px 0 0;
              font-size: 0.8rem;
            }
            &__linkedin{
              padding: 20px;
              margin: 0 80px 0 0;
            }
          }
        }
    }
    } 

    ///// INICIO ABOUT
    &__about{
      display: flex;
      flex-wrap: wrap;
      background-color: $color-background;
      color: $color-font-text;
      &__container{
        display: flex;
        box-sizing: border-box;
        &__text{ // TEXTO
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
          &__subtitle{
            font-weight: 500;
            font-family: 'Avenir', sans-serif;
          }
          &___paragraph{
            line-height: 20px;
            font-weight: 500;
            font-family: 'Montserrat', sans-serif;
          }
          &__list{
            line-height: 33px;
            list-style: none;
            padding: 0;
          }
        }
      }
      &__img{ // IMAGEN
          display: flex;
          &__primary-img{
            min-width: 100%;
          }
      }

      /////// media mobile about
      @include media(">0", "<tablet") {
        justify-content: center;
        flex-direction: column;
        margin: 25px 35px 50px 35px;
        &__container{ 
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
          &__text{
            &__title{
                font-size: 1.2rem;
              }
              &__line{
                width: 330px;
                margin: 15px 0 15px -170px ;
              }
              &__subtitle{
                font-size: 1rem;
                margin-bottom: 20px;
              }
              &__paragraph{
                font-size: 0.8rem;
              }
              &__list{
                font-size: 0.8rem;
              }
          } 
        }
      &__img{
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
      }
      }

      ////////media descktop ABOUT
      @include media(">tablet") {
        justify-content: center;
        margin: 120px 0 150px 0;
        &__container{
          max-width: 450px ;
          margin: 0 170px 0 0;
          &__text{
            margin: 20px 0 0 0;
            &__title{
              margin-top: 0;
              font-size: 2rem;
              }
            &__line{
              width: 100vw;
              margin-left: -93vw;
            }
            &__subtitle{
              font-size: 1.7rem;
            }
            &__paragraph{
              width: clamp(35ch, 50%, 60ch);
              font-size: 1.1rem;
            }
            &__list{
              font-size: 1.3rem;
            }
          }
        }
        &__img{
          min-width: 310px;
          flex: 0 1 545px;
          }
      }
      ////FIN MEDIA ABOUT
    }
    //////////fin about
    &__teammate {
      background-color: $color-background-alt;
    }

  &__quote{ // QUOTE
    background-color: $color-primary;
    color: $color-primary-font;
    font-family: 'Avenir', sans-serif;
    text-align: center;
    letter-spacing: 0.8px;
    margin-bottom: 60px;

  @include media(">0", "<tablet") {
    padding: 80px 40px;
    font-size: 1.5rem;
  }
  @include media(">tablet"){
    padding: 80px 250px;
    font-size: 2.4rem;
  }
  }//// FIN QUOTE

}
</style>
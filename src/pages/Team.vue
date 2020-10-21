<script>
import GridItem from '@/components/Team/GridItem'
import mock from '@/mock'
export default {
  components: { GridItem },
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
  <Layout class="team">
    <section class="team__hero">
      
    </section>
    <header class="team__header">
      <div class="team__header__logo"><img src="/images/barbuss_logo.svg" alt="">
      </div>
      <div class="team__header__items"> 
        <a href="" class="team__header__items__arrow"><img class="team__header__items__arrow__img" src="/images/arrow-white.svg" alt=""></a>
        <a href="" class="team__header__items__text">GO BACK</a>
      </div>
    </header>
    <div class="team__container">
      <h3 class="team__container__title"> Meet the team  </h3>
      <hr class="team__container__line">
    </div>
    <div class="team__grid">
      <GridItem
        v-for="(item, ind) in mock.team"
        :key="ind"
        :data="item"
      />
    </div>
    <div class="team__nav-buttons">
      <button class="team__nav-buttons__number">  </button>
      <button class="team__nav-buttons__number"> 1 </button>
      <button class="team__nav-buttons__number">... </button>
      <button class="team__nav-buttons__number"> 2 </button>
      <button class="team__nav-buttons__number"> 3 </button>
      <button class="team__nav-buttons__number"> 4 </button>
      <button class="team__nav-buttons__number"> ... </button>
      <button class="team__nav-buttons__number"> 20 </button>
      <button class="team__nav-buttons__number"> > </button>
    </div>
  </Layout>
  
</template>

<style lang="scss" scoped>
.team{
  display: flex;
  justify-content: center;  
  flex-direction: column;
  &__hero{
    background-color: $color-primary; //<<<<<<<<<<<<<<<<<<<<<
    height: 400px;
  }
  &__header{
      height: 85px;
      background-color: $color-primary;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__logo{

      }
      &__items{
        &__text{
          font-family: 'Futura', sans-serif;
          text-decoration: none;
          color: $color-primary-font;
        }
        &__arrow{
          &__img{
            margin: 0 20px 0;
            transform: rotate(180deg);
          }
        }
      }
    }
    &__container{
      color: $color-font-text;
      &__title{
        font-family: 'Avenir', sans-serif;
      }
      &__line{
        border-top: 1px solid;
      }
    }
  &__grid{
    display: flex;
    justify-content: center;
  }
  &__nav-buttons{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
      &__number{
        margin: 100px 0 0 0;
        color: $color-primary;
        background-color: $color-background;
        border-radius: 4px;
        padding: 10px 15px;
        border: 0.5px solid $color-primary;
      }
  }
  @include media(">0", "<tablet"){
    &__hero{
    }
    &__header{
      &__logo{
        margin: 0 0 0 20px;
      }
      &__items{
        display:flex;
        align-items: center;
        margin: 0 20px 0 0;
        font-size: 0.8rem;
      }
    }
    &__container{
      margin: 80px 0 60px 30px;
      &__title{
        font-size: 1.2rem;
      }
      &__line{                
        width: 330px;
        margin: 15px 0 15px -170px ;
      }
    }
    &__grid{
      display: flex;
      flex-direction: column;
    }
    &__nav-buttons{
      &__number{
        font-size: 0.6rem;
        margin: 100px 0 0 0;
        padding: 8px 12px;
      }    
    }    
  }
  @include media(">tablet"){
    &__hero{
    }
    &__header{
      &__logo{
        margin: 0 0 0 100px;
        cursor: pointer;
      }
      &__items{
        display:flex;
        align-items: center;
          &__text{
            margin-right: 100px;
            font-size: 0.8rem;
          }
          &__arrow{
            margin-right: 20px;
          }
      }
    }
    &__container{
      margin: 120px 0 0px 100px;
      &__title{
        font-size: 2.2rem;
        margin: 0 0 50px 0;
      }
      &__line{
        width: 530px;
        margin: 0 0 70px -270px;        
      }
    }
    &__grid{
    flex-direction: row;
    }
    &__nav-buttons{
        &__number{
          margin: 100px 0 0 0;
          padding: 10px 15px;
        }    
    }
  }
}

</style>
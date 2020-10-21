<script>
export default {

}
</script>

<template>
  <footer class="footer">
    <hr class="footer__line">
    <div class="footer__container">
      <h1 class="footer__container__logo"><a href=""><img src="/images/barbuss_logo-gray.svg" alt=""></a></h1>
      <ul class="footer__container__list">
        <li class="footer__container__list__who">Who we are</li>
        <li class="footer__container__list__what">What we do</li>
        <li class="footer__container__list__where">Where we are</li>
        <a class="footer__container__list__linkedin1"><img src="/images/linkedin_circle.svg" alt=""></a>
        <a class="footer__container__list__linkedin2"><img src="/images/linkedIn_logo-gray.svg" alt=""></a>
      </ul>  
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  display: flex;
  flex-direction: column; 
  
  &__line{
    justify-content: center;
    width: 280px;
    border-top: 1px solid;
    color:$color-font-heading;
  }
  &__container{
  &__logo{
    text-align: center;
    color:$color-font-heading;
    cursor: pointer;
  }
  &__list{ 
    font-family: 'Avenir', sans-serif; 
    list-style: none;
    padding: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color:$color-font-heading; //no funciona
  }
} 
  @include media(">0", "<tablet"){
    margin: 70px 30px 250px 30px;
    &__container{
      margin-top: 10px;
      &__logo{
      font-size: 1.7rem;
      margin-bottom: 60px;
      }
      &__list{
        margin-top: 70px;
        margin: 30px 0;
        &__menu{
          line-height: 60px;
        }
        &__linkedin1{
          display: none;
      
        }
        &__who{
          margin: 45px;
        }
        &__what{
          margin: 45px;
        }
        &__where{
          margin: 0 0 45px;
        }
      
      }
      
    }
  
    
  }
  @include media(">tablet"){
    margin: 120px;
    &__line{
      width: 100%;
    }
    &__container{
      display: flex;
      justify-content: space-between;
      &__list{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.8rem;
        &__linkedin2{
          display:none;
        }
        &__who{
          margin: 35px;
        }
        &__what{
          margin: 35px;
        }
        &__where{
          margin: 0 70px 0 35px;

        }
      }
    }
    }
}

</style>
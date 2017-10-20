<template>
    <div>
        <div class="weather-info-wrapper">

            <div class="weather-centered">
                <div class="city-information">
                    <h2 class="city-name">Charqueadas</h2>
                </div>
                <div class="weather-image-wrapper">
                    <div class="weather-description">
                        Ensolarado
                    </div>
                    <div class="weather-information">
                        <img src="../../assets/images/animated/day.svg" alt="Tempo Atual" class="weather-image">
                        <div class="main-temperature">
                            23°
                        </div>
                    </div>
                    <div class="weather-risk normal">
                        Sem risco
                    </div>
                    <div class="other-temperature">
                        <i class="fa fa-long-arrow-up maximum"></i> 23 | 15 <i class="fa fa-long-arrow-down minimum"></i>
                    </div>
                </div>
                
            </div>

        </div>
        <vulma-button class="danger" color='primary'>Preciso de Ajuda</vulma-button>
    </div>
</template>

<script>
    export default {
      name: 'weatherForecastComponent'
    }
</script>

<style lang="stylus" scoped>
    .weather-info-wrapper
        text-align: center;
        height: 100%;
        position: relative;

    .weather-image-wrapper
        background-color #1c2d3e

        .weather-description, .weather-risk
            color #fff
            position absolute
            width 100%

        .weather-description
            text-align center
            margin-top 5px
            font-size: 20px
    
        .weather-information
            text-align left
            position relative
            padding 15px 0
            .weather-image
                width 70%
                max-width 200px
                display inline
            .main-temperature
                color #fff
                position: absolute
                top 50%
                right 20px
                text-align center
                -webkit-transform translateY(-50%)
                -ms-transform translateY(-50%)
                transform translateY(-50%)
                font-size 60px

        .weather-risk
            bottom 8px
            right 8px
            width auto
            padding 2px 10px
            border-radius 100px

        .normal
            background-color #00d1b2
        .alert
            background-color #f1c40f
        .danger
            background-color #e74c3c

        .other-temperature
            position absolute
            bottom 0px
            left 8px
            bottom 8px
            width auto
            padding 2px 10px
            border-radius 100px
            background-color #fff

        .maximum
            color #e74c3c
        .minimum
            color #3498db
    .city-information
        color #fff

    .city-name
        margin 20px 0
        font-size 28px
        font-weight inherit
        font-style normal

    .danger
        font-size 20px
        width 100%
        height 66px
        position absolute
        bottom 0
        left 50%
        transform translate3d(-50%,0,0)
        background-color #e74c3c

</style>

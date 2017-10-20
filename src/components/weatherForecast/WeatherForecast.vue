<template>
    <div>
        <div class="weather-info-wrapper">

            <div class="weather-centered">
                <div class="city-information">
                    <h2 class="city-name">Charqueadas</h2>
                </div>
                <div class="weather-image-wrapper">
                    <img src="../../assets/images/animated/day.svg" alt="Tempo Atual" class="weather-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
      name: 'weatherForecastComponent'
    }
</script>

<style>
    .weather-info-wrapper {
        text-align: center;
        height: 100%;
        position: relative;
    }

    .weather-centered {
        /* position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%); */
    }

    .weather-image-wrapper{
        background-color: #1c2d3e;
    }
    
    .weather-image {
        width: 70%;
        max-width: 200px;
    }

    .city-information{
        color: #fff;
    }

    .city-name{
        margin: 20px 0px;
        font-size: 28px;
        font-weight: inherit;
        font-style: normal;
    }
</style>

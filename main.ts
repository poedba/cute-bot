cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 140, 21, 140)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 66, 144)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
})

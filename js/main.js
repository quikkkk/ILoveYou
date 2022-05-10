const colors = { color: "rgb(255,0,0)" }

const options = {
 alphaSpeed: 5,
 alphaVariance: 1,
 color: [colors.color],
 composition: "source-over",
 count: 120,
 direction: 131,
 float: 0.25,
 glow: 1,
 imageUrl: [ "../upload/heart.svg" ],
 maxAlpha: 2,
 maxSize: 22,
 minAlpha: -0.2,
 minSize: 4,
 parallax: 1.75,
 rotation: 0.5,
 shape: "image",
 speed: 5,
 style: "fill",
 twinkle: false,
 xVariance: 5,
 yVariance: 0,
}

const initSparticles = className => {
 const $main = document.querySelector(className)
 window.mySparticles = new sparticles.Sparticles($main, options)
}

initSparticles('.area')
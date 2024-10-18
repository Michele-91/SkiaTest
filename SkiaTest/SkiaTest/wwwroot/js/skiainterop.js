//export function renderSkiaImage(canvasId, base64Image) {
//    const canvas = document.getElementById(canvasId);
//    const ctx = canvas.getContext('2d');
//    const img = new Image();
//    img.onload = function () {
//        ctx.drawImage(img, 0, 0);
//    };
//    img.src = 'data:image/png;base64,' + base64Image;
//}

var canvasLoaded = false;
var canvas;
var ctx;
var img;

document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded, attempting to initialize Fabric.js");

    function renderSkiaImage(canvasId, base64Image) {
        canvas = document.getElementById(canvasId);
        ctx = canvas.getContext('2d');
        img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = 'data:image/png;base64,' + base64Image;

        canvasLoaded = true;

        // Call the initializeFabric function after a slight delay to ensure all scripts are loaded
        /*setTimeout(initializeFabric, 500);*/
        if (!canvasLoaded) {
            setTimeout(renderSkiaImage, 100);
        }
    });

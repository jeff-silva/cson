// Capturando GL context:
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext

var canvas = document.getElementById('myCanvas');
var gl = canvas.getContext('webgl');

this.gl.disable(this.gl.DEPTH_TEST);

https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc


Enviar input para webview
https://www.electronjs.org/docs/latest/api/webview-tag#webviewsendinputeventevent


let gl = document.querySelector('#canvas').getContext('webgl');
gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.NEVER);


gl.NEVER
gl.LESS
gl.EQUAL
gl.LEQUAL
gl.GREATER
gl.NOTEQUAL
gl.GEQUAL
gl.ALWAY


document.addEventListener('keydown', ev => {
    console.log(ev);
});
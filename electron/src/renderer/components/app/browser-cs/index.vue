// https://webglsamples.org/
// wss://game-br3.play-cs.com/u/127.0.1.1:27005

<template>
  <div>
    <div class="d-flex">
      <div class="flex-grow-1">
        <div style="position:relative; width:100%; height:100vh;">
          <webview
            ref="webview"
            :src="url"
            style="display:flex; width:100%; height:100%;"
            webpreferences="allowRunningInsecureContent"
            allowpopups
            nodeintegration
            nodeintegrationinsubframes
            disablewebsecurity
            @dom-ready="scriptInit($event)"
            @message="log($event)"
            @onMessage="log($event)"
        ></webview>
        </div>
      </div>
      <div class="pa-2" style="min-width:200px; max-width:200px;">
        <v-btn block>Servidores</v-btn>
        <v-btn block @click="$refs.webview.openDevTools()">Devtools</v-btn>
        <v-checkbox label="Depth test"></v-checkbox>
        <pre>isGameScreen: {{ isGameScreen }}</pre>
        <pre>webviewModel: {{ webviewModel }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isGameScreen: false,
            webviewModel: {},
            url: 'https://play-cs.com/pt/servers',
            // url: 'https://play-cs.com/play/27005/br',
            // url: 'https://webglsamples.org/city/city.html',
        };
    },
    methods: {
      log: console.log,
      scriptInit() {
        // this.$refs.webview.openDevTools();

        ['message', 'onMessage'].forEach(evt => {
          [window, this.$refs.webview].forEach(target => {
            target.addEventListener(evt, ev => {
              console.log(evt, ev);
            });
          });
        });


        let callback = (function() {
          // alert('body: '+ document.body.innerHTML);
          // https://play-cs.com/api2/getRoomPlayers2?port=27005&region=br

          // let socket = Object.assign(new WebSocket("wss://game-br3.play-cs.com/u/127.0.1.1:27005"), {
          //   onopen: function(ev) {
          //     console.log('onopen:', ev);
          //   },
          //   onmessage: function(ev) {
          //     console.log('onmessage:', ev);
          //   },
          //   onclose: function(ev) {
          //     console.log('onclose:', ev);
          //   },
          //   onerror: function(ev) {
          //     console.log('onerror:', ev);
          //   },
          // });


          // setInterval(() => {
          //   console.clear();
          //   console.log('g_PlayerExtraInfo:', g_PlayerExtraInfo);
          // }, 1000);

          setInterval(() => {
            const message = {text: 'hello'};
            console.log('post message sent:', message);
            window.postMessage(message, '*');
          }, 1000);

          const canvasInit = function(canva) {
            let gl = canva.getContext('webgl');
            if (!gl) return;

            if (window.depthTestInterval) {
                clearInterval(window.depthTestInterval);
                delete window.depthTestInterval;
                document.querySelector('#cstarget').remove();
                return;
            }

            window.depthTestInterval = setInterval(() => {
                gl.enable(gl.DEPTH_TEST);
                gl.depthFunc(gl.NEVER);
            }, 80);

            const pointerSize = 8;
            document.body.prepend(Object.assign(document.createElement('div'), {
              id: 'cstarget',
              style: [
                `position: absolute;`,
                `z-index: 2;`,
                `top: 50%;`,
                `left: 50%;`,
                `width: ${pointerSize}px;`,
                `height: ${pointerSize}px;`,
                `margin: -${pointerSize/2}px 0 0 -${pointerSize/2}px;`,
                `border: solid 1px lime;`,
                `border-radius: 50%;`,
                `box-sizing: border-box;`,
              ].join(''),
            }));
          };

          // document.querySelectorAll('canvas').forEach(canva => {
          //   canvasInit(canva);
          // });

          document.addEventListener('keyup', ev => {
            if (ev.key != 'e') return;

            document.querySelectorAll('canvas').forEach(canva => {
              canvasInit(canva);
            });
          });
        });

        callback = `(${callback.toString()})();`;
        this.$refs.webview.executeJavaScript(callback);
      },
    },
}
</script>
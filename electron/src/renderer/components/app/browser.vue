<template>
    <webview
        ref="webview"
        :src="src"
        :preload="preload || null"
        style="display:flex; width:100%; height:100%;"
        allowpopups
    ></webview>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: ()=>({}),
        },
        src: {type:String, default:''},
        preload: {default:false, type:[Boolean, String]},
    },
    data() {
        return {
            modelValue: {},
            domReady: false,
            executeJavaScriptCodes: [],
        };
    },
    methods: {
        webviewInit() {
            const webview = this.$refs.webview;

            // console.clear(); for(let i in webview) {
            //     console.log(i, typeof webview[i]);
            // }

            webview.addEventListener('dom-ready', () => {
                this.domReady = true;
                this.modelValue = {
                    src: this.$refs.webview.getURL(),
                    title: this.$refs.webview.getTitle(),
                    partition: this.$refs.webview.partition,
                    httpreferrer: this.$refs.webview.httpreferrer,
                    useragent: this.$refs.webview.useragent,
                    lang: this.$refs.webview.lang,
                };
                this.$emit('input', this.modelValue);
                this.$emit('dom-ready', this.propsBind());
                this.executeJavaScriptlist();
            });

            webview.addEventListener('did-start-loading', event => {
                this.$emit('did-start-loading', this.propsBind({ event }));
            });
            
            webview.addEventListener('did-stop-loading', event => {
                this.$emit('did-stop-loading', this.propsBind({ event }));
            });
        },
        propsBind(merge={}) {
            return {
                webview: this.$refs.webview,
                value: this.modelValue,
                test: this.test,
                ...merge
            };
        },
        focus() { return this.$refs.webview.focus(); },
        getWebview() { return this.$refs.webview; },
        executeJavaScript(callback) {
            if (typeof callback=='function') {
                callback = callback.toString().split(/\{|\}/g).slice(1, -1).join('').trim();
            }
            this.executeJavaScriptCodes.push(callback);
            this.executeJavaScriptlist();
        },
        executeJavaScriptlist() {
            if (!this.domReady) return;
            this.executeJavaScriptCodes.forEach((code, index) => {
                this.$refs.webview.executeJavaScript(code);
                this.executeJavaScriptCodes.splice(index, 1);
            });
        },
        devtools() {
            !this.$refs.webview.isDevToolsOpened?
                this.$refs.webview.closeDevTools():
                this.$refs.webview.openDevTools();
        },
        test() {
            console.clear();
            let o = {};
            for(let i in this.$refs.webview) {
                o[i] = typeof this.$refs.webview[i];
            }
            console.log('webview:', JSON.stringify(o, ' ', 2));
        },
    },
    mounted() {
        this.webviewInit();
    },
};
</script>
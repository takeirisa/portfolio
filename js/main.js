Vue.createApp({//vueのおまじない
    data() { //dataという関数を定義
        return{
            open: false,
            display1: true,
            display2: true,
            display3: true,
            display4: true,
            display5: true,
            display6: true,
            hoverChange: false
        }
    },
    methods: {
        toggleButton() {
            // openプロパティの値をtrueからfalseに、false -> trueに変えたい
            this.open = !this.open
        },
        mouseOver1(){
            this.display1 = false
        },
        mouseOver2(){
            this.display2 = false
        },
        mouseOver3(){
            this.display3 = false
        },
        mouseOver4(){
            this.display4 = false
        },
        mouseOver5(){
            this.display5 = false
        },
        mouseOver6(){
            this.display6 = false
        },
        mouseLeave1(){
            this.display1 = true
        },
        mouseLeave2(){
            this.display2 = true
        },
        mouseLeave3(){
            this.display3 = true
        },
        mouseLeave4(){
            this.display4 = true
        },
        mouseLeave5(){
            this.display5 = true
        },
        mouseLeave6(){
            this.display6 = true
        },
        mouseOverWork(){
            this.hoverChange = true
        },
        mouseLeaveWork(){
            this.hoverChange = false
        },
    }

}).mount('#app')//id="app"の中に使用させてください。
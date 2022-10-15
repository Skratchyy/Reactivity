const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
     },
    watch: {
        number(value){
            if(this.value !== 0){
                const that = this;
                setTimeout(function (){
                    that.number = 0;
                },5000)
            }
        }
    },
    methods: {
        checkRes(){
            if(this.number < 37){
                return 'Not there yet';
            }else if(this.number > 37){
                return 'Too much!'
            }else{
                return  'You got it'
            }
        },
        addNum(num){
            this.number += num;
        }
    }
})

app.mount(assignment);
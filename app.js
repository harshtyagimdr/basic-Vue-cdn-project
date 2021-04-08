new Vue({
    el:'#Vue-app',
    data:{
        name:'Harsh Tyagi',
        job:'Developer',
        website:'https://github.com/harshtyagimdr',
        websiteTag:'<a href="https://github.com/harshtyagimdr">Harsh</a>',
        age:21,
        x:0,
        y:0,
    },
    methods:{
        greet:function(time='morning'){
            return 'Good '+time +' '+ this.name;
        },
        add:function(inc){
            this.age+=inc;
        },
        subtract:function(dec){
            this.age-=dec;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        click:function(){
            alert('You click me!')
        },
        log:function(event){
            this.name=event.target.value
        }

    }
})
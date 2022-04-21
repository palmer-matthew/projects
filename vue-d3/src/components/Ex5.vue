<template>
    <section>
        <div class="controls">
            <img @click=addLayer() :src=add alt="add" class="icon"/>
            <img @click=subLayer() :src=minus alt="sub" class="icon"/>
            <h2>{{ num }}</h2>
            <h2>Hidden Layers</h2>
        </div>
        <div id="chart5"></div>
    </section>
</template>

<script>
import * as d3 from "d3";
import add from "@/assets/add.svg";
import minus from "@/assets/minus.svg";

export default {
    name: "Ex5",    
    data(){
        return {
            width: 700,
            height: 500,
            num: 1,
            add,
            minus
        };
    },
    methods:{
        addLayer(){
            if(this.num < 5) this.num = this.num + 1;
        },
        subLayer(){
            if(this.num > 1) this.num = this.num - 1;
        },
        init(){
            const svg = d3.select("#chart5").append("svg").attr("width", this.width).attr("height", this.height);

            svg.append("g").attr("id", `layer-i`);
            for(var i =0; i < this.num; i++){
                svg.append("g").attr("id", `layer-${1}`);
            }
            svg.append("g").attr("id", `layer-o`);
        },
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>
.controls{
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon{
    width: 30px;
    margin-right: 5px;
}

h2 {
    margin: 0;
    margin-right: 10px;
}
</style>
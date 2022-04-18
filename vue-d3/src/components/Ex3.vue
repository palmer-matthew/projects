<template>
  <div id="chart3"></div>
</template>

<script>
import * as d3 from "d3";

export default {
    name: "Ex3",    
    data(){
        return {
            width: 700,
            height: 500,
        };
    },
    methods:{
        init(){
            const svg = d3.select("#chart3").append("svg").attr("width", this.width).attr("height", this.height);
        },
    },
    mounted(){
        this.init();
    }
}
</script>
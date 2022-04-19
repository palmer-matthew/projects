<template>
    <section>
        <!-- <button> Add Node </button> -->
        <div id="chart4"></div>
    </section>
</template>

<script>
import * as d3 from "d3";

export default {
    name: "Ex4",    
    data(){
        return {
            width: 960,
            height: 500,
        };
    },
    methods:{
        init(){
            // const fill = d3.scale.category20();

            const svg = d3.select("#chart4")
                        .append("svg")
                        .attr("width", this.width)
                        .attr("height", this.height);
        },
    },
    mounted(){
        this.init();
    }
}
</script>
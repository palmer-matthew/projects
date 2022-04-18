<template>
  <div id="chart"></div>
</template>

<script>
import * as d3 from "d3";
import data from "@/assets/data.json";

export default {
    name: "Ex1",
    data(){
        return {
            width: 750,
            height: 400,
            margin: {
                top: 10,
                right: 30,
                left: 50,
                bottom: 30,
            },
        };
    },
    computed: {
        boundedWidth: function(){
            return this.width * 0.8;
        },
        boundedHeight: function(){
            return this.height * 0.925;
        }
    },
    methods: {
        init(){
            //Accessor Functions
            const yAccessor = d => parseInt(d.COVID);
            const dateParser = d3.timeParse("%Y-%m-%d");
            const xAccessor = d => dateParser(d.Day);

            const svg = d3.select("#chart")
                            .append("svg")
                                .attr("width", this.width)
                                .attr("height", this.height)
                            .append("g")
                                .style("transform", `translate(${this.margin.left}px, ${this.margin.top}px)`);
            // console.log(svg);

            //Review to understand Scaling in D3, Unknown Concepts, domain, range and extent()
            const yScale = d3.scaleLinear()
                            .domain([0, 100])
                            .range([this.boundedHeight, 0]);

            

            const xScale = d3.scaleTime()
                            .domain(d3.extent(data, xAccessor))
                            .range([0, this.boundedWidth]);

            const line = d3.line()
                            .x( d => xScale(xAccessor(d)))
                            .y( d => yScale(yAccessor(d)));

            // console.log(yScale);
            // console.log(xScale);
            // console.log(line);

            //Adding the Line Generator to the Grouping in SVG
            svg.append("path")
            .attr("d", line(data))
            .attr("fill", "none")
            .attr("stroke", "rgb(34,150,243")
            .attr("stroke-width", 3);

            //Generating Axises
            //Review how to generate Axises in D3
            const yAxisGen = d3.axisLeft()
                                .scale(yScale)
                                .ticks(5)
                                .tickValues(d3.range(25, 100 + 25, 25));
            
            const xAxisGen = d3.axisBottom().scale(xScale).ticks(4)
            
            svg.append("g").call(yAxisGen);
            svg.append("g").call(xAxisGen).style("transform", `translateY(${this.height-this.margin.bottom}px)`);

        },
    },
    mounted(){
        // console.table(data);
        this.init();
    }
}
</script>

<style>

</style>
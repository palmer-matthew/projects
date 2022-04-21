<template>
    <section>
        <!-- <button> Add Node </button> -->
        <div id="chart4"></div>
    </section>
</template>

<script>
import * as d3 from "d3";
import data from "@/assets/network.json";

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
            
            // set the dimensions and margins of the graph
            const margin = {top: 10, right: 10, bottom: 10, left: 10},
            width = 400 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

            // const fill = d3.scale.category20();

            const svg = d3.select("#chart4")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform",`translate(${margin.left}, ${margin.top})`);
                    
            // Initialize the links
            const link = svg
                .selectAll("line")
                .data(data.links)
                .join("line")
                .style("stroke", "#aaa");

            // Initialize the nodes
            const node = svg
                .selectAll("circle")
                .data(data.nodes)
                .join("circle")
                .attr("r", 30)
                .style("fill", "#69b3a2");

            // Let's list the force we wanna apply on the network
            const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
                .force("link", d3.forceLink()                               // This force provides links between nodes
                        .id(function(d) { return d.id; })                     // This provide  the id of a node
                        .links(data.links)                                    // and this the list of links
                )
                .force("charge", d3.forceManyBody().strength(-1000))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
                .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
                .on("end", ticked);

            // This function is run at each iteration of the force algorithm, updating the nodes position.
            function ticked() {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("cx", function (d) { return d.x+6; })
                    .attr("cy", function(d) { return d.y-6; });
            }
        },
    },
    mounted(){
        this.init();
    }
}
</script>

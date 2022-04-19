<template>
  <div id="chart3"></div>
</template>

<script>
import * as d3 from "d3";
import tweets from "@/assets/tweets.json";

export default {
    name: "Ex3",    
    data(){
        return {
            width: 600,
            height: 600,
        };
    },
    methods:{
        init(){
            const svg = d3.select("#chart3").append("svg").attr("width", this.width).attr("height", this.height);

            const colourScale = d3.scaleOrdinal().range(["#5EAFC6","#FE9922","#93C464","#75739F"]);

            const nestedTweets = d3.group(tweets.tweets, d => d.user);//.key(d => d.key).entries(tweets);

            const packed = {id : "ALL", values: nestedTweets};

            const packedData = d3.hierarchy(packed, d => d.values)
            .sum(d => d.retweets ? d.retweets.length + d.favorites.length + 1 : 1);

            // console.log(packedData)

            const packChart = d3.pack().size([600, 600]).padding(10);

            const output = packChart(packedData).descendants();

            const pChart = output.map((d, i) => {
                const fill = colourScale(d.depth);

                return {
                    id: i + 1,
                    r: d.r,
                    x: d.x,
                    y: d.y,
                    fill,
                    stroke: "grey"
                };
            });

            // console.log(pChart)

            const g = svg.append("g").style("transform", "translate(50,50)");

            g.selectAll("circle")
                .data(pChart)
                .enter()
                .append("circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", d => d.r)
                .attr("fill", d => d.fill)                
                .attr("stroke", d => d.stroke);              
        },
    },
    mounted(){
        this.init();
    }
}
</script>
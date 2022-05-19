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
            margin: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15,
            },
            num: 1,
            add,
            minus,
            layers: [
                {
                    id: 0,
                    name: "input",
                    nodes: [
                        { id: 0 }
                    ]
                },
                {
                    id: 1,
                    name: "hidden-1",
                    nodes: [
                        { id: 0 }
                    ]
                },
                {
                    id: 2,
                    name: "output",
                    nodes: [
                        { id: 0 }
                    ]
                }
            ]
        };
    },
    computed: {
        boundedWidth: function(){
            return this.width-this.margin.left-this.margin.right
        },
        boundedHeight: function(){
            return this.height-this.margin.top-this.margin.bottom
        }
    },
    methods:{
        addLayer(){
            if(this.num < 5){
                this.num = this.num + 1
            }else{
                return;
            };

            const input = this.layers[0];
            const output = this.layers[this.layers.length-1];

            this.layers = [];
            this.layers.push(input);
            for(var i=0; i < this.num; i++)
                this.layers.push({
                    id: i+1,
                    name: `hidden-${i+1}`,
                    nodes: [
                        { id: 0 }
                    ]
                });
            output.id = this.layers.length; 
            this.layers.push(output)
        },
        subLayer(){
            if(this.num > 1){
                this.num = this.num - 1
            }else{
                return;
            };

            const output = this.layers[this.layers.length-1];
            this.layers.splice(-2, 2);
            output.id = this.layers.length;
            this.layers.push(output);
            
        },
        createModel(){
            d3.select("#chart5").select("svg").remove();
            const svg = d3.select("#chart5").append("svg").attr("width", this.width).attr("height", this.height);

            const id = d => d.id;
            const l_scale = d3.scaleBand().domain(this.layers.map(id)).range([0, this.width]);
            const c_scale = d3.scaleLinear().domain([this.layers[0].id, this.layers[this.layers.length-1].id]).range(["purple", "orange"]);

            const layers =  svg.selectAll(".layer").data(this.layers)
                .enter()
                .append("g")
                .attr("id", d => d.name)
                .append('rect')
                .attr("width", l_scale.bandwidth())
                .attr("height", this.height)
                .attr("fill", d => c_scale(d.id))
                .attr("x", d => l_scale(d.id));
        },
    },
    mounted(){
        this.createModel();
    },
    updated(){
        this.createModel();
    }
}
</script>

<style scoped>
.controls{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
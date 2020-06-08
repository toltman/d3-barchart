const data = [100, 250, 175, 200, 120];
const rectWidth = 100;
const height = 300;

d3.select("#chart")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", (d, i) => i * rectWidth)
  .attr("y", (d) => {
    return height - d;
  })
  .attr("width", rectWidth)
  .attr("height", (d) => d)
  .attr("fill", "steelblue")
  .attr("stroke", "#fff");

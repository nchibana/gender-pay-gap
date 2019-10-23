<script type="text/javascript">
var fileName = "pay-gap.csv";
                        var statusFields = ["single_men", "mnc_men", "mwc_men", "single_women", "mnc_women", "mwc_women"];

                        d3.csv(fileName, function(error, data) {
                            var occupationMap = {};
                            data.forEach(function(d) {
                                var occupation = d.occupation;
                                occupationMap[occupation] = [];

                                // { cerealName: [ bar1Val, bar2Val, ... ] }
                                statusFields.forEach(function(field) {
                                    occupationMap[occupation].push( +d[field] );
                                });
                            });
                            makeVis(occupationMap);
                        });

            var makeVis = function(occupationMap) {
                // Define dimensions of vis
                var margin = { top: 30, right: 50, bottom: 30, left: 50 },
                    width  = 550 - margin.left - margin.right,
                    height = 250 - margin.top  - margin.bottom;

                // Make x scale
                var xScale = d3.scale.ordinal()
                    .domain(statusFields)
                    .rangeRoundBands([0, width], 0.1);

                // Make y scale, the domain will be defined on bar update
                var yScale = d3.scale.linear()
                    .range([height, 0]);

                // Create canvas
                var canvas = d3.select("#vis-container")
                  .append("svg")
                    .attr("width",  width  + margin.left + margin.right)
                    .attr("height", height + margin.top  + margin.bottom)
                  .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                // Make x-axis and add to canvas
                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

                canvas.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                // Make y-axis and add to canvas
                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");

                var yAxisHandleForUpdate = canvas.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                yAxisHandleForUpdate.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("Value");

                var updateBars = function(data) {
                    // First update the y-axis domain to match data
                    yScale.domain([0,d3.max(data)]);
                    yAxisHandleForUpdate.call(yAxis);

                    var bars = canvas.selectAll(".bar").data(data);

                    // Add bars for new data
                    bars.enter()
                      .append("rect")
                        .attr("id", function(d,i){ return "rect" + i})
                        .attr("class", "bar")
                        .attr("x", function(d,i) { return xScale( statusFields[i] ); })
                        .attr("width", xScale.rangeBand())
                        .attr("y", function(d,i) { return yScale(d); })
                        .attr("height", function(d,i) { return height - yScale(d); });

                    // Update old ones, already have x / width from before
                    bars
                        .transition().duration(250)
                        .attr("y", function(d,i) { return yScale(d); })
                        .attr("height", function(d,i) { return height - yScale(d); });

                    // Remove old ones
                    bars.exit().remove();
                };

                // Handler for dropdown value change
                var dropdownChange = function() {
                    var newOccupation = d3.select(this).property('value'),
                        newData = occupationMap[newOccupation];

                    updateBars(newData);
                };

                // Get names of cereals, for dropdown
                var occupations = Object.keys(occupationMap).sort();

                // var dropdown = d3.select('#vis-container')
                //     .insert("select")
                //     .on("change", dropdownChange);

                var dropdown = d3.select('select')
                    .on("change", dropdownChange)
                    d3.select('input')
                    .on("click", dropdownChange)
                    .on("select", dropdownChange)
                    .on("keypress", dropdownChange);

                dropdown.selectAll("option")
                    .data(occupations)
                  .enter().append("option")
                    .attr("value", function (d) { return d; })
                    .text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    });

                var initialData = occupationMap[ occupations[0] ];
                updateBars(initialData);
            };

</script>
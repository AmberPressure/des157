var trace1 = {
  x: ['GAP', 'H&M', 'ZARA'],
  y: [3, 4, 1],
  name: 'Environmental Impact',
  type: 'bar'
};

var trace2 = {
  x: ['GAP', 'H&M', 'ZARA'],
  y: [2, 2, 1],
  name: 'Social Impact',
  type: 'bar'
};

var trace3 = {
  x: ['GAP', 'H&M', 'ZARA'],
  y: [4, 2, 5],
  name: 'Quality of Clothing',
  type: 'bar'
};

var data = [trace1, trace2, trace3];
var layout = {barmode: 'group'};

Plotly.newPlot('myDiv', data, layout);

var data = [{
  values: [8.5, 7.8, 8.6, 9.9, 9.3, 8.2, 7.8, 8.2, 7.2, 7.6, 8.8, 8.1],
  labels: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  domain: {
    x: [0, .52]
  },
  name: '% of FB Friends',
  hoverinfo: 'label+percent+name',
  hole: .5,
  type: 'pie'
}, {
  values: [23.6, 25.2, 25, 26.2],
  labels: ['Earth Signs', 'Air Signs', 'Fire Signs', 'Water Signs'],
  text: 'Elemental Variables',
  textposition: 'inside',
  domain: {
    x: [.52, 1]
  },
  name: '% of FB Friends',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Assessing Zodiac Signs with Facebook Friends',
  annotations: [{
      font: {
        size: 14
      },
      showarrow: false,
      text: 'Individual Signs',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'Elements',
      x: 0.82,
      y: 0.5
    }
  ]
};

Plotly.newPlot('myDiv', data, layout);

// new div division

var data = [{
  values: [0, 3, 1, 4, 2, 1, 2, 2, 1, 3, 1, 0],
  labels: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  domain: {
    x: [0, .52]
  },
  name: '% of top 20 FB Friends',
  hoverinfo: 'label+percent+name',
  hole: .5,
  type: 'pie'
}, {
  values: [7, 4, 3, 6],
  labels: ['Earth Signs', 'Air Signs', 'Fire Signs', 'Water Signs'],
  text: 'Elemental Variables',
  textposition: 'inside',
  domain: {
    x: [.52, 1]
  },
  name: '% of Top 20 FB Friends',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Assessing Zodiac Signs with Top 20 Facebook Friends',
  annotations: [{
      font: {
        size: 14
      },
      showarrow: false,
      text: 'Individual Signs',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'Elements',
      x: 0.82,
      y: 0.5
    }
  ]
};

Plotly.newPlot('newDiv', data, layout);

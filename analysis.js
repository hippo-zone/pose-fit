window.onload = function () {
  let setNum = Number(window.localStorage.getItem('setNum'))

  let avgAccuracy = Number(window.localStorage.getItem('set' + setNum))
  let minAccuracy = Number(window.localStorage.getItem('minAccuracy'))
  let maxAccuracy = Number(window.localStorage.getItem('maxAccuracy'))

  fillProgressBar(avgAccuracy, '.avg-bar', '.avg-value', '평균')
  fillProgressBar(minAccuracy, '.min-bar', '.min-value', '최소')
  fillProgressBar(maxAccuracy, '.max-bar', '.max-value', '최대')

  accuracyChart()
}

function fillProgressBar (accuracy, barName, valueName, typeName) {
  let bar = document.querySelector(barName)
  let value = document.querySelector(valueName)

  console.log(barName)

  let radius = 54
  let circumference = 2 * Math.PI * radius

  let dashOffset = circumference * (1 - accuracy / 100)

  value.innerHTML = typeName + '\n' + accuracy + '%'

  bar.style.strokeDashoffset = dashOffset
  bar.style.strokeDasharray = circumference
}

let min_score = 70
let mean_score = 77
let max_score = 95

function accuracyChart() {
  let minChart = Highcharts.Chart('min-chart',{
    chart: {
      renderTo: 'min_chart',
      type: 'pie',
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: min_score
    },

    plotOptions: {
      pie: {
        innerSize: '80%'
      }
    },

    series: [{
      data:[
        ['score', 50],
        ['rest', 50]
      ]
    }]



  });
}
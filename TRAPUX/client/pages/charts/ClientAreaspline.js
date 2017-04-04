Template.ClientAreaspline.topGenresChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true
        },
        title: {
            text: ''
            //text: this.profile.firstName + "'s top genres"
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'blue'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data: [
                ['Adventure',   45.0],
                ['Action',       26.8],
                ['Ecchi',   12.8],
                ['Comedy',    8.5],
                ['Yuri',     6.2]
            ]
        }]
    };
};
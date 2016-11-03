app.service('LineChartService', function() {
    this.createChart = function(dateArray, resultArray, flag) {
        if (flag) {
            $('#container').highcharts({
                title: {
                    text: 'Single Asset Performance 1991-2016',
                    margin: 30,
                    x: -20 //center
                },
                xAxis: {
                    categories: dateArray
                },
                yAxis: {
                    title: {
                        text: 'Amount($)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-weight:700;font-size:14px;">{point.key}</span><br>',
                    pointFormat: '<b>{series.name} $ {point.y:.2f}</b><br/>'
                },
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                    x: 12
                },

                series: [{
                    name: 'Australian Shares',
                    data: resultArray[0]
                }, {
                    name: 'International Shares',
                    data: resultArray[1]
                }, {
                    name: 'International Shares (Hedged)',
                    data: resultArray[2]
                }, {
                    name: 'US Shares',
                    data: resultArray[3]
                }, {
                    name: 'Australian Bonds',
                    data: resultArray[4]
                }, {
                    name: 'International Bonds (Hedged)',
                    data: resultArray[5]
                }, {
                    name: 'Cash',
                    data: resultArray[6]
                }, {
                    name: 'Australian Listed Property',
                    data: resultArray[7]
                }, {
                    name: 'International Listed Property',
                    data: resultArray[8]
                }]
            });

        } else {
            $('#containerA').highcharts({
                title: {
                    text: 'Portfolio Performance 1991-2016',
                    margin: 30,
                    x: -20 //center
                },
                xAxis: {
                    categories: dateArray
                },
                yAxis: {
                    title: {
                        text: 'Amount($)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-weight:700;font-size:14px;">{point.key}</span><br>',
                    pointFormat: '<b>{series.name} $ {point.y:.2f}</b><br/>'
                },
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                    x: 12
                },
                series: [{
                    name: 'SMSI Conservative',
                    data: resultArray[9]
                }, {
                    name: 'SMSI Moderate',
                    data: resultArray[10]
                }, {
                    name: 'SMSI Balanced',
                    data: resultArray[11]
                }, {
                    name: 'SMSI Balanced Growth',
                    data: resultArray[12]
                }, {
                    name: 'SMSI Growth',
                    data: resultArray[13]
                }, {
                    name: 'ING Conservative',
                    data: resultArray[14]
                }, {
                    name: 'ING Moderate',
                    data: resultArray[15]
                }, {
                    name: 'ING Balanced',
                    data: resultArray[16]
                }, {
                    name: 'ING Balanced Growth ',
                    data: resultArray[17]
                }, {
                    name: 'ING Growth',
                    data: resultArray[18]
                }]
            });

        }
        $(window).resize(function() {
            if($(window).width()>400){
                width=582;
                height=378;
            }else{
                width=288;
                height=450;                
            }
            /*height = $(window).height();
            width = $(window).width();*/
            $("#container").highcharts().setSize(width, height, doAnimation = true);
            $("#containerA").highcharts().setSize(width, height, doAnimation = true);
        });

    }
});

app.service('LineChartService', function() {
    this.createChart = function(dateArray, resultArray, flag) {
        if (flag) {
            $('#container').highcharts({
                chart: {
                    type: 'spline',
                    height: 400,
                    events: {
                        beforePrint: function() {
                            this.oldhasUserSize = this.hasUserSize;
                            this.resetParams = [this.chartWidth, this.chartHeight, false];
                            this.setSize(600, 400, false);
                        },
                        afterPrint: function() {
                            this.setSize.apply(this, this.resetParams);
                            this.hasUserSize = this.oldhasUserSize;
                        }
                    }
                },
                title: {
                    text: 'Single Asset Performance 1991-2016',
                    margin:30
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
                chart: {
                    type: 'spline',
                    height: 400,
                    events: {
                        beforePrint: function() {
                            this.oldhasUserSize = this.hasUserSize;
                            this.resetParams = [this.chartWidth, this.chartHeight, false];
                            this.setSize(600, 400, false);
                        },
                        afterPrint: function() {
                            this.setSize.apply(this, this.resetParams);
                            this.hasUserSize = this.oldhasUserSize;
                        }
                    }
                },
                title: {
                    text: 'Portfolio Performance 1991-2016',
                     margin: 30,
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
                    name: 'Portfolio balance of FC Conservative',
                    data: resultArray[5]
                }, {
                    name: 'Portfolio balance of FC Balanced',
                    data: resultArray[6]
                }, {
                    name: 'Portfolio balance of FC Growth',
                    data: resultArray[7]
                }, {
                    name: "Portfolio balance of investor's choice",
                    data: resultArray[8]
                }]
            });

        }
    }
});

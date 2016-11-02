var assetClassData = ["Australian Shares", "International Shares", "International Shares (Hedged)", "US Shares", "Australian Bonds", "International Bonds (Hedged)", "Cash", "Australian Listed Property", "International Listed Property"];
var averageData = [0.1712, 0.1925, 0.1787, 0.2011, 0.0987, 0.1036, 0.0757, 0.1576, 0.1792];
var sdData = [0.1575, 0.1914, 0.1592, 0.1947, 0.0634, 0.0564, 0.0460, 0.1636, 0.1830];

$scope.assetObjects = [
    { id: 0, name: "Australian Shares" },
    { id: 1, name: "International Shares"},
    { id: 2, name: "International Shares (Hedged)"},
    { id: 3, name: "US Shares"},
    { id: 4, name: "Australian Bonds"},
    { id: 5, name: "International Bonds (Hedged)"},
    { id: 6, name: "Abbotsleigh"},
    { id: 7, name: "Cash"},
    { id: 8, name: "Australian Listed Property"},
    { id: 9, name: "International Listed Property"}
];

var assetClassArray = [];
var weightArray = [];
var meanArray = [];
var sdArray = [];
var simulatedReturnArray = [];

var dataTableIdArray = [];
var dataTableValueArray = [];
var calSimulatedReturn;

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

var sum = 0;
var numNegReturns = 0;
for (var i = 0; i < dataTableValueArray.length; i++) {
    sum += dataTableValueArray[i];
    if (dataTableValueArray[i] < 0) {
        numNegReturns++;
    }
}

var min = dataTableValueArray.min();
var max = dataTableValueArray.max();
var mean = sum / dataTableValueArray.length;
var count = dataTableValueArray.length;
var probLoss = numNegReturns / count;




var yearsOfInvestment;
var initialInvestmentAmount;
var yearArray = [];
var fivePercentileArray = [];
var meanPercentileArray = [];
var ninetyFivePercentileArray = [];

var fivePercentile = percentile(dataTableValueArray, 0.05);
var meanPercentile = mean;
var ninetyFivePercentile = percentile(dataTableValueArray, 0.95);

for (i = 0; i < yearsOfInvestment; i++) {
    yearArray[i] = i + 1;
    fivePercentileArray[i] = initialInvestmentAmount * Math.pow(1 + fivePercentile, yearArray[i]);
    meanPercentileArray[i] = initialInvestmentAmount * Math.pow(1 + fivePercentile, yearArray[i]);
    ninetyFivePercentileArray[i] = initialInvestmentAmount * Math.pow(1 + ninetyFivePercentile, yearArray[i]);
}

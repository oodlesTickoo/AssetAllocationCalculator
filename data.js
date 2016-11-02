var investments1=[5.9,
    13.3,
    9.9,
    18.5,
    5.7,
    15.8,
    26.6,
    1.6,
    15.3,
    13.7,
    8.8, -4.5, -1.1,
    22.4,
    24.7,
    24.2,
    30.3, -12.1, -22.1,
    13.8,
    12.2, -7,
    20.7,
    17.6,
    5.7,
    2
],

var investments2=[-2,
    7.1,
    31.8,
    0,
    14.2,
    6.7,
    28.6,
    42.2,
    8.2,
    23.8, -6, -23.5, -18.5,
    19.4,
    0.1,
    19.9,
    7.8, -21.3, -16.3,
    5.2,
    2.7, -0.5,
    33.1,
    20.4,
    25.2,
    0.4
],

var investments3=[-5.8, -3,
    17.3,
    6.7,
    3.7,
    27.7,
    26,
    22.1,
    15.9,
    12.6, -16, -19.3, -6.2,
    20.2,
    9.8,
    15,
    21.4, -15.7, -26.6,
    11.5,
    22.3, -2.1,
    21.3,
    21.9,
    8.5, -2.7
],

var investments4=[10.3,
    16.3,
    26.6, -6.5,
    30,
    12.9,
    42.6,
    58.2,
    14.2,
    18.2,
    0.5, -26.3, -15.2,
    15.4, -4.1,
    11.6,
    5.6, -23.4, -12.5,
    8.9,
    3.7,
    11.1,
    32.5,
    22.7,
    31.8,
    7.5
],

var investments5=[22.4,
    22,
    13.9, -1.1,
    11.9,
    9.5,
    16.8,
    10.9,
    3.3,
    6.2,
    7.4,
    6.2,
    9.8,
    2.3,
    7.8,
    3.4,
    4,
    4.4,
    10.8,
    7.9,
    5.5,
    12.4,
    2.8,
    6.1,
    5.6,
    7
],

var investments6=[15.3,
    15.8,
    14.7,
    2.1,
    13.1,
    11.2,
    12.1,
    11,
    5.5,
    5,
    9,
    8,
    12.2,
    3.5,
    12.3,
    1.2,
    5.2,
    8.6,
    11.5,
    9.3,
    5.7,
    11.9,
    4.4,
    7.2,
    6.3,
    10.8
],

var investments7=[13.5,
    9,
    5.9,
    4.9,
    7.1,
    7.8,
    6.8,
    5.1,
    5,
    5.6,
    6.1,
    4.7,
    5,
    5.3,
    5.6,
    5.8,
    6.4,
    7.4,
    5.5,
    3.9,
    5,
    4.7,
    3.3,
    2.7,
    2.6,
    2.2
],

var investments8=[7.7,
    14.7,
    17.1,
    9.8,
    7.9,
    3.6,
    28.5,
    10,
    4.3,
    12.1,
    14.1,
    15.5,
    12.1,
    17.2,
    18.1,
    18,
    25.9, -36.3, -42.3,
    20.4,
    5.8,
    11,
    24.2,
    11.1,
    20.3,
    24.6
],

var investments9=[-15.9,
    6.9,
    28.3,
    8.4,
    7.5,
    2.4,
    35.7,
    25, -6.8,
    14.1,
    38.2,
    7.5, -5.2,
    28.7,
    21.2,
    24.2,
    3, -28.6, -31.2,
    31.3,
    9.2,
    7.5,
    24.3,
    11.8,
    23.1,
    20.4
]

var initialInvestmentAmount;

var year91 = [5.9, -2, -5.8, 10.3, 22.4, 15.3, 13.5, 7.7, -15.9]
var year92 = [13.3, 7.1, -3, 16.3, 22, 15.8, 9, 14.7, 6.9]
var year93 = [9.9, 31.8, 17.3, 26.6, 13.9, 14.7, 5.9, 17.1, 28.3]
var year94 = [18.5, 0, 6.7, -6.5, -1.1, 2.1, 4.9, 9.8, 8.4]
var year95 = [5.7, 14.2, 3.7, 30, 11.9, 13.1, 7.1, 7.9, 7.5]
var year96 = [15.8, 6.7, 27.7, 12.9, 9.5, 11.2, 7.8, 3.6, 2.4]
var year97 = [26.6, 28.6, 26, 42.6, 16.8, 12.1, 6.8, 28.5, 35.7]
var year98 = [1.6, 42.2, 22.1, 58.2, 10.9, 11, 5.1, 10, 25]
var year99 = [15.3, 8.2, 15.9, 14.2, 3.3, 5.5, 5, 4.3, -6.8]
var year00 = [13.7, 23.8, 12.6, 18.2, 6.2, 5, 5.6, 12.1, 14.1]
var year01 = [8.8, -6, -16, 0.5, 7.4, 9, 6.1, 14.1, 38.2]
var year02 = [-4.5, -23.5, -19.3, -26.3, 6.2, 8, 4.7, 15.5, 7.5]
var year03 = [-1.1, -18.5, -6.2, -15.2, 9.8, 12.2, 5, 12.1, -5.2]
var year04 = [22.4, 19.4, 20.2, 15.4, 2.3, 3.5, 5.3, 17.2, 28.7]
var year05 = [24.7, 0.1, 9.8, -4.1, 7.8, 12.3, 5.6, 18.1, 21.2]
var year06 = [24.2, 19.9, 15, 11.6, 3.4, 1.2, 5.8, 18, 24.2]
var year07 = [30.3, 7.8, 21.4, 5.6, 4, 5.2, 6.4, 25.9, 3]
var year08 = [-12.1, -21.3, -15.7, -23.4, 4.4, 8.6, 7.4, -36.3, -28.6]
var year09 = [-22.1, -16.3, -26.6, -12.5, 10.8, 11.5, 5.5, -42.3, -31.2]
var year10 = [13.8, 5.2, 11.5, 8.9, 7.9, 9.3, 3.9, 20.4, 31.3]
var year11 = [12.2, 2.7, 22.3, 3.7, 5.5, 5.7, 5, 5.8, 9.2]
var year12 = [-7, -0.5, -2.1, 11.1, 12.4, 11.9, 4.7, 11, 7.5]
var year13 = [20.7, 33.1, 21.3, 32.5, 2.8, 4.4, 3.3, 24.2, 24.3]
var year14 = [17.6, 20.4, 21.9, 22.7, 6.1, 7.2, 2.7, 11.1, 11.8]
var year15 = [5.7, 25.2, 8.5, 31.8, 5.6, 6.3, 2.6, 20.3, 23.1]
var year16 = [2, 0.4, -2.7, 7.5, 7, 10.8, 2.2, 24.6, 20.4]

var portfolio1 = [0.1, 0.1, 0, 0, 0, 0.3, 0.4, 0.1, 0]
var portfolio2 = [0.1, 0.1, 0, 0.1, 0, 0.25, 0.35, 0.1, 0]
var portfolio3 = [0.1, 0.2, 0, 0.1, 0, 0.2, 0.3, 0.1, 0]
var portfolio4 = [0.1, 0.2, 0, 0.2, 0, 0.2, 0.2, 0.1, 0]
var portfolio5 = [0.1, 0.2, 0, 0.25, 0, 0.1, 0.1, 0.15, 0.1]
var portfolio6 = [0.1, 0.1, 0, 0, 0, 0.3, 0.4, 0.1, 0]
var portfolio7 = [0.1, 0.1, 0, 0.1, 0, 0.25, 0.35, 0.1, 0]
var portfolio8 = [0.1, 0.2, 0, 0.1, 0, 0.2, 0.3, 0.1, 0]
var portfolio9 = [0.1, 0.2, 0, 0.25, 0, 0.1, 0.25, 0.1, 0]
var portfolio10 = [0.1, 0.2, 0, 0.25, 0, 0, 0.25, 0.1, 0.1]

var bonds1=[],
bonds2=[],
bonds3=[],
bonds4=[],
bonds5=[],
bonds6=[],
bonds7=[],
bonds8=[],
bonds9=[];

bondsArray=[bonds1,bonds2,bonds3,bonds4,bonds5,bonds6,bonds7,bonds8,bonds9,bonds10]
yearArray=[year91,year92,year93,year94,year95,year96,year97,year98,year99,year00,year01,year02,year03,year04,year05,year06,year07,year08,year09,year10,year11,year12,year13,year14,year15,year16]
porfolioArray=[portfolio1,portfolio2,portfolio3,,portfolio4,portfolio5,portfolio6,portfolio7,portfolio8]
resultArray=[result1,result2,result3,result4,result5,result6,result7,result8,result9,result10,result11,result12,result13,result14,result15,result16,result17,result18,result19]
investmentsArray=[investments1,investments2,investments3,investments4,investments5,investments6,investments7,investments8,investments9]

for (var h = 0; h < bondsArray.length; h++) {
    for (var i = 0; i < yearArray.length; i++) {
        var temp = 0;
        for (j = 0; j < portfolio1.length; j++) {
            temp = temp + (porfolioArray[index][j] * yearArray[i][j]);
        }
        bondsArray[h][i] = temp;
    }
}

/*=$B$16*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.B7/100)
=B19*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.B8/100)
=B20*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.B9/100)

=$B$16*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.C7/100)
=C19*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.C8/100)
=C20*(1+'file:///E:/Calculators/Oodles Tech/Asset Allocation Calculator.xlsm'#$'Raw Data'.C9/100)*/
for(var i=0;i<resultArray;i++){
    resultArray[i][0]= initialInvestmentAmount * (1+investmentsArray[index1][0]/100);
}

for(var i=0;i<resultArray;i++){
    for(var j=1;j<investmentsArray[0].length;j++){
        resultArray[i][j]=resultArray[i][j-1] * (1+investmentsArray[index1][j]/100);
    }
}

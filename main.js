

// pays et timeline
var selectedCountryNumber = localStorage.getItem('numeroPays');
console.log(selectedCountryNumber)
chartTitle = "Chart Titre";
localPays = "Pays sélectioné";
selectedTimeline = "month";
let requestedData = selectedTimeline;

// fonctiondataCPI

function monthDataCPI(){
    if (requestedData == "month"){
        fetch("CPImonthData.json")
            // prend le bon json
            .then(function(resp){
                return resp.json();
            })

            .then(function(data){
                let i = selectedCountryNumber;

                PaysName = JSON.stringify(data[i].CountryName);
                localStorage.setItem("paysName",PaysName);

                PaysStringCPI = JSON.stringify(data[i].ValueCPIByMonth);
                localStorage.setItem("dataChartCPI",PaysStringCPI);
        })
    }
    else{console.log("ERROR timeline")};
};

monthDataCPI();

// fonction salaire index Data

function monthDataSI(){
    if (requestedData == "month"){
        fetch("SalaireIndex.json")
            // prend le bon json
            .then(function(resp){
                return resp.json();
            })

            .then(function(data){
                let i = selectedCountryNumber;

                PaysNameSI = JSON.stringify(data[i].CountryName);
                localStorage.setItem("paysNameSI",PaysNameSI);

                PaysStringSI = JSON.stringify(data[i].valeurSalaireIndex);
                localStorage.setItem("dataChartSI",PaysStringSI);
        })
    }
    else{console.log("ERROR timeline")};
};

monthDataSI();
// fonction TotalReserve

function monthDataTR(){
    if (requestedData == "month"){
        fetch("totalReserve.json")
            // prend le bon json
            .then(function(resp){
                return resp.json();
            })

            .then(function(data){
                let i = selectedCountryNumber;

                PaysNameTR = JSON.stringify(data[i].CountryName);
                localStorage.setItem("paysNameTR",PaysNameTR);

                PaysStringTR = JSON.stringify(data[i].totalReserve);
                localStorage.setItem("dataChartTR",PaysStringTR);
        })
    }
    else{console.log("ERROR timeline")};
};

monthDataTR();

// chart.js dataCPI

ctx = document.getElementById('chart1').getContext('2d');
var paysName = "Consumer Price Index: "+JSON.parse(localStorage.getItem("paysName"));
var paysData = JSON.parse(localStorage.getItem("dataChartCPI"));
let key = Object.keys(paysData);
let value = Object.values(paysData)

// chart.js chartCPI

const myChart = new Chart(ctx, {
    type: 'line',
    zoomType: 'xy',
    data: {
            labels: key,
        datasets: [{
            borderColor: "#bae755",
            label: paysName,
            data: value,
            pointRadius: 0,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// chart.js dataSI

ctx = document.getElementById('chart2').getContext('2d');
var paysName = "Salaire Index: "+JSON.parse(localStorage.getItem("paysNameSI"));
var paysDataSI = JSON.parse(localStorage.getItem("dataChartSI"));
let keySI = Object.keys(paysDataSI);
let valueSI = Object.values(paysDataSI);

// chart.js Salaire index

const myChartSI = new Chart(ctx, {
    type: 'line',
    zoomType: 'xy',
    data: {
            labels: keySI,
        datasets: [{
            borderColor: "#bae755",
            label: paysName,
            data: valueSI,
            pointRadius: 0,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// chart.js dataTR

ctx = document.getElementById('chart3').getContext('2d');
var paysName = "Réserves totale: "+JSON.parse(localStorage.getItem("paysNameTR"));
var paysDataTR = JSON.parse(localStorage.getItem("dataChartTR"));
let keyTR = Object.keys(paysDataTR);
let valueTR = Object.values(paysDataTR);
// chart.js chartTotalReserve

const myChartTR = new Chart(ctx, {
    type: 'line',
    zoomType: 'xy',
    data: {
            labels: keyTR,
        datasets: [{
            borderColor: "#bae755",
            label: paysName,
            data: valueTR,
            pointRadius: 0,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// click user

const userClick = document.getElementsByTagName("button");
for (var i = 0 ; i < userClick.length; i++) {
    userClick[i].addEventListener('click' , () =>{
        console.log("click")
    }) ;

 };


// Fonction click
function countryUserClick(clicked){
    buttonSelected = clicked;
    selectedName = document.getElementById(`${buttonSelected}`).innerHTML
    localStorage.clear();
    localStorage.setItem("numeroPays",buttonSelected);
    localStorage.setItem("paysName", selectedName);
    location.reload();

};

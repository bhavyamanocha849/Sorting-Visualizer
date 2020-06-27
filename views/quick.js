let data = []
let color = []
let border_clr = []
let bar_transparency = ', 0.4)'
let border_transparency = ', 1)'
var myChart;
var cus_arr = [];
function randomize() {
    document.getElementById('text').innerHTML = ""
    let size = Math.floor(Math.random() * 101) + 5;
    for (let index = 0; index < size; index++) {
        data[index] = Math.floor(Math.random() * 101);
        color[index] = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + bar_transparency
        border_clr[index] = color[index] + border_transparency
    }
    if (myChart != undefined) {
        myChart.destroy()
    }
    var ctx = document.getElementById('mychart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data,
            datasets: [{
                label: 'Value',
                data: data,
                backgroundColor: color,
                borderColor: border_clr,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        minRotation: 30,
                        autoSkipPadding: 15,
                        fontColor: '#ffffff',
                        fontFamily: 'Arial'
                    }
                }],
                events: []
            }
        }
    });
    console.log(myChart.data.datasets[0].backgroundColor[color.length-1])
}

async function quicksort() {

    document.getElementById('text').innerHTML = ""

    if (myChart == undefined) {
        var ctx = document.getElementById('mychart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: cus_arr,
                datasets: [{
                    label: 'Number',
                    data: cus_arr,
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    borderColor: 'rgba(255,255,255,1)',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                        }
                    }],
                    events: []
                }
            }
        });
    }
    if (cus_arr[0] != undefined) {
        arr = cus_arr;
    } else {
        arr = myChart.data.datasets[0].data;
    }
    (async function quick(arr, low, high) {
        if (low >= high) {
            return;
        }
        let index = await partition(arr, low, high);
        myChart.data.datasets[0].data = arr;
        myChart.data.labels = arr;
        myChart.update();
        await Promise.all([
            quick(arr, low, index - 1),
            quick(arr, index + 1, high)
        ])
    })(arr, 0, arr.length - 1)

    cus_arr = []
    document.getElementById('list').innerText = ' '
}
async function partition(arr, start, end) {

    let pivotValue = arr[end];
    let start_elem_clr = myChart.data.datasets[0].backgroundColor[start]
    let end_elem_clr = myChart.data.datasets[0].backgroundColor[end]
    myChart.data.datasets[0].backgroundColor[start] = '#ffffff';
    myChart.data.datasets[0].backgroundColor[end]= '#ffffff';
    myChart.update()
    await sleep(2000);
    myChart.data.datasets[0].backgroundColor[start] = start_elem_clr
    myChart.data.datasets[0].backgroundColor[end] = end_elem_clr
    myChart.update()
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);

    return pivotIndex;
}
async function swap(arr, a, b) {
    await sleep(5);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function customizedarray() {
    const number = parseInt(document.getElementById('num').value)
    document.getElementById('list').innerText += ' ' + number
    cus_arr.push(number)
    document.getElementById('num').value = ''
}

// module.exports = randomize();

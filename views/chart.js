let data = []
let color = []
let border_clr = []
let bar_transparency = ', 0.4)'
let border_transparency = ', 1)'
var myChart;
var cus_arr = [];
function randomize() {
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
                label: 'Random Number',
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
    console.log(myChart.data.datasets[0])
}

async function quicksort() {

    if (myChart == undefined) {
        var ctx = document.getElementById('mychart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: cus_arr,
                datasets: [{
                    label: 'Random Number',
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
                            // autoSkip: false
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
    (function quick(arr, low, high) {
        // if (low >= high) {
        //     return;
        // }
        // let mid = (low + high) / 2;
        // let pivot = arr[mid]
        // let left = low;
        // let right = high;
        // while (left <= right) {
        //     while (arr[left] < pivot) {
        //         left++;
        //     }
        //     while (arr[right] > pivot) {
        //         right--;
        //     }

        //     if (left <= right) {

        //         let temp = arr[left];
        //         arr[left] = arr[right];
        //         arr[right] = temp;

        //         left++;
        //         right--;
        //     }
        // }
        // quick(arr, low, right);
        // quick(arr, left, high);
        if (low < high) {
            /* pi is partitioning index, arr[pi] is  
            now at right place */
            let pi = sort(arr, low, high);

            // Recursively sort elements before 
            // partition and after partition 
            quick(arr, low, pi - 1);
            quick(arr, pi + 1, high);
        }

    })(arr, 0, arr.length - 1)

    myChart.data.datasets[0].data = arr;
    myChart.data.labels = arr;
    myChart.update();
    cus_arr = []
    document.getElementById('list').innerText = ' '
}
function sort(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1); // index of smaller element 
    for (let j = low; j < high; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            i++;

            // swap arr[i] and arr[j] 
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // swap arr[i+1] and arr[high] (or pivot) 
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

function customizedarray() {
    const number = parseInt(document.getElementById('num').value)
    document.getElementById('list').innerText += ' ' + number
    cus_arr.push(number)
    document.getElementById('num').value = ''
}

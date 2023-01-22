import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

export default function index(){
    const [basicData] = useState({
    labels: ['Alireza Akbari', 'Zahra Haghanian', 'saeid nasiri', 'bahare dehghan', 'behnam nikzad', 'mohsen mohammad amini', 'masoud godarzi'],
    datasets: [
        {
            label: 'First Tip',
            backgroundColor: '#499b01',
            data: [77, 88, 80, 81, 16, 55, 44]
        },
        {
            label: 'Second Tip',
            backgroundColor: '#a5cd39',
            data: [99, 77, 40, 19, 86, 67, 90]
        }
    ]
})

const getLightTheme = () => {
    let horizontalOptions = {
        indexAxis: 'y',    // تنظیمات نمودار ستونی افقی
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                    
                }
            }
        },
        scales: {
            x: {    
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    }
return horizontalOptions
}
const horizontalOptions = getLightTheme()
return (
      <div className="card">
         <Chart type="bar" data={basicData} options={horizontalOptions} />
      </div>
    
)
}

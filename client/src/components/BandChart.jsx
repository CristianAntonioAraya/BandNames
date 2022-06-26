import { useContext } from 'react';
import {Chart, ArcElement, CategoryScale,LinearScale, BarElement, Tooltip, } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { SocketContext } from '../context/socketContext';

export const BandChart = () => {

    const { bands } = useContext( SocketContext )
    
    Chart.register( ArcElement,CategoryScale, LinearScale, CategoryScale, BarElement, Tooltip );
    
    const data = {

        labels: bands.map( band => band.name ), 
        datasets: [ {
            label: 'votes', 
            data: bands.map( band => band.votes ),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

    }
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels:{
                    font:{
                        size: 20
                    }
                }
            }
        }
    }


    return (
        <div className='chart__container'>
            <Bar data={ data } options={options}/>
        </div>
    )
}

export default BandChart
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import './usage.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Line Chart',
  //   },
  // },
};

const labels = ['Sep26', 'Sep29', 'Oct2', 'Oct5', 'Oct8', 'Oct11', 'Oct14','Oct17', 'Oct20', 'Oct23', 'Oct26'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      // borderColor: 'rgb(255, 99, 132)',
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      // borderColor: 'rgb(53, 162, 235)',
      // backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const Usage = () => {
  return (
    <div className='usage-graph'>
      <Line options={options} data={data} />;
    </div>
  )
}

export default Usage
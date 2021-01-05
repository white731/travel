import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const FinanceChart = (props) => {

  const data = [
    {
      symbol: props.symbol , revenue: props.revenue , profit: props.profit, amt: props.revenue + props.profit,
    }
  ]

  return (
      <BarChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 20, right: 100, left: 100, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="symbol" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
        <Bar dataKey="profit" fill="#82ca9d" />
      </BarChart>
  );
}

export default FinanceChart
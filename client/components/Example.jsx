import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // {
  //   name: 'Page A',
  //   income: 4000,
  //   exp1: -2400,
  //   exp2: -350,
  //   exp3: -200,
  //   exp4: -420
  // },
  {
    name: 'Page B',
    income: 4000,
    prev1: 1600,
    exp1: 2400,
    prev2: 1250,
    exp2: 350,
    prev3: 1050,
    exp3: 200,
    prev4: 630,
    exp4: 420,
    prev5: -180,
    exp5: 800,
  },

  // {
  //   name: 'Page B',
  //   uv: 3000,
  //   pv: -1398,
  //   amt: 2210,
  // },
  // {
  //   name: 'Page C',
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: 'Page D',
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: 'Page E',
  //   uv: 1890,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: 'Page F',
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: 'Page G',
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      // <div style={{ width: '500px', height: '300px' }}>
      //   <ResponsiveContainer width="100%" height="100%">
          <BarChart
            // stackOffset="sign"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="income" stackId="a" fill="#8884d8" />
            <Bar dataKey="prev1" stackId="b" fill="none" />
            <Bar dataKey="exp1" stackId="b" fill="red" />
            <Bar dataKey="prev2" stackId="c" fill="none" />
            <Bar dataKey="exp2" stackId="c" fill="orange" />
            <Bar dataKey="prev3" stackId="d" fill="none" />
            <Bar dataKey="exp3" stackId="d" fill="yellow" />
            <Bar dataKey="prev4" stackId="e" fill="none" />
            <Bar dataKey="exp4" stackId="e" fill="brown" />
            <Bar dataKey="prev5" stackId="f" fill="none" />
            <Bar dataKey="exp5" stackId="f" fill="grey" />
          </BarChart>
      //   </ResponsiveContainer>
      // </div>
    );
  }
}
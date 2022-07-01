import React, { useState, useEffect } from "react";
import { RequestChartWrapper } from "./RequestChart.style";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useAuth } from "../../../Auth/Auth";
import { Request } from "../../../Api/Api";

const date=["Mon","Tue","Wed","Thru","Fri","Sat","Sun"]
const getDay=(item)=>{

  return {day:item._id,total:item.total}



}

function RequestChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const dt = await axios.get(
          Request.requestPerDay(localStorage.getItem("companyId")),
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        const dta=dt?.data?.data;
        const dates = [...Array(7)].map((_, i) => {
          const d = new Date()
          d.setDate(d.getDate() - i)
          return d.getDate();
      })

      const temp=[];
      dates.sort();
      dates.forEach(item=>{
        let flg=true;
        dta.forEach(d=>{
          if(d._id===item)
          {
            temp.push({day:item,total:d.total});
            flg=false;
            
            
          }

        })
        if(flg)
        {
          temp.push({day:item,total:0});

        }
      })

      temp.forEach(item=>console.log(item));
         
      setData(temp);
   
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <RequestChartWrapper>
      <h3>Request made</h3>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </RequestChartWrapper>
  );
}



export default RequestChart;

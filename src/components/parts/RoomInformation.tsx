import { LoadingOverlay, Pagination } from '@mantine/core';
import axios from 'axios';
import React, { FC, useState } from 'react';
import {
  Bar,
  ComposedChart,
  CartesianGrid,
  Area,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const RoomInformation: FC = () => {
  const key = import.meta.env.SHEET_API_KEY;
  const limit = 500;
  const [page, setPage] = useState(1);
  const spreadsheetId = '1cLXt-FMqr3yVh0l0uVCLTPo4w8z9-ervm35C0hym32o';
  const { data, error } = useSWR(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/NatureRemo?key=${key}`,
    fetcher
  );
  if (error || data === undefined) return <LoadingOverlay overlayBlur={2} visible={true} />;

  const timeIndex = 0;
  const temperatureIndex = 1;
  const humidityIndex = 2;
  const lumenIndex = 3;
  const values = data.values;
  if (values[0] === '時間') values.shift();
  const shapedData: { name: string; temperature: string; humidity: string; lumen: string }[] =
    values.map((d: Array<string>) => {
      return {
        name: d[timeIndex],
        temperature: d[temperatureIndex],
        humidity: d[humidityIndex],
        lumen: d[lumenIndex]
      };
    });
  const total = Math.ceil(shapedData.length / limit) || 1;

  const getIntroOfPage = (label: NameType | undefined) => {
    if (label === 'temperature') {
      return '℃';
    }
    if (label === 'humidity') {
      return '%';
    }
    if (label === 'lumen') {
      return 'Lm';
    }
    return '';
  };

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const style = {
        padding: '0 6px',
        backgroundColor: '#fff',
        border: '0.5px solid #ccc'
      };
      return (
        <div className='custom-tooltip' style={style}>
          <p className='label'>{label}</p>
          <p className='label'>{`${payload[0].name}: ${payload[0].value} ${getIntroOfPage(
            payload[0].name
          )}`}</p>
          <p className='label'>{`${payload[1].name}: ${payload[1].value} ${getIntroOfPage(
            payload[1].name
          )}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={shapedData.slice((page - 1) * limit, page * limit)}
            height={400}
            width={800}
          >
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Area dataKey='humidity' fill='#00ebc7' stroke='#000' type='monotone' />
            <Bar dataKey='temperature' stroke='#ff5470' type='monotone' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <Pagination initialPage={0} onChange={(page) => setPage(page)} page={page} total={total} />
    </>
  );
};

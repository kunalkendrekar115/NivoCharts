import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const barChartData = [
    {
        "label": "A&E",
        "value": 0.18204931443667927,
        "altValue": 9429.28594028965
    },
    {
        "label": "AMC",
        "value": 0.12075407076997477,
        "altValue": 6254.484754679497
    },
    {
        "label": "BBCA",
        "value": 0.05516433920948651,
        "altValue": 2857.249584943114
    },
    {
        "label": "CMDY",
        "value": 0.12780756256062265,
        "altValue": 6619.821977603443
    },
    {
        "label": "DIY",
        "value": 0.060275608207741825,
        "altValue": 3121.98893346206
    },
    {
        "label": "ESNU",
        "value": 0.027818016497817948,
        "altValue": 1440.840536319929
    },
    {
        "label": "ESP2",
        "value": 0.06800084911208601,
        "altValue": 3522.1195555964246
    },
    {
        "label": "FXX",
        "value": 0.0369394042075425,
        "altValue": 1913.2849020313527
    },
    {
        "label": "IFC",
        "value": 0.11396696114243617,
        "altValue": 5902.944856909577
    },
    {
        "label": "NICK-N",
        "value": 0.02789341196945244,
        "altValue": 1444.745662042838
    },
    {
        "label": "PAR",
        "value": 0.13848920443878654,
        "altValue": 7173.08006535094
    },
    {
        "label": "SYFY",
        "value": 0.040841257447373255,
        "altValue": 2115.3822843217254
    }
]

const lineGraphSettings = {
    theme: {
        fontSize: '11px',
        tooltip: {
            position: "absolute",
            container: {
                background: 'red',
            }
        }
    },
};

export default function BarChart() {
  
    const data = barChartData.map((item) => ({
        ...item, id: item.label, value: item.value * 100
    }))

    const { value:maxValue } = data.reduce((prev, current) =>
        (prev.value > current.value) ? prev : current)

    const yMax = Math.round(maxValue + (maxValue % 4))

    return (
        <ResponsiveBar
            data={data}
            labelTextColor={'grey'}
            margin={{ top: 50, bottom: 50, left: 100, right: 40 }}
            padding={0.4}
            tooltip={(toolTip) => (<span style={{ fontSize: '12px', color: 'white' }}>
                {toolTip.value}</span>)}
            labelFormat={d => <tspan fontSize={'11px'} y={-10}>{(d).toFixed(1)}</tspan>}
            colors={"#005587"}
            theme={lineGraphSettings.theme}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            minValue={0}
            maxValue={yMax}
            gridYValues={5}
            axisBottom={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickValues: 5,
                tickSize: 0,
                tickPadding: 10,
                format: v => `${v} %`,
                legendPosition: 'middle',
                legendOffset: -50
            }}

            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}

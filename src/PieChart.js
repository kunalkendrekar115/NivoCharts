import React, { useState } from 'react'
import { ResponsivePie } from '@nivo/pie'



const pieChartData = [
    {
        "days": "M-SU",
        "daypart": "6AM-12AM",
        "percent": 0.32553070960078223,
        "value": 16860.937667737366
    },
    {
        "days": "M-SU",
        "daypart": "9AM-12AM",
        "percent": 0.5119509263891602,
        "value": 26516.61549650395
    },
    {
        "days": "M-SU",
        "daypart": "7PM-12AM",
        "percent": 0.030687330743378212,
        "value": 1589.4573248953384
    },
    {
        "days": "M-SU",
        "daypart": "9PM-12AM",
        "percent": 0.02789341196945244,
        "value": 1444.745662042838
    },
    {
        "days": "M-SU",
        "daypart": "12AM-2AM",
        "percent": 0.1039376212972268,
        "value": 5383.472902371057
    }
]

const graphSettings = {
    theme: {
        fontSize: '11px',
        tooltip: {
            position: "absolute",

            container: {
                position: 'relative',
                left: -10,
                top: '0%',
                background: 'red',

            }
        }
    },

};

export default function PieChart() {

    const [state, setState] = useState({ isViewAll: true, currentSelected: null })
    const { isViewAll } = state

    const data = pieChartData.map((item) => ({
        ...item,
        id: item.daypart,
       // label: item.daypart
    }))

    const colors=["#005587", "#009A44", "#FAC927", "#D22F2F", "#688197"]

    const opacitiColors=['rgba(0, 85, 135, 0.2)','rgba(0, 154, 68, 0.2)','rgba(250, 201, 39, 0.2)','rgba(210, 47, 47, 0.2)','rgba(104, 129, 151, 0.2)']
    return (
        <div style={{ width: '100%', margin: 40, position: 'relative' }}>
            <div style={{ width: '200px', height: '200px', opacity: isViewAll ? 1 : 1 }}>
                <ResponsivePie
                    data={data}
                    innerRadius={0.5}
                    colors={isViewAll?opacitiColors:colors}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableRadialLabels={false}
                    enableSlicesLabels={false}
                    animate={true}
                    padAngle={3}
                    theme={graphSettings.theme}
                    tooltip={(toolTip) => (<span style={{ fontSize: '12px', color: 'white', opacity: 1 }}>
                        {toolTip.id+' | '+toolTip.value.toFixed(1)}</span>)}
                    motionStiffness={90}
                    motionDamping={15}
                    onClick={(item) => {
                        setState({ currentSelected: item.id, isViewAll: false })
                    }}
                // legends={[
                //     {
                //         anchor: 'top-right',
                //         direction: 'column',
                //         itemWidth: 100,
                //         itemHeight: 18,
                //         itemsSpacing: 10,
                //         itemTextColor: '#999',
                //         symbolSize: 14,
                //         symbolShape: 'circle',
                //         effects: [
                //             {
                //                 on: 'hover',
                //                 style: {
                //                     itemTextColor: '#000'
                //                 }
                //             }
                //         ]
                //     }
                // ]}
                />
            </div>

            {!isViewAll && (<g style={{ top: 88, left: 72, position: 'absolute', cursor: 'pointer' }}
                onClick={() => setState({ isViewAll: true, currentSelected: null })}>
                <text styleName="view-all">
                    View All
              </text>
            </g>)}
            {state.currentSelected && <text>{state.currentSelected} </text>}
        </div>

    )
}

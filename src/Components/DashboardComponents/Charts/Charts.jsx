import React from 'react'
import { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const Charts = (props) => {

        const [timeRange, setTimeRange] = useState("weekly");


       // Revenue chart initialization
        const revenueChartRef = useRef(null);
        const darkMode = props.darkMode
        useEffect(() => {
          if (!revenueChartRef.current) return;
      
          const myChart = echarts.init(revenueChartRef.current);
          const option = {
            animation: true,
            tooltip: {
              trigger: "axis",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderColor: "#E5E7EB",
              borderWidth: 1,
              textStyle: {
                color: "#374151",
                fontSize: 12,
              },
              axisPointer: {
                type: "shadow",
                shadowStyle: {
                  color: "rgba(0, 0, 0, 0.03)",
                },
              },
            },
            legend: {
              data: ["Revenue", "Orders"],
              icon: "circle",
              itemWidth: 10,
              itemHeight: 10,
              textStyle: {
                color: "#6B7280",
                fontSize: 12,
              },
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data:
                timeRange === "weekly"
                  ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                  : [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
              axisLine: {
                lineStyle: {
                  color: "#E5E7EB",
                },
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: "#6B7280",
                fontSize: 12,
              },
            },
            yAxis: {
              type: "value",
              splitLine: {
                lineStyle: {
                  color: 'none',
                },
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: true,
              },
              axisLabel: {
                color: "#6B7280",
                fontSize: 12,
              },
            },
            series: [
              {
                name: "Revenue",
                type: "line",
                data:
                  timeRange === "weekly"
                    ? [5200, 4800, 6500, 5700, 7800, 8200, 9000]
                    : [
                        15200, 19800, 21500, 25700, 27800, 32200, 34000, 36500, 38200,
                        40100, 42500, 45000,
                      ],
                smooth: true,
                symbol: "circle",
                symbolSize: 6,
                showSymbol: false,
                lineStyle: {
                  color: "#1E40AF",
                  width: 3,
                  shadowColor: "rgba(30, 64, 175, 0.2)",
                  shadowBlur: 10,
                },
                itemStyle: {
                  color: "#1E40AF",
                  borderColor: "#fff",
                  borderWidth: 2,
                },
                areaStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(30, 64, 175, 0.5)",
                      },
                      {
                        offset: 1,
                        color: "rgba(30, 64, 175, 0.05)",
                      },
                    ],
                  },
                },
              },
              {
                name: "Orders",
                type: "line",
                data:
                  timeRange === "weekly"
                    ? [120, 132, 145, 132, 160, 175, 188]
                    : [320, 352, 385, 402, 420, 450, 485, 512, 530, 552, 575, 610],
                smooth: true,
                symbol: "circle",
                symbolSize: 6,
                showSymbol: false,
                lineStyle: {
                  color: "#10B981",
                  width: 3,
                  shadowColor: "rgba(16, 185, 129, 0.2)",
                  shadowBlur: 10,
                },
                itemStyle: {
                  color: "#10B981",
                  borderColor: "#fff",
                  borderWidth: 1,
                },
              },
            ],
          };
          option && myChart.setOption(option);
      
          // Resize chart on window resize
          const handleResize = () => {
            myChart.resize();
          };
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
            myChart.dispose();
          };
        }, [timeRange]);

        
          // Distribution chart initialization
          const distributionChartRef = useRef(null);
          useEffect(() => {
            if (!distributionChartRef.current) return;
        
            const myChart = echarts.init(distributionChartRef.current);
            const option = {
              animation: true,
              tooltip: {
                trigger: "item",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#E5E7EB",
                borderWidth: 0,
                textStyle: {
                  color: "#374151",
                  fontSize: 12,
                },
                formatter: "{b}: {c} ({d}%)",
              },
              legend: {
                orient: "vertical",
                right: 10,
                top: "center",
                itemWidth: 10,
                itemHeight: 10,
                icon: "circle",
                textStyle: {
                  color: "#6B7280",
                  fontSize: 12,
                },
                formatter: (name) => {
                  const data = [
                    { name: "Electronics", value: 42 },
                    { name: "Clothing", value: 28 },
                    { name: "Home & Kitchen", value: 18 },
                    { name: "Others", value: 12 },
                  ];
                  const item = data.find((item) => item.name === name);
                  return `${name}: ${item?.value}%`;
                },
              },
              series: [
                {
                  name: "Sales Distribution",
                  type: "pie",
                  radius: ["50%", "70%"],
                  avoidLabelOverlap: false,
                  itemStyle: {
                    borderRadius: 0,
                    borderColor: "none",
                    borderWidth: 2,
                    shadowBlur: 10,
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                  },
                  label: {
                    show: false,
                    position: "center",
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#374151",
                    },
                    itemStyle: {
                      shadowBlur: 20,
                      shadowColor: "rgba(0, 0, 0, 0.2)",
                    },
                  },
                  labelLine: {
                    show: false,
                  },
                  data: [
                    {
                      value: 42,
                      name: "Electronics",
                      itemStyle: {
                        color: "#1E40AF",
                      },
                    },
                    {
                      value: 28,
                      name: "Clothing",
                      itemStyle: {
                        color: "#10B981",
                      },
                    },
                    {
                      value: 18,
                      name: "Home & Kitchen",
                      itemStyle: {
                        color: "#F59E0B",
                      },
                    },
                    {
                      value: 12,
                      name: "Others",
                      itemStyle: {
                        color: "#6366F1",
                      },
                    },
                  ],
                },
              ],
            };
            option && myChart.setOption(option);
            const handleResize = () => {
              myChart.resize();
            };
            window.addEventListener("resize", handleResize);
            return () => {
              window.removeEventListener("resize", handleResize);
              myChart.dispose();
            };
          }, []);


  return (
       <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-3">
            {/* Revenue Chart */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm lg:col-span-2`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`${darkMode ? 'text-white' :' text-gray-800' } mb-6 text-lg font-semibold`}>
                  Revenue Overview
                </h3>
                <div className="flex items-center sm:flex-row flex-col space-x-2 gap-2">
                  <button
                    onClick={() => setTimeRange("weekly")}
                    className={`px-3 py-1 text-sm cursor-pointer !rounded-button whitespace-nowrap ${timeRange === "weekly" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"} rounded-md`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setTimeRange("monthly")}
                    className={`px-3 py-1 text-sm cursor-pointer !rounded-button whitespace-nowrap ${timeRange === "monthly" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"} rounded-md`}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <div ref={revenueChartRef} className="w-full h-80 contain-content">
                {/* Ensure the chart is initialized */}
              </div>
            </div>
            {/* Sales Distribution Chart */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <h3 className={`${darkMode ? 'text-white' :' text-gray-800' } mb-6 text-lg font-semibold`}>
                Sales Distribution
              </h3>
              <div ref={distributionChartRef} className="w-full sm:h-80 h-40 flex items-center">
                {/* Ensure the chart is initialized */}
              </div>
            </div>
          </div>
  )
}

export default Charts
import React from "react";
import "./dashboard.css";
import { FiDollarSign, FiShoppingCart, FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineTrendingUp, HiOutlineTrendingDown } from "react-icons/hi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

// image imports
import dashImg1 from "../../assets/images/dash-img1.png";
import dashImg2 from "../../assets/images/dash-img2.png";
import dashImg3 from "../../assets/images/dash-img3.png";
import dashImg4 from "../../assets/images/dash-img4.png";
import dashImg5 from "../../assets/images/dash-img5.png";

function Dashboard() {
  const lineData = [
    { time: "4am", may21: 10, may22: 12 },
    { time: "5am", may21: 8, may22: 15 },
    { time: "6am", may21: 12, may22: 10 },
    { time: "7am", may21: 25, may22: 24 },
    { time: "8am", may21: 26, may22: 34 },
    { time: "9am", may21: 30, may22: 36 },
    { time: "10am", may21: 12, may22: 48 },
    { time: "11am", may21: 20, may22: 44 },
    { time: "12am", may21: 35, may22: 25 },
    { time: "1pm", may21: 40, may22: 25 },
    { time: "2pm", may21: 50, may22: 35 },
    { time: "3pm", may21: 40, may22: 30 },
  ];

  const barData = [
    { day: "12", sales: 120 },
    { day: "13", sales: 180 },
    { day: "14", sales: 150 },
    { day: "15", sales: 200 },
    { day: "16", sales: 220 },
    { day: "17", sales: 280 },
    { day: "18", sales: 250 },
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* dash top info */}

      <div className="dash-top">
        <div className="dash-top-card">
          <div className="card-left">
            <h2 className="card-value">$10.540</h2>
            <p className="card-title">Total Revenue</p>
            <div className="card-status up">
              <span>22.45%</span>
              <HiOutlineTrendingUp />
            </div>
          </div>
          <div className="card-right">
            <div className="icon-wrapper">
              <FiDollarSign />
            </div>
          </div>
        </div>

        <div className="dash-top-card">
          <div className="card-left">
            <h2 className="card-value">1,056</h2>
            <p className="card-title">Orders</p>
            <div className="card-status up">
              <span>15.34%</span>
              <HiOutlineTrendingUp />
            </div>
          </div>
          <div className="card-right">
            <div className="icon-wrapper">
              <FiShoppingCart />
            </div>
          </div>
        </div>

        <div className="dash-top-card">
          <div className="card-left">
            <h2 className="card-value">48</h2>
            <p className="card-title">Active Sessions</p>
            <div className="card-status down">
              <span>18.25%</span>
              <HiOutlineTrendingDown />
            </div>
          </div>
          <div className="card-right">
            <div className="icon-wrapper">
              <FiUser />
            </div>
          </div>
        </div>

        <div className="dash-top-card">
          <div className="card-left">
            <h2 className="card-value">5.420</h2>
            <p className="card-title">Total Sessions</p>
            <div className="card-status down">
              <span>10.24%</span>
              <HiOutlineTrendingDown />
            </div>
          </div>
          <div className="card-right">
            <div className="icon-wrapper">
              <FiUsers />
            </div>
          </div>
        </div>
      </div>

      {/* dash graph /  chart */}
      <div className="charts-grid">
        <div className="chart-card line-chart-container">
          <div className="chart-header">
            <h3>Orders Over Time</h3>
            <select className="chart-select">
              <option>Last 12 Hours</option>
            </select>
          </div>

          <div className="chart-stats">
            <div className="stat-item">
              <h4>645</h4>
              <p>Orders on May 22</p>
            </div>
            <div className="stat-item">
              <h4>472</h4>
              <p>Orders on May 21</p>
            </div>
            <div className="chart-legend">
              <span>
                <i className="dot may21"></i> May 21
              </span>
              <span>
                <i className="dot may22"></i> May 22
              </span>
            </div>
          </div>

          {/* chart  */}

          <div className="main-chart">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eee"
                />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#999" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#999" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#2d3748",
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="may21"
                  stroke="#cbd5e0"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="may22"
                  stroke="#1e5eff"
                  strokeWidth={3}
                  dot={{
                    r: 6,
                    fill: "#1e5eff",
                    strokeWidth: 3,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card bar-chart-container">
          <div className="chart-header">
            <h3>Last 7 Days Sales</h3>
          </div>

          <div className="bar-stats">
            <div className="stat-item">
              <h4>1,259</h4>
              <p>Items Sold</p>
            </div>
            <div className="stat-item">
              <h4>$12,546</h4>
              <p>Revenue</p>
            </div>
          </div>

          <div className="main-chart bar-chart-box">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
                  <Cell fill="#00b341" />
                  <Cell fill="#00b341" />
                  <Cell fill="#00b341" />
                  <Cell fill="#00b341" />
                  <Cell fill="#2d3748" />
                  <Cell fill="#00b341" />
                  <Cell fill="#00b341" />
                </Bar>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#999" }}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* dash products */}
      <div className="dash-products">
        <div className="products-card">
          <h3 className="table-title">Top Products by Units Sold</h3>

          <table className="products-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Units Sold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-info">
                    <img src={dashImg1} alt="product" />
                    <span>Men Grey Hoodie</span>
                  </div>
                </td>
                <td>$49.90</td>
                <td>204</td>
              </tr>

              <tr>
                <td>
                  <div className="product-info">
                    <img src={dashImg2} alt="product" />
                    <span>Women Striped T-Shirt</span>
                  </div>
                </td>
                <td>$34.90</td>
                <td>155</td>
              </tr>

              <tr>
                <td>
                  <div className="product-info">
                    <img src={dashImg3} alt="product" />
                    <span>Wome White T-Shirt</span>
                  </div>
                </td>
                <td>$34.90</td>
                <td>155</td>
              </tr>

              <tr>
                <td>
                  <div className="product-info">
                    <img src={dashImg4} alt="product" />
                    <span>Men White T-Shirt</span>
                  </div>
                </td>
                <td>$34.90</td>
                <td>155</td>
              </tr>

              <tr>
                <td>
                  <div className="product-info">
                    <img src={dashImg5} alt="product" />
                    <span>Women Red T-Shirt</span>
                  </div>
                </td>
                <td>$34.90</td>
                <td>155</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

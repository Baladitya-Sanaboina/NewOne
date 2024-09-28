import React from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

import "./index.css"; // Ensure this path is correct

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement
);

const Dashboard = () => {
  // Sample data for charts
  const barData = {
    labels: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"],
    datasets: [
      {
        label: "Scores",
        data: [85, 90, 78, 92, 88],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average Score",
        data: [75, 80, 85, 90],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        label: "Quiz Results",
        data: [80, 20],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 206, 86, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const radarData = {
    labels: ["Math", "Science", "English", "History", "Art"],
    datasets: [
      {
        label: "Student 1",
        data: [90, 80, 70, 85, 95],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Student 2",
        data: [70, 90, 80, 75, 85],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#333",
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
      },
    },
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="charts-grid">
        <div className="chart-container">
          <h2 className="chart-title">Bar Chart - Student Scores</h2>
          <Bar data={barData} options={options} />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Line Chart - Average Scores Over Time</h2>
          <Line data={lineData} options={options} />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Pie Chart - Quiz Results</h2>
          <Pie data={pieData} options={options} />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Radar Chart - Subject Performance</h2>
          <Radar data={radarData} options={options} />
        </div>
      </div>

      <div className="analytics-container">
        <h2 className="analytics-title">Quiz Analytics</h2>
        <ul className="analytics-list">
          <li>Total Quizzes Taken: 50</li>
          <li>Average Score: 85</li>
          <li>Top Scorer: Student 2</li>
          <li>Lowest Scorer: Student 3</li>
          <li>Passing Rate: 90%</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

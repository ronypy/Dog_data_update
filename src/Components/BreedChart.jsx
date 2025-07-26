import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const BreedChart = ({ data }) => {
  const breedCounts = {};

  data.forEach((animal) => {
    const breed = animal.breed;
    breedCounts[breed] = (breedCounts[breed] || 0) + 1;
  });

  const breedData = Object.keys(breedCounts).map((breed) => ({
    breed,
    count: breedCounts[breed],
  }));

  // Sort by count and take top 5 breeds for better visualization
  const topBreeds = breedData
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={topBreeds}
        cx={200}
        cy={150}
        labelLine={false}
        label={({ breed, percent }) => `${breed} ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="count"
      >
        {topBreeds.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip contentStyle={{ background: "#000", color: "#fff" }} />
      <Legend wrapperStyle={{ color: "#fff" }} />
    </PieChart>
  );
};

export default BreedChart; 
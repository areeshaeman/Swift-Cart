// components/StatCard.jsx
const StatCard = ({ title, value, unit, color }) => (
  <div className={`rounded-lg p-4 text-white ${color}`}>
    <p className="text-sm">{title}</p>
    <h2 className="text-2xl font-bold">{value} <span className="text-sm">{unit}</span></h2>
  </div>
);
export default StatCard;
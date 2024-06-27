import "./CircularProgress.css";

export default function CircularProgress({ percentage }) {
  const radius = 80;
  const stroke = 15;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      <svg height={radius * 2} width={radius * 2} className="circular-progress">
        <circle
          stroke="lightgrey"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="limegreen"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          transform="rotate(90 80,80)"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="25"
          fill="limegreen"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

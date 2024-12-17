export default function AchievementsItems() {
  return (
    <div className="achievement-box">
      {data.map((item, index) => (
        <AchievementItem num={item.num} feedback={item.feedback} key={index} />
      ))}
    </div>
  );
}

function AchievementItem({ num, feedback }) {
  return (
    <div className="achievement-item">
      <strong className="num">{num}</strong>
      <span className="feedback">{feedback}</span>
    </div>
  );
}
const data = [
  {
    num: 400,
    feedback: "Customers are satisfied with our professional support",
  },
  {
    num: 1000,
    feedback: "Amazing preset options to be mixed and combined",
  },
  {
    num: 8000,
    feedback: "Average response time on live chat support channel",
  },
];

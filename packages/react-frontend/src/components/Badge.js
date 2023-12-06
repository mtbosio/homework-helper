import "./Badge.css";

export default function Badge(props) {
  return (
    <div className="badge" style={{ backgroundColor: props.color }}>
      <p style={{ color: props.textColor }}>{props.text}</p>
    </div>
  );
}

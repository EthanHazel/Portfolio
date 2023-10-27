import './container.css';

export default function Container(props) {
  const containerClass = `${props.size}Container`;

  return (
    <div className={containerClass}>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}
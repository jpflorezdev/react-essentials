import "./TabButton.css";

export default function TabButton({ children }) {
  function clickHandler() {
    console.log("HELLO JP :)");
  }

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}

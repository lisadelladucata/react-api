export default function Button({ onClick, disabled = false, children }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

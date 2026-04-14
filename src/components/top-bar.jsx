import { Link } from "react-router-dom";

export default function TopBar({ title, backTo, backState = null, rightSlot = null }) {
  return (
    <div className="top-bar">
      {backTo ? (
        <Link className="top-bar__back" to={backTo} state={backState}>
          返回
        </Link>
      ) : (
        <span className="top-bar__back top-bar__back--ghost">返回</span>
      )}
      <div className="top-bar__title">{title}</div>
      {rightSlot ?? <span className="top-bar__back top-bar__back--ghost">···</span>}
    </div>
  );
}

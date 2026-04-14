import { Link } from "react-router-dom";

export default function EntryGate({ to = "/operator", label = "运营演示", title = "运营演示入口" }) {
  return (
    <Link className="entry-gate" to={to} title={title}>
      {label}
    </Link>
  );
}

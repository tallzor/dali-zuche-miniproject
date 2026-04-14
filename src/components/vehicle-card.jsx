import { Link } from "react-router-dom";
import StatusPill from "./status-pill";

export default function VehicleCard({ vehicle, to }) {
  return (
    <Link className="vehicle-card" to={to}>
      <div className="vehicle-card__image" />
      <div className="vehicle-card__body">
        <div className="vehicle-card__head">
          <h3>{vehicle.name}</h3>
          <StatusPill tone="brand">{vehicle.availability}</StatusPill>
        </div>
        <p>{vehicle.summary}</p>
        <div className="vehicle-card__meta">
          <span>{vehicle.seats} 座</span>
          <strong>¥{vehicle.price} / 天起</strong>
        </div>
      </div>
    </Link>
  );
}

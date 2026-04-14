import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { makeBookingRouteState, readBookingContext } from "../components/booking-flow-state";

export default function RiskResultPage() {
  const location = useLocation();
  const booking = readBookingContext(location.state);
  const rejected = location.pathname.includes("reject");

  return (
    <PhoneShell>
      <TopBar title="风控审核结果" backTo="/identity" backState={makeBookingRouteState(booking)} />
      <div className="page-body page-stack">
        <SectionCard title={rejected ? "审核未通过" : "审核通过"}>
          <p>当前车型：{booking.vehicleName}</p>
          <p>{rejected ? "当前订单暂不支持继续支付，请联系客服协助。" : "风控审核通过，已生成待支付订单。"}</p>
        </SectionCard>
        {rejected ? (
          <Link className="secondary-button" to="/">
            返回首页
          </Link>
        ) : (
          <Link className="primary-button" to="/payment-success" state={makeBookingRouteState(booking)}>
            去完成支付
          </Link>
        )}
      </div>
    </PhoneShell>
  );
}

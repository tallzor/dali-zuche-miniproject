import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import StatusPill from "../components/status-pill";
import { touristNavItems } from "../components/tourist-nav-items";
import { readBookingContext } from "../components/booking-flow-state";
import { demoOrder } from "../mock/data";

export default function PaymentSuccessPage() {
  const location = useLocation();
  const booking = readBookingContext(location.state);

  return (
    <PhoneShell footer={<BottomNav items={touristNavItems} />}>
      <TopBar title="支付成功" backTo="/" />
      <div className="page-body page-stack">
        <SectionCard title="订单已确认" extra={<StatusPill tone="safe">{demoOrder.status}</StatusPill>}>
          <p>订单号：{booking.orderId}</p>
          <p>车型：{booking.vehicleName}</p>
          <p>取车时间：{booking.pickupTime}</p>
          <p>交付门店：{booking.pickupStore}</p>
          <p>客服将在 10 分钟内联系，并引导进入私域沟通。</p>
        </SectionCard>
        <Link className="primary-button" to="/order">
          查看订单详情
        </Link>
      </div>
    </PhoneShell>
  );
}

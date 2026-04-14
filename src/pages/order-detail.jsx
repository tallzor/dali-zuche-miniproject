import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import Timeline from "../components/timeline";
import { makeBookingRouteState, readBookingContext } from "../components/booking-flow-state";
import { touristNavItems } from "../components/tourist-nav-items";
import { demoOrder } from "../mock/data";

export default function OrderDetailPage() {
  const location = useLocation();
  const booking = readBookingContext(location.state);

  return (
    <PhoneShell footer={<BottomNav items={touristNavItems} />}>
      <TopBar title="订单详情" backTo="/payment-success" backState={makeBookingRouteState(booking)} />
      <div className="page-body page-stack">
        <SectionCard title="状态进度">
          <Timeline items={demoOrder.timeline} />
        </SectionCard>
        <SectionCard title="费用明细">
          <p>基础日租：¥656</p>
          <p>儿童座椅：¥50</p>
          <p>合计：¥706</p>
        </SectionCard>
        <SectionCard title="支持入口">
          <div className="quick-links">
            <Link to="/route-card" state={{ backTo: "/order" }} className="secondary-button">
              查看路线卡
            </Link>
            <Link to="/refund-rules" state={{ backTo: "/order" }} className="secondary-button">
              查看退款规则
            </Link>
          </div>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}

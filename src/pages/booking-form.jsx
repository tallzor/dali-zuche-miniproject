import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { makeBookingRouteState, readBookingContext } from "../components/booking-flow-state";
import { touristNavItems } from "../components/tourist-nav-items";

export default function BookingFormPage() {
  const location = useLocation();
  const booking = readBookingContext(location.state);

  return (
    <PhoneShell footer={<BottomNav items={touristNavItems} />}>
      <TopBar title="提交租车申请" backTo="/vehicles" />
      <div className="page-body page-stack">
        <SectionCard title="用车信息">
          <p>当前车型：{booking.vehicleName}</p>
          <div className="form-grid">
            <input value={booking.bookingDate} readOnly />
            <select defaultValue={booking.pickupStore}>
              <option>大理古城交付点</option>
            </select>
            <select defaultValue={booking.partySize}>
              <option>3 人</option>
            </select>
            <input value={booking.phone} readOnly />
          </div>
        </SectionCard>
        <SectionCard title="增值项">
          <div className="chips">
            <span>儿童座椅</span>
            <span>送车上门</span>
            <span>路线卡增强</span>
          </div>
        </SectionCard>
        <Link className="primary-button" to="/identity" state={makeBookingRouteState(booking)}>
          提交申请并去实名
        </Link>
      </div>
    </PhoneShell>
  );
}

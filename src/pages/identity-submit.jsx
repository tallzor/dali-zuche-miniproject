import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { makeBookingRouteState, readBookingContext } from "../components/booking-flow-state";
import { touristNavItems } from "../components/tourist-nav-items";

export default function IdentitySubmitPage() {
  const location = useLocation();
  const booking = readBookingContext(location.state);

  return (
    <PhoneShell footer={<BottomNav items={touristNavItems} />}>
      <TopBar title="实名认证与驾驶证" backTo="/booking" backState={makeBookingRouteState(booking)} />
      <div className="page-body page-stack">
        <SectionCard title="身份信息">
          <p>当前车型：{booking.vehicleName}</p>
          <div className="form-grid">
            <input value={booking.applicantName} readOnly />
            <input value={booking.idNumber} readOnly />
          </div>
        </SectionCard>
        <SectionCard title="驾驶证上传">
          <div className="upload-box">已上传驾驶证正页与副页</div>
        </SectionCard>
        <Link className="primary-button" to="/risk/pass" state={makeBookingRouteState(booking)}>
          提交审核
        </Link>
      </div>
    </PhoneShell>
  );
}

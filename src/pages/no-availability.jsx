import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function NoAvailabilityPage() {
  return (
    <PhoneShell>
      <TopBar title="当前暂无可约" backTo="/" />
      <div className="page-body page-stack">
        <SectionCard title="所选日期暂无可租车辆">
          <p>建议切换门店或调整日期，也可联系客服做人工确认。</p>
        </SectionCard>
        <Link className="primary-button" to="/vehicles">
          重新选择车型
        </Link>
      </div>
    </PhoneShell>
  );
}

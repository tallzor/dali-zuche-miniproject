import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";

export default function OperatorGpsBindPage() {
  return (
    <PhoneShell>
      <TopBar title="GPS 绑定" backTo="/operator/doc-upload" />
      <div className="page-body page-stack">
        <SectionCard title="绑定设备" extra={<StatusPill tone="safe">在线</StatusPill>}>
          <p>设备编号：GPS-DA-2048</p>
          <p>最近上报：刚刚</p>
          <p>绑定状态：已绑定至 云L A3288</p>
        </SectionCard>
        <SectionCard title="状态说明">
          <p>设备信号正常，定位与回传已满足上架条件。</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/publish-status">
          去看上架状态
        </Link>
      </div>
    </PhoneShell>
  );
}

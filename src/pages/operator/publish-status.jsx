import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import Timeline from "../../components/timeline";
import StatusPill from "../../components/status-pill";

const publishFlow = ["资料已校验", "GPS 已绑定", "门店已确认", "车辆已上架"];

export default function OperatorPublishStatusPage() {
  return (
    <PhoneShell>
      <TopBar title="上架" backTo="/operator/gps-bind" />
      <div className="page-body page-stack">
        <SectionCard title="当前状态" extra={<StatusPill tone="brand">可上架</StatusPill>}>
          <Timeline items={publishFlow} />
        </SectionCard>
        <SectionCard title="结果说明">
          <p>车辆已完成上架前流程校验，可以进入车辆列表进行运营查看。</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/vehicles">
          查看车辆列表
        </Link>
      </div>
    </PhoneShell>
  );
}

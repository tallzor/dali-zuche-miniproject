import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";
import { vehicleCategories } from "../../mock/data";

export default function OperatorTemplateListPage() {
  return (
    <PhoneShell>
      <TopBar title="车型模板" backTo="/operator" />
      <div className="page-body page-stack">
        {vehicleCategories.map((template) => (
          <SectionCard key={template.id} title={template.name} extra={<StatusPill tone="default">{template.availability}</StatusPill>}>
            <p>{template.summary}</p>
            <p>座位数：{template.seats} 座</p>
            <p>价格：¥{template.price} / 天起</p>
            <p>适配路线：{template.detailRoute}</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}

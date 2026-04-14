import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";
import { stores } from "../../mock/data";

export default function OperatorStoreListPage() {
  return (
    <PhoneShell>
      <TopBar title="门店" backTo="/operator" />
      <div className="page-body page-stack">
        {stores.map((store) => (
          <SectionCard key={store.id} title={store.name} extra={<StatusPill tone="brand">可用 {store.availableCount}</StatusPill>}>
            <p>联系人：{store.contact}</p>
            <p>营业时间：{store.hours}</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}

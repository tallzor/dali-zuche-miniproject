import { useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function RefundRulesPage() {
  const location = useLocation();
  const backTo = location.state?.backTo ?? "/";

  return (
    <PhoneShell>
      <TopBar title="退款规则说明" backTo={backTo} />
      <div className="page-body page-stack">
        <SectionCard title="MVP 演示规则">
          <p>用车生效前取消，后台审核后全额退款。</p>
          <p>用车生效后取消且未取车，后台审核后退款 50%。</p>
          <p>已取车后提前结束，原则上不退，特殊情况人工审核。</p>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}

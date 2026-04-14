import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import EntryGate from "../components/entry-gate";
import { SectionCard } from "../components/section-card";

const navItems = [
  { label: "首页", to: "/" },
  { label: "选车", to: "/vehicles", matchPatterns: ["/vehicles", "/vehicle/:id"] },
  { label: "预约", to: "/booking" },
  { label: "订单", to: "/order" }
];

export default function HomePage() {
  return (
    <PhoneShell footer={<BottomNav items={navItems} />}>
      <div className="hero">
        <EntryGate />
        <div className="hero__eyebrow">大理本地深度自驾</div>
        <h1>价格透明，标准交付更省心</h1>
        <p>风控前置、本地路线、在租可控，适合客户现场查看的大理自驾样例。</p>
        <Link className="primary-button" to="/vehicles">
          立即选车
        </Link>
      </div>
      <div className="page-body">
        <SectionCard title="核心承诺">
          <div className="promise-grid">
            <div>价格透明</div>
            <div>标准交付</div>
            <div>风控前置</div>
            <div>路线服务</div>
          </div>
        </SectionCard>
        <SectionCard title="演示入口">
          <div className="quick-links">
            <Link to="/risk/reject">风控拒绝</Link>
            <Link to="/no-availability">暂无可约</Link>
            <Link to="/refund-rules">退款规则</Link>
          </div>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}

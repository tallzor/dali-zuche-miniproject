import { useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { touristNavItems } from "../components/tourist-nav-items";
import { routeCards } from "../mock/data";

export default function RouteCardPage() {
  const location = useLocation();
  const route = routeCards[0];
  const backTo = location.state?.backTo ?? "/";

  return (
    <PhoneShell footer={<BottomNav items={touristNavItems} />}>
      <TopBar title="路线卡" backTo={backTo} />
      <div className="page-body page-stack">
        <SectionCard title={route.name}>
          <p>适合人群：{route.audience}</p>
          <p>建议时长：{route.duration}</p>
          <p>停车提示：{route.parking}</p>
          <p>路况提示：{route.road}</p>
          <p>推荐停靠点：{route.stops.join(" / ")}</p>
          <p>交付时车内会同步提供纸质路线卡。</p>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}

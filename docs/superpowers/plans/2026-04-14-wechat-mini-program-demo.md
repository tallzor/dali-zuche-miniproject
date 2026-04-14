# WeChat Mini-Program Style Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a locally runnable mobile web demo that looks and behaves like a WeChat mini-program, showcasing the tourist booking flow and the hidden merchant vehicle-onboarding flow for client demos.

**Architecture:** Use `React + Vite` for a single-page app with route-based screens, local mock data, and lightweight CSS. Keep all business flows deterministic and local-only: no backend, no real payment, no real upload, no real risk-control API, and no real GPS map.

**Tech Stack:** React, Vite, React Router, plain CSS, local mock data

---

## File Structure

### Create

- `package.json` — project scripts and frontend dependencies
- `vite.config.js` — Vite development config
- `index.html` — app shell
- `src/main.jsx` — React bootstrap
- `src/app.jsx` — router root and top-level layout
- `src/styles.css` — global visual system for the mini-program style demo
- `src/mock/data.js` — all mock stores, vehicles, orders, routes, and scenario states
- `src/components/phone-shell.jsx` — mobile frame wrapper
- `src/components/top-bar.jsx` — reusable top bar
- `src/components/bottom-nav.jsx` — reusable bottom navigation
- `src/components/section-card.jsx` — reusable card container
- `src/components/status-pill.jsx` — status chip for flow states
- `src/components/vehicle-card.jsx` — reusable vehicle card
- `src/components/timeline.jsx` — reusable order timeline
- `src/components/entry-gate.jsx` — hidden operator-entry trigger
- `src/pages/home.jsx` — home page
- `src/pages/vehicle-list.jsx` — vehicle list page
- `src/pages/vehicle-detail.jsx` — vehicle detail page
- `src/pages/booking-form.jsx` — booking request page
- `src/pages/identity-submit.jsx` — identity and driver license page
- `src/pages/risk-result.jsx` — risk-control result page
- `src/pages/payment-success.jsx` — payment success / pending delivery page
- `src/pages/order-detail.jsx` — order detail page
- `src/pages/route-card.jsx` — static route card page
- `src/pages/no-availability.jsx` — no-availability page
- `src/pages/refund-rules.jsx` — refund rules page
- `src/pages/operator/index.jsx` — operator entry page
- `src/pages/operator/store-list.jsx` — store list page
- `src/pages/operator/template-list.jsx` — vehicle-template page
- `src/pages/operator/vehicle-create.jsx` — concrete vehicle create page
- `src/pages/operator/doc-upload.jsx` — document upload result page
- `src/pages/operator/gps-bind.jsx` — GPS bind result page
- `src/pages/operator/publish-status.jsx` — publish state page
- `src/pages/operator/vehicle-list.jsx` — operator vehicle list page

### Modify

- None; repo is currently empty for app code

### Test / Verification

- Manual smoke verification through local browser routes

---

### Task 1: Scaffold The Demo App

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/app.jsx`

- [ ] **Step 1: Create package manifest**

```json
{
  "name": "dali-mini-program-demo",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.10"
  }
}
```

- [ ] **Step 2: Create Vite config**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
});
```

- [ ] **Step 3: Create app shell**

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>本地深度自驾租车 Demo</title>
    <script type="module" src="/src/main.jsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- [ ] **Step 4: Create bootstrap**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 5: Create router root with placeholder routes**

```jsx
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/vehicles" element={<div>Vehicles</div>} />
      <Route path="/vehicle/family-suv" element={<div>Vehicle Detail</div>} />
      <Route path="/booking" element={<div>Booking</div>} />
      <Route path="/identity" element={<div>Identity</div>} />
      <Route path="/risk/pass" element={<div>Risk Pass</div>} />
      <Route path="/risk/reject" element={<div>Risk Reject</div>} />
      <Route path="/payment-success" element={<div>Payment Success</div>} />
      <Route path="/order" element={<div>Order</div>} />
      <Route path="/route-card" element={<div>Route Card</div>} />
      <Route path="/no-availability" element={<div>No Availability</div>} />
      <Route path="/refund-rules" element={<div>Refund Rules</div>} />
      <Route path="/operator" element={<div>Operator</div>} />
      <Route path="/operator/stores" element={<div>Stores</div>} />
      <Route path="/operator/templates" element={<div>Templates</div>} />
      <Route path="/operator/vehicle-create" element={<div>Vehicle Create</div>} />
      <Route path="/operator/doc-upload" element={<div>Doc Upload</div>} />
      <Route path="/operator/gps-bind" element={<div>GPS Bind</div>} />
      <Route path="/operator/publish-status" element={<div>Publish Status</div>} />
      <Route path="/operator/vehicles" element={<div>Operator Vehicles</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`  
Expected: dependencies install successfully and `node_modules` is created.

- [ ] **Step 7: Run the dev server smoke check**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: Vite starts and reports a local URL.

- [ ] **Step 8: Milestone check**

Confirm the app boots with route placeholders and no build errors.

---

### Task 2: Build The Visual System And Reusable Layout

**Files:**
- Create: `src/styles.css`
- Create: `src/components/phone-shell.jsx`
- Create: `src/components/top-bar.jsx`
- Create: `src/components/bottom-nav.jsx`
- Create: `src/components/section-card.jsx`
- Create: `src/components/status-pill.jsx`

- [ ] **Step 1: Create global stylesheet**

```css
:root {
  --bg: #eef3f8;
  --surface: #ffffff;
  --surface-muted: #f6f8fb;
  --text: #17324d;
  --text-soft: #617488;
  --line: #dbe3ec;
  --brand: #16324f;
  --brand-strong: #0f2438;
  --safe: #1f9d61;
  --warn: #e39a2d;
  --danger: #d55252;
  --shadow: 0 18px 45px rgba(18, 38, 63, 0.08);
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #f7fbff 0%, var(--bg) 48%, #e8eef5 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}
```

- [ ] **Step 2: Create phone shell**

```jsx
export default function PhoneShell({ children, footer = null }) {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="phone-screen">{children}</div>
        {footer}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create top bar**

```jsx
import { Link } from "react-router-dom";

export default function TopBar({ title, backTo }) {
  return (
    <div className="top-bar">
      {backTo ? (
        <Link className="top-bar__back" to={backTo}>
          返回
        </Link>
      ) : (
        <span className="top-bar__back top-bar__back--ghost">返回</span>
      )}
      <div className="top-bar__title">{title}</div>
      <span className="top-bar__back top-bar__back--ghost">···</span>
    </div>
  );
}
```

- [ ] **Step 4: Create footer nav**

```jsx
import { Link, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "首页" },
  { to: "/vehicles", label: "选车" },
  { to: "/order", label: "订单" },
  { to: "/route-card", label: "路线" }
];

export default function BottomNav() {
  const location = useLocation();
  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Link
          key={item.to}
          className={location.pathname === item.to ? "bottom-nav__item is-active" : "bottom-nav__item"}
          to={item.to}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Create generic card and status pill**

```jsx
export function SectionCard({ title, extra, children }) {
  return (
    <section className="section-card">
      {(title || extra) && (
        <div className="section-card__head">
          <h3>{title}</h3>
          {extra}
        </div>
      )}
      {children}
    </section>
  );
}
```

```jsx
export default function StatusPill({ tone = "default", children }) {
  return <span className={`status-pill status-pill--${tone}`}>{children}</span>;
}
```

- [ ] **Step 6: Expand CSS for reusable layout**

```css
.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px 12px;
}

.phone-frame {
  width: 100%;
  max-width: 420px;
  min-height: 860px;
  background: var(--surface);
  border: 1px solid rgba(20, 50, 79, 0.08);
  border-radius: 34px;
  box-shadow: var(--shadow);
  overflow: hidden;
  position: relative;
}

.phone-screen {
  min-height: 792px;
  padding-bottom: 92px;
  background: linear-gradient(180deg, #f9fbfd 0%, #eef3f8 100%);
}

.top-bar,
.bottom-nav,
.section-card,
.status-pill {
  /* implemented by later style additions in this file */
}
```

- [ ] **Step 7: Run a build check**

Run: `npm run build`  
Expected: Vite build succeeds with the reusable layout components.

- [ ] **Step 8: Milestone check**

Confirm the app has a stable phone-shell layout and shared UI building blocks.

---

### Task 3: Add Deterministic Mock Data

**Files:**
- Create: `src/mock/data.js`

- [ ] **Step 1: Add store, vehicle, route, and order data**

```js
export const stores = [
  {
    id: "ancient-town",
    name: "大理古城交付点",
    contact: "李店长",
    hours: "08:30 - 21:00",
    availableCount: 2
  },
  {
    id: "station",
    name: "高铁站交付点",
    contact: "杨管家",
    hours: "09:00 - 22:00",
    availableCount: 1
  }
];

export const vehicleCategories = [
  {
    id: "easy-couple",
    name: "情侣轻松出游",
    price: 298,
    seats: 5,
    summary: "好开好停，适合洱海轻松线",
    availability: "今日可约",
    detailRoute: "轻松环海路线"
  },
  {
    id: "family-suv",
    name: "家庭舒适出行",
    price: 328,
    seats: 5,
    summary: "空间更稳，适合亲子与双人深度游",
    availability: "余量充足",
    detailRoute: "亲子舒适路线"
  },
  {
    id: "long-distance",
    name: "远线稳妥出行",
    price: 398,
    seats: 5,
    summary: "适合长距离与更多山路场景",
    availability: "剩余 1 台",
    detailRoute: "山线探索路线"
  }
];

export const routeCards = [
  {
    id: "erhai",
    name: "洱海轻松线",
    audience: "情侣 / 首次来大理游客",
    duration: "1 天",
    parking: "双廊与才村高峰期停车偏紧",
    road: "全程路况友好",
    stops: ["才村", "喜洲", "双廊"]
  },
  {
    id: "family",
    name: "亲子舒适线",
    audience: "小家庭 / 带娃出行",
    duration: "2 天 1 夜",
    parking: "大部分点位停车方便",
    road: "以城市和环湖道路为主",
    stops: ["古城", "海舌公园", "小普陀"]
  }
];

export const demoOrder = {
  id: "DL20260414001",
  vehicleName: "家庭舒适出行",
  pickupTime: "2026-04-20 10:00",
  storeName: "大理古城交付点",
  status: "已支付待交付",
  timeline: [
    "已提交租车申请",
    "已完成实名认证",
    "风控审核通过",
    "支付成功",
    "待到店交付"
  ]
};

export const operatorVehicles = [
  {
    id: "car-01",
    plate: "云L A3288",
    template: "家庭舒适出行",
    store: "大理古城交付点",
    gps: "在线",
    status: "已上架可租"
  },
  {
    id: "car-02",
    plate: "云L B5172",
    template: "情侣轻松出游",
    store: "高铁站交付点",
    gps: "在线",
    status: "待检查"
  },
  {
    id: "car-03",
    plate: "云L C9601",
    template: "远线稳妥出行",
    store: "大理古城交付点",
    gps: "离线",
    status: "维修保养中"
  }
];
```

- [ ] **Step 2: Export scenario helpers**

```js
export const scenarios = {
  riskPass: "/risk/pass",
  riskReject: "/risk/reject",
  noAvailability: "/no-availability",
  refundRules: "/refund-rules"
};
```

- [ ] **Step 3: Build check**

Run: `npm run build`  
Expected: mock data file is imported without syntax errors.

- [ ] **Step 4: Milestone check**

Confirm every route can rely on fixed local data and no async data source is required.

---

### Task 4: Implement Shared Flow Components

**Files:**
- Create: `src/components/vehicle-card.jsx`
- Create: `src/components/timeline.jsx`
- Create: `src/components/entry-gate.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Create vehicle card**

```jsx
import { Link } from "react-router-dom";
import StatusPill from "./status-pill";

export default function VehicleCard({ vehicle, to }) {
  return (
    <Link className="vehicle-card" to={to}>
      <div className="vehicle-card__image" />
      <div className="vehicle-card__body">
        <div className="vehicle-card__head">
          <h3>{vehicle.name}</h3>
          <StatusPill tone="brand">{vehicle.availability}</StatusPill>
        </div>
        <p>{vehicle.summary}</p>
        <div className="vehicle-card__meta">
          <span>{vehicle.seats} 座</span>
          <strong>¥{vehicle.price} / 天起</strong>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Create timeline**

```jsx
export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline__item" key={item}>
          <div className="timeline__dot">{index + 1}</div>
          <div className="timeline__content">{item}</div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create hidden operator entry**

```jsx
import { Link } from "react-router-dom";

export default function EntryGate() {
  return (
    <Link className="entry-gate" to="/operator" title="运营演示入口">
      运营演示
    </Link>
  );
}
```

- [ ] **Step 4: Add matching styles**

```css
.vehicle-card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(20, 50, 79, 0.05);
}

.vehicle-card__image {
  height: 144px;
  background: linear-gradient(135deg, #d9e5f0, #f8fbff);
}

.vehicle-card__body {
  padding: 16px;
}

.timeline__item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.entry-gate {
  position: absolute;
  top: 22px;
  right: 18px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.82);
}
```

- [ ] **Step 5: Build check**

Run: `npm run build`  
Expected: shared demo components render without style or import errors.

- [ ] **Step 6: Milestone check**

Confirm both tourist flow and operator flow now share the same visual language.

---

### Task 5: Implement Tourist Home And Discovery Screens

**Files:**
- Create: `src/pages/home.jsx`
- Create: `src/pages/vehicle-list.jsx`
- Create: `src/pages/vehicle-detail.jsx`
- Modify: `src/app.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement home page**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import EntryGate from "../components/entry-gate";
import { SectionCard } from "../components/section-card";

export default function HomePage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <div className="hero">
        <EntryGate />
        <div className="hero__eyebrow">大理本地深度自驾</div>
        <h1>价格透明，标准交付更省心</h1>
        <p>风控前置、本地路线、在租可控，适合甲方展示的业务样机。</p>
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
        <SectionCard title="演示状态">
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
```

- [ ] **Step 2: Implement vehicle list**

```jsx
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import VehicleCard from "../components/vehicle-card";
import { vehicleCategories } from "../mock/data";

export default function VehicleListPage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="按场景选车" />
      <div className="page-body page-stack">
        {vehicleCategories.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} to={`/vehicle/${vehicle.id}`} />
        ))}
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 3: Implement vehicle detail**

```jsx
import { Link, useParams } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { vehicleCategories } from "../mock/data";

export default function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicleCategories.find((item) => item.id === id) ?? vehicleCategories[1];

  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title={vehicle.name} backTo="/vehicles" />
      <div className="detail-banner" />
      <div className="page-body page-stack">
        <SectionCard title="车型亮点">
          <p>{vehicle.summary}</p>
          <p>适合路线：{vehicle.detailRoute}</p>
          <p>可租日期：4 月 20 日 - 4 月 28 日</p>
        </SectionCard>
        <SectionCard title="费用说明">
          <p>基础日租已含标准交付、基础客服支持与路线建议。</p>
          <p>不含违章、超时、特殊清洁与额外增值项。</p>
        </SectionCard>
        <Link className="primary-button" to="/booking">
          选择该车型并申请
        </Link>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 4: Wire routes**

```jsx
import HomePage from "./pages/home";
import VehicleListPage from "./pages/vehicle-list";
import VehicleDetailPage from "./pages/vehicle-detail";
```

```jsx
<Route path="/" element={<HomePage />} />
<Route path="/vehicles" element={<VehicleListPage />} />
<Route path="/vehicle/:id" element={<VehicleDetailPage />} />
```

- [ ] **Step 5: Add styles for hero and page stacks**

```css
.hero {
  padding: 56px 20px 24px;
  background: linear-gradient(180deg, var(--brand) 0%, #1c4267 100%);
  color: white;
  position: relative;
}

.page-body {
  padding: 18px 16px 0;
}

.page-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.primary-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 14px 18px;
  background: var(--brand);
  color: white;
  font-weight: 700;
}
```

- [ ] **Step 6: Run the tourist-discovery smoke check**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: home, vehicle list, and vehicle detail pages can be navigated manually.

- [ ] **Step 7: Milestone check**

Confirm the first three screens establish the “standard trustworthy” tone and drive the user toward booking.

---

### Task 6: Implement Booking, Identity, Risk, And Payment Flow

**Files:**
- Create: `src/pages/booking-form.jsx`
- Create: `src/pages/identity-submit.jsx`
- Create: `src/pages/risk-result.jsx`
- Create: `src/pages/payment-success.jsx`
- Modify: `src/app.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement booking form**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function BookingFormPage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="提交租车申请" backTo="/vehicles" />
      <div className="page-body page-stack">
        <SectionCard title="用车信息">
          <div className="form-grid">
            <input value="2026-04-20" readOnly />
            <select defaultValue="大理古城交付点"><option>大理古城交付点</option></select>
            <select defaultValue="3 人"><option>3 人</option></select>
            <input value="13800138000" readOnly />
          </div>
        </SectionCard>
        <SectionCard title="增值项">
          <div className="chips">
            <span>儿童座椅</span>
            <span>送车上门</span>
            <span>路线卡增强</span>
          </div>
        </SectionCard>
        <Link className="primary-button" to="/identity">
          提交申请并去实名
        </Link>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 2: Implement identity page**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function IdentitySubmitPage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="实名认证与驾驶证" backTo="/booking" />
      <div className="page-body page-stack">
        <SectionCard title="身份信息">
          <div className="form-grid">
            <input value="张三" readOnly />
            <input value="530102199001011234" readOnly />
          </div>
        </SectionCard>
        <SectionCard title="驾驶证上传">
          <div className="upload-box">已上传驾驶证正页与副页</div>
        </SectionCard>
        <Link className="primary-button" to="/risk/pass">
          提交审核
        </Link>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 3: Implement unified risk result page**

```jsx
import { Link, useLocation } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function RiskResultPage() {
  const location = useLocation();
  const rejected = location.pathname.includes("reject");

  return (
    <PhoneShell>
      <TopBar title="风控审核结果" backTo="/identity" />
      <div className="page-body page-stack">
        <SectionCard title={rejected ? "审核未通过" : "审核通过"}>
          <p>{rejected ? "当前订单暂不支持继续支付，请联系客服协助。" : "风控审核通过，已生成待支付订单。"}</p>
        </SectionCard>
        {rejected ? (
          <Link className="secondary-button" to="/">
            返回首页
          </Link>
        ) : (
          <Link className="primary-button" to="/payment-success">
            去完成支付
          </Link>
        )}
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 4: Implement payment success page**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import StatusPill from "../components/status-pill";
import { demoOrder } from "../mock/data";

export default function PaymentSuccessPage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="支付成功" backTo="/" />
      <div className="page-body page-stack">
        <SectionCard title="订单已确认" extra={<StatusPill tone="safe">{demoOrder.status}</StatusPill>}>
          <p>订单号：{demoOrder.id}</p>
          <p>车型：{demoOrder.vehicleName}</p>
          <p>取车时间：{demoOrder.pickupTime}</p>
          <p>交付门店：{demoOrder.storeName}</p>
          <p>客服将在 10 分钟内联系，并引导进入私域沟通。</p>
        </SectionCard>
        <Link className="primary-button" to="/order">
          查看订单详情
        </Link>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 5: Wire booking routes**

```jsx
import BookingFormPage from "./pages/booking-form";
import IdentitySubmitPage from "./pages/identity-submit";
import RiskResultPage from "./pages/risk-result";
import PaymentSuccessPage from "./pages/payment-success";
```

```jsx
<Route path="/booking" element={<BookingFormPage />} />
<Route path="/identity" element={<IdentitySubmitPage />} />
<Route path="/risk/pass" element={<RiskResultPage />} />
<Route path="/risk/reject" element={<RiskResultPage />} />
<Route path="/payment-success" element={<PaymentSuccessPage />} />
```

- [ ] **Step 6: Add form and state styles**

```css
.form-grid {
  display: grid;
  gap: 12px;
}

.form-grid input,
.form-grid select {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface-muted);
  padding: 14px 12px;
}

.upload-box {
  border: 1px dashed var(--line);
  border-radius: 18px;
  padding: 18px;
  background: #fbfdff;
  color: var(--text-soft);
}
```

- [ ] **Step 7: Manual flow verification**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: booking -> identity -> risk pass -> payment success flow works end-to-end.

- [ ] **Step 8: Milestone check**

Confirm the main tourist transaction flow can be demonstrated without interruptions.

---

### Task 7: Implement Order, Route, And Exception Screens

**Files:**
- Create: `src/pages/order-detail.jsx`
- Create: `src/pages/route-card.jsx`
- Create: `src/pages/no-availability.jsx`
- Create: `src/pages/refund-rules.jsx`
- Modify: `src/app.jsx`

- [ ] **Step 1: Implement order detail**

```jsx
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import Timeline from "../components/timeline";
import { demoOrder } from "../mock/data";

export default function OrderDetailPage() {
  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="订单详情" backTo="/payment-success" />
      <div className="page-body page-stack">
        <SectionCard title="状态进度">
          <Timeline items={demoOrder.timeline} />
        </SectionCard>
        <SectionCard title="费用明细">
          <p>基础日租：¥656</p>
          <p>儿童座椅：¥50</p>
          <p>合计：¥706</p>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 2: Implement route card page**

```jsx
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { routeCards } from "../mock/data";

export default function RouteCardPage() {
  const route = routeCards[0];

  return (
    <PhoneShell footer={<BottomNav />}>
      <TopBar title="路线卡" />
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
```

- [ ] **Step 3: Implement no-availability page**

```jsx
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
```

- [ ] **Step 4: Implement refund rules page**

```jsx
import PhoneShell from "../components/phone-shell";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";

export default function RefundRulesPage() {
  return (
    <PhoneShell>
      <TopBar title="退款规则说明" backTo="/order" />
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
```

- [ ] **Step 5: Wire support routes**

```jsx
import OrderDetailPage from "./pages/order-detail";
import RouteCardPage from "./pages/route-card";
import NoAvailabilityPage from "./pages/no-availability";
import RefundRulesPage from "./pages/refund-rules";
```

```jsx
<Route path="/order" element={<OrderDetailPage />} />
<Route path="/route-card" element={<RouteCardPage />} />
<Route path="/no-availability" element={<NoAvailabilityPage />} />
<Route path="/refund-rules" element={<RefundRulesPage />} />
```

- [ ] **Step 6: Manual exception-state verification**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: all exception routes can be opened and visually explained during a client demo.

- [ ] **Step 7: Milestone check**

Confirm the demo can show both the happy path and the selected edge states.

---

### Task 8: Implement Hidden Operator Demo Flow

**Files:**
- Create: `src/pages/operator/index.jsx`
- Create: `src/pages/operator/store-list.jsx`
- Create: `src/pages/operator/template-list.jsx`
- Create: `src/pages/operator/vehicle-create.jsx`
- Create: `src/pages/operator/doc-upload.jsx`
- Create: `src/pages/operator/gps-bind.jsx`
- Create: `src/pages/operator/publish-status.jsx`
- Create: `src/pages/operator/vehicle-list.jsx`
- Modify: `src/app.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Create operator dashboard**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

export default function OperatorIndexPage() {
  return (
    <PhoneShell>
      <TopBar title="运营演示入口" backTo="/" />
      <div className="page-body page-stack">
        <SectionCard title="运营模块">
          <div className="quick-links operator-grid">
            <Link to="/operator/stores">门店</Link>
            <Link to="/operator/templates">车型模板</Link>
            <Link to="/operator/vehicle-create">录入车辆</Link>
            <Link to="/operator/gps-bind">GPS</Link>
            <Link to="/operator/publish-status">上架</Link>
            <Link to="/operator/vehicles">车辆列表</Link>
          </div>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 2: Create store and template pages**

```jsx
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import { stores } from "../../mock/data";

export default function StoreListPage() {
  return (
    <PhoneShell>
      <TopBar title="门店管理" backTo="/operator" />
      <div className="page-body page-stack">
        {stores.map((store) => (
          <SectionCard key={store.id} title={store.name}>
            <p>联系人：{store.contact}</p>
            <p>营业时间：{store.hours}</p>
            <p>可交付车辆：{store.availableCount} 台</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}
```

```jsx
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import { vehicleCategories } from "../../mock/data";

export default function TemplateListPage() {
  return (
    <PhoneShell>
      <TopBar title="车型模板" backTo="/operator" />
      <div className="page-body page-stack">
        {vehicleCategories.map((item) => (
          <SectionCard key={item.id} title={item.name}>
            <p>适合场景：{item.summary}</p>
            <p>默认日租价：¥{item.price}</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 3: Create concrete vehicle and document pages**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

export default function VehicleCreatePage() {
  return (
    <PhoneShell>
      <TopBar title="录入具体车辆" backTo="/operator" />
      <div className="page-body page-stack">
        <SectionCard title="车辆信息">
          <div className="form-grid">
            <input value="大理古城交付点" readOnly />
            <input value="家庭舒适出行" readOnly />
            <input value="云L A3288" readOnly />
            <input value="LFPH3ACC0M1D00123" readOnly />
            <input value="26800 公里" readOnly />
          </div>
        </SectionCard>
        <Link className="primary-button" to="/operator/doc-upload">
          保存并查看资料上传结果
        </Link>
      </div>
    </PhoneShell>
  );
}
```

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

export default function DocUploadPage() {
  return (
    <PhoneShell>
      <TopBar title="车辆资料结果" backTo="/operator/vehicle-create" />
      <div className="page-body page-stack">
        <SectionCard title="资料已齐备">
          <p>行驶证：已上传</p>
          <p>保险信息：已上传</p>
          <p>车辆实拍：已上传</p>
          <p>划痕记录：已录入</p>
          <p>保养摘要：已录入</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/gps-bind">
          下一步：绑定 GPS
        </Link>
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 4: Create GPS, publish, and list pages**

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

export default function GpsBindPage() {
  return (
    <PhoneShell>
      <TopBar title="GPS 绑定" backTo="/operator/doc-upload" />
      <div className="page-body page-stack">
        <SectionCard title="设备已绑定">
          <p>设备编号：GPS-DL-023</p>
          <p>在线状态：在线</p>
          <p>最近上报：10 秒前</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/publish-status">
          下一步：检查并上架
        </Link>
      </div>
    </PhoneShell>
  );
}
```

```jsx
import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";

export default function PublishStatusPage() {
  return (
    <PhoneShell>
      <TopBar title="车辆上架状态" backTo="/operator/gps-bind" />
      <div className="page-body page-stack">
        <SectionCard title="状态流转" extra={<StatusPill tone="safe">已上架可租</StatusPill>}>
          <p>草稿 → 待检查 → 已上架可租</p>
          <p>该车辆已可分配给订单。</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/vehicles">
          查看车辆列表
        </Link>
      </div>
    </PhoneShell>
  );
}
```

```jsx
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";
import { operatorVehicles } from "../../mock/data";

export default function OperatorVehicleListPage() {
  return (
    <PhoneShell>
      <TopBar title="车辆列表" backTo="/operator" />
      <div className="page-body page-stack">
        {operatorVehicles.map((vehicle) => (
          <SectionCard
            key={vehicle.id}
            title={`${vehicle.template} · ${vehicle.plate}`}
            extra={<StatusPill tone={vehicle.gps === "在线" ? "safe" : "warn"}>{vehicle.gps}</StatusPill>}
          >
            <p>门店：{vehicle.store}</p>
            <p>状态：{vehicle.status}</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}
```

- [ ] **Step 5: Wire operator routes**

```jsx
import OperatorIndexPage from "./pages/operator/index";
import StoreListPage from "./pages/operator/store-list";
import TemplateListPage from "./pages/operator/template-list";
import VehicleCreatePage from "./pages/operator/vehicle-create";
import DocUploadPage from "./pages/operator/doc-upload";
import GpsBindPage from "./pages/operator/gps-bind";
import PublishStatusPage from "./pages/operator/publish-status";
import OperatorVehicleListPage from "./pages/operator/vehicle-list";
```

```jsx
<Route path="/operator" element={<OperatorIndexPage />} />
<Route path="/operator/stores" element={<StoreListPage />} />
<Route path="/operator/templates" element={<TemplateListPage />} />
<Route path="/operator/vehicle-create" element={<VehicleCreatePage />} />
<Route path="/operator/doc-upload" element={<DocUploadPage />} />
<Route path="/operator/gps-bind" element={<GpsBindPage />} />
<Route path="/operator/publish-status" element={<PublishStatusPage />} />
<Route path="/operator/vehicles" element={<OperatorVehicleListPage />} />
```

- [ ] **Step 6: Manual operator-flow verification**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: hidden operator entry opens a coherent merchant flow from stores to published vehicles.

- [ ] **Step 7: Milestone check**

Confirm the demo now covers “can sell” and “can operate” with the same visual system.

---

### Task 9: Polish Demo Quality And Verify Delivery

**Files:**
- Modify: `src/app.jsx`
- Modify: `src/styles.css`
- Modify: affected pages as needed after smoke testing

- [ ] **Step 1: Add route wrapper and title consistency**

```jsx
// Keep page titles and back links aligned with the approved demo script.
// Update any route label mismatch discovered during manual testing.
```

- [ ] **Step 2: Add final CSS polish for spacing and mobile rhythm**

```css
.section-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 10px 28px rgba(20, 50, 79, 0.04);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.status-pill--safe {
  background: rgba(31, 157, 97, 0.12);
  color: var(--safe);
}

.status-pill--warn {
  background: rgba(227, 154, 45, 0.14);
  color: #9d6208;
}

.status-pill--brand {
  background: rgba(22, 50, 79, 0.1);
  color: var(--brand);
}
```

- [ ] **Step 3: Run production build**

Run: `npm run build`  
Expected: a `dist/` bundle is produced without warnings that block demo usage.

- [ ] **Step 4: Run final local preview**

Run: `npm run dev -- --host 127.0.0.1 --port 3000`  
Expected: the full demo script can be walked end-to-end on desktop browser mobile viewport.

- [ ] **Step 5: Manual acceptance checklist**

Verify:
- Home page communicates the “standard trustworthy” proposition
- Happy path can be demonstrated from home to payment success
- Risk rejection can be shown on demand
- No-availability and refund pages can be shown on demand
- Hidden operator entry works
- Store → template → vehicle → doc upload → GPS → publish → vehicle list flow works
- No screen looks visually disconnected from the rest of the app

- [ ] **Step 6: Milestone check**

Confirm the demo is stable enough for client presentation and does not require explanation for broken states.

---

## Self-Review

- Spec coverage: all tourist-flow pages, exception pages, visual direction, hidden operator flow, mock data strategy, and route-based demo behavior are covered by tasks 1-9.
- Placeholder scan: no TODO/TBD placeholders remain in task steps.
- Type consistency: routes, file names, and component names are consistent across the plan.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-14-wechat-mini-program-demo.md`.

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

This repo is currently not a git repository, so implementation should use milestone checkpoints instead of commit-based checkpoints unless you initialize git first.

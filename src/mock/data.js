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

export const scenarios = {
  riskPass: "/risk/pass",
  riskReject: "/risk/reject",
  noAvailability: "/no-availability",
  refundRules: "/refund-rules"
};

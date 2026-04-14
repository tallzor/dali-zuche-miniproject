import { demoOrder } from "../mock/data";

const bookingDefaults = {
  vehicleId: "family-suv",
  vehicleName: demoOrder.vehicleName,
  bookingDate: "2026-04-20",
  pickupStore: demoOrder.storeName,
  partySize: "3 人",
  phone: "13800138000",
  applicantName: "张三",
  idNumber: "530102199001011234",
  orderId: demoOrder.id,
  pickupTime: demoOrder.pickupTime,
  status: demoOrder.status
};

export function readBookingContext(routeState) {
  const booking = routeState?.booking ?? routeState ?? {};

  return {
    ...bookingDefaults,
    ...booking
  };
}

export function makeBookingRouteState(booking) {
  return {
    booking: readBookingContext({ booking })
  };
}

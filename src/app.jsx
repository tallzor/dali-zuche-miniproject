import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import VehicleListPage from "./pages/vehicle-list";
import VehicleDetailPage from "./pages/vehicle-detail";
import BookingFormPage from "./pages/booking-form";
import IdentitySubmitPage from "./pages/identity-submit";
import RiskResultPage from "./pages/risk-result";
import PaymentSuccessPage from "./pages/payment-success";
import OrderDetailPage from "./pages/order-detail";
import RouteCardPage from "./pages/route-card";
import NoAvailabilityPage from "./pages/no-availability";
import RefundRulesPage from "./pages/refund-rules";
import OperatorDashboardPage from "./pages/operator";
import OperatorStoreListPage from "./pages/operator/store-list";
import OperatorTemplateListPage from "./pages/operator/template-list";
import OperatorVehicleCreatePage from "./pages/operator/vehicle-create";
import OperatorDocUploadPage from "./pages/operator/doc-upload";
import OperatorGpsBindPage from "./pages/operator/gps-bind";
import OperatorPublishStatusPage from "./pages/operator/publish-status";
import OperatorVehicleListPage from "./pages/operator/vehicle-list";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vehicles" element={<VehicleListPage />} />
      <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
      <Route path="/booking" element={<BookingFormPage />} />
      <Route path="/identity" element={<IdentitySubmitPage />} />
      <Route path="/risk/pass" element={<RiskResultPage />} />
      <Route path="/risk/reject" element={<RiskResultPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/order" element={<OrderDetailPage />} />
      <Route path="/route-card" element={<RouteCardPage />} />
      <Route path="/no-availability" element={<NoAvailabilityPage />} />
      <Route path="/refund-rules" element={<RefundRulesPage />} />
      <Route path="/operator" element={<OperatorDashboardPage />} />
      <Route path="/operator/stores" element={<OperatorStoreListPage />} />
      <Route path="/operator/templates" element={<OperatorTemplateListPage />} />
      <Route path="/operator/vehicle-create" element={<OperatorVehicleCreatePage />} />
      <Route path="/operator/doc-upload" element={<OperatorDocUploadPage />} />
      <Route path="/operator/gps-bind" element={<OperatorGpsBindPage />} />
      <Route path="/operator/publish-status" element={<OperatorPublishStatusPage />} />
      <Route path="/operator/vehicles" element={<OperatorVehicleListPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

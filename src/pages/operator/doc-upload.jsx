import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

const materials = ["行驶证", "车辆照片", "交付协议", "保险单"];

export default function OperatorDocUploadPage() {
  return (
    <PhoneShell>
      <TopBar title="资料上传" backTo="/operator/vehicle-create" />
      <div className="page-body page-stack">
        <SectionCard title="已上传材料">
          <div className="chips">
            {materials.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="结果提示">
          <p>材料校验通过，可继续绑定 GPS 设备并完成上架前检查。</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/gps-bind">
          去绑定 GPS
        </Link>
      </div>
    </PhoneShell>
  );
}

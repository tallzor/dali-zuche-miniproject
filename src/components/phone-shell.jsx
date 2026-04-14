export default function PhoneShell({ children, footer = null }) {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="phone-screen">{children}</div>
        {footer ? <div className="phone-footer">{footer}</div> : null}
      </div>
    </div>
  );
}

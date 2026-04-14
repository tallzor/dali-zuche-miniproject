import { Link, matchPath, useLocation } from "react-router-dom";

function matchesPath(pathname, item) {
  const patterns = item.matchPatterns?.length ? item.matchPatterns : [item.to];

  return patterns.some((pattern) => matchPath({ path: pattern, end: pattern === "/" }, pathname));
}

export default function BottomNav({ items = [], pathname }) {
  const location = useLocation();
  const currentPath = pathname ?? location.pathname;

  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Link
          key={item.to}
          className={matchesPath(currentPath, item) ? "bottom-nav__item is-active" : "bottom-nav__item"}
          to={item.to}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

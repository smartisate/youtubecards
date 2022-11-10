import Link from "next/link";
const LeftSidebarButton = ({ title, expanded }) => {
  return (
    <div className="leftSidebarButton">
      <a href="">
        <div
          className={`bi bi-house-door-fill  ${
            expanded ? "ycSidebarBtnIconExpanded" : "ycSidebarBtnIconCompressed"
          } `}
        ></div>
        <div
          className={`  ${
            expanded ? "ycSidebarBtnTextExpanded" : "ycSidebarBtnTextCompressed"
          }`}
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export default LeftSidebarButton;

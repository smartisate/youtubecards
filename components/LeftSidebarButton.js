import Link from "next/link";
const LeftSidebarButton = ({ title, expanded }) => {
  return (
    <a href="">
      <div className="leftSidebarButton">
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
      </div>
    </a>
  );
};

export default LeftSidebarButton;

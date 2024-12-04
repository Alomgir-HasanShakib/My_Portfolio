import React from "react";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes, download }) => {
  if (href) {
    return (
      <a href={href} download target={target} className={`btn btn-primary + ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" area-hidded="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary + ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" area-hidded="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline + ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" area-hidded="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline + ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" area-hidded="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
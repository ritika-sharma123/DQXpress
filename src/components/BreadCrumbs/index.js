import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const Breadcrumbs = ({ data }) => {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter((x) => x !== "");

  const isCurrentPath = (path) =>
    pathArr
      .map((i) => {
        return `/${i}`;
      })
      .includes(path);

  return (
    <div className="breadcrumbs-title">
      {data.map((i, index) => {
        return (
          <div>
            <Link
              className={`breadcrumbs-link ${
                isCurrentPath(i.path) ? "active" : ""
              }`}
              to={i.path}
            >
              {index === 0 ? (
                <span>{i.text}</span>
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: `/&nbsp;&nbsp;${i.text}`,
                  }}
                ></span>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

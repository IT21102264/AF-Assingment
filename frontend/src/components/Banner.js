import { Link } from "react-router-dom";
import React from "react";
import { UseUserContext } from "../context/useUserContext";

export function ActionBanner() {
  const { dispatch } = UseUserContext();

  return (
    <section id="action" className="container">
      <h4>Seller Corner</h4>
      <h2>
        Join with us <span>Create your store in 3 steps</span>
      </h2>
      <h2>
        Create Seller Account {">>"} Upload Your Products {">>"} Start Selling
      </h2>
      <Link
        to="/register"
        onClick={(e) =>
          dispatch({
            type: "SetUserRole",
            userRole: "Merchant",
          })
        }
      >
        <button>Become a Seller</button>
      </Link>
    </section>
  );
}


export function MiniBanner() {
  return (
    <section id="mn-banner" className="section-p1">
      <div className="banner-box">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
      <div className="banner-box banner-box2">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
      <div className="banner-box banner-box3">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
    </section>
  );
}

export function SmallBanner() {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>Heading</h4>
        <h2>Sub Heading</h2>
        <span>description</span>
        <button>Click here</button>
      </div>
      <div className="banner-box banner-box2">
        <h4>Heading</h4>
        <h2>Sub Heading</h2>
        <span>description</span>
        <button>Click here</button>
      </div>
    </section>
  );
}

export function PageHeader() {
  return (
    <section id="page-header">
      <h2>#made_in_SriLanka</h2>
    </section>
  )
}

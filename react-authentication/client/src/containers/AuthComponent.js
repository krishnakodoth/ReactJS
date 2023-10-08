
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthComponent() {
  return (
      <>
    <div>
      <h1 className="text-center">Auth Component</h1>
    </div>
    <Outlet />
    </>
  );
}
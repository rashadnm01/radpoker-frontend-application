import React from "react";

export default function Header() {
  return (
    <div className="nav">
      <a id="radpoker-header" href="/">
        RadPoker Admin
      </a>
      <a href="/customers">Customers</a>
      <a href="/contests">Contests</a>
    </div>
  );
}

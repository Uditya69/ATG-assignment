import React from "react";

function QuickLinks() {
  return (
    <div className="flex flex-col gap-3">
      <p className=" text-gray-900 font-semibold text-lg">Quick Links</p>
      <div className=" flex flex-col justify-between gap-1 text-gray-500">
        <p>Listings</p>
        <p>Blog Posts</p>
        <p>Shop/Store</p>
        <p>Community</p>
      </div>
    </div>
  );
}

export default QuickLinks;

import React, { useState, useEffect } from "react";
import { requestAd } from "./request";

export default function Ad() {
  const [data, setData] = useState(null);
  useEffect(() => {
    requestAd(setData);
  }, []);

  if (!data) return null;

  return <div>{data.ad.desc}</div>;
}

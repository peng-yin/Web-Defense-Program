import React, { useState, useEffect } from "react";

import request from "./request";

export default function Detail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const abort = request(
      "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312",
      {},
      setData
    );
    return () => {
      abort();
    };
  }, []);

  if (!data) return null;

  return <div>{data.title}</div>;
}

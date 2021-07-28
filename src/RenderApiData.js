import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function RenderApiData() {
  const { data, error } = useSWR("https://reqres.in/api/users", fetcher);

  if (!data) return <div>Record not found</div>;

  return (
    <div>
      <h1>Rendered Record</h1>
      <pre>{JSON.stringify(data?.data, undefined, 2)}</pre>
    </div>
  );
}

export default RenderApiData;

import { NextResponse } from "next/server";
export default function MarketData(props) {
  return (
      <></>
  )
}

export async function getServerSideProps({ req, res, resolvedUrl }) {
  res.setHeader("Content-Type", "application/json");
  res.write('{\"market\": "11", "prices":22}');
  res.end();
  return {
      props: {},
  }
}

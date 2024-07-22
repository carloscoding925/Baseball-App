import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "Landing Page", content: "Landing Page" },
  ];
};

export default function Index() {
  return (
    <div className="">

    </div>
  );
}

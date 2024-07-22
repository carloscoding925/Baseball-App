import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-800">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="">
      <div className="pt-5 pl-5 pr-5">
        <div className="w-full h-[20vh]">
          <div className="flex flex-row justify-end">
            <div className="text-xl text-white font-bold">
              BasePros Team Manager
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

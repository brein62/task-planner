import { ReactNode } from "react";

export default function PageContainer({ title, children } : { title : ReactNode, children: ReactNode }) {
  return (
    <div className="container px-4 py-6 mx-auto">
      <h2 className="text-center text-4xl font-semibold mb-4">{ title }</h2>
      { children }
    </div>
  )
}
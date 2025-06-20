import SwaggerUIWrapper from "@/components/SwaggerUIWrapper";

export default function ApiDocsPage() {
  return (
    <div className="p-4">
      <SwaggerUIWrapper specUrl="/swagger.json" />
    </div>
  );
}

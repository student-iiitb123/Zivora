import RecommendedCard from "./RecommendedCard";

const recommendations = [
  {
    id: 1,
    name: "Minimalist Loafers",
    price: "$650",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZuAHEP6b2D1XawYsfC5IvYr7idlnPcuEMdpa9q3A9duRSeHFpk0QQJ84kgxSiUIJOMZEpJEijdHndJP3JqymkrPq7C3b7HvDn0ov2eluHNASF9JCipi_vuAHYryI8fq7nKabUAqqgv8xrVn6kqMQBwxUzew4ASuxmKuWZ1lFw1frPZYL-3iGBGyqWTjLqYGeYQuEn-j8KIyuE5x7eDQjUenAPUKCQXFjWU_BFBfgmu-rduAcK85OYENCuXB58EuK8lo5Hw-GS",
  },
];

function RecommendedSection() {
  return (
    <section className="mt-20">
      <div className="px-5 flex justify-between mb-8">
        <h4 className="text-2xl font-semibold">
          AI Curated For You
        </h4>
      </div>

      <div className="flex gap-6 overflow-x-auto px-5 pb-8">
        {recommendations.map((item) => (
          <RecommendedCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedSection;
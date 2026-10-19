export default function StatCard({ value, label }) {
  return (
    <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
      <p className="text-4xl font-bold text-[#5C766D]">{value}</p>
      <p className="mt-1 text-lg">{label}</p>
    </div>
  );
}
export default function Section({ title, description, command }) {
  return (
    <section className="border-t border-[#C9996B] py-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-1 text-xl">{description}</p>
      <code className="mt-3 block rounded-lg bg-[#5C766D] px-6 py-2 font-mono text-xl text-[#EDE9E6]">
        {command}
      </code>
    </section>
  );
}
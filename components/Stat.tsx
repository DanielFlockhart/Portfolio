export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-h-32 min-w-0 border-t-2 border-black bg-white p-4 first:border-t-0 sm:border-l-2 sm:border-t-0 sm:first:border-l-0">
      <p className="text-3xl font-black uppercase leading-none text-black">{value}</p>
      <p className="mt-3 text-xs font-bold uppercase leading-5 text-neutral-700">{label}</p>
    </div>
  );
}

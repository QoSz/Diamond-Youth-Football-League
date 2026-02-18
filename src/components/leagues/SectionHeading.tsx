export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-8">
      <div className="w-8 h-0.5 bg-[#FF4500] mx-auto mb-3 rounded-full" />
      <h2 className="text-2xl font-bold tracking-tight text-gray-800">{children}</h2>
    </div>
  );
}

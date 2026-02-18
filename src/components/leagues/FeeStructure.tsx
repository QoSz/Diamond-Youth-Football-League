import SectionHeading from './SectionHeading';

export default function FeeStructure() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading>Fee Structure</SectionHeading>
      <div className="overflow-x-auto mb-6">
        <table className="w-full min-w-[560px] md:min-w-0 divide-y divide-[#FF4500]/40">
          <thead>
            <tr className="border-b-2 border-[#FF4500]/30">
              <th className="px-3 py-4 text-xs md:text-sm lg:text-base font-bold tracking-wide text-[#FF4500] text-left">Age Group</th>
              <th className="px-3 py-4 text-xs md:text-sm lg:text-base font-bold tracking-wide text-[#FF4500] text-center">Total Fee</th>
              <th className="px-3 py-4 text-xs md:text-sm lg:text-base font-bold tracking-wide text-[#FF4500] text-center">Payment Upon Registration</th>
              <th className="px-3 py-4 text-xs md:text-sm lg:text-base font-bold tracking-wide text-[#FF4500] text-center">Balance Due (by 15th Feb)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FF4500]/20">
            {[
              { group: 'Under 12', total: 'KES 19,000', deposit: 'KES 9,500', balance: 'KES 9,500' },
              { group: 'Under 14', total: 'KES 19,000', deposit: 'KES 9,500', balance: 'KES 9,500' },
              { group: 'Under 16', total: 'KES 28,000', deposit: 'KES 14,000', balance: 'KES 14,000' }
            ].map((row, i) => (
              <tr key={row.group} className={`hover:bg-orange-50/60 transition-colors ${i % 2 === 0 ? '' : 'bg-orange-50/30'}`}>
                <td className="px-2 md:px-3 py-3 font-bold text-gray-800 text-xs md:text-sm lg:text-base">{row.group}</td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">{row.total}</td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">{row.deposit}</td>
                <td className="px-2 py-3 md:px-4 text-gray-700 text-xs md:text-sm lg:text-base text-center">{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem]">
          <ul className="space-y-2 text-sm md:text-base text-gray-800 list-disc list-inside">
            <li>Fees are non-refundable.</li>
            <li>Failure to meet payment deadlines results in a 3-0 walkover.</li>
            <li>League slots are allocated on a first-come, first-served basis.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

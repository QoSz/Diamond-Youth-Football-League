import SectionHeading from './SectionHeading';

export default function SeasonCalendar() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        <SectionHeading>Season Calendar</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              season: 'Season 1',
              date: '18th January – 29th March',
              registration: {
                link: 'https://docs.google.com/forms/d/1i99pSOGnsrY9V3U4Q4sOc-b4cd4r1U1vu1xEaAkJeNs/edit',
                closes: 'January 11th'
              }
            },
            {
              season: 'Season 2',
              date: '26th April – 5th July (Tentative)'
            },
            {
              season: 'Season 3',
              date: '20th September – 6th December (Tentative)'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 rounded-[1.618rem] p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold tracking-tight mb-4 text-[#FF4500]">{item.season}</h3>
              <p className="text-green-50/90 text-lg mb-3">{item.date}</p>
              {'registration' in item && item.registration && (
                <div className="text-left mt-4 space-y-1 text-sm text-green-50/80 pl-2">
                  <p>
                    Registration Open:{' '}
                    <a
                      href={item.registration.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF4500] underline hover:text-orange-400"
                    >
                      DYFL Season Registration Form
                    </a>
                  </p>
                  <p>Registration Closes: {item.registration.closes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

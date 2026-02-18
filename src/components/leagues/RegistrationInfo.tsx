import SectionHeading from './SectionHeading';

export default function RegistrationInfo() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading>Team and Player Registration</SectionHeading>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem] space-y-4">
          <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
            <li>Registration is only guaranteed once a deposit has been made.</li>
            <li>Players with existing approved cards are ready to play.</li>
          </ul>
          <div>
            <p className="text-gray-800 text-sm md:text-base font-semibold mb-2">New players must:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-800 pl-2">
              <li>
                Complete the new player registration form —{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSePRjWICrOxUG4S7KPl_1a3wVfc_rXbNVNfUS0DoHSyxCGn-A/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4500] underline hover:text-orange-400"
                >
                  DYFL Player Registration Form
                </a>
              </li>
              <li>Complete a new league card</li>
              <li>Receive approval by the league coordinator</li>
            </ol>
          </div>
          <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
            <li>Proof of age is mandatory for all players.</li>
            <li>
              All documents must be verified before players are given player cards. Officials in
              charge of verification have the right to deny participation until further
              documentation is provided.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Shield, Clock, Calendar, AlertTriangle, FileWarning, Shirt, CloudRain } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionHeading from './SectionHeading';

export default function LeaguesPolicyTabs() {
  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading>Rules &amp; Policies</SectionHeading>
      <Tabs defaultValue="rules" className="max-w-4xl mx-auto">
        <TabsList className="bg-[#FFE7C9] rounded-[1.618rem] p-1 w-full flex flex-wrap gap-1 h-auto mb-2">
          <TabsTrigger
            value="rules"
            className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[1.25rem] flex-1 text-sm font-medium text-gray-700 transition-all"
          >
            Rules
          </TabsTrigger>
          <TabsTrigger
            value="disciplinary"
            className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[1.25rem] flex-1 text-sm font-medium text-gray-700 transition-all"
          >
            Disciplinary
          </TabsTrigger>
          <TabsTrigger
            value="safeguarding"
            className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[1.25rem] flex-1 text-sm font-medium text-gray-700 transition-all"
          >
            Safeguarding
          </TabsTrigger>
          <TabsTrigger
            value="conduct"
            className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[1.25rem] flex-1 text-sm font-medium text-gray-700 transition-all"
          >
            Conduct
          </TabsTrigger>
          <TabsTrigger
            value="disclaimer"
            className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[1.25rem] flex-1 text-sm font-medium text-gray-700 transition-all"
          >
            Disclaimer
          </TabsTrigger>
        </TabsList>

        {/* Rules Tab */}
        <TabsContent value="rules">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {[
              {
                icon: Shield,
                title: 'Registration',
                text: 'No valid player card = cannot play. All players must be registered before taking part in any match.'
              },
              {
                icon: Clock,
                title: 'Kick-off',
                text: 'Teams must be vetted and team sheets submitted 15 minutes before kick-off. Late teams forfeit 3-0. Late players do not play.'
              },
              {
                icon: Calendar,
                title: 'Rescheduling',
                text: 'Request 14 days in advance or forfeit 3-0.'
              },
              {
                icon: AlertTriangle,
                title: 'Red Card',
                text: 'A red card carries a 1-match ban. Use of false documents results in a 6-point deduction.'
              },
              {
                icon: FileWarning,
                title: 'General Play',
                text: 'No back passes to the goalkeeper. FIFA rules apply unless stated otherwise.'
              },
              {
                icon: Shirt,
                title: 'Kits',
                text: 'Matching kits required (except goalkeepers).'
              },
              {
                icon: CloudRain,
                title: 'Weather Cancellations',
                text: 'Communicated in advance where possible, otherwise closer to match time.',
                wide: true
              }
            ].map((rule, index) => (
              <div
                key={index}
                className={`bg-white border border-orange-100 rounded-[1.618rem] shadow-sm p-6 flex gap-4 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300${rule.wide ? ' md:col-span-2' : ''}`}
              >
                <rule.icon className="h-6 w-6 text-[#FF4500] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-800 mb-1 text-sm md:text-base">{rule.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Disciplinary Tab */}
        <TabsContent value="disciplinary">
          <div className="pt-4">
            <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem]">
              <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
                <li>
                  Use of false documents: <span className="font-semibold">−6 points</span>
                </li>
                <li>
                  Second offence: <span className="font-semibold">Team removed from the league</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Safeguarding Tab */}
        <TabsContent value="safeguarding">
          <div className="space-y-4 pt-4">
            <div className="bg-white border border-orange-100 rounded-[1.618rem] shadow-sm p-6">
              <p className="text-gray-800 text-sm md:text-base mb-4">
                To protect fairness, player welfare, and league integrity, DYFL has a clear
                age-review process.
              </p>
              <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
                <li>Any participant may raise age concerns through their team coach.</li>
                <li>Coaches submit their case to the league coordinator.</li>
                <li>All reports are handled <span className="font-semibold">confidentially, fairly, and professionally</span>.</li>
              </ul>
            </div>
            <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem]">
              <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
                <li>Reporting does not imply guilt.</li>
                <li>Additional documents may be requested.</li>
                <li>Confirmed violations lead to disciplinary action per league rules.</li>
              </ul>
              <p className="text-gray-600 text-sm md:text-base mt-4 italic">
                This ensures trust, fairness, and a positive developmental environment for all players.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Conduct Tab */}
        <TabsContent value="conduct">
          <div className="pt-4">
            <p className="text-gray-600 text-sm md:text-base mb-6">
              DYFL is committed to a safe, positive, and development-focused environment. Coaches and
              spectators must help shape respectful behaviour and protect player wellbeing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                'Put player welfare first — safety, enjoyment, and development over results.',
                'Promote safe, fair play — no aggression, intimidation, or "win at all costs" mentality.',
                'Respect officials and league staff — referee decisions are final.',
                'Support positively — encourage effort, teamwork, and respect for opponents.',
                'Maintain proper touchline behaviour — stay in designated areas.',
                'Zero tolerance for abuse — no harassment, discrimination, or threats.'
              ].map((principle, index) => (
                <div
                  key={index}
                  className="bg-[#FFE7C9] rounded-[1.618rem] p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-gray-800 text-sm md:text-base">{principle}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem]">
              <h3 className="text-base font-semibold tracking-tight text-gray-800 mb-2">Disciplinary Action</h3>
              <p className="text-gray-800 text-sm md:text-base">
                DYFL may issue warnings, remove individuals, or apply touchline bans, suspensions,
                or team sanctions for serious or repeated breaches.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Disclaimer Tab */}
        <TabsContent value="disclaimer">
          <div className="space-y-4 pt-4">
            <p className="text-gray-600 text-sm md:text-base">
              By participating in the Diamond Youth Football League, teams, coaches, and
              representatives agree to the following:
            </p>
            <div className="bg-white border border-orange-100 rounded-[1.618rem] shadow-sm p-6 space-y-4 text-sm md:text-base text-gray-700">
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">1. Assumption of Risk</h3>
                <p>
                  Football involves physical risks. The league is not liable for injuries or damages.
                  In the event of serious injury, parents/guardians are responsible for further
                  medical care beyond first aid.
                </p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">2. Team Eligibility</h3>
                <p>
                  Teams must comply with league rules. Non-compliance may lead to forfeiture or
                  removal (without refund).
                </p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">3. Code of Conduct</h3>
                <p>
                  Participants must show good sportsmanship and respect officials both on and off
                  the field.
                </p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">4. Media Release</h3>
                <p>Photos and videos may be used for promotional purposes.</p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">5. Weather &amp; Cancellations</h3>
                <p>
                  The league may modify schedules due to weather or unforeseen circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-gray-800 mb-1">6. Player Welfare</h3>
                <p>
                  Any behaviour endangering player welfare (violent conduct, intimidation, deliberate
                  injury) may result in immediate disciplinary action, including match forfeits or
                  league removal.
                </p>
              </div>
            </div>
            <div className="bg-[#FFE7C9] p-6 rounded-[1.618rem] text-center">
              <p className="text-gray-800 text-sm md:text-base">
                All official league communication will be shared via the designated league WhatsApp
                group. For further details, feel free to contact us. Let&apos;s make this a great season!
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

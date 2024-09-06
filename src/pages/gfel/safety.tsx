import { Link } from "@/components/Link"

const SafetyPage = () => {
  return (
    <div className="container max-w-screen-lg pt-8">
      <Link href="/gfel/" className="my-8 block">
        {"<"} Back to GFEL
      </Link>
      <ul className="list-disc ps-6 pb-2 [&>li]:pb-2">
        <li>Why doesn't this have list styling?</li>
      </ul>
      <h1 className="md:mt-16 text-4xl">Safety and Code of Conduct</h1>

      <h2 className="mb-6 text-3xl mt-8" id="safety-best-practices">
        Safety Best Practices
      </h2>
      <p>
        Attendee safety and wellbeing is our top priority. The Forum on Ethereum
        Localism aims to cultivate a space where all feel safe to be themselves
        and lend their unique perspective. In this spirit, we ask that all
        participants keep the following guidelines in mind:
      </p>

      <h3 className="mt-4 mb-2 text-2xl" id="lost-or-stolen-items">
        Personal Belongings
      </h3>
      <ul className="list-disc ps-6 pb-2 [&>li]:pb-2">
        <li>
          Always be mindful of your personal belongings and aware of your
          surroundings.
        </li>
        <li>
          Ethereal Forest assumes no responsibility for lost, stolen, or damaged
          items. We encourage you to treat all personal and shared items with
          care. The venue will only be accessible during scheduled event hours,
          so please plan accordingly.
        </li>
      </ul>

      <h3 className="mt-4 mb-2 text-2xl" id="personal-safety">
        Personal Safety
      </h3>
      <ul className="list-disc ps-6 pb-2 [&>li]:pb-2">
        <li>
          While the surrounding neighborhood is generally safe, it's always a
          good idea to walk in groups of two or more. Event volunteers are
          always happy to walk with you to your transportation or the next
          event--just let us know.
        </li>
        {/* <li>
          If you feel unsafe at any time you may return to the warehouse during
          event hours, or move east towards Martin Luther King Jr. Blvd. (the
          nearest busy street, three blocks from Bridgespace).
        </li> */}
        <li>
          Being familiar with general de-escalation techniques and
          trauma-informed responses is encouraged (speaking slowly and calmly to
          an agitated person, reflecting their language to demonstrate
          understanding of their point of view, and avoiding physically
          aggressive body postures).
          <p>
            We believe that in most cases, we can all fill our shared needs for
            safety without involvement of the police, and it is also important
            to note that police response times can be delayed. For many reasons,
            it is best to deal with most situations by deescalating if possible
            and moving to a safe place.
          </p>
        </li>
      </ul>

      {/* <h3 className="mt-4 mb-2 text-2xl" id="venue">
        Venue
      </h3>
      <p>
        <a href="https://opencollective.com/bridgespacecommonspdx">
          Bridgespace Commons
        </a>{" "}
        is an industrial warehouse and community space in inner eastside
        Portland. Its operations are split between two parties: Bridgespace LLC,
        an affiliate of Seller Engine which owns the property and runs business
        out of the basement, and Bridgespace Commons, a collectively run
        community org which manages events and equitable use of the upstairs
        area.
      </p>
      <p>
        Note: The basement of the warehouse is a daily operational business.
        While our event and associated activity and noise is expected, we still
        ask that you please be mindful of those working downstairs during
        daytime hours.{" "}
        <em>
          Under no circumstances should attendees go downstairs without first
          speaking to an organizer.
        </em>
      </p> */}

      <h3 className="mt-4 mb-2 text-2xl" id="event-contacts">
        Event Contacts
      </h3>
      <p>
        The best way to stay connected generally is through the Telegram group
        chat, so be sure to{" "}
        <Link href="https://t.me/+3XVnc4PfzRsxMDEx">join the Telegram</Link>
      </p>

      <h3 className="mt-4 mb-2 text-2xl" id="covid-19-precautions">
        COVID-19 Precautions
      </h3>
      <ul className="list-disc ps-6 pb-2 [&>li]:pb-2">
        <li>
          We're following Federal guidelines for COVID, which are currently
          'business as usual,' so please take the precautions that best suit
          your personal risk level.
        </li>
        <li>
          We'll keep airflow as open as possible to help keep conditions safe,
          and will let folks know if weather or other conditions mean open
          airflow is less accessible.
        </li>
        <li>Use of masks inside is not required.</li>
        <li>
          Being up-to-date on your Covid-19 vaccine and boosters is encouraged
          but not required.
        </li>
      </ul>

      <h2 className="mb-6 text-3xl mt-8" id="code-of-conduct">
        Code of Conduct
      </h2>
      <p>
        We value the participation of each member of the community and want all
        attendees to have an enjoyable and fulfilling experience. Accordingly,
        all attendees are expected to show respect and courtesy to one another
        throughout the event.
      </p>
      <p>
        To make clear what is expected, all attendees and speakers at GFEL 2024
        are required to abide by this Code of Conduct.{" "}
        <em>
          The Code of Conduct will be enforced throughout the event without
          exception.
        </em>
      </p>
      <ol className="list-decimal ps-6 pb-2 [&>li]:pb-2">
        <li>
          GFEL is a community gathering intended for collaboration and exchange
          of ideas. All attendees will abide by a code of active and continual
          consent in all affairs.
        </li>
        <li>
          Attendees will refrain from harassment of any kind. Harassment
          includes but is not limited to offensive verbal comments, or other
          offensive activity, in person or online in the context of the
          conference related to gender, sexual orientation, physical or mental
          ability, age, socioeconomic status, ethnicity, physical appearance,
          race, religion, sexual images, deliberate intimidation, stalking,
          inappropriate physical contact, and unwelcome sexual attention.
        </li>
        <li>
          Participants asked to stop any harassing behavior are expected to
          comply immediately. If participants fail to comply they will be asked
          to leave the event.
        </li>
        <li>
          Be careful and mindful of the words that you choose. Please be aware
          that sexist, racist, and other exclusionary comments can be offensive
          to those around you and will not be tolerated at GFEL.
        </li>
        <li>
          If a participant engages in behavior that violates this Code of
          Conduct, the Organizers may take any action they deem appropriate,
          including expulsion from current or future Ethereal Forest activities.
        </li>
      </ol>
      <Link href="/gfel/" className="my-8 block">
        {"<"} Back to GFEL
      </Link>
    </div>
  )
}

export default SafetyPage

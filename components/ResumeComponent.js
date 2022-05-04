const MyResume = () => {
  const tsiicInternship = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName: 'Summer Intern, TSIIC',
    location: 'Hyderabad',
  })
  const jpMorganInternship = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName: 'Software Engineering Intern',
    location: 'Hyderabad',
  })
  return <Main />
}

const Main = () => {
  return (
    <div className="center">
      <Title />
      <SectionBreak />
      <hr />
      <div className="row pad-left-right">
        <div className="section">
          <h2 className="section-title">Work Experience</h2>
        </div>
      </div>
      <GrowwFTEExperience />
      <GrowwInternExperience />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <OtherInternships />
      <hr />

      <DownloadButton />
    </div>
  )
}

const Title = () => {
  return (
    <div className="title text-center">
      <h1>Pruthvi Duvva</h1>
      <h3>Android Engineer</h3>
      <SectionBreak />
      <div className="row">
        <div className="col-md-12 col-sm-12 text-center">
          <h4>
            <a href="http://www.github.com">Github </a>•
            <a href="http://www.linkedin.com"> Linkedin </a>•
            <a href="http://www.example.com"> Personal Site</a>
          </h4>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="row pad-left-right">
      <div className=" col-md-3 col-sm-3">
        <div className="section-title">Skills</div>
      </div>
      <div className="col-md-9 col-sm-9">
        <p>
          <u>App development skills</u>: Android app development, API contract, User Interface,
          Design principles
        </p>
        <p>
          <u>Language & Frameworks</u>: Kotlin, Java, XML
        </p>
        <p>
          <u>Databases</u>: Room, Shared Preferences
        </p>
        <p>
          <u>Others</u>: Agile process, Release train, Coda
        </p>
      </div>
    </div>
  )
}

const Section = ({ timeline, name, location }) => {
  return (
    <div className="row entry">
      <div className="col-md-3 date">
        <h3>{timeline}</h3>
      </div>
      <div className="col-md-7 name">
        <h3>{name}</h3>
      </div>
      <div className="col-md-2 location box">
        <h3>{location}, India</h3>
      </div>
    </div>
  )
}

const WorkSection = ({ timeline, designation, location }) => {
  return (
    <div className="row entry">
      <div className="col-md-3 date">
        <h3>{timeline}</h3>
      </div>
      <div className="col-md-7 designation">
        <h3>{designation}</h3>
      </div>
      <div className="col-md-2 location box">
        <h3>{location}, India</h3>
      </div>
    </div>
  )
}

const Education = () => {
  const education = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName:
      'Bachelor of Engineering, Computer Science, Birla Institute of Technology and Science',
    location: 'Goa',
  })
  return (
    <div className="row pad-left-right">
      <div className="section">
        <h2 className="section-title">Education</h2>
        <Section
          timeline={education.timeline}
          name={education.sectionName}
          location={education.location}
        />
      </div>
    </div>
  )
}

const OtherInternships = () => {
  const tsiic = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName: 'Summer Intern, TSIIC',
    location: 'Hyderabad',
  })
  const jpMorgan = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName: 'Software Engineering Intern',
    location: 'Hyderabad',
  })
  return (
    <div className="row pad-left-right">
      <div className="section">
        <div className="section-title">Other internships</div>

        <Section timeline={tsiic.timeline} name={tsiic.sectionName} location={tsiic.location} />
        <Section
          timeline={jpMorgan.timeline}
          name={jpMorgan.sectionName}
          location={jpMorgan.location}
        />
      </div>
    </div>
  )
}

const GrowwFTEExperience = () => {
  const growwFte = new SectionItem({
    timeline: 'June 2020 - Present',
    sectionName: 'Android Engineer, Groww',
    location: 'Bengaluru',
  })
  return (
    <div className="pad-left-right">
      <WorkSection
        timeline={growwFte.timeline}
        designation={growwFte.sectionName}
        location={growwFte.location}
      />
      <SectionBreak />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <ul className="outside">
            <li>
              {' '}
              Worked with more than 5 product managers across 2 teams and have been release manager
              4 times. (10M+ userbase, 4.5-star rating)
            </li>
            <li>
              Proposed and implemented features like feature search and feedback CTA which now has
              nearly 1.2M clicks/month.
            </li>
            <li>Restructured search architecture and reduced LiveData usage by 10x.</li>
            <li>
              Reduced page load time by 60% (~4.79 to ~1.96) by developing hybrid two-layer caching
              logic (Disk + memory LRU caching) of both assets & file caching for low network bands
              (2G, 3G).
            </li>
            <li>Migrated the Help and Support section to WebView.</li>
            <li>
              Implemented features like root and overlay detection, more products, and upgraded
              deprecated fingerprint library to biometric library.
            </li>
            <li>
              Conducted several A/B experiments using Firebase with a custom audience. With one
              variant outperforming others by 4% with 99% confidence.{' '}
            </li>
            <li>
              Drafted multiple API contracts and reduced network traffic by 5x in one use case.
            </li>
            <li>
              Developed and owned more than 6 screens for eg: Systematic Investment Plan(SIP)
              journey (SIP details, Edit SIP, SIP landing) and gold front screens (explore,
              dashboard, product page) in the android app.
            </li>
            <li>
              Added logic for handling corner cases for line charts like upper circuit, lower
              circuit, and missing data points.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const GrowwInternExperience = () => {
  const growwIntern = new SectionItem({
    timeline: 'Jan 2020 - June 2020',
    sectionName: 'Android Engineering Intern, Groww',
    location: 'Bengaluru',
  })

  return (
    <div className="pad-left-right">
      <WorkSection
        timeline={growwIntern.timeline}
        designation={growwIntern.sectionName}
        location={growwIntern.location}
      />
      <SectionBreak />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <ul className="outside">
            <li>Was among the initial 4 native developers.</li>
            <li>
              Responsible for migrating codebase from react native developers for more than 3
              use-cases (e.g. Search, Stock & MF order details, My orders) for performance
              enhancement.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const SectionBreak = () => {
  return <div className="section-break" />
}

const DownloadButton = () => {
  return (
    <>
      <div className="col-md-5" />
      <div className="col-md-2">
        <button
          className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0`}
          type="submit"
        >
          <a href="/static/doc/resume.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
        </button>
      </div>
      <div className="col-md-7" />
    </>
  )
}

class SectionItem {
  constructor({ timeline, sectionName, location }) {
    this.timeline = timeline
    this.sectionName = sectionName
    this.location = location
  }
}

export default MyResume

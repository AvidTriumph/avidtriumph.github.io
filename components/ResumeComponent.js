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
      <Summary />
      <SectionBreak />
      <hr />
      <Skills />
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
      <Education />
      <hr />
      <OtherInternships />
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
        <div className="col-md-4 col-sm-4 text-center">
          <h4>
            <a href="http://www.github.com">Github</a>
          </h4>
        </div>
        <div className="col-md-4 col-sm-4 text-center">
          <h4>
            <a href="http://www.linkedin.com">Linkedin</a>
          </h4>
        </div>
        <div className="col-md-4 col-sm-4 text-center">
          <h4>
            <a href="http://www.example.com">Personal Site</a>
          </h4>
        </div>
      </div>
    </div>
  )
}

const Summary = () => {
  return (
    <div className="row pad-left-right">
      <div className="col-md-3 section">
        <h2 className="section-title">Summary</h2>
      </div>
      <p className="col-md-9">
        Enthusiastic and diligent self-starter with two years’ experience creating and maintaining
        complex banking and financing apps in multiple languages. Excellent knowledge of Agile
        development techniques and skilled at communicating expertise to others and providing
        practical support. Able to manage and prioritize numerous pressing tasks at once and plan
        strategically to ensure all deadlines are met. Rapid learner and continually strives to
        update knowledge by researching emerging online banking technologies.
      </p>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="row pad-left-right">
      <div className=" col-md-3 col-sm-3">
        <div className="section-title">Skills</div>
      </div>
      <div className="col-md-3 col-sm-3">
        <p>Android app development</p>
        <p>Kotlin</p>
        <p>API contract</p>
      </div>
      <div className="col-md-3 col-sm-3">
        <p>Release train</p>
        <p>Coda</p>
        <p>User Interface</p>
      </div>
      <div className="col-md-3 col-sm-3">
        <p>Room DB</p>
        <p>Design principles</p>
        <p>Agile process</p>
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
        <h3>{location}</h3>
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
        <h3>{location}</h3>
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
          <div>
            An active startup with more than 10M+ users and a 4.5-star android app rating. I have
            worked with more than 5 Product managers across 2 PODs and I have been Release Manager 4
            times
          </div>
          <h2>
            <b>UX &amp; Core</b>
          </h2>
          <ul className="outside">
            <li>
              <b>Search</b>
            </li>
            <ul className="inside">
              <li>Brought up ideas for feature search and feedback CTA.</li>
              <li>Feature search now has nearly 1.2M clicks/month.</li>
              <li>Also further refactored search from multiple LiveData to a single flow.</li>
            </ul>

            <li>
              <h2>
                <b>WebView</b>
              </h2>
            </li>
            <ul className="inside">
              <li>
                Implemented custom two-layer caching logic (Disk + memory LRU caching) of assets
                (PNG, JPEG) and file caching(JS, CSS, WOFF2) for low network bands (2G, 3G)
              </li>
              <li>This led to a nearly 60% (~4.79 to ~1.96) reduction in page load time.</li>
              <li>Migrated the Help and Support section to WebView.</li>
            </ul>
            <li>
              Implemented features like root and overlay detection, More Products, and migrated
              deprecated fingerprint library to biometric library
            </li>
            <li>Conducted several A/B experiments using Firebase with a custom audience.</li>
          </ul>
          <SectionBreak />
          <h2>
            <b>MF &amp; Gold</b>
          </h2>
          <ul className="outside">
            <li>Drafted API contracts for several use cases</li>
            <li>
              App POC and dev for the SIP(Systematic Investment Plan) journey in the android app
              (SIP details, Edit SIP, SIP landing) and gold front screens (explore, dashboard,
              product page), migrated codebase from react-native to native for better performance
              along with new design revamp
            </li>
          </ul>
          <SectionBreak />
          <h2>
            <b>Other</b>
          </h2>
          <ul className="outside">
            <li>
              Line chart: Added logic for handling corner cases like upper circuit, lower circuit,
              and missing data points.
            </li>
            <li>Created a coda tool for tracking release trains.</li>
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
          Joined as an intern and was among the initial native developers. I was responsible for
          migrating the following features from react-native to native for performance upgrades and
          implementing a design revamp for Search, Stock & MF order details, My orders.
        </div>
      </div>
    </div>
  )
}

const SectionBreak = () => {
  return <div className="section-break" />
}

class SectionItem {
  constructor({ timeline, sectionName, location }) {
    this.timeline = timeline
    this.sectionName = sectionName
    this.location = location
  }
}

export default MyResume

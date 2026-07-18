const education = [
  {
    date: "2024 – laufend",
    title: "Bachelorstudium Informatics",
    place: "IMC University of Applied Sciences, Krems an der Donau",
    note: "Arbeitssprache Englisch · Aktueller Notenschnitt: 1,5",
  },
  { date: "2023 – 2024", title: "Berufsreifeprüfung", note: "Notenschnitt: 1,25" },
  { date: "2023", title: "Aufschulung zum Heilmasseur" },
  { date: "2021 – 2022", title: "Kombinationsausbildung gewerblicher & medizinischer Masseur" },
  { date: "2014 – 2016", title: "BORG Krems", note: "Fachrichtung Mediendesign" },
];

const experience = [
  {
    date: "Seit 2025",
    title: "Tutor Informatics",
    place: "IMC FH Krems",
    items: [
      "Betreuung von Studierenden im ersten Semester",
      "Web Development: HTML, CSS, JavaScript, Bootstrap und Node.js",
      "Enge Zusammenarbeit mit Lehrenden und Studiengangsleitung",
    ],
  },
  {
    date: "Seit 2025",
    title: "Programming Instructor",
    place: "Coding Giants Austria",
    items: [
      "Unterricht für Kinder und Jugendliche von 6 bis 19 Jahren",
      "Python, Scratch, Game Design und Förderung logischen Denkens",
    ],
  },
  {
    date: "2024 – laufend",
    title: "Webdesigner",
    place: "Werbeagentur Philipp Köhl",
    items: [
      "Konzeption, Design und Umsetzung von Websites mit WordPress",
      "Moderne responsive Layouts unter Einhaltung von Corporate Designs",
      "Direkter Kundenkontakt von der Bedarfserhebung bis zur finalen Abnahme",
    ],
  },
  {
    date: "2023 – 2024",
    title: "Logistik & Operations",
    place: "Schrankerl GmbH",
    items: ["Logistikmitarbeiter in einem Tech-basierten Food-Startup"],
  },
  {
    date: "2019 – 2020",
    title: "Fundraiser & Teamleiter",
    place: "Wortstark, Amnesty International & WWF",
    items: ["Leitung und Motivation von Fundraising-Teams für internationale NGOs"],
  },
];

const skills = [
  {
    title: "Programmierung & Systeme",
    items: ["Python · Django · Pytest · Pygame · NumPy · Pandas", "JavaScript · React · Node.js · Fetch API · DOM", "R · ggplot2 · Datenanalyse & Statistik", "Windows · Linux-Grundlagen"],
  },
  {
    title: "Cloud & Development",
    items: ["AWS- und Azure-Grundlagen", "Docker · Git · GitHub · CI/CD", "SQLite · PostgreSQL · Neo4j", "Agile Entwicklung mit Scrum"],
  },
  {
    title: "Design",
    items: ["Figma · UI/UX · Wireframing", "Adobe Illustrator · Photoshop · Premiere", "WordPress Webdesign"],
  },
];

function Timeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <article className="timeline-entry" key={`${entry.date}-${entry.title}`}>
          <p className="date">{entry.date}</p>
          <div>
            <h3>{entry.title}</h3>
            {entry.place && <p className="place">{entry.place}</p>}
            {entry.note && <p>{entry.note}</p>}
            {entry.items && (
              <ul>{entry.items.map((item) => <li key={item}>{item}</li>)}</ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Lebenslauf</p>
          <h1>Florian Köhl</h1>
          <p className="intro">Informatikstudent mit Erfahrung in Webentwicklung, Lehre und Design.</p>
        </div>
        <div className="monogram" aria-hidden="true">FK</div>
      </header>

      <div className="layout">
        <aside>
          <section>
            <h2>Kontakt</h2>
            <dl className="contact">
              <div><dt>Geburtsdatum</dt><dd>3. November 1999</dd></div>
              <div><dt>Geburtsort</dt><dd>Waidhofen/Thaya</dd></div>
              <div><dt>Adresse</dt><dd>Lustkandlgasse 13/3<br />1090 Wien</dd></div>
              <div><dt>Telefon</dt><dd><a href="tel:+436605797487">0660 579 74 87</a></dd></div>
              <div><dt>E-Mail</dt><dd><a href="mailto:florian.v.koehl@gmail.com">florian.v.koehl@gmail.com</a></dd></div>
            </dl>
          </section>

          <section>
            <h2>Sprachen</h2>
            <ul className="plain-list">
              <li><span>Deutsch</span><strong>C2</strong></li>
              <li><span>Englisch</span><strong>C1</strong></li>
              <li><span>Spanisch</span><strong>B1</strong></li>
            </ul>
          </section>

          <section>
            <h2>Weitere Erfahrung</h2>
            <ul>
              <li>Selbstständige Mathematik-Nachhilfe</li>
              <li>Zivildienst im Innenministerium</li>
              <li>Praktika im Gesundheitswesen: Vamed, La Pura und Sanatorium Hera</li>
            </ul>
          </section>
        </aside>

        <div className="content">
          <section>
            <h2>Ausbildung</h2>
            <Timeline entries={education} />
          </section>

          <section>
            <h2>Berufserfahrung</h2>
            <Timeline entries={experience} />
          </section>

          <section>
            <h2>IT-Kenntnisse</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <h3>{skill.title}</h3>
                  <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="project">
            <p className="eyebrow">Ausgewähltes Projekt</p>
            <h2>Orgarhythmus</h2>
            <p>Eigenentwicklung für den Verein Bassment: Full-Stack-Projektmanagement-Tool zur Aufgaben- und Zeitplanung mit Django-Backend und React-Frontend. Fokus auf Datenmodellierung, UI-Logik und Deployment via GitHub.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { CURRENT_WORK, CAREER, EARLIER_ROLES } from "@/lib/experience";
import { SITE } from "@/lib/site";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#15212b",
    backgroundColor: "#ffffff",
  },
  header: {
    paddingBottom: 14,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d9dfe6",
  },
  name: { fontSize: 28, fontWeight: "bold", marginBottom: 4 },
  subtitle: { fontSize: 12, color: "#214acb", marginBottom: 7 },
  contact: { fontSize: 9, color: "#56636f", textDecoration: "none" },
  heading: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#214acb",
    marginTop: 13,
    marginBottom: 10,
  },
  job: { marginBottom: 14 },
  company: { fontSize: 12, fontWeight: "bold" },
  role: { fontSize: 10, marginBottom: 3 },
  dates: { fontSize: 9, color: "#56636f", marginBottom: 5 },
  bullet: {
    fontSize: 9,
    color: "#465461",
    paddingLeft: 8,
    marginBottom: 4,
    lineHeight: 1.5,
  },
  text: { fontSize: 9, color: "#465461", lineHeight: 1.5 },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 40,
    right: 40,
    fontSize: 8,
    color: "#56636f",
    textAlign: "right",
  },
});

export function ResumePDF() {
  return (
    <Document
      title="Ethan Teng — Resume"
      author="Ethan Teng"
      subject="Founder & Engineering Lead"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Ethan Teng</Text>
          <Text style={styles.subtitle}>Founder & Engineering Lead</Text>
          <Link src={`mailto:${SITE.email}`} style={styles.contact}>
            {SITE.email}
          </Link>
          <Text style={styles.contact}>{SITE.phone} | ethanteng.com</Text>
        </View>
        <Text style={styles.text}>
          Product and growth experience, with hands-on ownership from
          architecture to production.
        </Text>
        <Text style={styles.heading}>Current work</Text>
        {CURRENT_WORK.map((job) => (
          <View key={job.id} style={styles.job} wrap={false}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.role}>{job.role}</Text>
            <Text style={styles.dates}>Current</Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>
        ))}
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.company}>Stanford University</Text>
        <Text style={styles.text}>B.S. in Computer Science</Text>
        <Text style={styles.heading}>Technical & product scope</Text>
        <Text style={styles.text}>
          .NET / XAF APIs · React · React Native · Chat · Azure · CI/CD ·
          AI-agent-orchestrated delivery · SQL & analytics · Product strategy ·
          Onboarding & pricing · Experimentation
        </Text>
        <Text
          style={styles.footer}
          fixed
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Previous experience</Text>
        {CAREER.map((job) => (
          <View key={job.company} style={styles.job} wrap={false}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.role}>{job.role}</Text>
            <Text style={styles.dates}>{job.dates}</Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>
        ))}
        {EARLIER_ROLES.map((job) => (
          <View key={job.company} style={styles.job} wrap={false}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.role}>
              {job.role} | {job.dates}
            </Text>
            <Text style={styles.text}>{job.description}</Text>
          </View>
        ))}
        <Text
          style={styles.footer}
          fixed
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}

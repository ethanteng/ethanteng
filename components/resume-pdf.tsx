import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2 solid #2563eb',
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e293b',
  },
  contactInfo: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 3,
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  jobHeader: {
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  company: {
    fontSize: 11,
    color: '#2563eb',
    marginTop: 2,
    marginBottom: 2,
  },
  dates: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 10,
    marginBottom: 4,
    paddingLeft: 10,
    color: '#475569',
  },
  profile: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.5,
    marginBottom: 5,
  },
  profileBold: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 3,
  },
  skillText: {
    fontSize: 9,
    color: '#475569',
    marginBottom: 8,
  },
  education: {
    fontSize: 10,
    marginBottom: 3,
  },
  educationBold: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});

export function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Ethan Teng</Text>
          <Text style={styles.contactInfo}>415-867-6937 • ethan@ethanteng.com • ethanteng.com</Text>
        </View>

        {/* Profile */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.profileBold}>
            Growth Product Leader | B2B SaaS Optimizer | Self-Serve Funnel Architect
          </Text>
          <Text style={styles.profile}>
            Built a $1M+ PLG engine solo at meez. Helped scale Postman's global self-serve to $100M+ ARR. 
            Led PayPal's top GTM initiative at Braintree. Fluent in SQL, experiments, and systems that scale.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          
          {/* Meez */}
          <View style={{ marginBottom: 15 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>VP, Growth & Self-Serve Revenue</Text>
              <Text style={styles.company}>Meez - Recipe & operations platform for professional kitchens</Text>
              <Text style={styles.dates}>03/2023 – 05/2025</Text>
            </View>
            <Text style={styles.bullet}>• Built and scaled a $1M+ self-serve revenue engine from scratch, owning PLG strategy and execution end-to-end.</Text>
            <Text style={styles.bullet}>• Designed and optimized the full funnel—from signup to monetization—via high-velocity experimentation.</Text>
            <Text style={styles.bullet}>• Hit 50% activation and 30% PQL within 7 days; cut time-to-value from 1 month to 1 day.</Text>
            <Text style={styles.bullet}>• Led onboarding, pricing nudges, and product tour redesigns; converted &gt;80% of high-intent users to paid.</Text>
            <Text style={styles.bullet}>• Created self-serve pricing via Van Westendorp model; $29/month solo tier boosted direct purchases by 20%.</Text>
            <Text style={styles.bullet}>• Built GTM data foundation: PQL scoring, cohort tracking, behavioral segmentation—automated via SQL + Make.</Text>
            <Text style={styles.bullet}>• Owned full PLG stack: Intercom, Navattic, Snowflake, Sigma, Zapier, Make; shipped all growth infra solo.</Text>
            <Text style={styles.bullet}>• Reduced churn from 30% to &lt;5% in target cohorts with re-engagement + churn intervention flows.</Text>
          </View>

          {/* Postman */}
          <View style={{ marginBottom: 15 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Senior Data Scientist, Growth (Product-led)</Text>
              <Text style={styles.company}>Postman - API platform with 25M+ developers worldwide</Text>
              <Text style={styles.dates}>11/2021 – 02/2023</Text>
            </View>
            <Text style={styles.bullet}>• Scaled a global PLG motion to $100M+ ARR across 180+ countries with zero-touch onboarding.</Text>
            <Text style={styles.bullet}>• Built Postman's first forecasting model for free-to-paid conversion; refined monthly to achieve &lt;5% variance.</Text>
            <Text style={styles.bullet}>• Incorporated macroeconomic indicators into models to improve roadmap planning and scenario testing.</Text>
            <Text style={styles.bullet}>• Co-led goal-setting and KPI design for Growth squads, ensuring targets were both ambitious and measurable.</Text>
            <Text style={styles.bullet}>• Created dashboards and real-time reporting pipelines to track progress and inform prioritization.</Text>
            <Text style={styles.bullet}>• Analyzed experiment results to quantify impact across onboarding, activation, and monetization initiatives.</Text>
            <Text style={styles.bullet}>• Conducted behavioral and regression analyses to identify new PLG opportunities and shape upcoming tests.</Text>
          </View>

          {/* Recurly */}
          <View style={{ marginBottom: 15 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Head of Growth</Text>
              <Text style={styles.company}>Recurly - Subscription billing API powering global brands like Twitch & Paramount+</Text>
              <Text style={styles.dates}>05/2018 – 11/2020</Text>
            </View>
            <Text style={styles.bullet}>• Led company-wide shift from Sales-led to PLG, contributing to 3X revenue growth and Accel-KKR acquisition.</Text>
            <Text style={styles.bullet}>• Built first Growth team; ran experiments across acquisition, onboarding, and monetization.</Text>
            <Text style={styles.bullet}>• 3X'd activation rate and increased ARPU 1.5X through lifecycle optimization and pricing tests.</Text>
            <Text style={styles.bullet}>• Introduced cohort-based growth modeling to guide GTM strategy.</Text>
          </View>

          {/* Braintree */}
          <View style={{ marginBottom: 15 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Group Product Manager</Text>
              <Text style={styles.company}>Braintree - PayPal's developer-first API for cards and ACH</Text>
              <Text style={styles.dates}>04/2016 – 11/2017</Text>
            </View>
            <Text style={styles.bullet}>• Led PayPal's #1 strategic initiative of 2016: added ACH as Braintree's first bank payment method.</Text>
            <Text style={styles.bullet}>• Defined product vision and GTM strategy via merchant interviews, sales feedback, and competitive analysis.</Text>
            <Text style={styles.bullet}>• Operationalized execution across 15+ engineering and ops teams, aligning technical risk and compliance.</Text>
            <Text style={styles.bullet}>• Forecasted TPV and set pricing to ensure profitability within 6 months of launch.</Text>
            <Text style={styles.bullet}>• In 2017, led PayPal's top initiative to optimize global card routing for 1B+ transactions/quarter.</Text>
          </View>

          {/* Other Roles */}
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.jobTitle}>Other Growth & Product Leadership Roles</Text>
            <Text style={styles.bullet}>• Daylight (Head of Product & Growth) 2020-2021: Led consumer banking app launch for LGBTQ+ community.</Text>
            <Text style={styles.bullet}>• Zipongo (Senior PM) 2015-2016: Scaled digital health platform for Fortune 500 employers.</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.educationBold}>B.S. in Computer Science</Text>
          <Text style={styles.education}>Stanford University • Palo Alto, CA</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growth Stack & Technical Skills</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Growth Strategy:</Text>
              <Text style={styles.skillText}>PLG funnels, retention loops, lifecycle modeling, Reforge alum</Text>
            </View>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Analytics:</Text>
              <Text style={styles.skillText}>SQL (Snowflake, Sigma), Amplitude, GA4, Segment, Looker</Text>
            </View>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Lifecycle & CRM:</Text>
              <Text style={styles.skillText}>Intercom, Navattic, Hubspot</Text>
            </View>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Automation:</Text>
              <Text style={styles.skillText}>Make, Zapier</Text>
            </View>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Acquisition:</Text>
              <Text style={styles.skillText}>Google Ads, Meta Ads Manager, Ahrefs</Text>
            </View>
            <View style={{ width: '50%', marginBottom: 8 }}>
              <Text style={styles.skillCategory}>Experimentation:</Text>
              <Text style={styles.skillText}>VWO, LaunchDarkly</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}


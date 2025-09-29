import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./InsightsArticles.css";

// Articles data array
const articles = [
  {
    id: "legal-education-pk",
    title: "Raising the Bar: Improving Legal Education in Pakistan",
    excerpt:
      "Pakistan’s legal education system is at a crossroads. This article explores reforms needed for modern, skills-based training.",
    image: "/images/blog1.webp",
    author: "Ali Anwaar",
    date: "June 22, 2023",
    content: `
Pakistan’s legal education system has long been criticized for being outdated and disconnected from modern legal challenges. 
Most universities continue to emphasize rote memorization over analytical reasoning, while students are rarely exposed to real-world courtroom or corporate practice.

Key reforms must include the integration of **clinical legal education**, where students work with clients under supervision; **moot court competitions** that build advocacy skills; and **mandatory internships** with law firms, courts, and corporate entities.

International collaboration is also crucial. Leading law schools across the world emphasize interdisciplinary training—combining law with technology, economics, or policy studies. Pakistan can adopt similar models to create a new generation of well-rounded lawyers.

Ultimately, improving legal education will not only benefit students but also enhance the credibility and effectiveness of Pakistan’s entire justice system.
    `,
  },
  {
    id: "digital-transformation-law",
    title: "Digital Transformation in Pakistan’s Legal Industry",
    excerpt:
      "Technology is reshaping the legal sector in Pakistan. From e-courts to digital contracts, the future of law is tech-driven.",
    image: "/images/blog2.webp",
    author: "Zahid Khan",
    date: "April 11, 2024",
    content: `
The legal industry in Pakistan, like much of the world, is undergoing rapid digital transformation. 
Law firms and courts are increasingly adopting technology to streamline processes and improve access to justice.

Key areas of change include:
- **E-Courts and Online Hearings**: Introduced during the COVID-19 pandemic, virtual courtrooms have improved efficiency and reduced travel barriers.
- **Digital Documentation**: Contracts, affidavits, and case files are now being digitized, ensuring better record-keeping and accessibility.
- **Case Management Software**: Law firms are using software solutions to track cases, deadlines, and client communication more effectively.
- **Legal Research Tools**: AI-powered databases are making legal research faster and more accurate.

While progress is promising, challenges remain — such as ensuring data privacy, training lawyers in digital tools, and bridging the digital divide between urban and rural areas.

Embracing technology will not only make Pakistan’s legal system more efficient but also more inclusive and accessible for all citizens.
  `,
  },

  {
    id: "family-law-rights",
    title: "Family Law in Pakistan: Rights & Responsibilities",
    excerpt:
      "Marriage, divorce, inheritance — this article details how Pakistani family law affects citizens' rights.",
    image: "/images/blog3.jpg",
    author: "Sara Malik",
    date: "July 01, 2023",
    content: `
Family law governs the most personal aspects of life—marriage, divorce, inheritance, and child custody. 
In Pakistan, these matters are largely guided by Islamic principles codified in statutes like the **Muslim Family Laws Ordinance, 1961**.

Common challenges include:
- Lack of awareness about **divorce procedures** and women’s rights to maintenance (nafaqah).
- Disputes in **inheritance cases**, especially when female heirs are denied their rightful shares.
- **Child custody battles**, where courts balance the welfare of the child with parental rights.

To strengthen protections, more awareness campaigns and legal aid centers are needed so families can navigate the system effectively. 
A stronger family law framework not only protects individual rights but also ensures social stability.
    `,
  },
  {
    id: "tax-reforms-pk",
    title: "Tax Reforms in Pakistan: Building a Fair System",
    excerpt:
      "Pakistan’s tax system faces compliance issues and inequities. Here’s how reforms can strengthen the economy.",
    image: "/images/blog4.jpg",
    author: "Ahmed Raza",
    date: "September 15, 2023",
    content: `
Pakistan struggles with one of the lowest tax-to-GDP ratios in the region, with less than 1% of the population paying income tax. 
This undermines revenue collection and places an unfair burden on compliant taxpayers.

Major issues include **complex filing procedures**, **broad exemptions for the elite**, and **weak enforcement**. 
For real progress, Pakistan needs:
- A **simplified tax filing process** accessible to all.
- Stronger action against **tax evasion**.
- Elimination of **unjust exemptions**.
- Integration of **technology and digital monitoring** to expand the tax net.

Successful tax reforms can help Pakistan reduce reliance on foreign loans, strengthen its economy, and create a fairer system for all.
    `,
  },
  {
    id: "criminal-justice-reforms",
    title: "Reforming Pakistan’s Criminal Justice System",
    excerpt:
      "Delays, overcrowded prisons, and outdated laws plague Pakistan’s justice system. This article explores reforms.",
    image: "/images/blog5.webp",
    author: "Dr. Usman Tariq",
    date: "October 8, 2023",
    content: `
The criminal justice system in Pakistan suffers from chronic delays, corruption, and outdated laws. 
Cases often take years to conclude, leaving accused persons in limbo and victims without justice.

Prison overcrowding remains a serious issue, with thousands of under-trial prisoners awaiting decisions. 
Moreover, outdated evidence laws and weak forensic systems hinder fair trials.

Reforms must focus on:
- Introducing **modern forensic practices**.
- Digitizing case management to avoid unnecessary adjournments.
- Providing **legal aid** to underprivileged defendants.
- Enhancing training for police and prosecutors.

Without urgent reform, the system risks losing public confidence entirely.
    `,
  },
  {
    id: "women-rights-law",
    title: "Women’s Rights and Legal Protections in Pakistan",
    excerpt:
      "Pakistan has made progress in women’s rights laws, but challenges remain in enforcement and awareness.",
    image: "/images/blog6.webp",
    author: "Mariam Akhtar",
    date: "March 5, 2024",
    content: `
In recent decades, Pakistan has introduced several laws to protect women, such as the **Protection against Harassment at the Workplace Act, 2010** and the **Domestic Violence Acts** in various provinces. 
Yet, enforcement remains a challenge.

Women often hesitate to pursue cases due to **social stigma**, **lack of awareness**, or **fear of retaliation**. 
Police and judicial insensitivity also worsen the issue.

Legal reforms must go hand in hand with **awareness campaigns**, **safe reporting mechanisms**, and **stronger enforcement** to ensure that women can exercise their rights with confidence and dignity.
    `,
  },
  {
    id: "corporate-compliance",
    title: "Corporate Compliance and Governance in Pakistan",
    excerpt:
      "Corporate governance ensures transparency and accountability. Here’s why compliance matters for businesses.",
    image: "/images/blog7.jpg",
    author: "Bilal Hussain",
    date: "January 19, 2024",
    content: `
Corporate governance is essential for building investor trust, improving company performance, and preventing fraud. 
In Pakistan, the **Companies Act, 2017** and **SECP regulations** lay down important compliance requirements.

Key aspects include:
- Maintaining **accurate financial disclosures**.
- Ensuring **board independence**.
- Protecting **minority shareholder rights**.

Firms that prioritize compliance not only avoid legal penalties but also gain competitive advantage by attracting foreign investment and building long-term credibility.
    `,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights in Pakistan",
    excerpt:
      "From trademarks to copyrights, intellectual property protection is vital in a modern economy.",
    image: "/images/blog8.webp",
    author: "Farah Javed",
    date: "February 9, 2024",
    content: `
Intellectual property (IP) plays a crucial role in fostering innovation and entrepreneurship. 
In Pakistan, IP rights are protected under laws governing **patents, copyrights, and trademarks**.

However, enforcement is often weak. Counterfeit goods and piracy remain widespread, discouraging innovation and foreign investment. 
Strengthening the **Intellectual Property Organization of Pakistan (IPO-Pakistan)**, training enforcement agencies, and raising public awareness are critical steps.

Protecting IP rights ensures that inventors, artists, and businesses are rewarded for their creativity, which in turn drives economic growth.
    `,
  },
  {
    id: "environmental-law",
    title: "Environmental Law and Climate Justice in Pakistan",
    excerpt:
      "As Pakistan faces climate change, environmental laws play a key role in ensuring sustainable development.",
    image: "/images/blog9.png",
    author: "Nadia Rehman",
    date: "December 12, 2023",
    content: `
Pakistan is one of the countries most vulnerable to climate change. 
Floods, heatwaves, and pollution highlight the urgent need for stronger environmental governance.

While Pakistan has laws such as the **Pakistan Environmental Protection Act, 1997**, enforcement remains weak. 
Industrial pollution, deforestation, and poor waste management continue to harm communities.

Solutions include:
- Stricter **implementation of environmental regulations**.
- Encouraging **renewable energy adoption**.
- Expanding **climate litigation** to hold polluters accountable.

Environmental law is no longer optional—it is essential for Pakistan’s survival and sustainable development.
    `,
  },
];

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContent = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

const InsightsArticles = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div id="articles" className="insights-articles-section">
      <div className="articles-grid">
        {articles.map((art) => (
          <motion.div
            className="article-card"
            key={art.id}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={art.image} alt={art.title} className="article-thumb" />
            <div className="article-info">
              <h3>{art.title}</h3>
              <p className="article-excerpt">{art.excerpt}</p>
              <button
                className="read-more-btn"
                onClick={() => setActiveArticle(art)}
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="modal-backdrop"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              className="modal-content"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{activeArticle.title}</h2>
              <p className="modal-meta">
                {activeArticle.author} — {activeArticle.date}
              </p>
              <div className="modal-body">
                {activeArticle.content.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {/* Close Button */}
              <button
                className="modal-close"
                onClick={() => setActiveArticle(null)}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InsightsArticles;

import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="연락처" />
        </Reveal>

        <Reveal>
          <div className={styles.panel}>
            <div className={styles.contacts}>
              <a className={styles.email} href={`mailto:${profile.contactEmail}`}>
                {profile.contactEmail}
              </a>
              <a className={styles.phone} href={`tel:${profile.contactPhone.replace(/-/g, "")}`}>
                {profile.contactPhone}
              </a>
            </div>
            {profile.links.length > 0 ? (
              <ul className={styles.links}>
                {profile.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

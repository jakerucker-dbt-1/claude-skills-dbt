// FILE: components/Footer.tsx
import { JACOB } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-panel/30 backdrop-blur-sm mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">
              {JACOB.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {JACOB.headline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Writing', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${JACOB.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {JACOB.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${JACOB.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>{JACOB.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            &copy; {currentYear} {JACOB.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with
            <span className="text-accent">Next.js</span>
            +
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

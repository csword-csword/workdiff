export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        padding: '2rem',
        zIndex: 10,
        borderTop: '3px solid #0a0a0a'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Brand */}
          <div>
            <h3
              className="font-[var(--font-bebas)]"
              style={{ fontSize: '1.5rem', letterSpacing: '0.1rem', color: '#ffffff', marginBottom: '0.25rem', lineHeight: 1 }}
            >
              Work Different
            </h3>
            <p style={{ color: '#ffffff', fontSize: '0.875rem' }}>
              GTM Advisory Services
            </p>
          </div>

          {/* Contact Button */}
          <a
            href="mailto:charles@workdifferent.services"
            className="font-[var(--font-bebas)]"
            style={{
              display: 'inline-block',
              backgroundColor: '#457b9d',
              color: '#ffffff',
              fontSize: '1.125rem',
              letterSpacing: '0.1rem',
              textTransform: 'uppercase',
              padding: '0.75rem 1.5rem',
              border: '2px solid #ffffff',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f4a261';
              e.currentTarget.style.color = '#0a0a0a';
              e.currentTarget.style.borderColor = '#0a0a0a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#457b9d';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
            }}
          >
            Contact Us
          </a>
        </div>

        <div style={{ borderTop: '1px solid #ffffff', paddingTop: '1rem', textAlign: 'center' }}>
          <p style={{ color: '#ffffff', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Work Different. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

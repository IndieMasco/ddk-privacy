import "./App.css";

export default function App() {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="main-title">DDK: Digital Dice Kit</h1>
        <p className="sub-title">Privacy Policy</p>
      </header>

      <main>
        <div className="section">
          <p>
            <strong>Effective Date:</strong> January 18, 2026
          </p>
          <p>
            At DDK, we believe that your data belongs to you. This application
            is designed to be a local tool with zero external data tracking.
          </p>
        </div>

        <section className="section">
          <h2 className="section-heading">1. No Data Collection</h2>
          <p>
            The Digital Dice Kit does not collect, transmit, or store any
            personal identification information. We do not track your location,
            your device ID, or your usage patterns.
          </p>
        </section>

        <section className="section">
          <h2 className="section-heading">2. Local Storage & AsyncStorage</h2>
          <p>
            The app saves your settings (colors, haptics, and roll history)
            directly to your device's internal storage using AsyncStorage. This
            data is never uploaded to a server and is only used to provide your
            history and preferences when you re-open the app.
          </p>
        </section>

        <section className="section">
          <h2 className="section-heading">3. Device Permissions</h2>
          <p>
            DDK requests permission to use your device's vibration motor
            (Haptics) to provide tactile feedback during rolls. This is the only
            hardware permission used.
          </p>
        </section>

        <section className="section">
          <h2 className="section-heading">4. Third Parties</h2>
          <p>
            We do not share any information with third parties. There are no
            ads, no analytics trackers, and no data harvesting in this
            application.
          </p>
        </section>

        <section className="section">
          <h2 className="section-heading">5. Contact</h2>
          <div className="contact-box">
            <p>
              If you have any questions, please contact the developer at:{" "}
              <strong>[EMAIL]</strong>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} DDK Digital Dice Kit.
      </footer>
    </div>
  );
}

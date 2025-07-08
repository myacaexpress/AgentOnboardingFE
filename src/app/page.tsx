"use client";

export default function Home() {
  return (
    <div>
      <div className="header">
        <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#ff6b6b" strokeWidth="3" transform="rotate(45 50 50)"/>
          <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#ff6b6b" strokeWidth="3" transform="rotate(-45 50 50)"/>
        </svg>
        <span className="header-text">Agent EMP - Americhoice</span>
      </div>

      <div className="main-container">
        <div className="hero-section">
          <h1>Welcome to Agent Empowerment</h1>
          <p className="subtitle">Get set up to receive high-quality inbound insurance calls</p>
          
          <a href="https://api.leadconnectorhq.com/widget/survey/XA49MJyuHMrPvgb2ZgLz" className="hero-cta">
            Complete Onboarding Form
          </a>
        </div>

        {/* Educational Video - Top Priority */}
        <div className="process-section" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', marginBottom: '40px', padding: '30px'}}>
          <h2 style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>🎬 REQUIRED: Watch This Setup Tutorial First</h2>
          <div style={{textAlign: 'center'}}>
            <div style={{background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '16px', padding: '25px 40px', maxWidth: '600px', margin: '0 auto'}}>
              <div style={{fontSize: '48px', marginBottom: '15px'}}>▶️</div>
              <h3 style={{fontSize: '20px', marginBottom: '10px', color: 'white'}}>Complete Agent Setup Tutorial</h3>
              <p style={{fontSize: '14px', marginBottom: '20px', opacity: '0.9'}}>Learn how to set up Kixie, Agent Empowerment CRM, and start receiving calls • 10 minutes</p>
              <a href="https://www.loom.com/share/2449c17c78184071a7faf663c143cd35" target="_blank" style={{display: 'inline-block', background: 'white', color: '#5865f2', padding: '15px 40px', borderRadius: '30px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'}}>
                Watch Video Tutorial
              </a>
            </div>
          </div>
        </div>

        {/* Step 1: Initial Setup */}
        <div className="process-section">
          <div className="section-header">
            <div className="section-number">1</div>
            <h2>Initial Onboarding & System Setup</h2>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>📝 What We'll Collect</h3>
              <ul className="checklist">
                <li>Personal and business contact information</li>
                <li>Licensed states for receiving calls</li>
                <li>Hours of operation and time zone</li>
                <li>Call capacity (concurrency)</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>⚡ Setup Process</h3>
              <ul className="checklist">
                <li>Complete onboarding form</li>
                <li>Receive invoice for system setup ($99)</li>
                <li>Account creation across all platforms</li>
                <li>Receive login credentials within 1-2 days</li>
              </ul>
            </div>
          </div>
          
          <p style={{textAlign: 'center', margin: '30px 0'}}>
            <a href="https://api.leadconnectorhq.com/widget/survey/XA49MJyuHMrPvgb2ZgLz" className="section-cta">
              Complete Onboarding Form
            </a>
          </p>

          <h3 style={{fontSize: '20px', margin: '30px 0 10px', color: '#5865f2'}}>📧 Email #1: Welcome & Onboarding Instructions</h3>
          <p style={{color: '#666', marginBottom: '20px'}}>You'll receive this email immediately after expressing interest:</p>
          <div className="email-preview">
            <div className="email-header">
              <div className="email-subject">Welcome to Agent Empowerment - Your Journey Begins Now!</div>
              <div className="email-meta">
                <strong>shawn@agentsly.ai</strong> • Wed, Jul 2, 11:26 AM (4 days ago)
              </div>
            </div>
            <div className="email-body">
              <p><strong>Dear Shawn,</strong></p>
              <p>Welcome to <strong>Agent Empowerment</strong> — we&apos;re excited to help you launch your live call campaign! To begin, please complete the form below so we can configure your campaign and send your invoice.</p>
              <p><span className="email-check">✅</span> <strong>Step 1: Fill Out Your Onboarding Form</strong></p>
              <p>👉 <a href="#" className="email-link">Click Here to Complete</a></p>
              <p>Once you submit the form:</p>
              <ol style={{marginLeft: '20px'}}>
                <li>You&apos;ll receive an <strong>invoice for your system setup</strong> ($99 - Kixie dialer)</li>
                <li>After payment, we&apos;ll activate your setup within <strong>1-2 business days</strong></li>
              </ol>
            </div>
          </div>

          <div className="billing-highlight">
            <h3 style={{fontSize: '24px', marginBottom: '20px'}}>💰 How Billing Works</h3>
            <div className="billing-grid">
              <div className="billing-item">
                <div className="billing-label">Setup Fee</div>
                <div className="billing-amount">$99</div>
                <div className="billing-label">Kixie Dialer</div>
              </div>
              <div className="billing-item">
                <div className="billing-label">Per Billable Call</div>
                <div className="billing-amount">$55</div>
                <div className="billing-label">90+ seconds</div>
              </div>
              <div className="billing-item">
                <div className="billing-label">Billing Bundle</div>
                <div className="billing-amount">5 calls</div>
                <div className="billing-label">$275 per bundle</div>
              </div>
            </div>
          </div>

          <h3 style={{fontSize: '20px', margin: '30px 0 10px', color: '#5865f2'}}>📧 Email #2: Kixie Setup & Login Instructions</h3>
          <p style={{color: '#666', marginBottom: '20px'}}>After completing the form and payment, you'll receive:</p>
          <div className="email-preview">
            <div className="email-header">
              <div className="email-subject">Your Campaign is Ready - Kixie Setup Instructions</div>
              <div className="email-meta">
                <strong>Agent EMP - Americhoice</strong> via mg.msgsndr.org • Wed, Jul 2, 1:26 PM
              </div>
            </div>
            <div className="email-body">
              <p><strong>Dear Shawn,</strong></p>
              <p>Welcome! Your <strong>live call campaign is being created</strong>, and you&apos;ll begin receiving inbound Final Expense and Life Insurance calls within the next <strong>3-5 business days</strong>.</p>
              <p><span className="email-check">✅</span> <strong>Install Kixie Chrome Extension</strong></p>
              <p>👉 <a href="#" className="email-link">chrome.google.com/webstore/detail/kixie-powercall-sales-dial/</a></p>
              <p><span className="email-check">✅</span> <strong>Login Credentials</strong></p>
              <ul style={{marginLeft: '20px'}}>
                <li>Email: <strong>Your email</strong></li>
                <li>Password: <code style={{background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px'}}>Leads123@@</code></li>
              </ul>
              <p><span className="email-check">✅</span> <strong>Set Your Status to &quot;Available&quot;</strong></p>
              <p style={{background: '#fff3cd', borderLeft: '4px solid #ffc107', padding: '10px', margin: '10px 0'}}>
                <strong>⚠️ CRITICAL LOGIN ORDER: Always login to Agent Empowerment (AgentEmp) FIRST, then Kixie. You must be marked Available in BOTH systems to receive calls.</strong>
              </p>
              <p style={{marginTop: '15px', fontStyle: 'italic', color: '#666'}}>Note: Ringba login credentials will be sent in a separate email.</p>
            </div>
          </div>
        </div>

        {/* Step 2: Daily Process */}
        <div className="process-section">
          <div className="section-header">
            <div className="section-number">2</div>
            <h2>The Daily Process to Start Receiving Calls</h2>
          </div>

          <div className="warning-box">
            <span className="warning-icon">⚠️</span>
            <div>
              <strong>CRITICAL:</strong> ALWAYS login to Agent Empowerment (Agent EMP) FIRST, then Kixie. This exact sequence is essential for proper API synchronization and call routing.
              <br/><br/>
              <strong>Important:</strong> Agent EMP must be your first login every day before accessing any other platform. Use the SAME email address for all three platforms (Agent EMP, Kixie, and Ringba) to ensure the systems are properly linked.
            </div>
          </div>

          <div className="step-cards">
            <div className="step-card">
              <div className="step-number-badge">1</div>
              <div className="step-icon">💼</div>
              <h3>🚨 FIRST: Log in to Agent Empowerment</h3>
              <p><strong>ALWAYS START HERE!</strong> Access the CRM at crm.agentemp.com</p>
              <p style={{marginTop: '10px'}}><strong>Use your provided credentials - This MUST be your first login</strong></p>
            </div>

            <div className="step-card">
              <div className="step-number-badge">2</div>
              <div className="step-icon">📞</div>
              <h3>THEN: Log in to Kixie</h3>
              <p>Open the Kixie PowerCall Chrome extension</p>
              <p style={{marginTop: '10px'}}><strong>Set status to &quot;Available&quot;</strong></p>
            </div>

            <div className="step-card">
              <div className="step-number-badge">3</div>
              <div className="step-icon">🟢</div>
              <h3>Set Availability to Online in Agent EMP</h3>
              <p><strong>In Agent Empowerment:</strong> Click &quot;Calls Availability&quot; in left menu</p>
              <p style={{marginTop: '10px'}}><strong>Toggle status to &quot;Online&quot; - This is done primarily in Agent EMP</strong></p>
            </div>
          </div>
        </div>

        {/* Performance & Tracking */}
        <div className="process-section">
          <div className="section-header">
            <div className="section-number">3</div>
            <h2>What to Expect & Performance Tracking</h2>
          </div>

          <h3 style={{fontSize: '24px', marginBottom: '20px'}}>📊 Performance Expectations</h3>
          <div className="performance-cards">
            <div className="performance-card">
              <div className="metric-label">Daily Calls</div>
              <div className="metric-number">~8</div>
              <div className="metric-label">inbound per day</div>
            </div>
            <div className="performance-card">
              <div className="metric-label">Target Buffer</div>
              <div className="metric-number">50%</div>
              <div className="metric-label">calls passing</div>
            </div>
            <div className="performance-card">
              <div className="metric-label">Conversion Rate</div>
              <div className="metric-number">20-30%</div>
              <div className="metric-label">into sales</div>
            </div>
            <div className="performance-card">
              <div className="metric-label">Daily Goal</div>
              <div className="metric-number">3-4</div>
              <div className="metric-label">sales achievable</div>
            </div>
          </div>

          <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', marginTop: '30px'}}>
            <h3 style={{fontSize: '24px', marginBottom: '20px'}}>🎯 Track Performance with Ringba</h3>
            <div className="info-grid">
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', marginBottom: '10px'}}>📊</div>
                <h4>Call Details</h4>
                <p>Timestamps, caller ID, duration, and connection status</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', marginBottom: '10px'}}>🎧</div>
                <h4>Call Recordings</h4>
                <p>Listen to or download for quality assurance</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '36px', marginBottom: '10px'}}>💵</div>
                <h4>Transparent Billing</h4>
                <p>Real-time tracking of billable calls and earnings</p>
              </div>
            </div>
          </div>

          <p style={{textAlign: 'center', marginTop: '30px', fontSize: '18px', color: '#666'}}>
            <strong>These are real consumers</strong> calling from our high-converting online ads.<br/>
            You&apos;re not chasing cold leads — you&apos;re responding to demand.
          </p>
        </div>
      </div>

      <div className="footer">
        <p>All information provided is private and securely protected.</p>
      </div>
    </div>
  );
}

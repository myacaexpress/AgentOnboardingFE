"use client";

export default function Home() {
  return (
    <div>
      <style jsx>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #f5f5f5 !important;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #1e293b !important;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 40px 0 20px 0;
        }

        .logo {
            width: 50px;
            height: 50px;
        }

        .header-text {
            font-size: 16px;
            font-weight: 600;
            color: #334155 !important;
        }

        .main-container {
            max-width: 1200px;
            width: 100%;
            padding: 0 20px;
            margin-bottom: 40px;
        }

        .hero-section {
            text-align: center;
            margin-bottom: 80px;
        }

        h1 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
            color: #1e293b !important;
        }

        .subtitle {
            font-size: 20px;
            color: #64748b !important;
            margin-bottom: 40px;
        }

        .hero-cta-container {
            display: flex;
            gap: 30px;
            justify-content: center;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .hero-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .hero-step-text {
            font-size: 24px;
            font-weight: 700;
            color: #5865f2;
            margin-bottom: 5px;
            text-align: center;
        }

        .hero-cta {
            display: inline-block;
            padding: 18px 50px;
            background: #5865f2;
            color: white;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(88, 101, 242, 0.3);
        }

        .hero-cta:hover {
            background: #4752c4;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(88, 101, 242, 0.4);
        }

        .openphone-cta {
            background: #00d4aa !important;
            box-shadow: 0 5px 15px rgba(0, 212, 170, 0.3) !important;
        }

        .openphone-cta:hover {
            background: #00b894 !important;
            box-shadow: 0 8px 20px rgba(0, 212, 170, 0.4) !important;
        }

        .section-cta {
            display: inline-block;
            padding: 15px 40px;
            background: #5865f2;
            color: white;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(88, 101, 242, 0.2);
        }

        .section-cta:hover {
            background: #4752c4;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(88, 101, 242, 0.3);
        }

        .process-section {
            background: white;
            border-radius: 16px;
            padding: 60px;
            margin-bottom: 40px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
        }

        .section-number {
            width: 50px;
            height: 50px;
            background: #5865f2;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            flex-shrink: 0;
        }

        h2 {
            font-size: 32px;
            font-weight: 600;
            color: #1e293b !important;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
        }

        .info-card {
            background: #ffffff !important;
            border-radius: 12px;
            padding: 30px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            color: #1e293b !important;
        }

        .info-card h3 {
            font-size: 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #1e293b !important;
        }

        .billing-highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            margin: 30px 0;
        }

        .billing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }

        .billing-item {
            text-align: center;
        }

        .billing-amount {
            font-size: 42px;
            font-weight: bold;
            margin: 10px 0;
        }

        .billing-label {
            font-size: 16px;
            opacity: 0.9;
        }

        .step-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin: 30px 0;
        }

        .step-card {
            background: white !important;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            position: relative;
            transition: all 0.3s ease;
            color: #1e293b !important;
        }

        .step-card:hover {
            border-color: #5865f2;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .step-number-badge {
            position: absolute;
            top: -15px;
            left: 30px;
            background: #5865f2;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .step-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }

        .checklist {
            list-style: none;
            text-align: left;
            margin: 20px 0;
        }

        .checklist li {
            padding: 10px 0;
            padding-left: 30px;
            position: relative;
            line-height: 1.6;
            color: #1e293b !important;
        }

        .checklist li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #22c55e;
            font-weight: bold;
            font-size: 18px;
        }

        .performance-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .performance-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
        }

        .performance-card:nth-child(2) {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .performance-card:nth-child(3) {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .performance-card:nth-child(4) {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .metric-number {
            font-size: 48px;
            font-weight: bold;
            margin: 10px 0;
        }

        .metric-label {
            font-size: 16px;
            opacity: 0.9;
        }

        .warning-box {
            background: #fff3cd !important;
            border: 1px solid #ffc107;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            display: flex;
            align-items: flex-start;
            gap: 15px;
            color: #856404 !important;
        }

        .warning-icon {
            font-size: 24px;
            color: #ff9800;
        }

        .email-preview {
            background: white !important;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin: 30px 0;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            color: #333 !important;
        }

        .email-header {
            background: #f8f9fa;
            padding: 15px 20px;
            border-bottom: 1px solid #e0e0e0;
            font-size: 14px;
        }

        .email-subject {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .email-meta {
            color: #666;
            font-size: 13px;
        }

        .email-body {
            padding: 20px;
            font-size: 14px;
            line-height: 1.6;
            color: #333 !important;
        }

        .email-body strong {
            color: #1a1a1a !important;
        }

        .email-link {
            color: #5865f2;
            text-decoration: underline;
        }

        .email-check {
            color: #22c55e;
            font-weight: bold;
        }

        .footer {
            text-align: center;
            padding: 40px 20px;
            color: #64748b !important;
            font-size: 14px;
        }

        /* Fix inline text colors */
        p, div, span {
            color: inherit;
        }

        /* Ensure all text in sections is visible */
        .process-section p {
            color: #1e293b !important;
        }

        .process-section h3 {
            color: #1e293b !important;
        }

        .process-section h4 {
            color: #1e293b !important;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }

            .process-section {
                padding: 30px 20px;
            }

            .info-grid, .step-cards, .performance-cards {
                grid-template-columns: 1fr;
            }

            .hero-cta-container {
                flex-direction: column;
                gap: 15px;
            }

            .hero-cta {
                padding: 15px 30px;
                font-size: 16px;
            }
        }
      `}</style>

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
          
          <div className="hero-cta-container">
            <div className="hero-step">
              <div className="hero-step-text">Step 1</div>
              <a href="https://api.leadconnectorhq.com/widget/survey/XA49MJyuHMrPvgb2ZgLz" className="hero-cta">
                Complete Onboarding Form
              </a>
            </div>
            <div className="hero-step">
              <div className="hero-step-text">Step 2</div>
              <a href="https://my.openphone.com/signup?invite=369bc07b78cc85a544537baf8ec3b693" className="hero-cta openphone-cta" target="_blank">
                Sign Up With OpenPhone
              </a>
            </div>
          </div>
        </div>

        {/* Educational Video - Top Priority */}
        <div className="process-section" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', marginBottom: '40px', padding: '30px'}}>
          <h2 style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>🎬 REQUIRED: Watch This Setup Tutorial First</h2>
          <div style={{textAlign: 'center'}}>
            <div style={{background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '16px', padding: '25px 40px', maxWidth: '600px', margin: '0 auto'}}>
              <div style={{fontSize: '48px', marginBottom: '15px'}}>▶️</div>
              <h3 style={{fontSize: '20px', marginBottom: '10px', color: 'white'}}>Complete Agent Setup Tutorial</h3>
              <p style={{fontSize: '14px', marginBottom: '20px', opacity: '0.9'}}>Learn how to set up OpenPhone, Agent Empowerment CRM, and start receiving calls • 10 minutes</p>
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
                <li>Receive invoice for system setup ($100)</li>
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
                <li>You&apos;ll receive an <strong>invoice for your system setup</strong> ($100 - OpenPhone dialer)</li>
                <li>After payment, we&apos;ll activate your setup within <strong>1-2 business days</strong></li>
              </ol>
            </div>
          </div>

          <div className="billing-highlight">
            <h3 style={{fontSize: '24px', marginBottom: '20px'}}>💰 How Billing Works</h3>
            <div className="billing-grid">
              <div className="billing-item">
                <div className="billing-label">Setup Fee</div>
                <div className="billing-amount">$100</div>
                <div className="billing-label">OpenPhone Dialer</div>
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

          <h3 style={{fontSize: '20px', margin: '30px 0 10px', color: '#5865f2'}}>📧 Email #2: OpenPhone Setup & Login Instructions</h3>
          <p style={{color: '#666', marginBottom: '20px'}}>After completing the form and payment, you'll receive:</p>
          <div className="email-preview">
            <div className="email-header">
              <div className="email-subject">Your Campaign is Ready - OpenPhone Setup Instructions</div>
              <div className="email-meta">
                <strong>Agent EMP - Americhoice</strong> via mg.msgsndr.org • Wed, Jul 2, 1:26 PM
              </div>
            </div>
            <div className="email-body">
              <p><strong>Dear Shawn,</strong></p>
              <p>Welcome! Your <strong>live call campaign is being created</strong>, and you&apos;ll begin receiving inbound Final Expense and Life Insurance calls within the next <strong>3-5 business days</strong>.</p>
              <p><span className="email-check">✅</span> <strong>Install OpenPhone App</strong></p>
              <p>👉 <a href="#" className="email-link">openphone.com/download</a></p>
              <p><span className="email-check">✅</span> <strong>Login Credentials</strong></p>
              <ul style={{marginLeft: '20px'}}>
                <li>Email: <strong>Your email</strong></li>
                <li>Password: <code style={{background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px'}}>Leads123@@</code></li>
              </ul>
              <p style={{background: '#fff3cd', borderLeft: '4px solid #ffc107', padding: '10px', margin: '10px 0'}}>
                <strong>⚠️ CRITICAL LOGIN ORDER: Always login to Agent Empowerment (AgentEmp) FIRST, then OpenPhone. Ensure you are logged in to BOTH systems to receive calls.</strong>
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
              <strong>CRITICAL:</strong> ALWAYS login to Agent Empowerment (Agent EMP) FIRST, then OpenPhone. This exact sequence is essential for proper API synchronization and call routing.
              <br/><br/>
              <strong>Important:</strong> Agent EMP must be your first login every day before accessing any other platform. Use the SAME email address for all three platforms (Agent EMP, OpenPhone, and Ringba) to ensure the systems are properly linked.
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
              <h3>THEN: Log in to OpenPhone</h3>
              <p>Make sure you are logged in and your audio settings are working</p>
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

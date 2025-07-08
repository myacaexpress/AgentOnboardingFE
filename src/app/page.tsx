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
        <div className="process-section video-tutorial-section">
          <h2 className="video-tutorial-title">🎬 REQUIRED: Watch This Setup Tutorial First</h2>
          <div className="video-tutorial-container">
            <div className="video-tutorial-card">
              <div className="video-tutorial-icon">▶️</div>
              <h3 className="video-tutorial-heading">Complete Agent Setup Tutorial</h3>
              <p className="video-tutorial-description">Learn how to set up Kixie, Agent Empowerment CRM, and start receiving calls • 10 minutes</p>
              <a href="https://www.loom.com/share/2449c17c78184071a7faf663c143cd35" target="_blank" className="video-tutorial-button">
                Watch Video Tutorial
              </a>
            </div>
          </div>
        </div>

        {/* Sample Call Examples Section */}
        <div className="process-section sample-calls-section">
          <h2 className="sample-calls-title">🎧 Listen to Successful Call Examples</h2>
          <p className="sample-calls-description">
            Learn from real successful calls with actual customers. These examples will help you understand tone, pacing, and effective sales techniques.
          </p>
          
          <div className="sample-calls-grid">
            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #1</h4>
              <iframe 
                src="https://drive.google.com/file/d/1dJN5DmbEbq8_mT3P0pEeevBqSfEsRrxA/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #2</h4>
              <iframe 
                src="https://drive.google.com/file/d/1Tyey_wAiI1b9oXon_VJtSOQRVBONzVJM/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #3</h4>
              <iframe 
                src="https://drive.google.com/file/d/1YUw1i5ViVC76UP9IaLIs8SDypkmnY22J/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #4</h4>
              <iframe 
                src="https://drive.google.com/file/d/14_looFQS0pyNzgz9TRKBZoxGZnqKMlkZ/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #5</h4>
              <iframe 
                src="https://drive.google.com/file/d/1eGCm-VmqHi5VPR9c9McwalXsAf4k9b7e/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #6</h4>
              <iframe 
                src="https://drive.google.com/file/d/13UeHSv0OKA8Z4sw9FzbBcuLe1iliU8hU/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #7</h4>
              <iframe 
                src="https://drive.google.com/file/d/1xgwwfDkqxXkOD3dRyPGNsteCaYPsYr50/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>

            <div className="sample-call-card">
              <h4 className="sample-call-title">📞 Sample Call #8</h4>
              <iframe 
                src="https://drive.google.com/file/d/1aJAmVnQyxlBXCywAoyfAQDjSHyz6kI76/preview" 
                className="sample-call-iframe"
                allow="autoplay"
              ></iframe>
            </div>
          </div>

          <div className="sample-calls-tip">
            <p className="sample-calls-tip-text">
              💡 <strong>Pro Tip:</strong> Listen to how agents build rapport, handle objections, and guide customers toward a decision.
            </p>
            <p className="sample-calls-tip-subtext">
              These are real calls from successful agents - use them as your blueprint for success!
            </p>
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
                <li>You&apos;ll receive an <strong>invoice for your system setup</strong> ($100 - Kixie dialer)</li>
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
              <div style={{marginTop: '15px', textAlign: 'center'}}>
                <img 
                  src="/availability button.png" 
                  alt="Agent EMP Calls Availability Button Location" 
                  style={{
                    maxWidth: '100%', 
                    height: 'auto', 
                    border: '2px solid #ddd', 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} 
                />
                <p style={{fontSize: '12px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>
                  Look for the red "Calls Availability" button in the left sidebar
                </p>
              </div>
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

        {/* Script Resources Section */}
        <div className="process-section script-resources-section">
          <h2 className="script-resources-title">📋 Agent Script Resources</h2>
          <p className="script-resources-description">
            Use these proven scripts as your guide during calls. Reference them alongside the sample call recordings above.
          </p>

          <div className="script-resources-grid">
            
            {/* FEX Script */}
            <div className="script-resource-card">
              <div className="script-resource-icon">📞</div>
              <h3 className="script-resource-heading">FEX Script Version OC24</h3>
              <p className="script-resource-description">Complete call opening and qualification script with step-by-step conversation flow</p>
              <a 
                href="https://docs.google.com/document/d/1_jRbhvElrUBePuscowpppIxkS5LeeXFlNStktnfdRZ0/edit?usp=sharing"
                target="_blank"
                className="script-resource-button"
              >
                📄 View FEX Script
              </a>
            </div>

            {/* Presentation Script */}
            <div className="script-resource-card">
              <div className="script-resource-icon">🎯</div>
              <h3 className="script-resource-heading">Presentation Script & Framework</h3>
              <p className="script-resource-description">Comprehensive sales methodology covering Trust, Need, and Urgency with detailed qualification questions</p>
              <a 
                href="https://docs.google.com/document/d/1MNadIVd-9Vd-ae6GVZWMgITAK8PLo3IVNGknrAfTry4/edit?usp=sharing"
                target="_blank"
                className="script-resource-button"
              >
                📄 View Presentation Script
              </a>
            </div>
          </div>

          <div className="script-resources-tip">
            <p className="script-resources-tip-text">
              💡 <strong>How to Use These Scripts:</strong> These are frameworks, not word-for-word requirements. Adapt the language to your natural speaking style while maintaining the structure and key points.
            </p>
            <p className="script-resources-tip-subtext">
              Listen to the sample calls above to hear how successful agents use these scripts in real conversations!
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>All information provided is private and securely protected.</p>
      </div>
    </div>
  );
}

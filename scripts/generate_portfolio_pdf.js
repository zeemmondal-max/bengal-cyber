const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Helper to convert local image to base64 Data URI
function getBase64Image(relPath) {
  const fullPath = path.join(publicDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return '';
  }
  const ext = path.extname(fullPath).toLowerCase();
  let mime = 'image/jpeg';
  if (ext === '.png') mime = 'image/png';
  else if (ext === '.svg') mime = 'image/svg+xml';
  else if (ext === '.webp') mime = 'image/webp';
  else if (ext === '.ico') mime = 'image/x-icon';

  const data = fs.readFileSync(fullPath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

console.log('Loading assets...');
const logoImg = getBase64Image('logo.png');
const founderImg = getBase64Image('founder.jpg');
const babulImg = getBase64Image('babul-hossen.jpg');
const zereenImg = getBase64Image('zereen-mondal.jpg');
const ismahileImg = getBase64Image('ismahile-hossain.jpg');
const enamImg = getBase64Image('enam-hossain.jpg');

const karizmaImg = getBase64Image('projects/karizma-care-thumb.jpg');
const cancerAnswerImg = getBase64Image('projects/cancer-answer-thumb.jpg');
const bengalGloryImg = getBase64Image('projects/bengal-glory-mockup.png');
const evaIqraImg = getBase64Image('projects/eva-iqra-motors.jpg');
const athenaLogo = getBase64Image('brands/brand7.png');
const tianasLogo = getBase64Image('brands/brand1.png');

const ictLogo = getBase64Image('logos/ict.png');
const basisLogo = getBase64Image('logos/basis.jpg');
const fbcciLogo = getBase64Image('logos/fbcci.png');
const smeLogo = getBase64Image('logos/sme.jpg');

const brand2 = getBase64Image('brands/brand2.png');
const brand3 = getBase64Image('brands/brand3.jpg');
const brand4 = getBase64Image('brands/brand4.jpg');
const brand5 = getBase64Image('brands/brand5.jpg');
const brand6 = getBase64Image('brands/brand6.jpg');
const brand8 = getBase64Image('brands/brand8.jpg');

console.log('Building HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bengal Cyber - Business Portfolio & Corporate Profile</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background-color: #ffffff;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .page {
      width: 210mm;
      height: 297mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      break-after: page;
      background: #ffffff;
      padding: 16mm 18mm 14mm 18mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Page Header & Footer */
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 3.5mm;
      border-bottom: 1.5px solid #e2e8f0;
      margin-bottom: 5mm;
    }
    .header-logo {
      height: 7mm;
      width: auto;
      object-fit: contain;
    }
    .header-meta {
      font-size: 8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ea580c;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3.5mm;
      border-top: 1.5px solid #e2e8f0;
      margin-top: 5mm;
      font-size: 7.5pt;
      color: #64748b;
      font-weight: 500;
    }
    .page-footer .footer-brand {
      font-weight: 700;
      color: #0f172a;
    }
    .page-footer .footer-contact {
      color: #ea580c;
      font-weight: 600;
    }

    /* Typography & Utilities */
    .section-tag {
      display: inline-block;
      font-size: 7.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #ea580c;
      background: rgba(234, 88, 12, 0.08);
      padding: 3px 10px;
      border-radius: 9999px;
      margin-bottom: 3mm;
      border: 1px solid rgba(234, 88, 12, 0.2);
    }
    .section-title {
      font-size: 20pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      line-height: 1.15;
      margin-bottom: 2.5mm;
      font-family: 'Space Grotesk', sans-serif;
    }
    .section-title span {
      color: #ea580c;
    }
    .section-desc {
      font-size: 9.5pt;
      color: #475569;
      line-height: 1.5;
      margin-bottom: 5mm;
    }

    /* COVER PAGE SPECIFIC */
    .cover-page {
      background: linear-gradient(135deg, #070b14 0%, #0d1527 50%, #080d19 100%);
      color: #ffffff;
      padding: 22mm 20mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .cover-glow {
      position: absolute;
      width: 140mm;
      height: 140mm;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(234, 88, 12, 0.25) 0%, rgba(251, 146, 60, 0.05) 50%, transparent 70%);
      top: -30mm;
      right: -30mm;
      pointer-events: none;
    }
    .cover-glow-2 {
      position: absolute;
      width: 120mm;
      height: 120mm;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
      bottom: -20mm;
      left: -20mm;
      pointer-events: none;
    }
    .cover-top {
      position: relative;
      z-index: 10;
    }
    .cover-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(234, 88, 12, 0.4);
      border-radius: 9999px;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #fcba32;
      margin-bottom: 8mm;
    }
    .cover-badge-dot {
      width: 7px;
      height: 7px;
      background: #ea580c;
      border-radius: 50%;
      box-shadow: 0 0 8px #ea580c;
    }
    .cover-logo {
      height: 14mm;
      margin-bottom: 12mm;
      filter: brightness(0) invert(1);
    }
    .cover-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 34pt;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -1px;
      margin-bottom: 6mm;
      color: #ffffff;
    }
    .cover-title span {
      background: linear-gradient(90deg, #ea580c, #fb923c, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .cover-sub {
      font-size: 12pt;
      line-height: 1.6;
      color: #94a3b8;
      max-width: 145mm;
      margin-bottom: 10mm;
      font-weight: 400;
    }
    .cover-highlights {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.5mm;
      margin-bottom: 8mm;
    }
    .cover-stat-box {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4mm 3mm;
      border-radius: 4mm;
      text-align: center;
    }
    .cover-stat-val {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16pt;
      font-weight: 800;
      color: #fb923c;
      margin-bottom: 1mm;
    }
    .cover-stat-lbl {
      font-size: 7pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #cbd5e1;
    }
    .cover-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 5mm;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: relative;
      z-index: 10;
    }
    .cover-footer-info {
      font-size: 8pt;
      color: #94a3b8;
      line-height: 1.5;
    }
    .cover-footer-info strong {
      color: #ffffff;
      font-weight: 700;
    }
    .cover-footer-right {
      text-align: right;
      font-size: 8pt;
      color: #ea580c;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    /* GRID & CARDS */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5mm;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4mm;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.5mm;
    }

    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4mm;
      padding: 4.5mm;
      position: relative;
    }
    .card-title {
      font-size: 11pt;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 2mm;
      font-family: 'Space Grotesk', sans-serif;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .card-icon-badge {
      width: 7mm;
      height: 7mm;
      border-radius: 2mm;
      background: #ea580c;
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 8pt;
      font-weight: 800;
    }
    .card-body {
      font-size: 8pt;
      color: #475569;
      line-height: 1.45;
    }
    .card-list {
      list-style: none;
      margin-top: 2.5mm;
    }
    .card-list li {
      position: relative;
      padding-left: 4.5mm;
      font-size: 7.8pt;
      color: #334155;
      margin-bottom: 1.5mm;
      line-height: 1.35;
    }
    .card-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #ea580c;
      font-weight: 800;
      font-size: 7.5pt;
    }

    /* METRIC CARDS */
    .metric-card {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #ffffff;
      border-radius: 4mm;
      padding: 5mm;
      border: 1px solid rgba(234, 88, 12, 0.3);
      text-align: center;
    }
    .metric-number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 22pt;
      font-weight: 800;
      color: #fb923c;
      line-height: 1;
      margin-bottom: 1.5mm;
    }
    .metric-label {
      font-size: 8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #e2e8f0;
      margin-bottom: 1mm;
    }
    .metric-sub {
      font-size: 7pt;
      color: #94a3b8;
      line-height: 1.3;
    }

    /* PROCESS STEPS */
    .process-step {
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      border-radius: 4mm;
      padding: 4.5mm;
      position: relative;
      border-top: 4px solid #ea580c;
    }
    .step-number {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16pt;
      font-weight: 800;
      color: #ea580c;
      margin-bottom: 1.5mm;
    }
    .step-title {
      font-size: 10pt;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1.5mm;
    }
    .step-desc {
      font-size: 7.8pt;
      color: #64748b;
      line-height: 1.4;
    }

    /* CASE STUDIES */
    .case-card {
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      border-radius: 4mm;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .case-img-box {
      height: 38mm;
      width: 100%;
      background: #0f172a;
      position: relative;
      overflow: hidden;
    }
    .case-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .case-tag {
      position: absolute;
      top: 3mm;
      left: 3mm;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-size: 6.5pt;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .case-content {
      padding: 4mm;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .case-title {
      font-size: 10.5pt;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 1.5mm;
      font-family: 'Space Grotesk', sans-serif;
    }
    .case-desc {
      font-size: 7.5pt;
      color: #475569;
      line-height: 1.4;
      margin-bottom: 2.5mm;
    }
    .case-metrics {
      display: flex;
      gap: 2mm;
      margin-top: auto;
      border-top: 1px solid #f1f5f9;
      padding-top: 2.5mm;
    }
    .case-metric-pill {
      background: #fff7ed;
      border: 1px solid #ffedd5;
      color: #c2410c;
      font-size: 6.8pt;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 9999px;
    }

    /* TEAM PROFILES */
    .team-card {
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      border-radius: 4mm;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .team-img-box {
      width: 100%;
      height: 38mm;
      background: #e2e8f0;
      position: relative;
      overflow: hidden;
    }
    .team-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
    .team-badge {
      position: absolute;
      top: 2.5mm;
      right: 2.5mm;
      background: #ea580c;
      color: #ffffff;
      font-size: 6.5pt;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .team-content {
      padding: 3.5mm;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    }
    .team-dept {
      font-size: 6.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ea580c;
      margin-bottom: 0.5mm;
    }
    .team-name {
      font-size: 10pt;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.2;
      margin-bottom: 0.5mm;
    }
    .team-role {
      font-size: 7.5pt;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 2mm;
    }
    .team-bio {
      font-size: 7.2pt;
      color: #475569;
      line-height: 1.4;
      margin-bottom: 2.5mm;
    }
    .team-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5mm;
      border-top: 1px solid #f1f5f9;
      padding-top: 2mm;
    }
    .team-tag {
      font-size: 6.2pt;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      color: #475569;
      padding: 1px 6px;
      border-radius: 9999px;
      font-weight: 600;
    }

    /* FOUNDER BOX */
    .founder-box {
      background: linear-gradient(135deg, #0a0f1d, #0f172a);
      color: #ffffff;
      border-radius: 5mm;
      padding: 6mm 7mm;
      display: flex;
      gap: 6mm;
      align-items: center;
      border: 1px solid rgba(234, 88, 12, 0.4);
      margin-bottom: 5mm;
    }
    .founder-img-wrap {
      width: 32mm;
      height: 38mm;
      border-radius: 3.5mm;
      overflow: hidden;
      border: 2px solid #ea580c;
      flex-shrink: 0;
    }
    .founder-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .founder-text {
      flex: 1;
    }
    .founder-badge {
      display: inline-block;
      font-size: 7pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #ea580c;
      margin-bottom: 1.5mm;
    }
    .founder-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 15pt;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 1mm;
    }
    .founder-title {
      font-size: 8.5pt;
      color: #fdba74;
      font-weight: 600;
      margin-bottom: 2.5mm;
    }
    .founder-quote {
      font-size: 8pt;
      color: #cbd5e1;
      line-height: 1.5;
      font-style: italic;
    }

    /* LOGO BAR */
    .logo-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 3.5mm;
      padding: 3mm 6mm;
      margin-top: 4mm;
    }
    .strip-logo {
      height: 7.5mm;
      max-width: 25mm;
      object-fit: contain;
      filter: grayscale(1);
      opacity: 0.75;
    }

    /* CONTACT BOX */
    .contact-cta {
      background: linear-gradient(135deg, #0a0f1d 0%, #1e293b 100%);
      border: 2px solid #ea580c;
      color: #ffffff;
      border-radius: 5mm;
      padding: 6mm 8mm;
      text-align: center;
      margin-top: 4mm;
    }
    .contact-cta-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 15pt;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 2mm;
    }
    .contact-cta-sub {
      font-size: 8.5pt;
      color: #cbd5e1;
      max-width: 130mm;
      margin: 0 auto 4mm auto;
      line-height: 1.4;
    }
    .contact-details-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
      text-align: left;
    }
    .contact-detail-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 3mm;
      padding: 3mm 4mm;
    }
    .contact-detail-lbl {
      font-size: 6.8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #fdba74;
      margin-bottom: 0.5mm;
    }
    .contact-detail-val {
      font-size: 8pt;
      font-weight: 600;
      color: #ffffff;
    }
  </style>
</head>
<body>

  <!-- ======================================================================= -->
  <!-- PAGE 1: LUXURY COVER PAGE                                               -->
  <!-- ======================================================================= -->
  <div class="page cover-page">
    <div class="cover-glow"></div>
    <div class="cover-glow-2"></div>
    
    <div class="cover-top">
      <div class="cover-badge">
        <span class="cover-badge-dot"></span>
        Official Corporate Profile & Business Portfolio
      </div>
      <div>
        <img class="cover-logo" src="${logoImg}" alt="Bengal Cyber" />
      </div>
      <h1 class="cover-title">
        Architecting <span>Digital Empires</span> in Bangladesh.
      </h1>
      <p class="cover-sub">
        High-Performance Website Design, Conversion-Obsessed Media Buying, and Viral Social Media Marketing Engineered for Market Dominance.
      </p>

      <div class="cover-highlights">
        <div class="cover-stat-box">
          <div class="cover-stat-val">50M+</div>
          <div class="cover-stat-lbl">Impressions Delivered</div>
        </div>
        <div class="cover-stat-box">
          <div class="cover-stat-val">4.8X</div>
          <div class="cover-stat-lbl">Average Client ROAS</div>
        </div>
        <div class="cover-stat-box">
          <div class="cover-stat-val">99.8%</div>
          <div class="cover-stat-lbl">Client Retention Rate</div>
        </div>
        <div class="cover-stat-box">
          <div class="cover-stat-val">24/7</div>
          <div class="cover-stat-lbl">Lead & Support Desk</div>
        </div>
      </div>
    </div>

    <div class="cover-footer">
      <div class="cover-footer-info">
        <strong>Bengal Cyber</strong> • Leading Full-Service Digital Marketing & Web Agency<br>
        Headquarters: The Business Center, Gulshan 1, Dhaka 1212, Bangladesh<br>
        Direct Desk: hello@bengalcyber.com | +880 1901-364583
      </div>
      <div class="cover-footer-right">
        bengalcyber.com
      </div>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 2: EXECUTIVE SUMMARY & CORE METRICS                               -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Executive Summary & Credentials</span>
      </div>

      <span class="section-tag">About Bengal Cyber</span>
      <h2 class="section-title">Engineering <span>Growth</span>, Not Just Campaigns.</h2>
      <p class="section-desc">
        Bengal Cyber is Dhaka's premier growth engineering agency. We bridge cutting-edge computational web engineering with viral social storytelling and quantitative performance media buying. We do not operate on vanity metrics; every dollar spent and every line of code written is measured directly against real business revenue.
      </p>

      <!-- 4 Key Impact Metric Blocks -->
      <div class="grid-4" style="margin-bottom: 5mm;">
        <div class="metric-card">
          <div class="metric-number">50M+</div>
          <div class="metric-label">Total Reach</div>
          <div class="metric-sub">Across Meta, Google & TikTok campaigns in BD</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">4.8x</div>
          <div class="metric-label">Blended ROAS</div>
          <div class="metric-sub">Sustained return on client advertising budgets</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">99.8%</div>
          <div class="metric-label">Retention</div>
          <div class="metric-sub">Continuous long-term monthly partnership rate</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">&lt; 1s</div>
          <div class="metric-label">Page Speeds</div>
          <div class="metric-sub">Next.js static architecture for high conversion</div>
        </div>
      </div>

      <!-- Why Choose Us Grid -->
      <h3 style="font-family:'Space Grotesk',sans-serif; font-size:12pt; font-weight:800; color:#0f172a; margin-bottom:3mm;">
        The Bengal Cyber Advantage
      </h3>
      <div class="grid-2" style="margin-bottom: 4mm;">
        <div class="card">
          <div class="card-title">
            <span class="card-icon-badge">01</span>
            Next.js Full-Stack Engineering
          </div>
          <div class="card-body">
            Unlike traditional agencies using sluggish template builders, we handcraft custom web platforms using Next.js 14, React, and Tailwind CSS. Delivering sub-second load times, flawless SEO rankings, and maximum sales conversion.
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <span class="card-icon-badge">02</span>
            Precision Media Buying & Retargeting
          </div>
          <div class="card-body">
            We operate proprietary audience segmentations across Bangladesh's e-commerce, real estate, automotive, and healthcare sectors. Our multi-stage funnel retargeting ensures minimal ad spend wastage and aggressive ROAS.
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <span class="card-icon-badge">03</span>
            Viral Creative & High-Retention Video
          </div>
          <div class="card-body">
            Our creative directors script, shoot, and edit commercial videos engineered specifically for 3-second hook retention and algorithm velocity on Facebook Reels, YouTube Shorts, and TikTok.
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <span class="card-icon-badge">04</span>
            24/7 Lead Capture & Support Desk
          </div>
          <div class="card-body">
            Traffic without lead follow-up is wasted revenue. Our omnichannel support systems ensure zero unanswered messages, rapid WhatsApp dispatch, and immediate phone qualification for inbound leads.
          </div>
        </div>
      </div>

      <!-- Institutional Badges -->
      <div style="font-size:7.5pt; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:1px; margin-bottom:2mm;">
        Ecosystem & Industry Alignment
      </div>
      <div class="logo-strip">
        <img class="strip-logo" src="${ictLogo}" alt="ICT Division" />
        <img class="strip-logo" src="${basisLogo}" alt="BASIS" />
        <img class="strip-logo" src="${fbcciLogo}" alt="FBCCI" />
        <img class="strip-logo" src="${smeLogo}" alt="SME Foundation" />
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 02</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 3: PHILOSOPHY, MISSION & CORE VALUES (ABOUT US)                    -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Company Philosophy & Vision</span>
      </div>

      <span class="section-tag">Core Principles</span>
      <h2 class="section-title">Architecting <span>Digital Legacies</span> in Bangladesh.</h2>
      <p class="section-desc">
        Bengal Cyber was established with a clear mandate: to free forward-thinking businesses from outdated marketing practices and equip them with enterprise-grade web applications and high-velocity digital sales engines.
      </p>

      <!-- Mission & Vision Cards -->
      <div class="grid-2" style="margin-bottom: 5mm;">
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color:#ffffff; padding:6mm; border-radius:4mm; border-left: 4px solid #ea580c;">
          <div style="font-size:8pt; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:#fb923c; margin-bottom:1.5mm;">
            Our Mission
          </div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:12.5pt; font-weight:800; margin-bottom:2mm;">
            Empowering Market Leaders
          </div>
          <p style="font-size:8.2pt; color:#cbd5e1; line-height:1.5;">
            To engineer conversion-obsessed web platforms and viral digital marketing campaigns that accelerate revenue, solidify brand authority, and turn ambitious Bangladeshi businesses into household names.
          </p>
        </div>

        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color:#ffffff; padding:6mm; border-radius:4mm; border-left: 4px solid #fbbf24;">
          <div style="font-size:8pt; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:#fde047; margin-bottom:1.5mm;">
            Our Vision
          </div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:12.5pt; font-weight:800; margin-bottom:2mm;">
            Setting the Gold Standard
          </div>
          <p style="font-size:8.2pt; color:#cbd5e1; line-height:1.5;">
            To be recognized as Bangladesh's most technically sophisticated and ROI-focused digital engineering agency—setting global benchmarks for creative boldness, algorithmic precision, and fiscal governance.
          </p>
        </div>
      </div>

      <!-- Core Values 4-Grid -->
      <h3 style="font-family:'Space Grotesk',sans-serif; font-size:12pt; font-weight:800; color:#0f172a; margin-bottom:3mm;">
        Guiding Core Values
      </h3>
      <div class="grid-4" style="margin-bottom: 5mm;">
        <div class="card">
          <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; margin-bottom:1mm;">01 • Integrity</div>
          <div style="font-size:9.5pt; font-weight:700; color:#0f172a; margin-bottom:1.5mm;">Radical Truth</div>
          <div style="font-size:7.5pt; color:#64748b; line-height:1.4;">
            Transparent client reporting, verified ad spend invoices, and authentic attribution without vanity inflating.
          </div>
        </div>
        <div class="card">
          <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; margin-bottom:1mm;">02 • Speed</div>
          <div style="font-size:9.5pt; font-weight:700; color:#0f172a; margin-bottom:1.5mm;">Computational Agility</div>
          <div style="font-size:7.5pt; color:#64748b; line-height:1.4;">
            Next.js web architectures with sub-second response times and rapid iterative ad testing within 24 hours.
          </div>
        </div>
        <div class="card">
          <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; margin-bottom:1mm;">03 • Boldness</div>
          <div style="font-size:9.5pt; font-weight:700; color:#0f172a; margin-bottom:1.5mm;">Creative Prestige</div>
          <div style="font-size:7.5pt; color:#64748b; line-height:1.4;">
            We craft visual identities and marketing copy that demand immediate attention and outclass industry competitors.
          </div>
        </div>
        <div class="card">
          <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; margin-bottom:1mm;">04 • Compliance</div>
          <div style="font-size:9.5pt; font-weight:700; color:#0f172a; margin-bottom:1.5mm;">Airtight Governance</div>
          <div style="font-size:7.5pt; color:#64748b; line-height:1.4;">
            Full regulatory compliance with Bangladesh tax, VAT, intellectual property, and advertising standards.
          </div>
        </div>
      </div>

      <!-- Bangladesh Market Strategic Context -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:4mm; padding:4mm 5mm;">
        <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; letter-spacing:1px; margin-bottom:1mm;">
          Local Market Mastery
        </div>
        <p style="font-size:8pt; color:#475569; line-height:1.45;">
          With over 70+ million active internet users in Bangladesh and an explosive shift towards mobile-first e-commerce and digital services, Bengal Cyber builds systems tuned specifically for local payment gateways (bKash, Nagad), localized Bengali/English copy psychographics, and high-intent customer retention across Dhaka, Chittagong, Sylhet, and beyond.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 03</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 4: SERVICES SPECTRUM — PART 1 (WEB & PERFORMANCE ADS)              -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Service Spectrum • Web & Performance Media</span>
      </div>

      <span class="section-tag">Core Capabilities</span>
      <h2 class="section-title">Engineered for <span>Revenue Conversion</span>.</h2>
      <p class="section-desc">
        Our core service departments operate in tight synchronization, creating a closed-loop growth machine where web design, creative assets, and paid traffic reinforce each other.
      </p>

      <!-- Department 1: Web Design & Development -->
      <div style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:4mm; padding:5mm; margin-bottom:5mm; border-left:5px solid #ea580c; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:2mm;">
          <div>
            <span style="font-size:7.5pt; font-weight:800; text-transform:uppercase; color:#ea580c; letter-spacing:1px;">Department 01</span>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:13pt; font-weight:800; color:#0f172a;">Custom Website Design & Engineering</h3>
          </div>
          <span style="background:#fff7ed; border:1px solid #ffedd5; color:#ea580c; font-size:7pt; font-weight:700; padding:2px 8px; border-radius:9999px;">Next.js & React</span>
        </div>
        <p style="font-size:8pt; color:#475569; line-height:1.45; margin-bottom:3mm;">
          We build custom, enterprise-grade web applications engineered from scratch. Say goodbye to bloated WordPress plugins, sluggish page loads, and fragile templates. Our web applications deliver sub-second response times, rock-solid security, and intuitive buyer funnels.
        </p>
        <div class="grid-2">
          <ul class="card-list">
            <li><strong>Next.js 14 App Architecture:</strong> Lightning-fast static pre-rendering with zero runtime overhead.</li>
            <li><strong>E-Commerce Engines:</strong> Custom product showcases, one-click WhatsApp checkouts, and bKash/Nagad integration.</li>
            <li><strong>Core Web Vitals Optimization:</strong> 95+ Google PageSpeed scores for mobile and desktop.</li>
          </ul>
          <ul class="card-list">
            <li><strong>Search Engine Dominance (SEO):</strong> Automated JSON-LD structured schemas, semantic HTML, and sitemaps.</li>
            <li><strong>Conversion-Focused UI/UX:</strong> Mobile-docked sticky navigation, dynamic islands, and thumb-friendly touch targets.</li>
            <li><strong>Security Hardened:</strong> Anti-scraping, strict headers, SSL enforcement, and zero database vulnerabilities.</li>
          </ul>
        </div>
      </div>

      <!-- Department 2: Performance Media Buying -->
      <div style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:4mm; padding:5mm; border-left:5px solid #f97316; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:2mm;">
          <div>
            <span style="font-size:7.5pt; font-weight:800; text-transform:uppercase; color:#f97316; letter-spacing:1px;">Department 02</span>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:13pt; font-weight:800; color:#0f172a;">Performance Media Buying & Paid Advertising</h3>
          </div>
          <span style="background:#fff7ed; border:1px solid #ffedd5; color:#c2410c; font-size:7pt; font-weight:700; padding:2px 8px; border-radius:9999px;">Meta & Google Certified</span>
        </div>
        <p style="font-size:8pt; color:#475569; line-height:1.45; margin-bottom:3mm;">
          We manage full-scale paid advertising campaigns across Meta (Facebook & Instagram), Google Search, YouTube, and TikTok. Our media buyers use quantitative testing matrices to identify high-intent buyer cohorts in Bangladesh and scale budgets profitably.
        </p>
        <div class="grid-2">
          <ul class="card-list">
            <li><strong>Meta Ads Scaling:</strong> Custom audiences, Lookalikes (LAL), Advantage+ campaigns, and deep behavioral targeting.</li>
            <li><strong>Google Search & Display Ads:</strong> High-intent commercial keyword capture with negative match filters.</li>
            <li><strong>Dynamic Retargeting Matrices:</strong> Multi-tiered remarketing funnels recovering abandoned checkouts.</li>
          </ul>
          <ul class="card-list">
            <li><strong>CBO Budget Optimization:</strong> Automated budget distribution towards winning creative ad variations.</li>
            <li><strong>Pixel & CAPI Server Tracking:</strong> Conversions API setup overcoming iOS privacy and browser ad blockers.</li>
            <li><strong>Bi-Weekly Attribution Reports:</strong> Transparent reporting on ROAS, CAC, CTR, and blended profitability.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 04</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 5: SERVICES SPECTRUM — PART 2 (SOCIAL, CREATIVE, VIDEO, SUPPORT)   -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Service Spectrum • Creative, Video & Support</span>
      </div>

      <span class="section-tag">Brand Scaling</span>
      <h2 class="section-title">Creative <span>Impact</span> & 24/7 Conversion.</h2>
      <p class="section-desc">
        Attention is the new global currency. We combine prestige visual branding, high-retention video production, and round-the-clock lead conversion to ensure no prospect is left behind.
      </p>

      <div class="grid-2" style="margin-bottom: 4mm;">
        <!-- Service 3: Social Media Marketing -->
        <div class="card" style="border-top:3.5px solid #ea580c;">
          <div class="card-title">
            <span class="card-icon-badge">03</span>
            Social Media Marketing
          </div>
          <div class="card-body">
            Comprehensive page management, viral editorial calendars, and community orchestration across Facebook, Instagram, and LinkedIn.
          </div>
          <ul class="card-list">
            <li>Monthly strategic content calendars.</li>
            <li>High-engagement captions & viral hooks.</li>
            <li>Active comment moderation & response.</li>
            <li>Influencer alignment & PR seeding.</li>
          </ul>
        </div>

        <!-- Service 4: Brand & Graphic Design -->
        <div class="card" style="border-top:3.5px solid #f97316;">
          <div class="card-title">
            <span class="card-icon-badge">04</span>
            Brand & Graphic Design
          </div>
          <div class="card-body">
            Prestige visual identity design that commands market authority and elevates your business above competitors in Bangladesh.
          </div>
          <ul class="card-list">
            <li>Complete brand books & typography guides.</li>
            <li>High-converting social ad creatives.</li>
            <li>Corporate packaging & print collaterals.</li>
            <li>Figma UI/UX wireframes & design systems.</li>
          </ul>
        </div>

        <!-- Service 5: Viral Video & Reels -->
        <div class="card" style="border-top:3.5px solid #ea580c;">
          <div class="card-title">
            <span class="card-icon-badge">05</span>
            Viral Video & Reels
          </div>
          <div class="card-body">
            Cinematic product commercials, UGC-style viral videos, and short-form Reels edited for maximum audience retention and click-throughs.
          </div>
          <ul class="card-list">
            <li>High-retention 3-second hook crafting.</li>
            <li>Professional color grading & audio mastering.</li>
            <li>Motion graphics & dynamic kinetic captions.</li>
            <li>Short-form vertical video (Reels, TikTok).</li>
          </ul>
        </div>

        <!-- Service 6: 24/7 Customer Support -->
        <div class="card" style="border-top:3.5px solid #f97316;">
          <div class="card-title">
            <span class="card-icon-badge">06</span>
            24/7 Support & Lead Desk
          </div>
          <div class="card-body">
            Human-led, omnichannel lead conversion systems that engage social inquiries within minutes and qualify high-intent sales opportunities.
          </div>
          <ul class="card-list">
            <li>Instant live chat & Messenger handling.</li>
            <li>WhatsApp Business API automated routing.</li>
            <li>CRM pipeline lead updating & tag tracking.</li>
            <li>E-Commerce order verification & dispatching.</li>
          </ul>
        </div>
      </div>

      <!-- Service Guarantee Box -->
      <div style="background:linear-gradient(135deg, #0f172a, #1e293b); color:#ffffff; border-radius:4mm; padding:4mm 5mm; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:7.5pt; font-weight:800; color:#fb923c; text-transform:uppercase; letter-spacing:1px; margin-bottom:1mm;">
            The Bengal Cyber Guarantee
          </div>
          <div style="font-size:9.5pt; font-weight:700;">Full Transparency • Zero Hidden Markups • Direct Access to Department Heads</div>
        </div>
        <div style="text-align:right;">
          <span style="background:#ea580c; color:#ffffff; font-size:7.5pt; font-weight:800; padding:3px 10px; border-radius:9999px;">ISO-Ready Delivery</span>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 05</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 6: THE 4-STAGE GROWTH METHODOLOGY                                  -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Execution Framework & Roadmap</span>
      </div>

      <span class="section-tag">Proven Methodology</span>
      <h2 class="section-title">The 4-Stage <span>Growth Architecture</span>.</h2>
      <p class="section-desc">
        We do not rely on guesswork. Every client partnership follows our standardized, repeatable four-stage framework designed to take businesses from baseline to market dominance.
      </p>

      <div class="grid-2" style="margin-bottom: 5mm;">
        <!-- Step 1 -->
        <div class="process-step">
          <div class="step-number">PHASE 01</div>
          <div class="step-title">Discovery & Strategy Audit</div>
          <div class="step-desc">
            We conduct an exhaustive forensic audit of your existing digital assets: website speed, historical ad account data, competitor positioning, unit economics, and customer avatars in Bangladesh.
          </div>
          <ul class="card-list" style="margin-top:2.5mm;">
            <li>Full technical UX & SEO benchmark audit.</li>
            <li>Ad account audit & wasted spend identification.</li>
            <li>Target audience avatar & psychographic profiling.</li>
            <li>Financial KPI setting (Target CAC, ROAS & CPL).</li>
          </ul>
        </div>

        <!-- Step 2 -->
        <div class="process-step">
          <div class="step-number">PHASE 02</div>
          <div class="step-title">Creative & Technical Architecture</div>
          <div class="step-desc">
            We engineer high-converting web funnels, establish server-side tracking (Meta CAPI & Google Analytics 4), and produce high-impact visual creatives and commercial video hooks.
          </div>
          <ul class="card-list" style="margin-top:2.5mm;">
            <li>Next.js web application engineering & staging.</li>
            <li>High-resolution video shooting & motion grading.</li>
            <li>Tracking pixel, CAPI & CRM API integration.</li>
            <li>High-converting landing page copywriting.</li>
          </ul>
        </div>

        <!-- Step 3 -->
        <div class="process-step">
          <div class="step-number">PHASE 03</div>
          <div class="step-title">Multi-Channel Campaign Launch</div>
          <div class="step-desc">
            We launch structured paid traffic campaigns across Meta, Google, and TikTok using quantitative split-testing matrices. Our 24/7 lead desk activates to handle inbound inquiries immediately.
          </div>
          <ul class="card-list" style="margin-top:2.5mm;">
            <li>Simultaneous multi-cohort audience testing.</li>
            <li>Dynamic ad creative rotation & A/B testing.</li>
            <li>24/7 live chat & WhatsApp lead qualification.</li>
            <li>Initial conversion rate monitoring & bid management.</li>
          </ul>
        </div>

        <!-- Step 4 -->
        <div class="process-step">
          <div class="step-number">PHASE 04</div>
          <div class="step-title">Iterative Scaling & Optimization</div>
          <div class="step-desc">
            Winning campaigns receive aggressive budget scaling. We continuously refine copy, retarget mid-funnel prospects, optimize landing pages, and protect blended client profitability.
          </div>
          <ul class="card-list" style="margin-top:2.5mm;">
            <li>Vertical & horizontal budget scaling (CBO).</li>
            <li>Exclusion list updating to eliminate ad fatigue.</li>
            <li>LTV expansion & VIP customer retargeting funnels.</li>
            <li>Fortnightly executive performance review decks.</li>
          </ul>
        </div>
      </div>

      <!-- Roadmap Timeline Bar -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:4mm; padding:4mm 5mm;">
        <div style="font-size:8pt; font-weight:800; color:#ea580c; text-transform:uppercase; letter-spacing:1px; margin-bottom:1mm;">
          Continuous Partnership Lifecycle
        </div>
        <p style="font-size:8pt; color:#475569; line-height:1.45;">
          Our relationship does not end at campaign launch. We operate as your dedicated external Chief Marketing Officer and Technical Director, meeting bi-weekly to analyze revenue dashboards and strategize the next quarter's growth initiatives.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 06</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 7: CASE STUDIES & CLIENT TRANSFORMATIONS — PART 1                  -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Case Studies & Verified Results • Part 1</span>
      </div>

      <span class="section-tag">Proven Results</span>
      <h2 class="section-title">Client Success <span>Stories</span>.</h2>
      <p class="section-desc">
        Explore real-world case studies demonstrating how Bengal Cyber accelerates revenue, engineers custom web platforms, and executes viral marketing across Bangladesh.
      </p>

      <div class="grid-3" style="margin-bottom: 4mm;">
        <!-- Case 1: Karizma Care -->
        <div class="case-card">
          <div class="case-img-box">
            <img class="case-img" src="${karizmaImg}" alt="Karizma Care" />
            <span class="case-tag">Viral Video Marketing</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#ea580c; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">Karizma Care</div>
              <div class="case-title">First Mermaid Soap Launch</div>
              <div class="case-desc">
                High-resolution promotional video production and viral storytelling introducing Bangladesh's first Seaweed Mermaid Soap to the market.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">300K+ Reach</span>
              <span class="case-metric-pill">Product Launch</span>
              <span class="case-metric-pill">Viral ROI</span>
            </div>
          </div>
        </div>

        <!-- Case 2: Athena's Furniture -->
        <div class="case-card">
          <div class="case-img-box" style="background: radial-gradient(circle, #1877F2 0%, #0d1e3d 100%); display:flex; align-items:center; justify-content:center;">
            <img style="width:24mm; height:24mm; object-fit:contain; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3));" src="${athenaLogo}" alt="Athena's Furniture" />
            <span class="case-tag">Meta Ads & Growth Partner</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#1877F2; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">Athena's Furniture BD</div>
              <div class="case-title">E-Commerce Furniture Scale</div>
              <div class="case-desc">
                End-to-end social media management and high-ROAS Meta catalog advertising driving showroom visits and direct luxury furniture orders.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">4.5x ROAS</span>
              <span class="case-metric-pill">Showroom Growth</span>
              <span class="case-metric-pill">High AOV</span>
            </div>
          </div>
        </div>

        <!-- Case 3: TIANAS BD -->
        <div class="case-card">
          <div class="case-img-box" style="background: radial-gradient(circle, #ea580c 0%, #1c1326 100%); display:flex; align-items:center; justify-content:center;">
            <img style="width:24mm; height:24mm; object-fit:contain; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3));" src="${tianasLogo}" alt="TIANAS" />
            <span class="case-tag">Performance Fashion Ads</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#ea580c; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">TIANAS BD</div>
              <div class="case-title">Fashion Brand Retargeting</div>
              <div class="case-desc">
                Dynamic conversion retargeting, multi-angle fashion showcase creatives, and automated abandoned cart recovery across Bangladesh.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">3.8x Blended ROAS</span>
              <span class="case-metric-pill">E-Comm Scale</span>
              <span class="case-metric-pill">High Volume</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Case Study Summary Bar -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:4mm; padding:3.5mm 5mm;">
        <div style="font-size:7.5pt; font-weight:800; color:#ea580c; text-transform:uppercase; letter-spacing:1px; margin-bottom:1mm;">
          Strategic Takeaway
        </div>
        <p style="font-size:7.8pt; color:#475569; line-height:1.45;">
          Across FMCG skincare, luxury furniture, and boutique fashion, our unified methodology transforms paid traffic into profitable customer acquisition, proving that strategic media buying and video creative outclass generic boost campaigns every time.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 07</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 8: CASE STUDIES & CLIENT TRANSFORMATIONS — PART 2                  -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Case Studies & Verified Results • Part 2</span>
      </div>

      <span class="section-tag">Technical & Enterprise</span>
      <h2 class="section-title">Enterprise Web & <span>Healthcare</span> Authority.</h2>
      <p class="section-desc">
        From custom corporate web architectures to specialized medical video production and automotive lead generation, our execution spans critical commercial sectors.
      </p>

      <div class="grid-3" style="margin-bottom: 4mm;">
        <!-- Case 4: Bengal Glory Ltd -->
        <div class="case-card">
          <div class="case-img-box">
            <img class="case-img" src="${bengalGloryImg}" alt="Bengal Glory Ltd" />
            <span class="case-tag">Custom Web Engineering</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#ea580c; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">Bengal Glory Ltd</div>
              <div class="case-title">Corporate Web Platform</div>
              <div class="case-desc">
                High-performance Next.js custom website engineered with international corporate branding, dynamic service catalog, and sub-second page loads.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">Next.js 14</span>
              <span class="case-metric-pill">98% PageSpeed</span>
              <span class="case-metric-pill">B2B Portal</span>
            </div>
          </div>
        </div>

        <!-- Case 5: Cancer Answer -->
        <div class="case-card">
          <div class="case-img-box">
            <img class="case-img" src="${cancerAnswerImg}" alt="Cancer Answer" />
            <span class="case-tag">Medical Video Production</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#00a859; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">Cancer Answer</div>
              <div class="case-title">Healthcare Video Authority</div>
              <div class="case-desc">
                Expert oncologist interviews, patient guidance video production, and compassionate visual medical communication that built trusted health authority.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">Medical Authority</span>
              <span class="case-metric-pill">Patient Trust</span>
              <span class="case-metric-pill">Broadcast Quality</span>
            </div>
          </div>
        </div>

        <!-- Case 6: Eva Iqra Motors -->
        <div class="case-card">
          <div class="case-img-box">
            <img class="case-img" src="${evaIqraImg}" alt="Eva Iqra Motors" />
            <span class="case-tag">Automotive Social Ads</span>
          </div>
          <div class="case-content">
            <div>
              <div style="font-size:7pt; color:#1877F2; font-weight:700; text-transform:uppercase; margin-bottom:0.5mm;">Eva Iqra Motors</div>
              <div class="case-title">Automotive Lead Gen</div>
              <div class="case-desc">
                High-intent automotive buyer acquisition funnels, video showcase reels of luxury imported vehicles, and rapid direct message appointment booking.
              </div>
            </div>
            <div class="case-metrics">
              <span class="case-metric-pill">Vehicle Sales</span>
              <span class="case-metric-pill">Low Cost / Lead</span>
              <span class="case-metric-pill">Direct Buyer Inquiries</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cross-Sector Impact -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:4mm; padding:3.5mm 5mm;">
        <div style="font-size:7.5pt; font-weight:800; color:#ea580c; text-transform:uppercase; letter-spacing:1px; margin-bottom:1mm;">
          Cross-Sector Domain Competence
        </div>
        <p style="font-size:7.8pt; color:#475569; line-height:1.45;">
          Our portfolio spans B2B Corporate, FMCG Skincare, E-Commerce Fashion, Healthcare, and Automotive Dealerships. Regardless of your industry vertical, we apply our battle-tested quantitative framework to outposition your competitors.
        </p>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 08</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 9: EXECUTIVE LEADERSHIP TEAM (ABOUT US)                            -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Leadership & Corporate Governance</span>
      </div>

      <span class="section-tag">Executive Board</span>
      <h2 class="section-title">The People Driving <span>Excellence</span>.</h2>
      <p class="section-desc">
        Bengal Cyber is steered by seasoned department heads combining enterprise technical engineering, creative vision, operational agility, and corporate fiscal integrity.
      </p>

      <!-- Founder Spotlight Box -->
      <div class="founder-box">
        <div class="founder-img-wrap">
          <img src="${founderImg}" alt="Zeem Mondal - Founder" />
        </div>
        <div class="founder-text">
          <span class="founder-badge">Founder & Strategic Visionary</span>
          <div class="founder-name">Zeem Mondal</div>
          <div class="founder-title">Founder, Business Consultant & Digital Marketing Expert</div>
          <p class="founder-quote">
            "In a world where generic advertising is ignored, our mission is to build digital infrastructure and viral campaigns so undeniably compelling that our clients become the undisputed market leaders in their industry."
          </p>
        </div>
      </div>

      <!-- Core Department Heads (4 Columns) -->
      <div class="grid-4" style="margin-bottom: 3mm;">
        <!-- 1. Babul Hossen -->
        <div class="team-card">
          <div class="team-img-box">
            <img class="team-img" src="${babulImg}" alt="Babul Hossen" />
            <span class="team-badge">Tech & IT</span>
          </div>
          <div class="team-content">
            <div>
              <div class="team-dept">Technical Leadership</div>
              <div class="team-name">Babul Hossen</div>
              <div class="team-role">IT Head</div>
              <div class="team-bio">
                Leads technical operations, scalable systems architecture, web and app engineering, and robust cybersecurity protocols across client platforms.
              </div>
            </div>
            <div class="team-tags">
              <span class="team-tag">Web Architecture</span>
              <span class="team-tag">Cybersecurity</span>
            </div>
          </div>
        </div>

        <!-- 2. Zereen Mondal -->
        <div class="team-card">
          <div class="team-img-box">
            <img class="team-img" src="${zereenImg}" alt="Zereen Mondal" />
            <span class="team-badge">HR & Culture</span>
          </div>
          <div class="team-content">
            <div>
              <div class="team-dept">People & Culture</div>
              <div class="team-name">Zereen Mondal</div>
              <div class="team-role">HR Head</div>
              <div class="team-bio">
                Directs human resources, talent acquisition, professional development, and organizational culture—fostering high morale and creative excellence.
              </div>
            </div>
            <div class="team-tags">
              <span class="team-tag">Talent Strategy</span>
              <span class="team-tag">Team Morale</span>
            </div>
          </div>
        </div>

        <!-- 3. Ismahile Hossain -->
        <div class="team-card">
          <div class="team-img-box">
            <img class="team-img" src="${ismahileImg}" alt="Ismahile Hossain" />
            <span class="team-badge">Operations</span>
          </div>
          <div class="team-content">
            <div>
              <div class="team-dept">Operations & QA</div>
              <div class="team-name">Ismahile Hossain</div>
              <div class="team-role">Operation Head</div>
              <div class="team-bio">
                Orchestrates agile project execution, cross-department workflows, delivery schedules, and quality assurance for flawless client delivery.
              </div>
            </div>
            <div class="team-tags">
              <span class="team-tag">Agile Delivery</span>
              <span class="team-tag">Quality Assurance</span>
            </div>
          </div>
        </div>

        <!-- 4. Enam Hossain Masud Alom -->
        <div class="team-card">
          <div class="team-img-box">
            <img class="team-img" src="${enamImg}" alt="Enam Hossain Masud Alom" />
            <span class="team-badge">Tax & Audit</span>
          </div>
          <div class="team-content">
            <div>
              <div class="team-dept">Financial Governance</div>
              <div class="team-name">Enam Hossain Masud Alom</div>
              <div class="team-role">Tax and Audit</div>
              <div class="team-bio">
                Directs corporate tax planning, statutory auditing, financial integrity frameworks, and regulatory advisory ensuring airtight fiscal governance.
              </div>
            </div>
            <div class="team-tags">
              <span class="team-tag">Tax Advisory</span>
              <span class="team-tag">Statutory Audit</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 09</span>
      <span class="footer-contact">hello@bengalcyber.com</span>
    </div>
  </div>


  <!-- ======================================================================= -->
  <!-- PAGE 10: CLIENT PARTNERSHIPS & CONTACT INITIATION                       -->
  <!-- ======================================================================= -->
  <div class="page">
    <div>
      <div class="page-header">
        <img class="header-logo" src="${logoImg}" alt="Bengal Cyber" />
        <span class="header-meta">Partnerships & Commercial Engagement</span>
      </div>

      <span class="section-tag">Collaborations</span>
      <h2 class="section-title">Trusted By <span>Ambitious Brands</span>.</h2>
      <p class="section-desc">
        We partner with visionary enterprises, high-growth e-commerce brands, healthcare providers, and industrial leaders across Bangladesh.
      </p>

      <!-- Client Logo Grid -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:4mm; padding:4mm; margin-bottom:5mm;">
        <div style="font-size:7.5pt; font-weight:800; color:#ea580c; text-transform:uppercase; letter-spacing:1px; margin-bottom:3mm; text-align:center;">
          Sample Enterprise Brand Network
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:3mm; align-items:center;">
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${tianasLogo}" alt="TIANAS" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${athenaLogo}" alt="Athena" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand2}" alt="Brand 2" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand3}" alt="Brand 3" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand4}" alt="Brand 4" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand5}" alt="Brand 5" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand6}" alt="Brand 6" />
          </div>
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm; display:flex; align-items:center; justify-content:center; height:15mm;">
            <img style="max-height:10mm; max-width:80%; object-fit:contain;" src="${brand8}" alt="Brand 8" />
          </div>
        </div>
      </div>

      <!-- Institutional Accreditations -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5mm; background:#ffffff; border:1px solid #e2e8f0; border-radius:3mm; padding:2.5mm 5mm;">
        <span style="font-size:7pt; font-weight:800; color:#64748b; text-transform:uppercase;">Institutional Standards</span>
        <img style="height:6mm; object-fit:contain; filter:grayscale(1); opacity:0.8;" src="${ictLogo}" alt="ICT" />
        <img style="height:6mm; object-fit:contain; filter:grayscale(1); opacity:0.8;" src="${basisLogo}" alt="BASIS" />
        <img style="height:6mm; object-fit:contain; filter:grayscale(1); opacity:0.8;" src="${fbcciLogo}" alt="FBCCI" />
        <img style="height:6mm; object-fit:contain; filter:grayscale(1); opacity:0.8;" src="${smeLogo}" alt="SME" />
      </div>

      <!-- Call to Action Box -->
      <div class="contact-cta">
        <h3 class="contact-cta-title">Ready to Dominate Your Industry?</h3>
        <p class="contact-cta-sub">
          Book an executive strategy session with our agency leadership. We will analyze your website, ad accounts, and market competitors to deliver a tailored growth blueprint.
        </p>

        <div class="contact-details-grid">
          <div class="contact-detail-box">
            <div class="contact-detail-lbl">Headquarters (Gulshan)</div>
            <div class="contact-detail-val">The Business Center, Gulshan 1, Dhaka 1212</div>
          </div>
          <div class="contact-detail-box">
            <div class="contact-detail-lbl">Secondary Office (Savar)</div>
            <div class="contact-detail-val">Dream Palace 2, Hemayetpur, Savar, Dhaka</div>
          </div>
          <div class="contact-detail-box">
            <div class="contact-detail-lbl">Direct Consultation</div>
            <div class="contact-detail-val">+880 1901-364583 • hello@bengalcyber.com</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span class="footer-brand">Bengal Cyber • Executive Business Portfolio</span>
      <span>Page 10 • Final</span>
      <span class="footer-contact">https://bengalcyber.com</span>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(rootDir, 'portfolio_document.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log(`HTML generated: ${htmlFilePath}`);

// PDF Destinations
const pdfFileName = 'Bengal_Cyber_Business_Portfolio.pdf';
const outputPdfPath = path.join(rootDir, pdfFileName);
const parentPdfPath = path.join(rootDir, '..', pdfFileName);
const downloadsPdfPath = path.join(rootDir, '..', '..', pdfFileName);
const publicPdfPath = path.join(publicDir, pdfFileName);

console.log('Rendering PDF via Headless Chrome / Edge...');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let browserExe = null;
for (const p of chromePaths) {
  if (fs.existsSync(p)) {
    browserExe = p;
    break;
  }
}

if (!browserExe) {
  console.error('Neither Google Chrome nor Microsoft Edge was found!');
  process.exit(1);
}

console.log(`Using browser: ${browserExe}`);

const cmd = `"${browserExe}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPdfPath}" "file:///${htmlFilePath.replace(/\\\\/g, '/')}"`;

console.log('Executing print-to-pdf command...');
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(outputPdfPath)) {
  const stats = fs.statSync(outputPdfPath);
  console.log(`SUCCESS: PDF created at ${outputPdfPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

  // Copy to convenient user destinations
  fs.copyFileSync(outputPdfPath, parentPdfPath);
  console.log(`Copied to parent folder: ${parentPdfPath}`);

  fs.copyFileSync(outputPdfPath, publicPdfPath);
  console.log(`Copied to public folder: ${publicPdfPath}`);

  try {
    fs.copyFileSync(outputPdfPath, downloadsPdfPath);
    console.log(`Copied to user Downloads folder: ${downloadsPdfPath}`);
  } catch (err) {
    console.warn(`Notice: Could not write directly to ${downloadsPdfPath}: ${err.message}`);
  }
} else {
  console.error('PDF file was not created!');
  process.exit(1);
}

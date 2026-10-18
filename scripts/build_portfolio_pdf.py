import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm, inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas
from PIL import Image as PILImage

# Paths
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
PDF_FILENAME = "Bengal_Cyber_Business_Portfolio.pdf"
OUTPUT_PDF = os.path.join(ROOT_DIR, PDF_FILENAME)
PARENT_PDF = os.path.join(ROOT_DIR, '..', PDF_FILENAME)
PUBLIC_PDF = os.path.join(PUBLIC_DIR, PDF_FILENAME)

# Brand Color Palette
C_PRIMARY = colors.HexColor('#EA580C')       # Bengal Orange
C_SECONDARY = colors.HexColor('#FB923C')     # Light Amber Orange
C_DARK = colors.HexColor('#0A0F1D')          # Deep Cyber Navy
C_DARK_ALT = colors.HexColor('#0F172A')      # Slate 900
C_SLATE_700 = colors.HexColor('#334155')
C_SLATE_600 = colors.HexColor('#475569')
C_SLATE_500 = colors.HexColor('#64748B')
C_BG_LIGHT = colors.HexColor('#F8FAFC')      # Slate 50
C_BORDER = colors.HexColor('#E2E8F0')        # Slate 200
C_WHITE = colors.HexColor('#FFFFFF')
C_ACCENT_GOLD = colors.HexColor('#F59E0B')

# Helper to load and scale PIL image
def get_image_path(rel_path):
    p = os.path.join(PUBLIC_DIR, rel_path)
    if os.path.exists(p):
        return p
    return None

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        if self._pageNumber == 1:
            # Skip running header/footer on cover page
            return

        self.saveState()
        self.setFont("Helvetica", 7.5)
        self.setFillColor(C_SLATE_500)

        # Header
        self.setStrokeColor(C_BORDER)
        self.setLineWidth(0.75)
        self.line(18 * mm, A4[1] - 12 * mm, A4[0] - 18 * mm, A4[1] - 12 * mm)

        self.drawString(18 * mm, A4[1] - 10 * mm, "BENGAL CYBER • OFFICIAL BUSINESS PORTFOLIO & CORPORATE PROFILE")
        self.drawRightString(A4[0] - 18 * mm, A4[1] - 10 * mm, "bengalcyber.com")

        # Footer
        self.line(18 * mm, 14 * mm, A4[0] - 18 * mm, 14 * mm)
        self.drawString(18 * mm, 9.5 * mm, "The Business Center, Gulshan 1, Dhaka 1212 • hello@bengalcyber.com • +880 1901-364583")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(A4[0] - 18 * mm, 9.5 * mm, page_str)

        self.restoreState()


def build_portfolio_pdf():
    print(f"Initializing PDF generation: {OUTPUT_PDF}")
    
    # 18mm horizontal margins, 16mm top/bottom
    doc = SimpleDocTemplate(
        OUTPUT_PDF,
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=15 * mm,
        bottomMargin=16 * mm
    )

    printable_w = A4[0] - 36 * mm  # ~174mm
    styles = getSampleStyleSheet()

    # Custom Typography Styles
    title_cover = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=30,
        leading=35,
        textColor=C_WHITE,
        spaceAfter=12
    )

    badge_style = ParagraphStyle(
        'BadgeStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=C_PRIMARY,
        textTransform='uppercase',
        spaceAfter=6
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=C_DARK,
        spaceAfter=6
    )

    h2_style = ParagraphStyle(
        'CardH2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=C_DARK,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=C_SLATE_600,
        spaceAfter=6
    )

    body_small = ParagraphStyle(
        'BodySmall',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=11,
        textColor=C_SLATE_600
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=11.5,
        textColor=C_SLATE_700,
        leftIndent=10,
        firstLineIndent=-10
    )

    story = []

    # =========================================================================
    # PAGE 1: COVER PAGE
    # =========================================================================
    # Cover banner container
    cover_logo_path = get_image_path('logo.png')
    logo_flowable = ""
    if cover_logo_path:
        logo_flowable = Image(cover_logo_path, width=48*mm, height=14*mm)

    cover_table_data = [
        [
            Paragraph('<font color="#EA580C"><b>OFFICIAL CORPORATE PROFILE & BUSINESS PORTFOLIO • 2026/2027</b></font>', badge_style),
        ],
        [
            logo_flowable if logo_flowable else Paragraph("<b>BENGAL CYBER</b>", title_cover)
        ],
        [
            Spacer(1, 10*mm)
        ],
        [
            Paragraph('Architecting <font color="#FB923C">Digital Empires</font> in Bangladesh.', title_cover)
        ],
        [
            Paragraph(
                '<font color="#CBD5E1">High-Performance Website Design, Conversion-Obsessed Performance Media Buying, '
                'and Viral Social Media Marketing Engineered for Market Dominance across Bangladesh.</font>',
                ParagraphStyle('CoverSub', parent=body_style, fontSize=11, leading=16, textColor=colors.HexColor('#CBD5E1'))
            )
        ],
        [
            Spacer(1, 15*mm)
        ]
    ]

    cover_main_table = Table(cover_table_data, colWidths=[printable_w])
    cover_main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))

    # Highlight Stats on Cover
    stat_box_style = ParagraphStyle('StatVal', fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=C_PRIMARY, alignment=1)
    stat_lbl_style = ParagraphStyle('StatLbl', fontName='Helvetica-Bold', fontSize=7.5, leading=10, textColor=C_WHITE, alignment=1)

    stat_data = [
        [
            Paragraph("50M+", stat_box_style),
            Paragraph("4.8X", stat_box_style),
            Paragraph("99.8%", stat_box_style),
            Paragraph("24/7", stat_box_style),
        ],
        [
            Paragraph("IMPRESSIONS DELIVERED", stat_lbl_style),
            Paragraph("AVERAGE CLIENT ROAS", stat_lbl_style),
            Paragraph("CLIENT RETENTION", stat_lbl_style),
            Paragraph("LEAD SUPPORT DESK", stat_lbl_style),
        ]
    ]
    w_quarter = printable_w / 4.0
    cover_stat_table = Table(stat_data, colWidths=[w_quarter]*4)
    cover_stat_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#111827')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#374151')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#374151')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))

    # Cover Footer info
    cover_footer_text = Paragraph(
        '<font color="#94A3B8"><b>Headquarters:</b> The Business Center, Gulshan 1, Dhaka 1212, Bangladesh<br/>'
        '<b>Direct Consultation:</b> hello@bengalcyber.com • +880 1901-364583 • <b>Web:</b> bengalcyber.com</font>',
        ParagraphStyle('CoverFoot', fontName='Helvetica', fontSize=8, leading=12, textColor=colors.HexColor('#94A3B8'))
    )

    # Wrap cover in dark luxury container
    cover_wrapper_data = [
        [cover_main_table],
        [cover_stat_table],
        [Spacer(1, 20*mm)],
        [cover_footer_text]
    ]
    cover_wrapper = Table(cover_wrapper_data, colWidths=[printable_w])
    cover_wrapper.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_DARK),
        ('LEFTPADDING', (0,0), (-1,-1), 14),
        ('RIGHTPADDING', (0,0), (-1,-1), 14),
        ('TOPPADDING', (0,0), (-1,-1), 22),
        ('BOTTOMPADDING', (0,0), (-1,-1), 22),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))

    story.append(cover_wrapper)
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: EXECUTIVE SUMMARY & CREDENTIALS
    # =========================================================================
    story.append(Paragraph('ABOUT BENGAL CYBER', badge_style))
    story.append(Paragraph('Engineering <font color="#EA580C">Revenue Growth</font>, Not Just Campaigns.', h1_style))
    story.append(Paragraph(
        'Bengal Cyber is Dhaka\'s premier growth engineering agency. We bridge cutting-edge computational web engineering '
        'with viral social storytelling and quantitative performance media buying. We do not operate on vanity metrics; '
        'every taka spent and every line of code deployed is tied directly to client revenue and scalable brand authority.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    # 4 Metric Highlights
    m_box_style_num = ParagraphStyle('MBoxNum', fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=C_PRIMARY, alignment=1)
    m_box_style_lbl = ParagraphStyle('MBoxLbl', fontName='Helvetica-Bold', fontSize=7.5, leading=10, textColor=C_DARK, alignment=1)
    m_box_style_sub = ParagraphStyle('MBoxSub', fontName='Helvetica', fontSize=6.5, leading=8.5, textColor=C_SLATE_500, alignment=1)

    metric_grid = [
        [
            Paragraph("50M+", m_box_style_num),
            Paragraph("4.8x", m_box_style_num),
            Paragraph("99.8%", m_box_style_num),
            Paragraph("< 1s", m_box_style_num)
        ],
        [
            Paragraph("Total Impressions", m_box_style_lbl),
            Paragraph("Blended ROAS", m_box_style_lbl),
            Paragraph("Client Retention", m_box_style_lbl),
            Paragraph("Page Speed", m_box_style_lbl)
        ],
        [
            Paragraph("Meta, Google & TikTok", m_box_style_sub),
            Paragraph("Across ad spend", m_box_style_sub),
            Paragraph("Monthly partnerships", m_box_style_sub),
            Paragraph("Next.js core vitals", m_box_style_sub)
        ]
    ]
    t_metrics = Table(metric_grid, colWidths=[printable_w / 4.0]*4)
    t_metrics.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_metrics)
    story.append(Spacer(1, 6*mm))

    # The Bengal Cyber Advantage (4 Cards)
    story.append(Paragraph('THE BENGAL CYBER ADVANTAGE', badge_style))
    adv_col_w = (printable_w - 4*mm) / 2.0
    adv_data = [
        [
            Paragraph('<b>01 • Next.js Full-Stack Engineering</b>', h2_style),
            Paragraph('<b>02 • Precision Media Buying & Funnels</b>', h2_style)
        ],
        [
            Paragraph('Unlike agencies using fragile WordPress templates, we handcraft custom web platforms using Next.js 14 and Tailwind CSS. Delivering sub-second load times, superior SEO rankings, and maximum sales conversion.', body_small),
            Paragraph('We manage high-ROAS paid advertising across Meta and Google. Proprietary retargeting matrices, CAPI tracking, and psychographic segmentation ensure zero wasted ad spend in Bangladesh.', body_small)
        ],
        [
            Spacer(1, 2*mm),
            Spacer(1, 2*mm)
        ],
        [
            Paragraph('<b>03 • Viral Creative & Video Production</b>', h2_style),
            Paragraph('<b>04 • 24/7 Lead Support & Conversion Desk</b>', h2_style)
        ],
        [
            Paragraph('Our creative directors script, shoot, and edit commercial videos engineered specifically for 3-second hook retention and algorithm velocity on Facebook Reels, YouTube Shorts, and TikTok.', body_small),
            Paragraph('Traffic without immediate follow-up is wasted revenue. Our dedicated omnichannel lead desk engages social inquiries in real-time, qualifying buyers and dispatching orders directly.', body_small)
        ]
    ]
    t_adv = Table(adv_data, colWidths=[adv_col_w, adv_col_w])
    t_adv.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,1), C_BG_LIGHT),
        ('BACKGROUND', (1,0), (1,1), C_BG_LIGHT),
        ('BACKGROUND', (0,3), (0,4), C_BG_LIGHT),
        ('BACKGROUND', (1,3), (1,4), C_BG_LIGHT),
        ('BOX', (0,0), (0,1), 1, C_BORDER),
        ('BOX', (1,0), (1,1), 1, C_BORDER),
        ('BOX', (0,3), (0,4), 1, C_BORDER),
        ('BOX', (1,3), (1,4), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_adv)
    story.append(Spacer(1, 6*mm))

    # Institutional Ecosystem
    story.append(Paragraph('INDUSTRY ALIGNMENT & INSTITUTIONAL ECOSYSTEM', badge_style))
    p_ict = get_image_path('logos/ict.png')
    p_basis = get_image_path('logos/basis.jpg')
    p_fbcci = get_image_path('logos/fbcci.png')
    p_sme = get_image_path('logos/sme.jpg')

    logo_cells = []
    for lp in [p_ict, p_basis, p_fbcci, p_sme]:
        if lp:
            logo_cells.append(Image(lp, width=28*mm, height=9*mm))
        else:
            logo_cells.append(Paragraph("<b>PARTNER</b>", body_small))

    t_logos = Table([logo_cells], colWidths=[printable_w / 4.0]*4)
    t_logos.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_logos)

    story.append(PageBreak())

    # =========================================================================
    # PAGE 3: PHILOSOPHY, MISSION & CORE VALUES (ABOUT US)
    # =========================================================================
    story.append(Paragraph('CORPORATE PHILOSOPHY & DNA', badge_style))
    story.append(Paragraph('Architecting <font color="#EA580C">Digital Legacies</font> in Bangladesh.', h1_style))
    story.append(Paragraph(
        'Bengal Cyber was established with a singular focus: to liberate ambitious brands from outdated, fragmented marketing '
        'and equip them with military-grade web engineering and viral digital sales machines.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    # Mission & Vision 2-Column Boxes
    mv_col_w = (printable_w - 4*mm) / 2.0
    mv_data = [
        [
            Paragraph('<b>OUR MISSION</b>', ParagraphStyle('MVTag1', fontName='Helvetica-Bold', fontSize=8, textColor=C_SECONDARY)),
            Paragraph('<b>OUR VISION</b>', ParagraphStyle('MVTag2', fontName='Helvetica-Bold', fontSize=8, textColor=C_ACCENT_GOLD))
        ],
        [
            Paragraph('<b>Empowering Market Leaders</b>', ParagraphStyle('MVH1', fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=C_WHITE)),
            Paragraph('<b>Setting the Gold Standard</b>', ParagraphStyle('MVH2', fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=C_WHITE))
        ],
        [
            Paragraph(
                'To engineer conversion-obsessed web platforms and viral digital marketing campaigns that accelerate revenue, '
                'solidify brand authority, and turn ambitious Bangladeshi businesses into household names.',
                ParagraphStyle('MVT1', fontName='Helvetica', fontSize=8, leading=12, textColor=colors.HexColor('#CBD5E1'))
            ),
            Paragraph(
                'To be recognized as South Asia\'s most technically sophisticated and ROI-focused digital engineering agency—setting '
                'benchmarks for creative boldness, algorithmic precision, and fiscal governance.',
                ParagraphStyle('MVT2', fontName='Helvetica', fontSize=8, leading=12, textColor=colors.HexColor('#CBD5E1'))
            )
        ]
    ]
    t_mv = Table(mv_data, colWidths=[mv_col_w, mv_col_w])
    t_mv.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,-1), C_DARK),
        ('BACKGROUND', (1,0), (1,-1), C_DARK_ALT),
        ('BOX', (0,0), (0,-1), 1, C_PRIMARY),
        ('BOX', (1,0), (1,-1), 1, C_ACCENT_GOLD),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_mv)
    story.append(Spacer(1, 6*mm))

    # 4 Core Values Grid
    story.append(Paragraph('GUIDING CORE VALUES', badge_style))
    cv_w = (printable_w - 3*3*mm) / 4.0
    cv_data = [
        [
            Paragraph('<b>01 • Integrity</b>', ParagraphStyle('CV1', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY)),
            Paragraph('<b>02 • Speed</b>', ParagraphStyle('CV2', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY)),
            Paragraph('<b>03 • Prestige</b>', ParagraphStyle('CV3', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY)),
            Paragraph('<b>04 • Governance</b>', ParagraphStyle('CV4', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY))
        ],
        [
            Paragraph('<b>Radical Truth</b>', h2_style),
            Paragraph('<b>Agile Tech</b>', h2_style),
            Paragraph('<b>Creative Boldness</b>', h2_style),
            Paragraph('<b>Compliance</b>', h2_style)
        ],
        [
            Paragraph('Transparent reporting, verified ad spend invoices, and authentic attribution without inflating vanity metrics.', body_small),
            Paragraph('Next.js web architectures with sub-second speeds and rapid ad creative iteration within 24 hours.', body_small),
            Paragraph('We craft brand identities and video collaterals that demand immediate attention and outclass rivals.', body_small),
            Paragraph('Full regulatory compliance with Bangladesh tax, VAT, and corporate advertising standards.', body_small)
        ]
    ]
    t_cv = Table(cv_data, colWidths=[cv_w]*4)
    t_cv.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_cv)
    story.append(Spacer(1, 6*mm))

    # Bangladesh Market Focus
    bd_box = [
        [Paragraph('<b>LOCAL MARKET MASTERY & STRATEGIC CONTEXT</b>', badge_style)],
        [Paragraph(
            'With over 70+ million active internet users in Bangladesh and an explosive migration toward mobile-first commerce, '
            'Bengal Cyber builds platforms tailored specifically for local payment systems (bKash, Nagad), localized Bengali/English '
            'psychographic copy, and high-retention consumer behavior across Dhaka, Chittagong, Sylhet, and nationwide distribution.',
            body_style
        )]
    ]
    t_bd = Table(bd_box, colWidths=[printable_w])
    t_bd.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_bd)

    story.append(PageBreak())

    # =========================================================================
    # PAGE 4: SERVICES SPECTRUM — PART 1 (WEB & MEDIA BUYING)
    # =========================================================================
    story.append(Paragraph('SERVICE SPECTRUM • PART 01', badge_style))
    story.append(Paragraph('High-Performance <font color="#EA580C">Web & Media Buying</font>.', h1_style))
    story.append(Paragraph(
        'Our core technical and media buying divisions operate in continuous synchronization, ensuring seamless user journeys '
        'from the first ad impression to final website conversion.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    # Service 1: Web Design
    web_bullets = [
        Paragraph("• <b>Next.js 14 App Architecture:</b> Sub-second static pre-rendering with zero runtime bloat.", bullet_style),
        Paragraph("• <b>E-Commerce Platforms:</b> WhatsApp one-click checkout, bKash & Nagad gateway integration.", bullet_style),
        Paragraph("• <b>Core Web Vitals Perfection:</b> 95+ Google PageSpeed score ensuring superior search rank.", bullet_style),
        Paragraph("• <b>Technical SEO & Schema:</b> Full automated JSON-LD schemas and canonical link indexation.", bullet_style),
        Paragraph("• <b>Mobile-Docked Navigation:</b> Thumb-friendly interfaces engineered for Bangladeshi phone users.", bullet_style),
        Paragraph("• <b>Enterprise Security:</b> DDoS protection, strict HTTP headers, SSL, and zero DB exposure.", bullet_style),
    ]

    s1_data = [
        [
            Paragraph('<b>DEPARTMENT 01</b>', badge_style),
            Paragraph('<font color="#EA580C"><b>Next.js & React Core</b></font>', ParagraphStyle('S1Badge', fontName='Helvetica-Bold', fontSize=7.5, alignment=2))
        ],
        [
            Paragraph('<b>Custom Website Design & Engineering</b>', h1_style),
            ""
        ],
        [
            Paragraph(
                'We engineer custom enterprise-grade web applications from the ground up. No fragile templates, no bloated plugins. '
                'Your website loads in under 1 second, scales smoothly to millions of page views, and converts visitors into loyal clients.',
                body_style
            ),
            ""
        ],
        [
            Table([
                [web_bullets[0], web_bullets[3]],
                [web_bullets[1], web_bullets[4]],
                [web_bullets[2], web_bullets[5]]
            ], colWidths=[(printable_w - 16)/2, (printable_w - 16)/2]),
            ""
        ]
    ]
    t_s1 = Table(s1_data, colWidths=[printable_w * 0.7, printable_w * 0.3])
    t_s1.setStyle(TableStyle([
        ('SPAN', (0,1), (1,1)),
        ('SPAN', (0,2), (1,2)),
        ('SPAN', (0,3), (1,3)),
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BOX', (0,0), (-1,-1), 1.5, C_BORDER),
        ('LINEBEFORE', (0,0), (0,-1), 4, C_PRIMARY),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_s1)
    story.append(Spacer(1, 6*mm))

    # Service 2: Performance Media Buying
    ads_bullets = [
        Paragraph("• <b>Meta Ads Scaling:</b> Custom audiences, Lookalikes (LAL), Advantage+ and catalog retargeting.", bullet_style),
        Paragraph("• <b>Google Search & Display:</b> High-intent keyword capture with commercial intent bidding.", bullet_style),
        Paragraph("• <b>CAPI & Server-Side Tracking:</b> Full pixel tracking overcoming iOS privacy and ad blockers.", bullet_style),
        Paragraph("• <b>Dynamic Retargeting Matrices:</b> Multi-tiered remarketing funnels recovering abandoned buyers.", bullet_style),
        Paragraph("• <b>CBO Budget Allocation:</b> Algorithmic budget routing towards top-performing creative variations.", bullet_style),
        Paragraph("• <b>Transparent Attribution:</b> Fortnightly reporting on blended ROAS, CAC, CTR, and gross revenue.", bullet_style),
    ]

    s2_data = [
        [
            Paragraph('<b>DEPARTMENT 02</b>', badge_style),
            Paragraph('<font color="#EA580C"><b>Meta & Google Certified</b></font>', ParagraphStyle('S2Badge', fontName='Helvetica-Bold', fontSize=7.5, alignment=2))
        ],
        [
            Paragraph('<b>Performance Media Buying & Paid Advertising</b>', h1_style),
            ""
        ],
        [
            Paragraph(
                'We manage full-scale paid advertising campaigns across Facebook, Instagram, Google, and YouTube. '
                'Our media buyers execute quantitative split-testing matrices to capture high-intent buyers in Bangladesh with aggressive ROAS.',
                body_style
            ),
            ""
        ],
        [
            Table([
                [ads_bullets[0], ads_bullets[3]],
                [ads_bullets[1], ads_bullets[4]],
                [ads_bullets[2], ads_bullets[5]]
            ], colWidths=[(printable_w - 16)/2, (printable_w - 16)/2]),
            ""
        ]
    ]
    t_s2 = Table(s2_data, colWidths=[printable_w * 0.7, printable_w * 0.3])
    t_s2.setStyle(TableStyle([
        ('SPAN', (0,1), (1,1)),
        ('SPAN', (0,2), (1,2)),
        ('SPAN', (0,3), (1,3)),
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BOX', (0,0), (-1,-1), 1.5, C_BORDER),
        ('LINEBEFORE', (0,0), (0,-1), 4, C_SECONDARY),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_s2)

    story.append(PageBreak())

    # =========================================================================
    # PAGE 5: SERVICES SPECTRUM — PART 2 (SOCIAL, CREATIVE, VIDEO, SUPPORT)
    # =========================================================================
    story.append(Paragraph('SERVICE SPECTRUM • PART 02', badge_style))
    story.append(Paragraph('Creative <font color="#EA580C">Storytelling & 24/7 Conversion</font>.', h1_style))
    story.append(Paragraph(
        'Capturing attention in today\'s digital ecosystem requires cinematic visual storytelling paired with '
        'instant human-led conversion infrastructure.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    s_card_w = (printable_w - 4*mm) / 2.0
    services_pt2 = [
        [
            Paragraph('<b>03 • Social Media Marketing</b>', h2_style),
            Paragraph('<b>04 • Brand & Graphic Design</b>', h2_style)
        ],
        [
            Paragraph(
                'End-to-end page management, viral copywriting, and community building across Facebook, Instagram, and LinkedIn.<br/>'
                '• Monthly strategic content calendars.<br/>'
                '• High-engagement viral hooks & captions.<br/>'
                '• Active comment moderation & reputation control.<br/>'
                '• Influencer alignment & strategic PR seeding.',
                body_small
            ),
            Paragraph(
                'Prestige visual identity design that commands market authority and elevates brands to international caliber.<br/>'
                '• Complete corporate brand books & guidelines.<br/>'
                '• High-converting social media ad creatives.<br/>'
                '• Packaging design & corporate print collaterals.<br/>'
                '• Figma UI/UX prototyping and design systems.',
                body_small
            )
        ],
        [
            Spacer(1, 3*mm),
            Spacer(1, 3*mm)
        ],
        [
            Paragraph('<b>05 • Viral Video Production & Reels</b>', h2_style),
            Paragraph('<b>06 • 24/7 Support & Lead Desk</b>', h2_style)
        ],
        [
            Paragraph(
                'Commercial television commercials, UGC-style viral videos, and Reels crafted for 3-second hook retention.<br/>'
                '• 3-second hook scripting & visual storytelling.<br/>'
                '• Professional cinematic color grading & audio.<br/>'
                '• Dynamic captions & kinetic motion graphics.<br/>'
                '• Optimized vertical video for Reels, Shorts & TikTok.',
                body_small
            ),
            Paragraph(
                'Human-led, omnichannel lead conversion systems ensuring zero prospect abandonment day or night.<br/>'
                '• Instant live chat & Facebook Messenger response.<br/>'
                '• Automated WhatsApp Business API routing.<br/>'
                '• CRM lead qualification & status tagging.<br/>'
                '• Order verification & dispatch confirmation.',
                body_small
            )
        ]
    ]
    t_s_pt2 = Table(services_pt2, colWidths=[s_card_w, s_card_w])
    t_s_pt2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,1), C_BG_LIGHT),
        ('BACKGROUND', (1,0), (1,1), C_BG_LIGHT),
        ('BACKGROUND', (0,3), (0,4), C_BG_LIGHT),
        ('BACKGROUND', (1,3), (1,4), C_BG_LIGHT),
        ('BOX', (0,0), (0,1), 1, C_BORDER),
        ('BOX', (1,0), (1,1), 1, C_BORDER),
        ('BOX', (0,3), (0,4), 1, C_BORDER),
        ('BOX', (1,3), (1,4), 1, C_BORDER),
        ('LINEBEFORE', (0,0), (0,1), 3, C_PRIMARY),
        ('LINEBEFORE', (1,0), (1,1), 3, C_SECONDARY),
        ('LINEBEFORE', (0,3), (0,4), 3, C_PRIMARY),
        ('LINEBEFORE', (1,3), (1,4), 3, C_SECONDARY),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_s_pt2)
    story.append(Spacer(1, 6*mm))

    # Partnership Standards Box
    story.append(Table([
        [
            Paragraph('<b>THE BENGAL CYBER SERVICE SLA GUARANTEE</b>', badge_style),
            Paragraph('<font color="#EA580C"><b>Zero Hidden Markups</b></font>', ParagraphStyle('SLARight', fontName='Helvetica-Bold', fontSize=7.5, alignment=2))
        ],
        [
            Paragraph(
                'Every client receives a dedicated Slack/WhatsApp project channel with immediate access to department heads, '
                'weekly performance snapshots, transparent ad account ownership, and strict adherence to agreed project deadlines.',
                body_small
            ),
            ""
        ]
    ], colWidths=[printable_w * 0.7, printable_w * 0.3], style=[
        ('SPAN', (0,1), (1,1)),
        ('BACKGROUND', (0,0), (-1,-1), C_DARK),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))

    story.append(PageBreak())

    # =========================================================================
    # PAGE 6: THE 4-STAGE GROWTH METHODOLOGY
    # =========================================================================
    story.append(Paragraph('EXECUTION FRAMEWORK', badge_style))
    story.append(Paragraph('The 4-Stage <font color="#EA580C">Growth Architecture</font>.', h1_style))
    story.append(Paragraph(
        'We do not rely on guesswork or generic templates. Every client partnership follows our standardized four-stage '
        'growth framework designed to systematically scale revenue and market share.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    proc_w = (printable_w - 4*mm) / 2.0
    proc_data = [
        [
            Paragraph('<b>PHASE 01 • STRATEGY AUDIT</b>', ParagraphStyle('P1', fontName='Helvetica-Bold', fontSize=8, textColor=C_PRIMARY)),
            Paragraph('<b>PHASE 02 • SYSTEM ARCHITECTURE</b>', ParagraphStyle('P2', fontName='Helvetica-Bold', fontSize=8, textColor=C_PRIMARY))
        ],
        [
            Paragraph('<b>Discovery & Forensic Analysis</b>', h2_style),
            Paragraph('<b>Creative & Technical Build</b>', h2_style)
        ],
        [
            Paragraph(
                'We conduct an exhaustive audit of your existing website speed, historical ad accounts, competitor positioning, '
                'and unit economics in Bangladesh.<br/>'
                '• Full technical UX & SEO benchmark audit.<br/>'
                '• Ad account waste & leak identification.<br/>'
                '• Target audience avatar & psychology profiling.<br/>'
                '• Financial KPI setting (Target CAC, ROAS & CPL).',
                body_small
            ),
            Paragraph(
                'We engineer high-converting web funnels, establish server-side tracking (Meta CAPI & GA4), and shoot commercial video creatives.<br/>'
                '• Custom Next.js 14 web application build.<br/>'
                '• High-resolution video shooting & color grading.<br/>'
                '• Meta CAPI, Google Tag Manager & CRM setup.<br/>'
                '• High-converting landing page sales copywriting.',
                body_small
            )
        ],
        [
            Spacer(1, 3*mm),
            Spacer(1, 3*mm)
        ],
        [
            Paragraph('<b>PHASE 03 • MULTI-CHANNEL LAUNCH</b>', ParagraphStyle('P3', fontName='Helvetica-Bold', fontSize=8, textColor=C_PRIMARY)),
            Paragraph('<b>PHASE 04 • ITERATIVE SCALE</b>', ParagraphStyle('P4', fontName='Helvetica-Bold', fontSize=8, textColor=C_PRIMARY))
        ],
        [
            Paragraph('<b>Campaign Launch & Traffic Flow</b>', h2_style),
            Paragraph('<b>Optimization & Aggressive Scale</b>', h2_style)
        ],
        [
            Paragraph(
                'We launch structured paid traffic campaigns across Meta, Google, and TikTok. Our 24/7 lead desk activates to handle inbound inquiries immediately.<br/>'
                '• Simultaneous multi-cohort audience split testing.<br/>'
                '• Dynamic ad creative rotation & CTR monitoring.<br/>'
                '• 24/7 live chat & WhatsApp lead qualification.<br/>'
                '• Initial conversion rate tracking and bid tuning.',
                body_small
            ),
            Paragraph(
                'Winning campaigns receive aggressive budget scaling. We continuously refine copy, retarget mid-funnel prospects, and expand market share.<br/>'
                '• Vertical & horizontal budget scaling (CBO).<br/>'
                '• Dynamic exclusion lists to prevent ad fatigue.<br/>'
                '• VIP retargeting funnels maximizing customer LTV.<br/>'
                '• Fortnightly executive performance review decks.',
                body_small
            )
        ]
    ]
    t_proc = Table(proc_data, colWidths=[proc_w, proc_w])
    t_proc.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,2), C_BG_LIGHT),
        ('BACKGROUND', (1,0), (1,2), C_BG_LIGHT),
        ('BACKGROUND', (0,4), (0,6), C_BG_LIGHT),
        ('BACKGROUND', (1,4), (1,6), C_BG_LIGHT),
        ('BOX', (0,0), (0,2), 1, C_BORDER),
        ('BOX', (1,0), (1,2), 1, C_BORDER),
        ('BOX', (0,4), (0,6), 1, C_BORDER),
        ('BOX', (1,4), (1,6), 1, C_BORDER),
        ('LINEBEFORE', (0,0), (0,2), 3, C_PRIMARY),
        ('LINEBEFORE', (1,0), (1,2), 3, C_PRIMARY),
        ('LINEBEFORE', (0,4), (0,6), 3, C_PRIMARY),
        ('LINEBEFORE', (1,4), (1,6), 3, C_PRIMARY),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_proc)
    story.append(Spacer(1, 6*mm))

    # Long-term advisory
    story.append(Table([
        [Paragraph('<b>CONTINUOUS PARTNERSHIP & QUARTERLY ROADMAPS</b>', badge_style)],
        [Paragraph(
            'Our relationship does not stop at campaign launch. We operate as your fractional Chief Marketing Officer and Technical Director, '
            'meeting bi-weekly to analyze revenue dashboards, eliminate friction points, and engineer your next quarter\'s market expansion.',
            body_small
        )]
    ], colWidths=[printable_w], style=[
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))

    story.append(PageBreak())

    # =========================================================================
    # PAGE 7: CASE STUDIES & PORTFOLIO — PART 1
    # =========================================================================
    story.append(Paragraph('PROVEN RESULTS & CLIENT TRANSFORMATIONS', badge_style))
    story.append(Paragraph('Case Studies: <font color="#EA580C">FMCG & E-Commerce Scale</font>.', h1_style))
    story.append(Paragraph(
        'Real-world case studies demonstrating how Bengal Cyber accelerates revenue, engineers viral reach, and scales e-commerce brands in Bangladesh.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    cs_w = (printable_w - 2*3*mm) / 3.0
    p_karizma = get_image_path('projects/karizma-care-thumb.jpg')
    p_athena = get_image_path('brands/brand7.png')
    p_tianas = get_image_path('brands/brand1.png')

    img_karizma = Image(p_karizma, width=cs_w - 4, height=32*mm) if p_karizma else ""
    img_athena = Image(p_athena, width=22*mm, height=22*mm) if p_athena else ""
    img_tianas = Image(p_tianas, width=22*mm, height=22*mm) if p_tianas else ""

    cs_data_1 = [
        [
            img_karizma,
            img_athena,
            img_tianas
        ],
        [
            Paragraph('<b>Karizma Care</b>', ParagraphStyle('CS1', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY)),
            Paragraph('<b>Athena\'s Furniture</b>', ParagraphStyle('CS2', fontName='Helvetica-Bold', fontSize=7.5, textColor=colors.HexColor('#1877F2'))),
            Paragraph('<b>TIANAS BD</b>', ParagraphStyle('CS3', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY))
        ],
        [
            Paragraph('<b>Mermaid Soap Launch</b>', h2_style),
            Paragraph('<b>Furniture Showroom Ads</b>', h2_style),
            Paragraph('<b>Fashion Brand Scale</b>', h2_style)
        ],
        [
            Paragraph('High-resolution promotional commercial production and viral social campaign introducing Bangladesh\'s first Seaweed Mermaid Soap.', body_small),
            Paragraph('Full-funnel Meta Ads and page management driving high-intent showroom visits in Dhaka and luxury catalog online furniture orders.', body_small),
            Paragraph('Dynamic conversion retargeting, multi-angle fashion showcase creatives, and automated abandoned cart recovery.', body_small)
        ],
        [
            Paragraph('<b>Impact:</b> 300K+ Organic Video Reach • Sold-out Launch Batches', ParagraphStyle('KPI1', fontName='Helvetica-Bold', fontSize=7, textColor=C_PRIMARY)),
            Paragraph('<b>Impact:</b> 4.5x ROAS • Showroom Footfall & AOV Surge', ParagraphStyle('KPI2', fontName='Helvetica-Bold', fontSize=7, textColor=colors.HexColor('#1877F2'))),
            Paragraph('<b>Impact:</b> 3.8x Blended ROAS • 40% Cart Recovery', ParagraphStyle('KPI3', fontName='Helvetica-Bold', fontSize=7, textColor=C_PRIMARY))
        ]
    ]
    t_cs1 = Table(cs_data_1, colWidths=[cs_w]*3)
    t_cs1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BACKGROUND', (1,0), (1,0), colors.HexColor('#0D1E3D')),
        ('BACKGROUND', (2,0), (2,0), colors.HexColor('#1C1326')),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('ALIGN', (1,0), (2,0), 'CENTER'),
        ('VALIGN', (1,0), (2,0), 'MIDDLE'),
        ('VALIGN', (0,1), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_cs1)
    story.append(Spacer(1, 6*mm))

    # Strategic Takeaway Box
    story.append(Table([
        [Paragraph('<b>STRATEGIC TAKEAWAY • FMCG & E-COMMERCE</b>', badge_style)],
        [Paragraph(
            'In competitive consumer goods, generic Facebook boosts produce low conversion. By pairing cinematic 4K product videography '
            'with multi-tiered retargeting matrices, we consistently achieve 3.5x to 5.0x ROAS for retail and direct-to-consumer brands.',
            body_small
        )]
    ], colWidths=[printable_w], style=[
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))

    story.append(PageBreak())

    # =========================================================================
    # PAGE 8: CASE STUDIES & PORTFOLIO — PART 2
    # =========================================================================
    story.append(Paragraph('PROVEN RESULTS & CLIENT TRANSFORMATIONS', badge_style))
    story.append(Paragraph('Case Studies: <font color="#EA580C">Enterprise, Health & Automotive</font>.', h1_style))
    story.append(Paragraph(
        'Our technical engineering and media buying methodologies deliver measurable enterprise results across B2B corporate, '
        'medical healthcare, and luxury automotive sectors.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    p_bengal = get_image_path('projects/bengal-glory-mockup.png')
    p_cancer = get_image_path('projects/cancer-answer-thumb.jpg')
    p_eva = get_image_path('projects/eva-iqra-motors.jpg')

    img_bengal = Image(p_bengal, width=cs_w - 4, height=32*mm) if p_bengal else ""
    img_cancer = Image(p_cancer, width=cs_w - 4, height=32*mm) if p_cancer else ""
    img_eva = Image(p_eva, width=cs_w - 4, height=32*mm) if p_eva else ""

    cs_data_2 = [
        [
            img_bengal,
            img_cancer,
            img_eva
        ],
        [
            Paragraph('<b>Bengal Glory Ltd</b>', ParagraphStyle('CS4', fontName='Helvetica-Bold', fontSize=7.5, textColor=C_PRIMARY)),
            Paragraph('<b>Cancer Answer</b>', ParagraphStyle('CS5', fontName='Helvetica-Bold', fontSize=7.5, textColor=colors.HexColor('#00A859'))),
            Paragraph('<b>Eva Iqra Motors</b>', ParagraphStyle('CS6', fontName='Helvetica-Bold', fontSize=7.5, textColor=colors.HexColor('#1877F2')))
        ],
        [
            Paragraph('<b>Corporate Web Engineering</b>', h2_style),
            Paragraph('<b>Healthcare Video Authority</b>', h2_style),
            Paragraph('<b>Automotive Lead Funnel</b>', h2_style)
        ],
        [
            Paragraph('Next.js custom web portal engineered with international corporate branding, dynamic service catalog, and sub-second page loads.', body_small),
            Paragraph('Patient guidance commercial video production, oncologist interviews, and compassionate medical communication.', body_small),
            Paragraph('High-intent luxury automotive buyer acquisition funnels, video showcase reels, and rapid direct message appointment booking.', body_small)
        ],
        [
            Paragraph('<b>Impact:</b> 98% PageSpeed • Global B2B Inquiries', ParagraphStyle('KPI4', fontName='Helvetica-Bold', fontSize=7, textColor=C_PRIMARY)),
            Paragraph('<b>Impact:</b> Medical Authority • Patient Trust Surge', ParagraphStyle('KPI5', fontName='Helvetica-Bold', fontSize=7, textColor=colors.HexColor('#00A859'))),
            Paragraph('<b>Impact:</b> Direct Car Sales • Rapid Test Drive Booking', ParagraphStyle('KPI6', fontName='Helvetica-Bold', fontSize=7, textColor=colors.HexColor('#1877F2')))
        ]
    ]
    t_cs2 = Table(cs_data_2, colWidths=[cs_w]*3)
    t_cs2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_cs2)
    story.append(Spacer(1, 6*mm))

    # Cross-Sector Capability
    story.append(Table([
        [Paragraph('<b>CROSS-SECTOR DOMAIN COMPETENCE</b>', badge_style)],
        [Paragraph(
            'Whether engineering scalable custom web portals for international trade or generating qualified buyers for automotive dealerships, '
            'our team deploys tailored digital assets designed for measurable commercial victory.',
            body_small
        )]
    ], colWidths=[printable_w], style=[
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))

    story.append(PageBreak())

    # =========================================================================
    # PAGE 9: EXECUTIVE LEADERSHIP TEAM (ABOUT US)
    # =========================================================================
    story.append(Paragraph('EXECUTIVE BOARD & DEPARTMENT HEADS', badge_style))
    story.append(Paragraph('The Leaders Behind <font color="#EA580C">Bengal Cyber</font>.', h1_style))
    story.append(Paragraph(
        'Bengal Cyber is steered by seasoned department heads combining enterprise technical engineering, creative vision, '
        'operational agility, and corporate fiscal integrity.',
        body_style
    ))
    story.append(Spacer(1, 3*mm))

    # Founder Spotlight Box
    p_founder = get_image_path('founder.jpg')
    img_founder = Image(p_founder, width=28*mm, height=34*mm) if p_founder else ""

    founder_data = [
        [
            img_founder,
            Paragraph(
                '<font color="#EA580C"><b>FOUNDER & STRATEGIC VISIONARY</b></font><br/>'
                '<b><font color="#FFFFFF" size="13">Zeem Mondal</font></b><br/>'
                '<font color="#FDBA74" size="8">Founder, Business Consultant & Digital Marketing Expert</font><br/><br/>'
                '<font color="#CBD5E1" size="7.8"><i>"In a world where generic advertising is ignored, our mission is to build digital infrastructure '
                'and viral campaigns so undeniably compelling that our clients become the undisputed market leaders in their industry."</i></font>',
                ParagraphStyle('FounderText', fontName='Helvetica', fontSize=8, leading=11, textColor=C_WHITE)
            )
        ]
    ]
    t_founder = Table(founder_data, colWidths=[32*mm, printable_w - 32*mm])
    t_founder.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_DARK),
        ('BOX', (0,0), (-1,-1), 1, C_PRIMARY),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_founder)
    story.append(Spacer(1, 4*mm))

    # Core Leadership Team (4 Columns)
    team_col_w = (printable_w - 3*2.5*mm) / 4.0
    p_babul = get_image_path('babul-hossen.jpg')
    p_zereen = get_image_path('zereen-mondal.jpg')
    p_ismahile = get_image_path('ismahile-hossain.jpg')
    p_enam = get_image_path('enam-hossain.jpg')

    img_babul = Image(p_babul, width=team_col_w - 4, height=32*mm) if p_babul else ""
    img_zereen = Image(p_zereen, width=team_col_w - 4, height=32*mm) if p_zereen else ""
    img_ismahile = Image(p_ismahile, width=team_col_w - 4, height=32*mm) if p_ismahile else ""
    img_enam = Image(p_enam, width=team_col_w - 4, height=32*mm) if p_enam else ""

    team_data = [
        [
            img_babul,
            img_zereen,
            img_ismahile,
            img_enam
        ],
        [
            Paragraph('<b>Babul Hossen</b>', h2_style),
            Paragraph('<b>Zereen Mondal</b>', h2_style),
            Paragraph('<b>Ismahile Hossain</b>', h2_style),
            Paragraph('<b>Enam Hossain Masud Alom</b>', ParagraphStyle('EName', fontName='Helvetica-Bold', fontSize=9, leading=11, textColor=C_DARK))
        ],
        [
            Paragraph('<b>IT Head</b>', ParagraphStyle('R1', fontName='Helvetica-Bold', fontSize=7.2, textColor=C_PRIMARY)),
            Paragraph('<b>HR Head</b>', ParagraphStyle('R2', fontName='Helvetica-Bold', fontSize=7.2, textColor=C_PRIMARY)),
            Paragraph('<b>Operation Head</b>', ParagraphStyle('R3', fontName='Helvetica-Bold', fontSize=7.2, textColor=C_PRIMARY)),
            Paragraph('<b>Tax and Audit</b>', ParagraphStyle('R4', fontName='Helvetica-Bold', fontSize=7.2, textColor=C_PRIMARY))
        ],
        [
            Paragraph('Leads technical operations, scalable systems architecture, web engineering, and cybersecurity protocols.', body_small),
            Paragraph('Directs human resources, talent strategy, organizational culture, and creative team excellence.', body_small),
            Paragraph('Orchestrates agile project execution, client delivery schedules, and rigorous quality assurance.', body_small),
            Paragraph('Oversees corporate tax planning, statutory auditing frameworks, and fiscal regulatory affairs.', body_small)
        ]
    ]
    t_team = Table(team_data, colWidths=[team_col_w]*4)
    t_team.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_team)

    story.append(PageBreak())

    # =========================================================================
    # PAGE 10: CLIENT PARTNERSHIPS & COMMERCIAL ENGAGEMENT
    # =========================================================================
    story.append(Paragraph('PARTNERSHIPS & COMMERCIAL ENGAGEMENT', badge_style))
    story.append(Paragraph('Partner With <font color="#EA580C">The Growth Leaders</font>.', h1_style))
    story.append(Paragraph(
        'We collaborate with forward-thinking enterprises, fast-scaling e-commerce businesses, and healthcare innovators across Bangladesh.',
        body_style
    ))
    story.append(Spacer(1, 4*mm))

    # Brand Network Grid
    brand_row1 = []
    for bp in ['brands/brand1.png', 'brands/brand7.png', 'brands/brand2.png', 'brands/brand3.jpg']:
        p = get_image_path(bp)
        if p:
            brand_row1.append(Image(p, width=24*mm, height=10*mm))
        else:
            brand_row1.append(Paragraph("BRAND", body_small))

    brand_row2 = []
    for bp in ['brands/brand4.jpg', 'brands/brand5.jpg', 'brands/brand6.jpg', 'brands/brand8.jpg']:
        p = get_image_path(bp)
        if p:
            brand_row2.append(Image(p, width=24*mm, height=10*mm))
        else:
            brand_row2.append(Paragraph("BRAND", body_small))

    t_brands = Table([brand_row1, brand_row2], colWidths=[printable_w / 4.0]*4)
    t_brands.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('INNERGRID', (0,0), (-1,-1), 0.5, C_BORDER),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_brands)
    story.append(Spacer(1, 6*mm))

    # Institutional Compliance Bar
    story.append(Table([
        [
            Paragraph('<b>INSTITUTIONAL ECOSYSTEM & STANDARDS</b>', badge_style),
            Paragraph('<font color="#EA580C"><b>National Digital Standards</b></font>', ParagraphStyle('NatStand', fontName='Helvetica-Bold', fontSize=7.5, alignment=2))
        ],
        [
            Paragraph(
                'Bengal Cyber adheres strictly to the regulatory and operational guidelines established by the ICT Division Bangladesh, '
                'BASIS, FBCCI, and the SME Foundation, ensuring lawful, ethical, and high-trust partnerships.',
                body_small
            ),
            ""
        ]
    ], colWidths=[printable_w * 0.7, printable_w * 0.3], style=[
        ('SPAN', (0,1), (1,1)),
        ('BACKGROUND', (0,0), (-1,-1), C_WHITE),
        ('BOX', (0,0), (-1,-1), 1, C_BORDER),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(Spacer(1, 6*mm))

    # CTA Box
    cta_data = [
        [
            Paragraph('<b>Ready to Dominate Your Industry?</b>', ParagraphStyle('CTATitle', fontName='Helvetica-Bold', fontSize=14, leading=17, textColor=C_WHITE, alignment=1))
        ],
        [
            Paragraph(
                'Book an executive strategy session with our agency leadership. We will audit your current website speed, '
                'inspect your paid advertising funnels, and present a custom growth blueprint for your business.',
                ParagraphStyle('CTASub', fontName='Helvetica', fontSize=8, leading=12, textColor=colors.HexColor('#CBD5E1'), alignment=1)
            )
        ],
        [
            Spacer(1, 2*mm)
        ],
        [
            Table([
                [
                    Paragraph('<b>Headquarters (Gulshan)</b><br/><font color="#E2E8F0">The Business Center, Gulshan 1, Dhaka 1212</font>', ParagraphStyle('C1', fontName='Helvetica', fontSize=7.5, leading=10, textColor=C_SECONDARY)),
                    Paragraph('<b>Secondary Office (Savar)</b><br/><font color="#E2E8F0">Dream Palace 2, Hemayetpur, Savar, Dhaka</font>', ParagraphStyle('C2', fontName='Helvetica', fontSize=7.5, leading=10, textColor=C_SECONDARY)),
                    Paragraph('<b>Direct Consultation</b><br/><font color="#E2E8F0">+880 1901-364583 • hello@bengalcyber.com</font>', ParagraphStyle('C3', fontName='Helvetica', fontSize=7.5, leading=10, textColor=C_SECONDARY))
                ]
            ], colWidths=[(printable_w - 20) / 3.0]*3, style=[
                ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#1E293B')),
                ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#475569')),
                ('LEFTPADDING', (0,0), (-1,-1), 6),
                ('RIGHTPADDING', (0,0), (-1,-1), 6),
                ('TOPPADDING', (0,0), (-1,-1), 5),
                ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ])
        ]
    ]
    t_cta = Table(cta_data, colWidths=[printable_w])
    t_cta.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_DARK),
        ('BOX', (0,0), (-1,-1), 2, C_PRIMARY),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_cta)

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print("SUCCESS: PDF compiled successfully.")

    # Copy to parent and public folders
    import shutil
    shutil.copy(OUTPUT_PDF, PARENT_PDF)
    print(f"Copied to parent: {PARENT_PDF}")
    shutil.copy(OUTPUT_PDF, PUBLIC_PDF)
    print(f"Copied to public: {PUBLIC_PDF}")

    # Copy to user Downloads folder
    user_downloads = os.path.abspath(os.path.join(ROOT_DIR, '..', '..', PDF_FILENAME))
    try:
        shutil.copy(OUTPUT_PDF, user_downloads)
        print(f"Copied to user downloads: {user_downloads}")
    except Exception as e:
        print(f"Notice: Downloads copy: {e}")

if __name__ == '__main__':
    build_portfolio_pdf()

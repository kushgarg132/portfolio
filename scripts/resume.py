# Source of truth for public/KushGarg_Resume.pdf. Regenerate: pip install reportlab && python3 scripts/resume.py public/KushGarg_Resume.pdf
# Also importable: `from resume import DATA, render, cover_letter` to build tailored copies (deepcopy DATA, edit, render)
# and matching cover letters in the same style. Text fields are ReportLab markup: escape & as &amp;.
import copy
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.units import mm
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                TableStyle, HRFlowable, ListFlowable, ListItem)

TEAL = HexColor("#0E7C86")
INK = HexColor("#1f2933")
MUTED = HexColor("#52606d")
FS = 8.9  # body font size

base = ParagraphStyle("base", fontName="Helvetica", fontSize=FS, leading=FS * 1.2, textColor=INK)
name = ParagraphStyle("name", base, fontName="Helvetica-Bold", fontSize=21, leading=25, alignment=TA_CENTER)
tag = ParagraphStyle("tag", base, fontName="Helvetica-Oblique", fontSize=10.5, textColor=TEAL, alignment=TA_CENTER, spaceBefore=2)
contact = ParagraphStyle("contact", base, fontSize=8.6, textColor=MUTED, alignment=TA_CENTER, spaceBefore=3)
h = ParagraphStyle("h", base, fontName="Helvetica-Bold", fontSize=10.5, textColor=TEAL, spaceBefore=5, spaceAfter=1)
role = ParagraphStyle("role", base, fontName="Helvetica-Bold")
date = ParagraphStyle("date", base, fontName="Helvetica-Oblique", fontSize=8.6, textColor=MUTED, alignment=TA_RIGHT)
meta = ParagraphStyle("meta", base, fontName="Helvetica-Oblique", fontSize=8.6, textColor=MUTED)
bullet = ParagraphStyle("bullet", base)
letter = ParagraphStyle("letter", base, fontSize=10.5, leading=14.5, spaceAfter=9)

W = A4[0] - 2 * 12 * mm - 12  # frame has 6pt padding each side


def link(url, text=None):
    return f'<a href="https://{url}" color="#52606d"><u>{text or url}</u></a>'


CONTACT = ("+91 7014995437 | " + '<a href="mailto:gargkush2003@gmail.com" color="#52606d"><u>gargkush2003@gmail.com</u></a> | '
           + link("linkedin.com/in/kush-garg-809617208") + " | " + link("github.com/kushgarg132") + " | "
           + link("kush-garg-portfolio.vercel.app") + " | Pune, IN | Open to Remote &amp; Relocation")

DATA = {
    "tagline": "Software Engineer II | Backend &amp; Distributed Systems | SWIFT ISO 20022",
    "summary": (
        "Software Engineer II with 2+ years building scalable payment platforms at StoneX Group. Own end-to-end delivery of the "
        "SWIFT ISO 20022 FAAS pipeline and co-shipped XPAY, enabling $600M in operational savings. Skilled in Java, Spring Boot, "
        "Kafka, and microservices with applied AI experience (LangGraph, multi-agent orchestration). ICPC Regionals qualifier, "
        "Google Kickstart Global Rank 1596."),
    "skills": [
        ("Languages", "Java, Python, TypeScript, JavaScript, SQL, C++"),
        ("Frameworks &amp; Databases", "Spring Boot, Spring Security, Spring WebSocket, Spring Cloud Gateway, GraphQL, FastAPI, "
         "Node.js, React, Next.js, MongoDB, PostgreSQL, Redis, MySQL"),
        ("AI &amp; Infrastructure", "LangChain, LangGraph, scikit-learn, Docker, Kafka, Nginx, Azure DevOps, GitHub Actions, "
         "CI/CD"),
        ("Domain", "SWIFT ISO 20022, pacs.008, pacs.009, pain.001, CAMT.053, CAMT.054, MT900, MT910, MT942, Microservices, "
         "System Design, API Design, Agile/Scrum"),
    ],
    "experience": [
        {"title": "Software Engineer II - StoneX Group, Pune, IN", "dates": "Aug 2024 - Present", "bullets": [
            "Own end-to-end delivery of the Funding as a Service (FAAS) pipeline, a centralized payment platform serving all StoneX "
            "entities with full ACK/NACK lifecycle management.",
            "Built ISO 20022 message generation layer (pacs.008, pacs.009, pain.001) ingesting TMSJson payloads from Treasury "
            "Management Systems and delivering to the SWIFT network.",
            "Engineered SWIFT message processing layer supporting 7+ message types across legacy MT (MT900, MT910, MT942) and modern "
            "MX (CAMT.053, CAMT.054) formats.",
            "Co-drove XPAY to production (Feb 2025), processing cross-border payments from the CONNECT app and broker initiations, "
            "enabling $600M in operational savings.",
            "Proposed AI cost-reduction architecture using GraphDB + VectorDB + MCP with CI/CD automation to eliminate redundant LLM "
            "token consumption in code-data sync workflows.",
            "Led team of 5 to 2nd place at StoneX India Hackathon (Nov 2025), building an AI ops tool with multilingual chatbot and "
            "interactive dashboard for operations users.",
        ]},
        {"title": "Software Engineering Intern - StoneX Group, Pune, IN", "dates": "Jan 2024 - Jul 2024", "bullets": [
            "Core contributor to XPAY: built Spring Boot REST APIs, transaction logic, compliance hooks, and audit trails forming the "
            "foundation of its production payment architecture.",
            "Delivered production CI/CD pipelines on Azure DevOps with DevOps and InfoSec teams, meeting compliance standards for go-live.",
        ]},
    ],
    "projects": [
        {"title": "NeoTrade - Rules-First Trading Engine for Indian Markets",
         "meta": "Python, FastAPI, LangGraph, MongoDB, Redis, React 19 | " + link("github.com/kushgarg132/NeoTrade")
                 + " (Live: " + link("neotrade-trading.vercel.app") + ")",
         "bullets": [
             "Built a strategy engine for Indian equities and F&amp;O emitting fully-sized trade intents (entry, stop, target, rule "
             "codes, composite score); intraday trades auto-execute, long-term proposals route to an approval inbox with 3-day expiry.",
             "Capped AI contribution to trade conviction at 30%, enforced in the type system so the LLM cannot rescue a trade the rules "
             "reject; added risk-aware position sizing, backtesting with Indian transaction costs, and Zerodha Kite Connect integration.",
             "LangGraph research and chat agents via a self-hosted LLM gateway; 115 pytest test files; push-to-deploy via "
             "GitHub Actions to Docker Compose on Oracle Cloud and Vercel.",
         ]},
        {"title": "Betrix - AI-Powered Multiplayer Poker Platform",
         "meta": "Java 21, Spring Boot 3.5, MongoDB, GraphQL, WebSocket, Gemini AI, React | "
                 + link("github.com/kushgarg132/Betrix") + " (Live: " + link("betrix-b3c24.web.app") + ")",
         "bullets": [
             "Built full-stack Texas Hold'em platform with Gemini AI bot opponents (random-play fallback under rate limits or outages) "
             "and GraphQL subscriptions over WebSocket for real-time game state sync; engineered stateful poker logic: hand "
             "evaluation, pot calculation, side pots, dealer rotation.",
             "Secured with Spring Security JWT plus guest login; added admin game replay from an event log; deployed via Docker "
             "Compose on Oracle Cloud behind Nginx + Let's Encrypt, frontend on Firebase Hosting, push-to-deploy on both.",
         ]},
        {"title": "Chess Platform - Distributed Microservices",
         "meta": "Java 21, Spring Boot 3, Spring Cloud Gateway, PostgreSQL, Redis, WebSocket, Next.js | "
                 + link("github.com/kushgarg132/Chess"),
         "bullets": [
             "Designed 7 Spring Boot services behind Spring Cloud Gateway with JWT auth: WebSocket game state, ELO-bracketed "
             "matchmaking on a Redis queue, and a pooled Stockfish engine service for AI play and move analysis.",
         ]},
        {"title": "RoutineOS - Personal Discipline &amp; Routine Tracker",
         "meta": "Java 21, Spring Boot 3, PostgreSQL, Flyway, React, TypeScript (Live: "
                 + link("frontend-seven-pied-17.vercel.app") + ")",
         "bullets": [
             "Discipline tracker with deterministic scoring, streaks, and heatmaps; timezone-aware sweeps and FCM push notifications.",
         ]},
    ],
    "education": ("B.Tech in Computer Science (AI and ML Specialization) - Symbiosis Institute of Technology, Pune",
                  "Aug 2020 - Sep 2024"),
    "awards": ("<b>Google Kickstart 2021 Round B</b> - Global Rank 1596 | "
               "<b>ICPC Asia Kanpur Regionals 2021-22</b> - qualifier (Team Volatile Voids)"),
}


def section(title):
    return [Paragraph(title.upper(), h),
            HRFlowable(width="100%", thickness=0.8, color=TEAL, spaceBefore=0, spaceAfter=3)]


def header(left, right):
    t = Table([[Paragraph(left, role), Paragraph(right, date)]], colWidths=[W * 0.8, W * 0.2], hAlign="LEFT")
    t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
                           ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]))
    return t


def bullets(items):
    return ListFlowable([ListItem(Paragraph(i, bullet), leftIndent=11, bulletColor=INK) for i in items],
                        bulletType="bullet", start="•", bulletFontSize=7, leftIndent=11, spaceAfter=1)


def masthead(tagline):
    return [Paragraph("Kush Garg", name), Paragraph(tagline, tag), Paragraph(CONTACT, contact)]


def doc(out, title):
    return SimpleDocTemplate(out, pagesize=A4, leftMargin=12 * mm, rightMargin=12 * mm, topMargin=9 * mm,
                             bottomMargin=8 * mm, title=title, author="Kush Garg")


def render(data, out):
    s = masthead(data["tagline"])
    s += section("Summary")
    s.append(Paragraph(data["summary"], base))
    s += section("Technical Skills")
    for k, v in data["skills"]:
        s.append(Paragraph(f'<font color="#0E7C86"><b>{k}:</b></font> {v}', base))
    s += section("Professional Experience")
    for e in data["experience"]:
        s.append(header(e["title"], e["dates"]))
        s.append(bullets(e["bullets"]))
    s += section("Projects")
    for p in data["projects"]:
        s.append(header(p["title"], ""))
        s.append(Paragraph(p["meta"], meta))
        s.append(bullets(p["bullets"]))
    s += section("Education")
    s.append(header(*data["education"]))
    s += section("Awards &amp; Certifications")
    s.append(Paragraph(data["awards"], base))
    d = doc(out, "Kush Garg - Resume")
    d.build(s)
    return d.page  # page count; keep tailored resumes at 1


def cover_letter(out, paragraphs, tagline=DATA["tagline"]):
    s = masthead(tagline) + [Spacer(1, 10), HRFlowable(width="100%", thickness=0.8, color=TEAL, spaceAfter=14)]
    s += [Paragraph(p, letter) for p in paragraphs]
    doc(out, "Kush Garg - Cover Letter").build(s)


if __name__ == "__main__":
    render(copy.deepcopy(DATA), sys.argv[1])

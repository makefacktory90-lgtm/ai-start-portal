"""Build the printable homework handout for lesson 2.

Pass the shared ChatGPT space URL as the first argument once it is available.
"""

import sys
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
)


ROOT = Path(__file__).parent
OUT = ROOT / "it-transformation-lab-2026/files/lesson-02/homework-02.pdf"
SPACE_URL = sys.argv[1] if len(sys.argv) > 1 else None
if SPACE_URL and not SPACE_URL.startswith("https://chatgpt.com/"):
    raise SystemExit("Expected a https://chatgpt.com/ space URL")

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="ArialBold")

W, H = 842, 1191
RED = colors.HexColor("#C12632")
INK = colors.HexColor("#171717")
MUTED = colors.HexColor("#515151")
PAPER = colors.HexColor("#FFFDF8")
YELLOW = colors.HexColor("#F2CF65")
CW = W - 116


def style(name, size, leading, bold=False, color=INK):
    return ParagraphStyle(name, fontName="ArialBold" if bold else "Arial",
                          fontSize=size, leading=leading, textColor=color,
                          spaceAfter=0, allowWidows=0, allowOrphans=0)


ST = {
    "eyebrow": style("eyebrow", 15, 20, True, RED),
    "title": style("title", 34, 43, True),
    "lead": style("lead", 21, 30),
    "task": style("task", 25, 32, True),
    "body": style("body", 18.5, 27),
    "small": style("small", 15, 22, color=MUTED),
    "link": style("link", 17, 24, True),
}


def P(text, kind="body"):
    return Paragraph(text, ST[kind])


def box(text):
    t = Table([[P(text)]], colWidths=[CW])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), YELLOW),
        ("LEFTPADDING", (0, 0), (-1, -1), 18),
        ("RIGHTPADDING", (0, 0), (-1, -1), 18),
        ("TOPPADDING", (0, 0), (-1, -1), 14),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
    ]))
    return t


def page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, W, H, stroke=0, fill=1)
    canvas.setStrokeColor(RED)
    canvas.setLineWidth(3)
    canvas.line(58, H - 48, W - 58, H - 48)
    canvas.setStrokeColor(colors.HexColor("#D6CEC3"))
    canvas.setLineWidth(1)
    canvas.line(58, 55, W - 58, 55)
    canvas.setFont("Arial", 12)
    canvas.setFillColor(MUTED)
    canvas.drawString(58, 36, "Ирина Буян и Сергей Хабаров · Урок 2")
    canvas.drawRightString(W - 58, 36, str(doc.page))
    canvas.restoreState()


doc = BaseDocTemplate(str(OUT), pagesize=(W, H), leftMargin=58,
                      rightMargin=58, topMargin=72, bottomMargin=72,
                      title="Домашнее задание после урока 2",
                      author="Ирина Буян и Сергей Хабаров")
frame = Frame(58, 72, CW, H - 144, leftPadding=0, rightPadding=0,
              topPadding=0, bottomPadding=0)
doc.addPageTemplates(PageTemplate(id="homework", frames=[frame], onPage=page))

story = [
    P("ПОСЛЕ ВТОРОЙ ВСТРЕЧИ", "eyebrow"), Spacer(1, 11),
    P("Домашнее задание: работаем вместе", "title"), Spacer(1, 18),
    P("Коллеги, потихоньку начинаем работать в одном пространстве. Наша цель - усилить речь фактурой команды и взглядом друг друга. Здесь всего три действия.", "lead"),
    Spacer(1, 24),
]

if SPACE_URL:
    safe_url = escape(SPACE_URL, quote=True)
    story.append(box(f'<link href="{safe_url}" color="#171717"><b>Открыть общее пространство «Отчёт урок 2»</b></link>'))
else:
    story.append(box('<b>Ссылка на пространство «Отчёт урок 2»:</b> Ирина пришлёт её вместе с приглашением.'))

story.extend([
    Spacer(1, 25),
    P("1. Ответьте на вопросы опросника", "task"), Spacer(1, 9),
    P("Откройте пространство по ссылке, затем <b>«Content» → «Опросник»</b>. Внизу страницы добавьте своё имя и ответы. Пожалуйста, не стирайте чужой текст."), Spacer(1, 9),
    P("<b>Проверка:</b> закройте страницу и откройте снова. Ваши ответы должны остаться на месте.", "small"),
    Spacer(1, 25),
    P("2. Покажите команде свою речь", "task"), Spacer(1, 9),
    P("В том же пространстве, во вкладке <b>«Content»</b>, создайте страницу <b>«Речь - Имя Фамилия»</b> и вставьте текст, который подготовили на занятии. Можно попросить ChatGPT создать страницу из итогового текста беседы, но обязательно назовите пространство: <b>«Отчёт урок 2»</b>."), Spacer(1, 9),
    P("<b>Проверка:</b> откройте пространство повторно. В его содержимом должна появиться ваша речь. Если вы только поделились личной страницей с Ириной, команда её здесь не увидит.", "small"),
    Spacer(1, 25),
    P("3. Оставьте комментарий коллеге", "task"), Spacer(1, 9),
    P("Откройте любую чужую речь и оставьте один конкретный комментарий: что уже работает, какой факт нужно проверить или что осталось непонятным. Чужой текст без согласования не переписывайте."), Spacer(1, 9),
    P("<b>Проверка:</b> снова откройте эту речь и убедитесь, что комментарий виден.", "small"),
    Spacer(1, 24),
    P('<link href="https://iraai.ru/ai-start-portal/it-transformation-lab-2026/lesson-02.html#recording" color="#9F1720">Открыть запись и материалы второго урока</link>', "link"),
])

doc.build(story)
print(OUT)

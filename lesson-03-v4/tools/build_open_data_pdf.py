from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "it-transformation-lab-2026/files/lesson-03/открытые-данные-норникель-2025.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("ArialRu", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ArialRu-Bold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("ArialRu", normal="ArialRu", bold="ArialRu-Bold")

ink = colors.HexColor("#1B2020")
red = colors.HexColor("#C52936")
teal = colors.HexColor("#087D77")
muted = colors.HexColor("#566360")
line = colors.HexColor("#D4DAD7")

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=43, leftMargin=43, topMargin=42, bottomMargin=36)
width = A4[0] - 86
styles = {
    "kicker": ParagraphStyle("kicker", fontName="ArialRu-Bold", fontSize=9, leading=12, textColor=red, spaceAfter=12),
    "title": ParagraphStyle("title", fontName="ArialRu-Bold", fontSize=23, leading=27, textColor=ink, spaceAfter=11),
    "body": ParagraphStyle("body", fontName="ArialRu", fontSize=10.4, leading=15, textColor=ink, spaceAfter=8),
    "small": ParagraphStyle("small", fontName="ArialRu", fontSize=8.8, leading=12.8, textColor=muted, spaceAfter=7),
    "label": ParagraphStyle("label", fontName="ArialRu-Bold", fontSize=11, leading=14, textColor=ink, spaceBefore=15, spaceAfter=8),
    "number": ParagraphStyle("number", fontName="ArialRu-Bold", fontSize=17, leading=20, textColor=teal),
    "fact": ParagraphStyle("fact", fontName="ArialRu", fontSize=9.5, leading=13, textColor=ink),
}
P = lambda text, style="body": Paragraph(text, styles[style])

story = [
    P("УРОК 3 / ДОПОЛНИТЕЛЬНЫЙ КЕЙС", "kicker"),
    P("Открытые данные для учебного пресс-релиза", "title"),
    P("Короткая выжимка из открытого Регионального атласа «Норникеля» за 2025 год. Это не новый пресс-релиз компании и не замена первоисточника.", "body"),
    P("Факты с точными периодами и единицами", "label"),
]
facts = [
    ("198 тыс. тонн", "никеля произведено из собственного сырья в 2025 году"),
    ("425 тыс. тонн", "меди произведено из собственного сырья в 2025 году"),
    ("2 725 тыс.", "тройских унций палладия произведено из собственного сырья в 2025 году"),
    ("667 тыс.", "тройских унций платины произведено из собственного сырья в 2025 году"),
    ("1 202 тыс. тонн", "выбросы загрязняющих веществ в атмосферу в 2025 году; на 8% ниже уровня предыдущего года"),
]
rows = [[P(number, "number"), P(desc, "fact")] for number, desc in facts]
table = Table(rows, colWidths=[148, width - 148], hAlign="LEFT")
table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LINEBELOW", (0, 0), (-1, -1), .5, line),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (0, -1), 12),
    ("TOPPADDING", (0, 0), (-1, -1), 8),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
]))
story.extend([table, P("Задание для самостоятельной практики", "label")])
story.append(P("Выберите паспорт «Результаты отчёта» и напишите короткий ретроспективный черновик по показателям 2025 года. Не представляйте старые результаты как новое событие. Не добавляйте причины изменений и прогнозы, которых здесь нет.", "body"))
story.append(P("Важно: последние данные по выбросам относятся к отдельной экологической теме; не смешивайте её с производственными итогами без редакционной задачи.", "small"))
story.append(P("Первоисточник: Региональный атлас «Норникеля» за 2025 год, раздел «Ключевые цифры и факты». <link href='https://atlas2025.nornickel.ru/key-facts-figures/' color='#087D77'>Открыть страницу с данными</link>. <link href='https://atlas2025.nornickel.ru/download/ru/ar/full-report/ar_ru_atlas-nornik_2025.pdf' color='#087D77'>Оригинальный PDF атласа</link> (большой файл, около 65 МБ). Проверено 29.10.2026.", "small"))
doc.build(story)
print(OUTPUT)

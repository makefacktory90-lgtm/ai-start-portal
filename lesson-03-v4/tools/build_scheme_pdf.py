from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "it-transformation-lab-2026/files/lesson-03/Схемы-урока-3-База-и-Про.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("ArialRu", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ArialRu-Bold", str(FONT_DIR / "Arial Bold.ttf")))

W, H = 1200, 675
INK = HexColor("#191B1B")
MUTED = HexColor("#53615D")
RED = HexColor("#C52936")
TEAL = HexColor("#087D77")
YELLOW = HexColor("#F2D874")
PALE_TEAL = HexColor("#D9EEEA")
PALE_RED = HexColor("#F0D6D8")
WHITE = HexColor("#FFFFFF")
LINE = HexColor("#D4DAD7")

c = canvas.Canvas(str(OUTPUT), pagesize=(W, H), pageCompression=1)
c.setTitle("Урок 3. Схемы: повторение, База, Про")
c.setAuthor("IRA × AI")


def rect(x, y, width, height, color, stroke=None):
    c.setFillColor(color)
    if stroke:
        c.setStrokeColor(stroke)
    c.rect(x, y, width, height, fill=1, stroke=bool(stroke))


def line(x1, y1, x2, y2, color=LINE, width=1):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def text(x, y, content, size=18, color=INK, bold=False):
    c.setFillColor(color)
    c.setFont("ArialRu-Bold" if bold else "ArialRu", size)
    c.drawString(x, y, content)


def wrapped(x, top, content, max_width, size=18, leading=None, color=INK, bold=False):
    leading = leading or size * 1.25
    font = "ArialRu-Bold" if bold else "ArialRu"
    for index, row in enumerate(simpleSplit(content, font, size, max_width)):
        text(x, top - index * leading, row, size, color, bold)


def frame(number, label):
    rect(0, H - 7, W, 7, RED)
    text(45, H - 48, "IRA × AI", 17, INK, True)
    c.setFont("ArialRu-Bold", 13)
    c.setFillColor(MUTED)
    c.drawRightString(W - 45, H - 46, label)
    line(45, 39, W - 45, 39, LINE)
    text(45, 19, "УРОК 3 · 30 ОКТЯБРЯ 2026", 11, MUTED, True)
    c.setFont("ArialRu-Bold", 11)
    c.setFillColor(RED)
    c.drawRightString(W - 45, 19, f"{number:02d} / 03")


frame(1, "МАРШРУТ ЗАНЯТИЯ")
text(45, 560, "Три части. Один общий результат.", 38, INK, True)
wrapped(45, 522, "Сначала добиваемся совместной работы. Потом все вместе пишем один черновик. Только после этого показываем усиления.", 1080, 20, 25, MUTED)
bands = [
    (YELLOW, "01  ПОВТОРЯЕМ", "Домашка и комментарии", "Открыли общее пространство → нашли свой ответ → оставили комментарий → проверили, что всё сохранилось."),
    (PALE_TEAL, "02  ДЕЛАЕМ ВМЕСТЕ", "Тексты: База", "Контент + язык + формат → один чат → черновик → страница → коллега с правом редактирования."),
    (PALE_RED, "03  ПОСЛЕ БАЗЫ", "Тексты: Про", "Свои источники и голоса, проверка стратегии и фактов, редактура, журнал ошибок."),
]
for index, (color, kicker, title, body) in enumerate(bands):
    y = 335 - index * 105
    rect(45, y, 1110, 91, color)
    text(66, y + 64, kicker, 13, INK, True)
    text(66, y + 35, title, 23, INK, True)
    wrapped(420, y + 59, body, 700, 17, 23, INK)
c.showPage()

frame(2, "СХЕМА 1 · БАЗА")
text(45, 560, "Контент + язык + формат = черновик", 36, INK, True)
wrapped(45, 524, "На занятии все берут один набор учебных данных, один готовый голос и один паспорт формата.", 1080, 19, 24, MUTED)
stages = [
    (WHITE, TEAL, "01", "КОНТЕНТ", "Учебные данные о линии: событие, дата, цифры, ограничения."),
    (PALE_TEAL, TEAL, "02", "ЯЗЫК", "Рабочий паспорт голоса. Получен из 19 опубликованных материалов."),
    (HexColor("#FBF5E8"), HexColor("#B8862F"), "03", "ФОРМАТ", "Паспорт №1: производственный результат. Всего есть шесть вариантов."),
    (WHITE, RED, "04", "ЧЕРНОВИК", "Три файла в один чат. Сначала карта фактов, затем текст."),
]
for index, (fill, accent, number, title, body) in enumerate(stages):
    x = 45 + index * 284
    rect(x, 257, 258, 230, fill, LINE)
    rect(x, 257, 5, 230, accent)
    text(x + 20, 455, number, 15, accent, True)
    text(x + 20, 408, title, 23, INK, True)
    wrapped(x + 20, 366, body, 216, 17, 23, INK)
    if index < 3:
        text(x + 263, 364, "→", 25, TEAL, True)
rect(45, 105, 1110, 110, INK)
text(67, 174, "ПОСЛЕ ЧЕРНОВИКА", 13, HexColor("#83D5C7"), True)
wrapped(67, 142, "Просим ChatGPT создать страницу из текста. Открываем её, проверяем и через «Поделиться» приглашаем коллегу с правами редактора.", 1060, 20, 27, WHITE)
c.showPage()

frame(3, "СХЕМА 2 · ПРО")
text(45, 560, "«Про»: добавляем только нужные блоки", 35, INK, True)
wrapped(45, 524, "Пять возможных входов: исследование, интервью, внутренний бриф, цифры и отчёты, открытые источники.", 1100, 18, 23, MUTED)
modules = [
    ("01", "Свои голоса", "Снять паспорт языка"),
    ("02", "Свои форматы", "Снять каркас документа"),
    ("03", "Карта фактов", "Отделить факт от плана"),
    ("04", "Проверка источников", "Сверить числа и цитаты"),
    ("05", "Проверка стратегии", "Сопоставить с брифом"),
    ("06", "Humanizer", "Убрать машинные обороты"),
    ("07", "Под площадку", "Сохранить факты, сменить подачу"),
    ("08", "Вопросы журналиста", "Увидеть пробелы"),
    ("09", "Журнал правок", "Записать ошибки"),
    ("10", "Следующая версия", "Обновить промпт или навык"),
]
for index, (number, title, detail) in enumerate(modules):
    col, row = index % 5, index // 5
    x, y = 45 + col * 224, 325 - row * 160
    rect(x, y, 210, 145, WHITE, LINE)
    rect(x, y + 141, 210, 4, TEAL if index < 5 else RED)
    text(x + 14, y + 112, number, 13, RED, True)
    wrapped(x + 14, y + 81, title, 182, 18, 22, INK, True)
    wrapped(x + 14, y + 39, detail, 182, 13, 16, MUTED)
wrapped(45, 75, "Финальный текст утверждает человек. Модель не учится от правок сама: мы явно обновляем инструкции, примеры или навык.", 1080, 17, 22, INK)
c.linkURL("https://iraai.ru/ai-start-portal/it-transformation-lab-2026/lesson-03-formula.html", (45, 0, 600, 38), relative=0)
c.showPage()
c.save()
print(OUTPUT)

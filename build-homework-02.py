"""Build the concise lesson 2 homework and optional sharing guide."""

from html import escape
from io import BytesIO
from pathlib import Path

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, Image, KeepTogether, PageBreak, PageTemplate,
    Paragraph, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).parent
OUT = ROOT / "it-transformation-lab-2026/files/lesson-02/homework-02.pdf"
SPACE_URL = "https://chatgpt.com/space/page_6adb2c8c92788191a43dcb2ab457d371"
SCREENSHOTS = Path("/Users/irinabuyan/Desktop")

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="ArialBold")

W, H, CW = 842, 1191, 726
RED = colors.HexColor("#B51F2A")
INK = colors.HexColor("#171717")
MUTED = colors.HexColor("#4D4D4D")
PAPER = colors.HexColor("#FFFDF8")
YELLOW = colors.HexColor("#F3D26D")
PALE = colors.HexColor("#F4F0E8")


def style(name, size, leading, bold=False, color=INK):
    return ParagraphStyle(name, fontName="ArialBold" if bold else "Arial",
                          fontSize=size, leading=leading, textColor=color,
                          spaceAfter=0, allowWidows=0, allowOrphans=0)


ST = {
    "eyebrow": style("eyebrow", 15, 20, True, RED),
    "title": style("title", 36, 44, True),
    "lead": style("lead", 20, 29),
    "section": style("section", 24, 32, True),
    "step": style("step", 18.5, 27),
    "body": style("body", 18, 26),
    "small": style("small", 16, 23, color=MUTED),
}


def p(text, kind="body"):
    return Paragraph(text, ST[kind])


def box(text, color=PALE):
    table = Table([[p(text)]], colWidths=[CW])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("LEFTPADDING", (0, 0), (-1, -1), 18),
        ("RIGHTPADDING", (0, 0), (-1, -1), 18),
        ("TOPPADDING", (0, 0), (-1, -1), 14),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
    ]))
    return table


def step(number, text):
    return KeepTogether([p(f"<font color='#B51F2A'><b>{number}.</b></font> {text}", "step"), Spacer(1, 9)])


def section(title, intro=None):
    items = [p(title, "section"), Spacer(1, 10)]
    if intro:
        items.extend([p(intro), Spacer(1, 13)])
    return items


def screenshot(filename, crop, width, caption):
    with PILImage.open(SCREENSHOTS / filename) as source:
        clipped = source.crop(crop)
        data = BytesIO()
        clipped.save(data, format="PNG")
    data.seek(0)
    picture = Image(data, width=width, height=width * clipped.height / clipped.width)
    return KeepTogether([picture, Spacer(1, 7), p(caption, "small"), Spacer(1, 14)])


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
    canvas.drawString(58, 36, "Домашнее задание · Занятие 2")
    canvas.drawRightString(W - 58, 36, str(doc.page))
    canvas.restoreState()


doc = BaseDocTemplate(str(OUT), pagesize=(W, H), leftMargin=58,
                      rightMargin=58, topMargin=72, bottomMargin=72,
                      title="Занятие 2. Два задания для работы в команде",
                      author="Ирина Буян и Сергей Хабаров")
frame = Frame(58, 72, CW, H - 144, leftPadding=0, rightPadding=0,
              topPadding=0, bottomPadding=0)
doc.addPageTemplates(PageTemplate(id="homework", frames=[frame], onPage=page))

link = escape(SPACE_URL, quote=True)
story = [
    p("ПОСЛЕ ВТОРОЙ ВСТРЕЧИ", "eyebrow"), Spacer(1, 10),
    p("Домашка: всего два действия", "title"), Spacer(1, 17),
    p("Коллеги, потихоньку учимся работать вместе. Все уже приглашены в пространство «ДЗ занятие 2». Попробуйте пройти два действия сами. Идеальный текст не нужен: важнее освоиться и помочь друг другу.", "lead"),
    Spacer(1, 21),
    box(f'<link href="{link}" color="#171717"><b>Открыть «ДЗ занятие 2»</b></link><br/>Войдите в тот рабочий аккаунт ChatGPT, куда пришло приглашение.', YELLOW),
    Spacer(1, 9),
    p(f'<link href="{link}" color="#B51F2A">{escape(SPACE_URL)}</link>', "small"),
    Spacer(1, 20),
    *section("1. Ответьте в «опросе»"),
    step("1", 'Откройте пространство по ссылке выше. Под заголовком <b>«ДЗ занятие 2»</b> нажмите <b>Content</b> — вкладку с общими страницами.'),
    step("2", 'Нажмите карточку <b>«опрос»</b>. Прокрутите вопросы до самого низа. После последнего вопроса напишите <b>своё имя</b> и ответы по порядку. Чужие вопросы и ответы не стирайте.'),
    screenshot("Screenshot 2026-10-23 at 16.00.05.png", (88, 75, 810, 330), 650,
               "На вкладке Content откройте правую карточку «опрос»."),
    screenshot("Screenshot 2026-10-23 at 15.42.28.png", (55, 60, 920, 220), 650,
               "Проверьте заголовок «опрос». Свой блок с именем добавьте внизу страницы."),
    step("3", 'Закройте «опрос» и откройте его снова. Ваш текст внизу остался? Значит, ответ сохранился.'),
    PageBreak(),

    p("ВТОРОЕ ОБЯЗАТЕЛЬНОЕ ДЕЙСТВИЕ", "eyebrow"), Spacer(1, 10),
    *section("2. Оставьте комментарий к речи Сергея"),
    step("1", 'Вернитесь в <b>«ДЗ занятие 2» → Content</b>. Откройте страницу с речью Сергея: карточку <b>«Мастер речь для комментариев»</b>.'),
    step("2", 'Прочитайте небольшой фрагмент. Выделите мышкой предложение, к которому хотите обратиться. Нажмите появившуюся кнопку <b>«Комментарий»</b> и напишите одно конкретное предложение или вопрос.'),
    screenshot("Screenshot 2026-10-23 at 15.42.28.png", (1380, 210, 1690, 330), 500,
               "Так выглядит опубликованный комментарий рядом с текстом."),
    step("3", 'Отправьте комментарий. Снова откройте страницу и убедитесь, что он виден. <b>Сам текст речи не переписывайте.</b>'),
    Spacer(1, 8),
    box('<b>Пример:</b> «Здесь хочется конкретного примера: кто из команды что сделал и что изменилось?»<br/><b>На этом обязательная домашка закончена.</b> Свою речь выкладывать не требуется.'),
    PageBreak(),

    p("ТОЛЬКО ПО ЖЕЛАНИЮ", "eyebrow"), Spacer(1, 10),
    p("Что ещё можно попробовать", "title"), Spacer(1, 24),
    *section("1. Добавьте свою речь в общее пространство"),
    step("1", 'Откройте <b>«ДЗ занятие 2»</b>. В правом верхнем углу нажмите <b>«Создать» → «Страница»</b>.'),
    step("2", 'Назовите страницу <b>«Речь — Имя Фамилия»</b>. Вставьте свой текст. Вернитесь в <b>Content</b> и убедитесь, что новая страница там появилась.'),
    step("3", 'Откройте свою страницу, выделите нужную фразу и добавьте комментарий: <b>«@Имя, посмотри, пожалуйста, это место»</b>. Коллега уже имеет доступ через общее пространство.'),
    Spacer(1, 18),
    box('<b>Кому видна страница?</b> Всех участников уже пригласили для работы в «ДЗ занятие 2». Повторно приглашать их не нужно. Через <b>@имя</b> можно обратиться к коллеге в тексте, но это не выдаёт доступ.', YELLOW),
    Spacer(1, 12),
    *section("2. Пригласите коллегу к отдельному документу"),
    step("1", 'Создайте новую <b>страницу вне «ДЗ занятие 2»</b>, назовите её и добавьте свой текст.'),
    screenshot("Screenshot 2026-10-23 at 15.47.24.png", (440, 0, 1300, 80), 610,
               "Кнопка «Поделиться» находится в правом верхнем углу страницы."),
    step("2", 'На этой странице нажмите <b>«Поделиться»</b>. В поле поиска введите <b>имя или почту</b> коллеги, выберите его, установите право <b>«Редактор»</b> и отправьте приглашение.'),
    step("3", 'Теперь выделите нужную фразу и оставьте комментарий: <b>«@Имя, посмотри, пожалуйста, это место»</b>.'),
    step("4", 'На всякий случай скопируйте <b>ссылку на страницу</b> и отправьте её тому же коллеге. Ссылка поможет найти документ; доступ даёт приглашение с правом редактора.'),
]

doc.build(story)
print(OUT)

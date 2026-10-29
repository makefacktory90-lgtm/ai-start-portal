from pathlib import Path


root = Path(__file__).resolve().parents[2]
folder = root / "it-transformation-lab-2026/files/lesson-03"
prompts = folder / "prompts-live"
items = [
    ("1. КАРТА ФАКТОВ", "01-вытащить-факты.txt"),
    ("2. ЧЕРНОВИК", "02-написать-черновик.txt"),
    ("3. ПРОВЕРКА И ИСПРАВЛЕНИЕ", "03-проверить-черновик.txt"),
    ("4. ОТКРЫТЬ КАК СТРАНИЦУ", "04-открыть-как-страницу.txt"),
]
text = "УРОК 3 · ЧЕТЫРЕ ПРОМПТА ДЛЯ ТЕЛЕГРАМА\nОтправляйте по одному, в указанном порядке. Все четыре команды идут в ОДИН чат после прикрепления трёх файлов с портала.\nСтраница урока: https://iraai.ru/ai-start-portal/it-transformation-lab-2026/lesson-03.html\n\n"
text += "\n\n".join(f"{title}\n\n{(prompts / name).read_text(encoding='utf-8').strip()}" for title, name in items)
(folder / "ПРОМПТЫ-ДЛЯ-ТЕЛЕГРАМ-УРОК-3.txt").write_text(text + "\n", encoding="utf-8")

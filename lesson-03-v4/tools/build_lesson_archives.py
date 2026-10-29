from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED


ROOT = Path(__file__).resolve().parents[2]
FILES = ROOT / "it-transformation-lab-2026/files/lesson-03"
PASSPORTS = FILES / "passports"
PROMPTS_LIVE = FILES / "prompts-live"
PROMPTS_PRO = FILES / "prompts-pro"
PDF = FILES / "открытые-данные-норникель-2025.pdf"


def pack(name, paths):
    with ZipFile(FILES / name, "w", ZIP_DEFLATED) as archive:
        for path in paths:
            archive.write(path, arcname=path.name)


passports = sorted(PASSPORTS.glob("*.txt"))
pack("все-паспорта-урок-3.zip", passports)
pack(
    "урок-3-основной-комплект.zip",
    [
        PDF,
        PASSPORTS / "03-результаты-отчета.txt",
        PASSPORTS / "тон-голоса-рабочий.txt",
    ],
)
pack("урок-3-паспорта-и-про.zip", passports + sorted(PROMPTS_PRO.glob("*.txt")) + [PDF, FILES / "Схемы-урока-3-База-и-Про.pdf", FILES / "источники-19.txt", FILES.parent / "lesson-02/skill-humanizer-ru.zip"])

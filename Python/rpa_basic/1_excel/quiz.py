from openpyxl import Workbook
wb = Workbook()  # 새 워크북 생성
ws = wb.active  # 현재 활성화된 sheet 가져옴
wb.save("scores.xlsx")

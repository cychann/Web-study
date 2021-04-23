import pyautogui
# 스크린 샷 찍기
# img pyautogui.screenshot()
# img.save("screenshot.png") # 파일로 저장

# pyautogui.mouseInfo()
# 26,10 NA_Pillow_unsupported NA_Pillow_unsupported

pixel = pyautogui.pixel(26, 10)
print(pixel)

# pyautogui.pixelMatchesColor(26, 10, (rgb 정보))

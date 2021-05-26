import requests
import re
from bs4 import BeautifulSoup

# 망고 플레이스
# 고칼로리 맛집 리스트


def scrap_food_menu(food_title):
    if food_title == '화덕피자':
        food_url = "1069_ovenpizza"
    elif food_title == "초콜릿":
        food_url = "AK5EOCH"
    elif food_title == "삼겹살":
        food_url = "3LKPM7A"
    elif food_title == "제육볶음":
        food_url = "768_jaeyuk"
    elif food_title == "수제버거":
        food_url = "2748_burger2021"
    elif food_title == "파스타":
        food_url = "M5Y1YKX"
    elif food_title == "돈까스":
        food_url = "1418_donkatsu"
    elif food_title == "중식":
        food_url = "2742_chinese2021"

    url = "https://www.mangoplate.com/top_lists/{}".format(food_url)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"}
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    food_places = soup.find_all(
        "figure", attrs={"class": "restaurant-item"}, limit=5)
    for id, place in enumerate(food_places):
        place_name = place.find("h3").get_text()
        place_review_score = place.find("strong").get_text().strip()
        place_where = place.find(attrs={"class": "etc"}).get_text()
        place_link = "https://www.mangoplate.com" + place.find("a")["href"]
        print("{}. {}".format(id+1, place_name))
        print("평점 : {}".format(place_review_score))
        print("위치 : {}".format(place_where))
        print("페이지 링크 : {}".format(place_link))
        print("============================")


if __name__ == "__main__":
    food_title = input()
    scrap_food_menu(food_title)

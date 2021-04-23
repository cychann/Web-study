import requests
import re
from bs4 import BeautifulSoup

# 망고 플레이스
# 고칼로리 맛집 리스트


def scrap_food_menu():
    url = "https://www.mangoplate.com/top_lists/667_highcalorie"
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
    scrap_food_menu()

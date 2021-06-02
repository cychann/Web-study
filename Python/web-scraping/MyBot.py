import requests
import re
from bs4 import BeautifulSoup


def soup_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"}

    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    return soup


def scrape_weather():
    print("[오늘의 날씨]")
    url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%84%9C%EC%9A%B8+%EB%82%A0%EC%94%A8&oquery=%EB%82%A0%EC%94%A8&tqi=hvRehdp0YiRssBLNP68ssssssKs-245179"
    soup = soup_url(url)

    cast = soup.find("p", attrs={"class": "cast_txt"}).get_text()
    curr_temp = soup.find(
        "p", attrs={"class": "info_temperature"}).get_text().replace("도씨", "")
    min_temp = soup.find("span", attrs={"class": "min"}).get_text()
    max_temp = soup.find("span", attrs={"class": "max"}).get_text()
    morning_rain_rate = soup.find(
        "span", attrs={"class": "point_time morning"}).get_text().strip()
    afternoon_rain_rate = soup.find(
        "span", attrs={"class": "point_time afternoon"}).get_text().strip()
    dust = soup.find("dl", attrs={"class": "indicator"})
    pm10 = dust.find_all("dd")[0].get_text()
    pm25 = dust.find_all("dd")[1].get_text()

    print(cast)
    print("현재 {} (최저 {} / 최고 {})".format(curr_temp, min_temp, max_temp))
    print("오전 {}, 오후 {}".format(morning_rain_rate, afternoon_rain_rate))
    print("미세먼지 {}".format(pm10))
    print("초미세먼지 {}".format(pm25))


def scrape_headline_news():
    print("[헤드라인 뉴스]")
    url = "https://news.naver.com/"
    soup = soup_url(url)

    headline_lists = soup.find(
        "ul", attrs={"class": "hdline_article_list"}).find_all("li", limit=3)
    for id, news in enumerate(headline_lists):
        title = news.find("a").get_text().strip()
        link = url + news.find("a")["href"]
        print("{}. {}".format(id + 1, title))
        print(" (링크 : {})".format(link))
    print()


if __name__ == "__main__":
    scrape_weather()
    print()
    scrape_headline_news()

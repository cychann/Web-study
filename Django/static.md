# Static

1. Static을 적용하고자 하는 App 내에 static 폴더 생성 후 적용하고자 하는 파일 넣기
   
2. settings.py 내에 설정 코드 작성하기
```python
STATICFILES_DIRS = [os.path.join(BASE_DIR, '적용할 App 이름', 'static')] # static 파일이 있는 경로를 작성
STATIC_ROOT = os.path.join(BASE_DIR, 'static') 
# static 파일을 한 곳에 모을 때, 모아줄 위치
```

3. collestatic 명령어 적용
```
python manage.py collectstatic
```

4. static 파일을 .html에서 불러오기 1
```html
{% load static %}  <!-- static을 load 한 후 아래 코드에서 처럼 사용한다 -->
<img src="{% static '파일이름.확장자' %}" width="" height="">
```
--- 

# Media

1. settings.py 내에 설정 코드 작성
```python
MEDIA_ROOT = os.path.join(BASE_DIR, 'media') # media 파일이 저장되는 위치
MEDIA_URL = '/media/' # media 파일을 요청 받는 url 주소
```

2. 프로젝트 내의 urls.py에 코드를 작성
```python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
```

3. models.py 내에 가서 코드를 작성
```python
    class Blog(models.Model):
        image = models.ImageField(upload_to="media/", null=True, blank=True)
```

4. pillow 패키치 설치와 DB migrate 하기
```
pip install pillow
python manage.py makemigrations
python manage.py migrate
```
> pillow는 파이썬 이미징 라이브러리로서 여러 이미지 파일 포맷을 지원하고, 다양한 이미지 처리 기능을 제공한다. 

5. Blog에서 Media를 사용할 수 있도록 만들기
```html
<form enctype="multipart/form-data">
<input type="file" name="image">
```

- views.py에서 이미지 파일 request 받으려면
  ```python
  def create(request):
    new_blog.image = request.FILES['image'] # 여기서의 image는 5번에서의 input 태그에 있는 name 속성에 설정된 "image"를 의미한다
  ```

- html에서 이미지를 보여주려고 <img src = "{{blog.image.url"> 을 넣어서 실행하면 오류가 발생한다. -> 해당 게시물에 image 파일이 없는데, image를 불러왔기 때문 이를 해결하기 위해 아래 코드를 작성한다.

```
{% if blog.image %}
{% endif %}
```

--- 

# Template 상속

html 파일을 여러개 작성하게 될 때, 반복되는 여러 코드 조각들을 일일이 작성해야 하는 문제를 해결할 수 있다.

1. 프로젝트 폴더에 templates 폴더 만들기
   
2. templates 폴더에 base.html 만들기
{% block container %}
<!-- base.html를 상속할 템플릿에서 구현할 영역 -->
{% endblock %}

3. settings.py에 base.html 위치 알려주기
```python
'DIRS': ["프로젝트 폴더/templates"],
# TEMPLATE 이라는 객체 안에 'DIRS'가 있다
```
4. base.html을 상속할 페이지에 코드 작성
```html
{% extends 'base.html' %}
{% block container %}
{% endblock %}
```

### 코드 재사용

```html
<!-- 재사용될 코드가 있는 파일 -->
{% extends '재사용할 코드 파일' %}
{% block container %}
<!-- 재사용할 코드 -->
{% endblock %}
```

```html
<!-- 코드를 재사용할 파일 -->
{% include "재사용할 코드 파일" %}
```


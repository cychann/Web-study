### 데이터베이스란?

- 다수의 사용자가 데이터들의 공유와 운영을 위해 저장해 놓는 공간

### 관계형 데이터 베이스(RDB)

- 흔히 ROW와 COLUMN으로 테이블간 관계를 나타내며 이렇게 표현된 데이터 베이스는 SQL을 통하여 관리, 접근한다. 여기서 SQL은 장고의 ORM을 사용한다.

### 장고 ORM이란?

- Object(객체), Relational(관계), Mapper(연결)
- 객체 지향적인 방법으로 데이터베이스의 데이터를 조작 및 관리하는 것을 말하며, 쉽게 말해 파이썬과 DB의 통역사 역할을 해주는 것이다.
- models.py에 있는 class 하나와 db 테이블 하나가 대응

### models.py 에서 class 생성 예시

```python
from django.db import models

class Blog(models.Model):
	title = models.CharField(max_length=200)
	pub_date = models.DateTimeField()
	body = models.TextField()
# 각 변수가 하나의 column에 해당
```

### models.py에서 변경 후 다음과 같은 명령어를 작성

- python manage.py makemigrations

models.py에서 적용한 변경사항이나 추가된 혹은 삭제된 사항들을 감지하여 파일로 생성

- python manage.py migrate

적용되지 않은 migrations들을(설정값들을) 적용시키는 역할

### 장고가 제공해주는 admin

- admin/ url로 들어가면 사용 가능하다
- python [manage.py](http://manage.py) createsuperuser 명령어로 admin 유저를 만들어 주어야한다

### admin.py에 모델 등록

```python
from .models import [앱이름]

admin.site.register([앱이름])
```
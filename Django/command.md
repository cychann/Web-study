### 가상환경
> python3 -m venv [가상환경이름]

가상환경을 사용하는 이유 : 여러 프로젝트에서 같은 모듈, 다른 버전을 동시에 사용하기 위해 + 프로그램을 실행하기 위한 최소한의 환경을 구축 -> 프로젝트마다 각각의 독립된 가상 환경을 생성한 후, 그 안에서 프로젝트 진행

### 장고 설치
> pip install django

### 프로젝트 생성
> django-admin startproject [프로젝트이름]

### 앱 생성
> python manage.py startapp [앱이름]

### models.py에 변화가 있을 때
> python manage.py makemigrations

### models.py를 수정한 후 데이터를 매핑할 때
> python manage.py migrate

### 서버를 실행할 때 
- > python manage.py runserver (127.1.1.0:8000)
- > python manage.py runserver 8000 (포트만 지정)
- > python manage.py runserver 0.0.0.0:8000 & (&를 명령끝에 추가하면 웹 서버 프로그램이 백그라운드에서 실행)

### admin을 생성시
> python manage.py createsuperuser

---


### MTV 패턴 : Model / Template / View
- Model: DB, 즉 데이터 저장 담당 (models.py에 작성)
- Template: 사용자에게 보여지는 시각적인 인터페이스 담당(templates 폴더를 생성하여 내부에서 작성)
- View: 데이터 처리를 담당. model에서 정보를 받아 처리한 후 template에 전달하여 사용자에게 보여줌(views.py에 작성)

### 장고에서 App이란
- 프로젝트를 구성하는 단위 (ex 네이버(프로젝트) - 검색(앱) 쇼핑(앱) 메일(앱)

### 앱 연동
- settings.py에서 INSTALLED_APPS 리스트 안에 '앱이름', 추가하기 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

### 웹사이트 구동 순서
1. 사용자 -> 서버 요청
2. 서버의 View는 Model에서 요청에 필요한 데이터를 받음
3. View는 받은 데이터를 적절하게 처리해서 Template으로 넘김
4. Template는 받은 정보를 사용자에게 보여줌

### 홈페이지 작성 예시
- templates 폴더를 만들고 안에 임시 파일을 생성
- settings.py에 templates 등록
여기서 앱 안에 폴더를 만들었으면 위에 적었던 앱 연동에 써져있는 방법으로 해도 되지만, 밖에 만들었다면 import os 를 위에 추가하고 TEMPLATES 리스트 안에 'DIRS': [os.path.join(BASE_DIR, 'templates')],를 추가한다.
- views.py에서 요청을 받아 리턴을 함수를 등록 ex)
def index(request):
   return render(request, 'index.html')
- urls.py에서 url 연결해주기 ex)
path('index', views.index, name="index"),
만약 여기서 urls.py를 앱 폴더 내에서 만들고 새로 urls.py를 만들어 등록했다면, 프로젝트 urls.py에 다음과 같이 코드를 추가해 만든 urls.py를 연결한다.
from django.urls import path, include(이것을 추가)
path('', include('앱이름.urls)),

form 태그
- action: 폼을 전송할 서버 주소를 지정
- method: 폼을 전송한 http 메소드를 정함(주로 GET, POST)pip install django
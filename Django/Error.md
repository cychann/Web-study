# Django Foreign Key constraint failed

> Django admin에서 유저관련 데이터를 추가, 생성할 때 발생하는 에러같다.

> 열심히 구글링을 해보니 문제는 Custom User Model을 생성하면서 생긴 user_user 테이블과 기존에 admin 계정이 저장된 auth_user 테이블의 상속문제 때문에 에러가 발생하는 것이라고 한다.

## 해결법

migrate 할때 Custom User Model 구현을 끝내고 하면 편하다.

1. db.sqlite3 파일 삭제
2. Custom User Model 을 구현한 app 의 migrations 폴더 삭제
3. python manage.py makemigrations ( 만약 no detected 가 뜨면 python manage.py makemigrations 앱이름)
4. python manage.py migrate


이후에 어드민계정을 생성하고 django admin에 다시 들어가서 추가, 삭제를 해주면 에러가 나지 않는다.
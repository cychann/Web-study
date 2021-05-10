### Crud란?

- 장고 orm을 통해서 데이터베이스에 정보를 생성, 수정, 삭제하는 것
- Create / Read / Update / Delete

### from django.shortcuts import render, get_object_or_404

- 해당 테이블의 해당 id값에 객체가 없으면 404에러를 띄우는 메소드
- blog = get_object_or_404([class 이름], pk=[인자값]) 이런식으로 사용

### path-converter

- 객체마다 detail페이지가 다를텐데 url을 그때마다 어떻게 다르게 연결을 해주어야 하지..? 이 질문에 대한 해답이다
- 지정한 converter type의 name변수를 view 함수로 넘기는 것, 객체의 id를 받아 두번째 인자의 detail함수에 넘기는 역할을 하고 객체마다 페이지 url를 다르게 할 수 있도록 한다.

POST

- GET방식은 정보가 URL에 뜨기 때문에 보안에 취약
- POST방식을 사용하려면 csrf토큰을 보내야 한다
  >{% csrf_token%}
- 다음은 POST 메소드로 form안의 정보들을 create함수로 넘긴 예시이다.

```python
<h1>Make new blog</h1>

<form action="{%url 'create'%}" method="POST">
    {% csrf_token%}

    <h3>
        제목: 
        <input type="text" name="title">
    </h3>
    <p>
        내용:
        <textarea name="body" id="" cols="30" rows="10">내용을 입력해주세요!</textarea>
    </p>

    <button type="submit">작성!</button>
    <!-- type을 submit으로 설정한 button을 form태그 안에 만들면
    form태그 안에 정보가 action에 연결된 create함수로 넘어가게 됨-->
</form>
```

- 아래 함수의 3,4번째 줄과 같이 사용이 가능하다.

```python
def create(request):   
    new_blog = Blog()
    new_blog.title = request.POST['title']
    new_blog.body = request.POST['body']
    new_blog.pub_date = timezone.datetime.now()
    new_blog.save() # save() 잊지 말아야한다!
    return redirect('/blog/' + str(new_blog.id))
```

timezone

- timezone.datetime.now()를 사용하기 위해 from django.utils import timezone 해야함

redirect

> from django.shortcuts import redirect
- render 는 템플릿을 불러오고, redirect 는 URL로 이동하는 방식이다.
- 위 코드에서 보이듯이 어느 URL로 이동할지에 대한 파라미터를 받는다.
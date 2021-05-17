### App에 forms.py를 추가

```python
from django import forms
from .models import [앱이름]

class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = ['title', 'writer', 'body', 'image'] # models.py에 있는 요소들
```

### views.py에 가서
```python
from .fomrs import BlogForm
def new(request):
    form = BlogForm()
    return render(request, 'new.html', {'form':form})

```

### form을 표시하려는 html 파일에 가서 (이번 예시에서는 new.html)
```python
{{form}} #.as_p .as_table 이런식으로 형태 변경가능
```

### 유효성 검사

```python
def create(request):
    form = BlogForm(request.POST, request.FILES)
    if form.is_valid():   # form이 유효한지 (유효성 검사)
        new_blog = form.save(commit=False)  # 임시저장 (pub_date를 추가해야하기 때문)
        new_blog.pub_date = timezone.now()
        new_blog.save()
        return redirect('detail', new_blog.id)
    return redirect('home') # 유효성 검사에 실패 했을 시
```
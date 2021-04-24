# 브루트 포스

- 가능한 모든 값을 대입해보는 방법.

--- 

내가 풀었던 점수의 석차를 구하는 문제에서 이를 활용한 문제가 있었다.

> N명의 학생의 점수가 입력되면 학생의 석차를 구하는 프로그램을 작성할 때 ( 같은 점수일 경우 높은 석차로 동일 처리)

`n명의 학생의 석차를 저장할 n 크기의 배열을 만들고 모든 값을 1로 초기화한다. 그리고 이중 for문을 돌면서 자신보다 큰 점수를 갖는 학생이 있다면 자신의 석차를 +1 한다.`

### ex code

```c++
int n;
cin >> n;
int score[n], rank[n];

for (int i = 0; i < n; i++)
{
    cin >> score[i];
    rank[i] = 1;
}

for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        if (score[i] < score[j])
        {
            rank[i]++;
        }
    }
}

for (int i = 0; i < n; i++)
{
    cout << rank[i] << " ";
}

return 0;
```
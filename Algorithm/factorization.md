# 소인수분해
n+1 크기의 배열을 만들고 반복문을 통해 해당 배열에 +1을 해준다.

### code

```c++
int tmp, j;
for(int i=2; i<=n; i++) {
	tmp = i;
	j = 2;
	while(true) {
		if(tmp%j == 0) {
			tmp = tmp/j;
			chk[j]++;
		}
		else   j++;
		if(tmp == 1)   break;
	}
}
```
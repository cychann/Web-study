# 유클리드 호제법

 - 최대공약수를 이용해 입력받은 두 수의 최소공배수를 구한다.

### 최소공배수 = 두 자연수의 곱 / 최대공약수

### code

 - 최대공약수
```c++
int gcd(int a, int b) {
	while(b > 0) {
		int temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}
```

- 최소공배수
```c++
int lcm(int a, int b) {
	return (a * b) / gcd(a, b);
}
```

# 소수 판별

### 일반적인 소수 판단하는 방법

1. n이 소수가 되려면, 2보다 크거나 같고 n-1보다 작거나 같은 자연수로 나누어 떨어지면 안된다.

### code

```c++
bool isPrime(int n)
{
    if (n < 2)
        return false;
 
    for (int i = 2; i <= n - 1; ++i)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}
```

2. N이 소수가 되려면, 2보다 크거나 같고, N/2보다 작거나 같은 자연수로 나누어 떨어지면 안된다.

### code

```c++
bool isPrime(int n)
{
    if (n < 2)
        return false;
 
    for (int i = 2; i <= n/2; ++i)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}
```

---

위의 방법은 O(n)의 시간복잡도이다.
이를 해결하기 위해 흔히 알려진 방법은 에라토스테네스의 체이다.

### code
```c++
bool isPrime(int n)
{
    if (n < 2)
        return false;
    for (int i = 2; i * i <= n; ++i)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}

```

-  √n까지만 검사를 해보면 된다. 시간복잡도는 O(√n)이다.
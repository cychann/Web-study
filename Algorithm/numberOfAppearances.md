# 1~n까지 해당 숫자의 개수를 구하는 알고리즘

### code

```c++
int n;
   cin >> n;
   
   int lt=1, cur, rt, res=0, k=1;
   while(lt != 0) {
      lt = n / (k*10);
      cur = (n/k)%10;
      rt = n%k;
      if(cur > 3) {
         res = res+((lt+1)*k);
      }
      else if(cur<3) {
         res = res+ (lt*k);
      }
      else { 
         res = res+(lt*k) + (rt+1);
      }
      
      k *= 10;
   }
   
   cout << res;
```

---

<h2> ex) n = 5367

### 각 lt, cur, rt, k의 값
- loop1 - 536 / 7 / 0 / 1
- loop2 - 53 / 6 / 7 / 10
- loop3 - 5 / 3 / 67 / 100
- loop4 - 0 / 5 / 367 / 1000

> if, else문에서 수학적으로 도출해낸 공식으로 res에 n의 값이 나오는횟수를 축적한다.
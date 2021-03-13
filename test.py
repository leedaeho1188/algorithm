# -------------------------------------2588번---------------------------------
# a = int(input())
# b = int(input())


# one = a*(b % 10)

# ten = a*((b % 100)//10)

# hun  = a*(b//100)

# all_number = a*b

# print(one, ten, hun, all_number, sep='\n')

# --------------------------------------2884번-----------------------------------------


# H,M = input().split()

# H = int(H)
# M = int(M)
# if (M < 45):
#   wake_m = M+15
#   if (H != 0):
#     wake_h = H-1
#   else:
#     wake_h = 23
# else:
#   wake_m = M-45
#   wake_h = H
# print(wake_h, wake_m) 

# --------------------------------------1110번---------------------------------------

# a = int(input()) 
# x = a
# i = -1
# N = 0
# while i != a:
#   y = (x%10)+(x//10)
#   z = ((x%10)*10)+(y%10)
#   i = z
#   x = z
#   N = N + 1

# print(N)
# ------------------------------------4344번--------------------------------------
# # N = 테스트 케이스, 테스트 케이스 숫자에 따라 반복문이 돌수있게 설정
# N = int(input())
# # list에다가 각 클래스의 퍼센트를 구해서 저장 
# list = []
# # 학생 수와 점수들을 각 각 n과 lst에 split해서 저장
# for i in range(N):
#   n,lst = input().split(" ",1)
#   n = int(n)
#   lst = lst.split()    
#   A = 0
#   # A에 lst안에있는 점수의 총합을 구한다.
#   for i in lst:
#     A = A + int(i)

#   average = A/n
#   number = 0
#   # average를 넘는 점수가 있으면 number값에 1씩 더한다.
#   for i in lst:
#     if int(i) > average:
#       number = number + 1
#   # decimal point를 특정 부분까지 주고 끝에 %를 붙이려면 '%.nf%%'을 사용한다.
#   percent = ("%.3f%%" %((number/n)*100))
#   list.append(percent)
# # for문을 돌려서 각 클래스의 평군값을 한줄씩 나오게 한다.
# for i in list:
#   print(i)

# ====================================4673번=================================
# lst는 d(n)을 저장시키는 리스트이다.
# 범위가 1부터 10000까지이다.
# lst = []
# for i in range (1, 10001):
#   i = str(i)
#   length = len(i)
#   A = 0
#   for j in range(length):
#     A = A + int(i[j]) 
#   All = int(i) + A
#   lst.append(All)

# for i in range (1, 10001):
#   if i not in lst:
#     print(i)
# -------------------------------------4673번-------------------------------------

# def d(n):
#     number = n 
#     for i in list(str(n)):
#             number += int(i)
#     return number

# self_num = []

# for v in range(10001):
    
#     self_num.append(d(v))

# for count in range(10001):
    
#     if count in self_num:
#         continue
#     else: print(count)
# ---------------------------------1157번-----------------------------------------------


# lst = []
# # 알파벳이 대문자로 통일되어야되기 때문에 .upper()사용
# word = input().upper()
# # 공통되는 알파벳을 삭제하고 하나씩만 가지고있기 위해 set을 사용했다.
# set_word = list(set(word))
# # word안에 해당하는 알파벳이 몇개인지 확인하고 전 알파벳보다 많으면 lst에 저장
# cnt = 0
# for i in set_word:
#   cnt_1 = word.count(i)
#   if cnt_1 >= cnt:
#     if cnt_1 > cnt:
#       lst =[]
#     cnt = cnt_1
#     lst.append(i)
# # 만약에 lst에 2개이상의 알파벳이 있으면 "?"입력
# if len(lst) > 1:
#   print("?")
# else:
#   print(lst[0])


# -----------------------------2941번--------------------------------------
# word = input()
# word = word.replace("c=", "č")
# word = word.replace("c-", "ć")
# word = word.replace("dz=", "dž")
# word = word.replace("d-", "đ")
# word = word.replace("s=", "š")
# word = word.replace("z=", "ž")
# cnt_1 = word.count("dž")
# cnt_2 = word.count("lj")
# cnt_3 = word.count("nj")
# cnt = cnt_1 + cnt_2 + cnt_3

# x = len(word) - cnt
# print(x)

# -------------------------------2869-------------------------------------
# 범위가 매우 넓기 때문에 while구문을 사용해서 돌리면 시간초과가 나온다.
# 문제의 포인트는 달팽이가 올라갔을 때 나무 막대기에 다 올라가면 내려가지 않는다.
# import math
# A,B,V = (map(int, input().split()))
# day = 0
# # ((A-B)*(day-1))+A = V 이라는 공식이 나온다.
# # day를 두종류로 볼 수 있다. 마지막날과 마지막날을 제외한 그 전날들
# # 마지막날은 A만 플러스 되고 다른날들은 A-B가 된다.
# # 마지막 날에 달팽이가 V보다 같거나 높이 올라가기 때문에 day를 계산할 때 반올림을 해야한다.
# day = math.ceil(((V-A)/(A-B)) + 1)
# print(day)


# -------------------------------10250------------------------------------------
# import math
# T = int(input())
# lst = []
# for i in range(T):
#   H,W,N = map(int, input().split())
#   Rm = ((N%H)*100) + (math.ceil(N/H))
#   # N%H가 0일 경우를 구해야한다.
#   if N%H == 0:
#     Rm = (H*100) + (math.ceil(N/H))
#   lst.append(Rm)

# for i in range(len(lst)):
#   print(lst[i])

# ----------------------------1929-------------------------------------------------
# 소수 찾는 공식
# 2의 배수를 지운다.
# 소수의 배수를 지운다.
# import math

# def isPrime(i):
#   if i > 1:
#     j = int(math.sqrt(i))
#     for x in range(2, j+1):
#       # print(x)
#       if i % x == 0:
#         return False
#     return True 

# M,N = map(int ,input().split())
# for k in range(M, N+1):
#   if isPrime(k):
#     print(k)

# ---------------------------11729-------------------------------
# 재귀함수
# 조건에 맞으면 function을 계속 반복시킨다.
# n = int(input())
# def hanoi_recursive(n, a, b, c):
#   if n == 1:
#     print(a, c)
#     return

#   else:
#     hanoi_recursive(n-1, a, c, b)
#     print(a, c)
#     hanoi_recursive(n-1, b, a, c)
    
    
# sum = 1
# for i in range(n-1):
#   sum = sum*2 + 1
# print(sum)
# # (원판의 개수, 시작지점, 보조, 목표지점)
# hanoi_recursive(n, 1, 2, 3)

# -------------------------------11651-----------------
# N = int(input())
# lst = []
# for i in range(N):
#   [x,y] = map(int ,input().split())
#   lst_xy = [x,y]
#   lst.append(lst_xy)

# lst.sort(key=lambda k: (k[1], k[0]))
# for i in lst:
#   print(i[0], i[1])

# # --------------------------------------

# N = int(input())
# lst = []
# for i in range(N):
#   [x,y] = map(int ,input().split())
#   lst_xy = [y,x]
#   lst.append(lst_xy)

# lst.sort()
# for i in lst:
#   print(i[1], i[0])


# --------------------------2805--------------------------------

# def binarySearch(M, tree): 
#   start = 0
#   end = max(tree)

#   while start <= end: 
#     leng = 0 
#     mid = (start + end) // 2
    
#     for i in tree: 
#       if i >= mid: 
#         leng += i - mid 

#     if leng >= M: 
#       start = mid + 1 
#       result = mid
#     else: 
#       end = mid - 1 

#   return result

# N, M = map(int, input().split()) 
# tree = list(map(int, input().split())) 

# print(binarySearch(M, tree))

# ------------------------------4949--------------------------------------
# stack = []
# answer = []
# while stack != ['.']:
#   stack = list(input())
#   if stack == ['.']:
#     break
#   lst = ['(', ')', '[', ']']
#   n = -1
#   # for 반복문으로 stack에 뒤에부터 lst안에 있는 element 빼고 다른 element는 다 빼낸다.
#   for i in range(len(stack)):
#     if stack[n] not in lst:
#       stack.pop(n)
#     else: #lst안에 있는 element가 stack[n]자리에 있으면 stack[n-1]값을 검사한다.
#       n = n-1
#   string = ""
#   for ele in stack:
#     string += ele
#   # string안에 괄호가 제대로 되어있는지 알기위해서 '()', '[]' 값이랑 비교하고 그 값들을 없앤다.
#   # ')('이나 '][' 제대로 괄호가 나열되어있지 않으면 string에 값이 남아 있을 것이다.
#   while  '()' in string or '[]' in string: 
#     string = string.replace('()', '')
#     string = string.replace('[]', '')
#   if not string: #만약 string변수 안에 아무런 값도 없으면!
#     answer.append('yes')
#   else:
#     answer.append('no')
# for i in answer:
#   print(i)

# ---------------------------1874--------------------------------------------
# N = int(input())
# stack = []
# lst = []
# max_s = 0
# for i in range(N):
#   x = int(input())
#   if x-max_s <= 0:
#     if x == stack[-1]:
#       stack.pop()
#       lst.append('-')
#     else:
#       lst.append('NO')
#   else:
#     for i in range(x-max_s):
#       max_s = max_s + 1
#       stack.append(max_s)
#       lst.append('+')
#     stack.pop()
#     lst.append('-')

# if 'NO' in lst:
#   print('NO')
# else:
#   for i in lst:
#     print(i)
# ------------------------------1021--------------------------------
# N,M = map(int, input().split())
# lst = []
# for x in range(1, N+1):
#   lst.append(x)
# cnt = 0
# num = list(map(int, input().split()))
# for i in num:
#   while lst.index(i) != 0:
#     idx = lst.index(i)+1
#     if idx > (len(lst)//2)+1:
#       lst.insert(0, lst[-1])
#       lst.pop()
#       cnt = cnt + 1
#     else:
#       lst.append(lst[0])
#       lst.pop(0)      
#       cnt = cnt + 1
#   lst.pop(0)

# print(cnt)
#------------------------------2606-DFS-----------------------------
# N = int(input())
# S = int(input())
# dic = {}
# for i in range(N):
#   dic[i+1] = set()
# for j in range(S):
#   a,b =  map(int, input().split())
#   dic[a].add(b)
#   dic[b].add(a)

# def dfs(start, dic):
#   for i in dic[start]:
#     if i not in visited:
#       visited.append(i)
#       dfs(i, dic)
# visited = []
# dfs(1, dic)
# print(len(visited)-1)
# -------------------------2606--BFS-----------------------------
# from sys import stdin
# read = stdin.readline
# dic={}
# for i in range(int(read())):
#     dic[i+1] = set()
# for j in range(int(read())):
#     a, b = map(int,read().split())
#     dic[a].add(b)
#     dic[b].add(a)

# def bfs(start):
#     queue = [start]
#     while queue:
#         for i in dic[queue.pop()]:
#             if i not in visited:
#                 visited.append(i)
#                 queue.append(i)
# visited = []
# bfs(1)
# print(len(visited)-1)

#----------------------------7576--------------------------------
# 몇일이 지나야 토마토가 다 익는지..
# from collections import deque

# dx = [1, -1, 0, 0]
# dy = [0, 0, 1, -1]

# def bfs():
#     result = 0
#     while q:
#         result += 1
#         # _ 사용이유는 값이 필요하지않아서 무시한 경우이다.
#         for _ in range(len(q)):
#             x, y = q.popleft()
#             for i in range(4):
#                 nx = x + dx[i]
#                 ny = y + dy[i]
#                 if 0 <= nx < n and 0 <= ny < m:
#                     if a[nx][ny] == 0:
#                         a[nx][ny] = 1
#                         q.append([nx, ny])
#     return result

# m, n = map(int, input().split())
# a, q = [], deque()
# for i in range(n):
#     row = list(map(int, input().split()))
#     for j in range(m):
#         if row[j] == 1:
#             q.append([i, j])
#     a.append(row)
# result = bfs() - 1
# for i in range(n):
#     for j in range(m):
#         if a[i][j] == 0:
#             print(-1)
#             exit()
# print(result)
# ---------------------------1003------------------------------

# from sys import stdin
# read = stdin.readline
# memo = {
#   0: [1, 0],
#   1: [0, 1]
# }
# lst = []

# def fibonacci(n, fibo_memo):
#   if n in fibo_memo:
#     return fibo_memo[n]
#   nth_fibo = [fibonacci(n-1, fibo_memo)[0] + fibonacci(n-2, fibo_memo)[0], fibonacci(n-1, fibo_memo)[1] + fibonacci(n-2, fibo_memo)[1]]
#   fibo_memo[n] = nth_fibo
#   return nth_fibo

# for _ in range(int(read())):
#   num = int(read())
#   lst.append(num)
#   fibonacci(num, memo)
  

# # for i in lst:
# for i in lst:
#   print((memo[i][0]),memo[i][1])
# ----------------------------11053------------------------------
# x = int(input())

# arr = list(map(int, input().split()))

# dp = [1 for i in range(x)]

# for i in range(x):
#     for j in range(i):
#         if arr[i] > arr[j]:
#             dp[i] = max(dp[i], dp[j]+1)

# print(max(dp))
# --------------------------10815번--------------------------------


# -------------------------------2164번--------------------------------
# from collections import deque
# N = int(input())
# d = deque()
# for i in range(1, N+1):
#   d.append(i)
# while len(d) != 1:
#   d.popleft()
#   d.rotate(-1)
# print(d[0])
# -------------------------------2751번----------------------------
# from sys import stdin
# read = stdin.readline
# N = int(read())
# lst = []
# for _ in range(N):
#   n = int(read())
#   lst.append(n)
# for i in range(N):
#   for j in range(i+1, N):
#     if lst[j] < lst[i]:
#       k = lst[i]
#       lst[i] = lst[j]
#       lst[j] = k

# for num in lst:
#   print(num)

# -----------------------1316번--답 봤다..다시풀자..--------------------------
# 같은 character가 붙어있어야된다.
# N = int(input())
# num = 0
# for _ in range(N):
#   word = list(input())
#   for i in range(len(word)):
#     if i != len(word)-1:
#       if word[i] == word[i+1]:
#         continue
#       elif word[i] in word[i+2:]:
#         break
#     else: 
#       num = num + 1
# print(num)

# --------------------------------2839번---------------------------
# N = int(input())
# num = N//3
# n = 0
# for i in range(num+1):
#   k = N-(3*i)
#   if k%5 == 0: 
#     answer = i+(k/5)
#     n = 1
#     break
# if n == 0:
#   print(-1)
#  else:
#   print(int(answer))
# -----------------------------1011번------------------------------
# import math

# N = int(input())

# count = 0                                    #최소 작동 횟수
# t = int(input())

# for _ in range(t):
#     x, y = map(int,input().split())
#     distance = y - x
#     count = 0  # 이동 횟수
#     move = 1  # count별 이동 가능한 거리
#     move_plus = 0  # 이동한 거리의 합
#     while move_plus < distance :
#         count += 1
#         move_plus += move  # count 수에 해당하는 move를 더함
#         if count % 2 == 0 :  # count가 2의 배수일 때, 
#             move += 1  
#     print(count)

# ---------------------------------4948번-------------------------------
# from sys import stdin
# import math
# read = stdin.readline

# def sosu(i):
#   if i%2 ==0 and i != 2:
#     return False
#   for j in range(2, int(math.sqrt(i))+1):
#     if i%j ==0:
#       return False
#   return True
  
# lst = []
# for k in range(2, 2*(123456)+1):
#   if sosu(k):
#     lst.append(k)

# while True:
#   N  = int(read())
#   if N == 0:
#     break

#   cnt = 0
#   for x in lst:
#     if N < x <= N*2:
#       cnt += 1

#   print(cnt)
# ----------------------------1436번--------------------------------









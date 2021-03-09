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
# import math

# def cutting_tree(N):
#   N = math.ceil(N/2)
  
#   tree_cut = (sum(tree[N-1:])-M)//N
#   if tree_cut >= tree[N]:
#     N = N - math.ceil(N/2)
#     return cutting_tree(N)
#   else:
#     if tree_cut < tree[N-1]:
#       N = N + math.ceil(N/2)
#       return cutting_tree(N)
#     else:
#       print(tree_cut)

# N,M = map(int, input().split())
# tree = list(map(int, input().split()))
# tree.sort()
# cutting_tree(N)


def binarySearch(M, tree): 
  start = 0
  end = max(tree)

  while start <= end: 
    leng = 0 
    mid = (start + end) // 2
    
    for i in tree: 
      if i >= mid: 
        leng += i - mid 

    if leng >= M: 
      start = mid + 1 
      result = mid
    else: 
      end = mid - 1 

  return result

N, M = map(int, input().split()) 
tree = list(map(int, input().split())) 

print(binarySearch(M, tree))




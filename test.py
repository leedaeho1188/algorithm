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

num = list(map(int, input().split()))
day = 0
T = 0
while T < num[2]:
  T = T + num[0]
  day = day + 1
  if T < num[2]:
    T = T - num[1]

print(day)






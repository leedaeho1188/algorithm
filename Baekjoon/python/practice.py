# ------------------------------------4344
# C = int(input())
# lst = []
# for i in range(C):
#   N = list(map(int, input().split()))
#   avg = sum(N[1:])/N[0]

#   ovr = 0
#   for i in N[1:]:
#     if i > avg:
#       ovr = ovr + 1
#   answer = ('%.3f%%' %((ovr/N[0])*100))
#   lst.append(answer)

# for i in lst:
#   print(i)


# ---------------------------------------4673-------------




# ---------------------------------------1157-------------
# word = input().upper()
# word_lst = list(set(word))
# cnt = 0
# char_lst = []
# for i in word_lst:
#   cnt_1 = word.count(i)
#   if cnt_1 >= cnt:
#     if cnt_1 == cnt:
#       char_lst.append(i)
#     else:
#       char_lst = []
#       char_lst.append(i)
#     cnt = cnt_1
  

# if len(char_lst) > 1:
#   print('?')
# else:
#   print(char_lst[0])


# ----------------------------------------2941------------
# word = input()
# crtia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='] 
# for i in crtia:
#   word = word.replace(i, ".")
# print(len(word))

# ---------------------------------------2869번-----------
# import math
# A, B, V = map(int, input().split())
# N = 0
# # (A-B)*(N-1) + A = V
# N = math.ceil((V-A)/(A-B))+1
# print(N)

# ---------------------------------------10250-------------
# import math
# T = int(input())
# lst_rooms = []
# for i in range(T):
#   H,W,N = map(int, input().split())
#   room = (N%H)*100 + math.ceil(N/H)
#   if N%H == 0:
#     room = H*100 + math.ceil(N/H)
#   lst_rooms.append(room)

# for i in lst_rooms:
#   print(i)  
# ---------------------------------------1929---------------
# import math
# def Prime_num(i):
#   if i > 1:
#     j = int(math.sqrt(i))
#     for x in range(2, j+1):
#       if i%x == 0:
#         return False
#     return True
# M,N = map(int, input().split())
# for i in range(M, N+1):
#   if Prime_num(i):
#     print(i)



# M,N = map(int, input().split())
# dic = {}
# for i in range(N):
#   dic[i+1] = list(map(int, input().split()))
#   dic[i+1].insert(0, 1)
#   dic[i+1].append(1)
# dic[0] = list(1 for i in range(M+2))
# dic[N+1] = list(1 for i in range(M+2))
# day = 0
# dic_1 = {}
# n = 0
# while '0' in set(str(dic.values())):
#   for i in range(1, N+1):
#     for j in range(1, M+1):
#       if dic[i][j] == 1:
#         dic_1[i
#         ] = j
#   for key in dic_1.keys():
#     for value in dic_1.get(key):
#       if dic[key][value+1] == 0:
#         dic[key][value+1] = dic[key][value+1] + 1
#         n = n+1
#       if dic[key][value-1] == 0:
#         dic[key][value-1] = dic[key][value-1] + 1
#         n = n+1
#       if dic[key-1][value] == 0:
#         dic[key-1][value] = dic[key-1][value] + 1
#         n = n+1
#       if dic[key+1][value] == 0:
#         dic[key+1][value] = dic[key+1][value] + 1
#         n = n+1
#   if n == 0:
#     print(-1)
#     break
#   else: 
#     day = day+1
#     n = 0
#     dic_1 = {}
# if '0' not in set(str(dic.values())):
#   print(day)
# -------------------------1316-------------------------------
# from sys import stdin
# read = stdin.readline
# cnt = int(read())
# for _ in range(cnt):
#   word = read()
#   for i in range(len(word)):
#     if i != len(word)-1:
#       if word[i] == word[i+1]:
#         continue
#       elif word[i] in word[i+2:]:
#         cnt -= 1
#         break
  
# print(cnt)

# -------------------------2839----------------------------------
# from sys import stdin
# read = stdin.readline
# N = int(read())
# cnt = 0
# while N >= 0:
#   if N%5 == 0:
#     cnt += N/5
#     print(int(cnt))
#     break
#   else: 
#     cnt += 1
#     N -= 3
# if N < 0:
#   print(-1)
# -----------------------1011----------------------------------
# from sys import stdin
# read = stdin.readline
# for _ in range(int(read())):
#   x, y = map(int, read().split())
#   dist = y-x
#   total = 0
#   cnt = 0
#   move = 1
#   while dist > total:
#     total += move
#     cnt += 1
#     if cnt%2 == 0:
#       move += 1
#   print(cnt)
# ----------------------------4948---------------------------
# from sys import stdin
# import math
# read = stdin.readline
# lst = []

# def sosu(i):
#   if i%2 == 0 and i != 2:
#     return False
#   for j in range(2, int(math.sqrt(i))+1):
#     if i%j == 0:
#       return False
#   return True

# for i in range(2, (123456*2)+1):
#   if sosu(i):
#     lst.append(i)
# while True:
#   N = int(read())
#   if N == 0:
#     break
#   cnt = 0
#   for num in lst:
#     if N < num <= 2*N:
#       cnt += 1
#   print(cnt)
# -----------------------------1436----------------------------
# from sys import stdin
# read = stdin.readline
# N = int(read())
# cnt = 0
# num = 666
# while True:
#   if '666' in str(num):
#     cnt += 1
#   if cnt == N:
#     print(num)
#     break
#   num += 1
# -------------------------------1260----------------------------
# import sys
# read = sys.stdin.readline
# N, M, V = map(int, read().split())
# lst = [[0]*(N+1) for _ in range(N+1)]
# visited = [False]*(N+1)

# for _ in range(M):
#   x, y = map(int, read().split())
#   lst[x][y] = 1
#   lst[y][x] = 1

# def dfs(V):
#   visited[V] = True
#   print(V, end=" ")
#   for i in range(1, N+1):
#     if not visited[i] and lst[V][i] == 1:
#       dfs(i)

# def bfs(V):
#   visited[V] = False
#   queue = [V]
#   while queue:
#     V = queue.pop(0)
#     print(V, end=" ")
#     for i in range(1, N+1):
#       if visited[i] and lst[V][i] == 1:
#         queue.append(i)
#         visited[i] = False

  


# dfs(V)
# print()
# bfs(V)









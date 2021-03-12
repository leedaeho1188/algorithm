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


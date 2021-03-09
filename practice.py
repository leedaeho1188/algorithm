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
import math
T = int(input())
lst_rooms = []
for i in range(T):
  H,W,N = map(int, input().split())
  room = (N%H)*100 + math.ceil(N/H)
  if N%H == 0:
    room = H*100 + math.ceil(N/H)
  lst_rooms.append(room)

for i in lst_rooms:
  print(i)  

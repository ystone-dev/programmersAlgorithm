# https://school.programmers.co.kr/learn/courses/30/lessons/120908

def solution(str1, str2):
    if str2 in str1:
      return 1
    else:
      return 2


# 다른풀이: boolean
def solution_b(str1, str2):
    return 1 + int(str2 not in str1)
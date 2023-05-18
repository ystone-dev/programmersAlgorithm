# https://school.programmers.co.kr/learn/courses/30/lessons/120831

def solution(n):
    result = 0
    for i in range(0, n+1 , 2):
        result += i
    return result


# 다른 풀이
def solution_b(n):
  return sum(range(0, n+1, 2))
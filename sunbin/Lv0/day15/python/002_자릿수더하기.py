# https://school.programmers.co.kr/learn/courses/30/lessons/120906

def solution(n):
    answer = 0
    for i in str(n):
        answer += int(i)
    return answer


# 다른풀이
def solution_b(n):
  return sum(int(i) for i in str(n))
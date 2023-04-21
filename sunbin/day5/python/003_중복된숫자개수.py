# https://school.programmers.co.kr/learn/courses/30/lessons/120583

def solution(array, n):
    answer = array.count(n)
    return answer

# 다른 풀이
def solution_b(array, n):
  new_array = []
  for i in array:
    if i == n:
      new_array.append(i)

solution([1, 1, 2, 3, 4, 5], 1)
solution([2, 3, 4], 1)
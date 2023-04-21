# https://school.programmers.co.kr/learn/courses/30/lessons/120585

def solution(array, height):
  return len([i for i in array if i > height])

# 실행
solution([149, 180, 192, 170]	, 167)
solution([180, 120, 140], 190)
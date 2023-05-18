# https://school.programmers.co.kr/learn/courses/30/lessons/120909

def solution(n):
    if n ** (1/2) == int(n ** (1/2)):
      return 1
    else:
      return 2



# 다른풀이: Chat GPT
import math

def solution_gpt(n):
    sqrt_n = math.isqrt(n)

    if sqrt_n * sqrt_n == n:
      return 1
    else:
      return 2
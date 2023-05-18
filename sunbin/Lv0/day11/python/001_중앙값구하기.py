# https://school.programmers.co.kr/learn/courses/30/lessons/120811

def solution(array):
    array.sort()

    return array[len(array)//2]


# 다른풀이
def solutionB(array):
  return sorted(array)[len(array)//2]
# https://school.programmers.co.kr/learn/courses/30/lessons/120825

def solution(my_string, n):
    new_string = ''
    for i in my_string:
      new_string += i * 3

    return new_string



# 다른 풀이
def solutionB(my_string, n):
    return ''.join(i*n for i in my_string)

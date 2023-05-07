# https://school.programmers.co.kr/learn/courses/30/lessons/120893

def solution(my_string):
    answer = ''
    for i in my_string:
        if i.islower():
          answer += i.upper()
        else:
          answer += i.lower()


# 다른풀이: Str.swapcase()

def solution(my_string):
    return my_string.swapcase()


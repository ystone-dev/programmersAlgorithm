# https://school.programmers.co.kr/learn/courses/30/lessons/120849

# 풀이1: replace
def solution(my_string):
    vowel = ["a", "e", "i", "o", "u"]

    for i in vowel:
        my_string = my_string.replace(i, "")

    return(my_string)


# 풀이2: 정규식
import re

def solution_b(my_string):
    p = "a|e|i|o|u"
    solution = re.sub(p, "", my_string)

    return solution

solution_b("sunbin")
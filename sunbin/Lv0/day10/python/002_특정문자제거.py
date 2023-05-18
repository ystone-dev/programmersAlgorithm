# https://school.programmers.co.kr/learn/courses/30/lessons/120826
import re

def solution(my_string, letter):
    answer = my_string.replace(letter, '')
    return answer


# 다른풀이
def solutionB(my_string, letter):
    answer = re.sub(letter, '', my_string)
    return answer

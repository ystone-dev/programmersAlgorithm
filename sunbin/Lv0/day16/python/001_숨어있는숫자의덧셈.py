# https://school.programmers.co.kr/learn/courses/30/lessons/120851

import re


def solution(my_string):
    numbers = re.sub('[^0-9]', '', my_string)
    answer = sum([int(i) for i in numbers])
    
    return answer


# 다른 풀이: isdigit()
def solution_b(my_string):
    return sum(int(i) for i in my_string if i.isdigit())
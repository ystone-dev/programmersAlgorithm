# https://school.programmers.co.kr/learn/courses/30/lessons/120850

import re


def solution(my_string):
    numbers = list(re.sub('[^0-9]', '', my_string))
    num_type_list = sorted([int(i) for i in numbers])

    return num_type_list


# 다른 풀이: 한 줄 풀이
def solution_b(my_string):
    answer = sorted([int(c) for c in my_string if c.isdigit()])

    return answer


solution("hi12392")

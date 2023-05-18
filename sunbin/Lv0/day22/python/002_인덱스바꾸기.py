# https://school.programmers.co.kr/learn/courses/30/lessons/120895

def solution(my_string, num1, num2):
    str_list = list(my_string)

    a = str_list[num1]
    b = str_list[num2]

    str_list[num1] = b
    str_list[num2] = a

    answer = "".join(str_list)

    return answer


# 다른 풀이: 튜플
def solution_b(my_string, num1, num2):
    s = list(my_string)
    s[num1], s[num2] = s[num2], s[num1]

    return ''.join(s)


solution("hello", 1, 2)

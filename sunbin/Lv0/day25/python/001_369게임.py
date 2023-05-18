# https://school.programmers.co.kr/learn/courses/30/lessons/120891

def solution(order):
    rule = ['3', '6', '9']
    answer = 0

    for i in str(order):
        if i in rule:
            answer += 1

    return answer


# 다른 풀이: count
def solution_b(order):
    order = str(order)

    return order.count('3') + order.count('6') + order.count('9')

# https://school.programmers.co.kr/learn/courses/30/lessons/120888

def solution(my_string):
    answer = []

    for i in my_string:
        if i not in answer:
            answer.append(i)
    answer = ''.join(answer)

    return answer

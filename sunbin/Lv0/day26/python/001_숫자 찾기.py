# https://school.programmers.co.kr/learn/courses/30/lessons/120904

def solution(num, k):
    num = str(num)
    k = str(k)

    answer = num.find(k) + 1

    return answer if answer != 0 else -1

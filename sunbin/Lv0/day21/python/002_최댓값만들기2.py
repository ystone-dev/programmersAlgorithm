# https://school.programmers.co.kr/learn/courses/30/lessons/120862

def solution(numbers):
    numbers = sorted(numbers)

    case_a = numbers[0] * numbers[1]
    case_b = numbers[-1] * numbers[-2]

    answer = max(case_a, case_b)

    return answer


print(solution([0, -31, 24, 10, 1, 9]))
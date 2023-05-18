# https://school.programmers.co.kr/learn/courses/30/lessons/120844

def solution(numbers, direction):
    answer = []

    if direction == "right":
        temp = numbers[-1]
        numbers.insert(0, temp)
        del numbers[-1]
    else:
        temp = numbers[0]
        numbers.append(temp)
        del numbers[0]
    return numbers


# 다른 풀이
def solution_b(numbers, direction):
    return [numbers[-1]] + numbers[:-1] if direction == 'right' else numbers[1:] + [numbers[0]]


solution([1, 2, 3], "right")

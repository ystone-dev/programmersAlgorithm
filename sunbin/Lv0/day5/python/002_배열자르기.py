# https://school.programmers.co.kr/learn/courses/30/lessons/120833

def solution(numbers, num1, num2):
    answer = numbers[num1:num2+1]
    return answer

solution([1, 2, 3, 4, 5], 1, 3)
solution([1, 3, 5], 1, 2)
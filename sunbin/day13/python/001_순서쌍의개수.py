# https://school.programmers.co.kr/learn/courses/30/lessons/120836

def solution(n):
    count = 0

    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    
    return count

print(solution(100))


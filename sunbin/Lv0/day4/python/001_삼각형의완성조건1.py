# https://school.programmers.co.kr/learn/courses/30/lessons/120889

def solution(sides):
    max_side = max(sides)
    
    sides.remove(max_side)
    other_sides_sum = sum(sides)
    
    
    if max_side < other_sides_sum:
        return 1
    else:
        return 2

# 다른 풀이
def solution(sides):
    return 1 if max(sides) < (sum(sides) - max(sides)) else 2
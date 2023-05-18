# https://school.programmers.co.kr/learn/courses/30/lessons/120903

def solution(s1, s2):
    count = 0
    for i in s1:
        for j in s2:
            if i == j:
              count += 1

    return count


# 다른풀이: 교집합
'''
집합자료형: s = set([리스트] or "문자열")
1) 교집합: s1 & s2
2) 합집합: s1 | s2
3) 차집합: s1 - s2
'''
def solution_b(s1, s2):
  return len(set(s1)&set(s2))
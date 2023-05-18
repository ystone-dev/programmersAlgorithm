# https://school.programmers.co.kr/learn/courses/30/lessons/120839

def solution(rsp):
    answer = ""
    for i in rsp:
      if i == "2":
        answer += "0"
      elif i == "0":
        answer += "5"
      else:
        answer += "2"
    
    return answer


# 다른풀이
def solution_b(rsp):
    d = {'0':'5','2':'0','5':'2'}
    return ''.join(d[i] for i in rsp)
    
solution("205")
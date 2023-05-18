# https://school.programmers.co.kr/learn/courses/30/lessons/120841
def solution(dot):
  if dot[0] > 0:
    if dot[1] > 0:
      return 1
    else:
      return 3
  else:
    if dot[1] > 0:
      return 1
    else:
      return 3


# 다른풀이: 근데 이해 못하겠어..
def solutionB(dot):
    quad = [(3,2),(4,1)]
    return quad[dot[0] > 0][dot[1] > 0]

solution([2, 4])
solution([-7, 9])
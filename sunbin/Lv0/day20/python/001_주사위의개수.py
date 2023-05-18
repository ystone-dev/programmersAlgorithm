# https://school.programmers.co.kr/learn/courses/30/lessons/120845


def solution_a(box, n):
    # 1. 1층에 들어갈 수 있는 박스
    col = (box[0] // n) * (box[1] // n)

    # 2. 최대 높이?
    height = box[2] // n

    # 1번 *  2번
    answer = col * height

    return answer


def solution(box, n):
    return (box[0] // n) * (box[1] // n) * box[2] // n


solution([10, 8, 6], 3)

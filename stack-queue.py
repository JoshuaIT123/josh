from collections import deque

# Stack
stack = deque()
stack.append(10)   # push
stack.append(20)
stack.pop()        # pop

print("Stack:", stack)

# Queue
queue = deque()
queue.append(10)   # enqueue
queue.append(20)
queue.popleft()    # dequeue

print("Queue:", queue)

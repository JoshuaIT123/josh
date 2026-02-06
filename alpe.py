items = []
freq = []
count = 0
name = input()

# use o(n) to find  the frequency
for i in name:
    if i not in items:
        items.append(i)
    count += 1
    freq.append(i)

print(count , freq)    
        
        
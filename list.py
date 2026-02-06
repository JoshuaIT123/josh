# Create an empty list
numbers = []

# Ask how many numbers to enter
n = int(input("How many numbers do you want to enter? "))

# Take numbers from user
for i in range(n):
    num = int(input("Enter a number: "))
    numbers.append(num)

# Add a new number
new_number = int(input("Enter a number to add: "))
numbers.append(new_number)

# Remove a number
remove_number = int(input("Enter a number to remove: "))
if remove_number in numbers:
    numbers.remove(remove_number)
else:
    print("Number not found in the list")

# Display final list
print("Final list:", numbers)

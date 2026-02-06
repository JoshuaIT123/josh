# Create a tuple
students = ("Alice", "John", "Mary")

print("Students:", students)

try:
    # Attempt to modify tuple
    students[1] = "Peter"
except TypeError:
    print("Error: Tuples cannot be modified because they are immutable.")

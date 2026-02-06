from collections import defaultdict

# Create defaultdict
classes = defaultdict(list)

# Add students to classes
classes["L3"].append("Alice")
classes["L4"].append("John")
classes["L3"].append("Mary")

# Display result
for cls, students in classes.items():
    print(cls, ":", students)

def sum_check(arr):
    # check if the given values are integer or not 
    if not isinstance(arr, list):
        raise ValueError('Please enter valid number')
    # check if the number is integer and check if its positive or not if yes add them using sum function.
    return sum(num for num in arr if isinstance(num, int) and num > 0)

# Input
n = int(input("Enter number of elements: "))
input_array = [int(input()) for _ in range(n)]

# Result
result = sum_check(input_array)
print("Sum:", result)
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
lengthLocations = len(dojo['locations'])
lengthInstructors = len(dojo['instructors'])
print(lengthLocations)
print(lengthInstructors)

print (f"{lengthLocations} Locations")
for i in dojo['locations']:
    print (i)

print(f"{lengthInstructors} instructors")
for i in dojo['instructors']:
    print(i)

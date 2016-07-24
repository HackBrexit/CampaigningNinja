# '../London_postcodes.csv'

#print(open('./test_postcodes.csv'))
fileName = '../London_postcodes.csv'
with open(fileName, 'r') as infile:
    data = infile.read()

# Return a list of the lines, breaking at line boundaries.
print('<div class="row">')
index = 0
for line in data.splitlines():

    fields = line.split(",")
    print( '<div class="col-sm-6 col-xs-12 col-lg-3 col-xl-3"><li>"' + fields[0] + '</li></div>')

    index += 1
    if (index % 4 == 0):
        print('</div>')
        print('<div class="row">')

print('</div>')

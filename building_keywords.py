data_tmp = {
      'buildingId': '1',
      'title': '総合科学部棟',
      'description': '総合科学部の講義室がある棟です。',
      'imageUrl': 'building_images/building1.png',
      'keywords': ['総合科学部', '総合科学部棟', '総合科学部講義室','そうかとう',"L102"],
      'tag': "faculty1"
    }

with open("hiroshima university building names.csv") as f:
    lines = [[i.strip() for i in i.split(",")] for i in f.readlines()]

with open("buildingsfordemo.txt") as f:
    lines = [[i.strip() for i in i.split(",")] for i in f.readlines()[:-1]]


import random 
import json
import random

print(lines)
for n,building in enumerate(lines):
    data_i = {
      'buildingId': f'{n+1}',
      'title': f'{building[1]}',
      'description': f'{building[1]}です。',
      'imageUrl': f'building_images/building{str(random.choice([1,2,3,4,5]))}.png',
      'keywords': [f'{building[1]}',f'{building[0]}',],
      'tag': "faculty",
      'mapCoordinate': f"#17/{round(34.40286+random.random()/500,6)}/{round(132.71338+random.random()/500,6)}"
    }
    print(data_i,',')

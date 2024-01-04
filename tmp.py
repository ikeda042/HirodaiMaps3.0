import matplotlib.pyplot as plt
import seaborn as sns

fig = plt.figure(figsize=(6,6))
sns.set()

x = [1,2,3,4,5,6,7,8,9,10,11,12]
y = [481,467,490,3987,3800,781,490,1350,871,401,357,351]

plt.plot(x, y, marker='o')
plt.xlabel('Month')
plt.ylabel('Total visits')
fig.savefig("tmp.png",dpi = 500)
import pyqrcode


qrid = 2
code = pyqrcode.create(f'https://hirodaimaps.com/?qrid={qrid}', error='L', version=3, mode='binary')
code.png(f"QR{qrid}.png",scale=5, module_color=[0, 0, 0, 128], background=[255, 255, 255])

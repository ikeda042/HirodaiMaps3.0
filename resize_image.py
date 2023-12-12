import cv2

def resize_image_maintaining_aspect_ratio(image_path, max_size):
    # 画像を読み込む
    image = cv2.imread(image_path)
    h, w = image.shape[:2]

    # アスペクト比を維持してリサイズ
    if h > w:
        new_h, new_w = max_size, int(w * max_size / h)
    else:
        new_h, new_w = int(h * max_size / w), max_size

    return cv2.resize(image, (new_w, new_h))


def resize(id:str,size:int) -> None:
    # 画像をリサイズする
    filename = f"/Users/leeyunosuke/Desktop/HirodaiMaps3.0/frontend/public/building_images/building{id}.JPG"
    thumbnail = resize_image_maintaining_aspect_ratio(filename, size)  
    # cv2.imwrite(f'{filename.split("/")[-1].split(".")[0]+"_thumbnail.jpg"}', thumbnail)

    cv2.imwrite(f'{filename.split("/")[-1].split(".")[0]+".jpg"}', thumbnail)

for i in range(1,9):
    resize(str(i),1000)
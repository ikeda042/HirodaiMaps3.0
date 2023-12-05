
const buildings = [
  {'buildingId': '1', 'title': '広島大学内郵便局', 'description': '広島大学内郵便局です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['広島大学内郵便局', '\ufeffA01'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405458/132.713261'} ,
  {'buildingId': '2', 'title': '総合博物館', 'description': '総合博物館です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['総合博物館', 'A02'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405081/132.713197'} ,
  {'buildingId': '3', 'title': '環境安全センター', 'description': '環境安全センターです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['環境安全センター', 'A03'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405877/132.712693'} ,
  {'buildingId': '4', 'title': '総合博物館（埋蔵文化調査部門）', 'description': '総合博物館（埋蔵文化調査部門）です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['総合博物館（埋蔵文化調査部門）', 'A04'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405008/132.713479'} ,
  {'buildingId': '5', 'title': '共用棟', 'description': '共用棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['共用棟', 'A05'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405405/132.712909'} ,
  {'buildingId': '6', 'title': '特高受変電棟', 'description': '特高受変電棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['特高受変電棟', 'A06'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405793/132.712542'} ,
  {'buildingId': '7', 'title': '国際交流会館', 'description': '国際交流会館です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['国際交流会館', 'A07'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405591/132.712793'} ,
  {'buildingId': '8', 'title': '両生類研究センター バイオリソース棟', 'description': '両生類研究センター バイオリソース棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['両生類研究センター バイオリソース棟', 'A08'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405249/132.713231'} ,
  {'buildingId': '9', 'title': '工作室', 'description': '工作室です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['工作室', 'A09'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405392/132.713414'} ,
  {'buildingId': '10', 'title': '家禽・家畜舎', 'description': '家禽・家畜舎です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['家禽・家畜舎', 'A10'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405074/132.713099'} ,
  {'buildingId': '11', 'title': 'ヘリウム液化室', 'description': 'ヘリウム液化室です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['ヘリウム液化室', 'A11'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405447/132.713165'} ,
  {'buildingId': '12', 'title': '恒温恒湿温室R1', 'description': '恒温恒湿温室R1です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['恒温恒湿温室R1', 'A12'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40587/132.712791'} ,
  {'buildingId': '13', 'title': '動物飼育室', 'description': '動物飼育室です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['動物飼育室', 'A13'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405684/132.713443'} ,
  {'buildingId': '14', 'title': '温室', 'description': '温室です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['温室', 'A14'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405814/132.713348'} ,
  {'buildingId': '15', 'title': '原生動物培養室', 'description': '原生動物培養室です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['原生動物培養室', 'A15'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405008/132.712973'} ,
  {'buildingId': '16', 'title': '危険薬品庫', 'description': '危険薬品庫です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['危険薬品庫', 'A16'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405145/132.712963'} ,
  {'buildingId': '17', 'title': '特別実験棟', 'description': '特別実験棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['特別実験棟', 'A17'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405269/132.713296'} ,
  {'buildingId': '18', 'title': '植物遺伝子保管実験棟Q', 'description': '植物遺伝子保管実験棟Qです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['植物遺伝子保管実験棟Q', 'A18'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40508/132.713274'} ,
  {'buildingId': '19', 'title': '車庫', 'description': '車庫です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['車庫', 'A19'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405208/132.713105'} ,
  {'buildingId': '20', 'title': 'ガラス・網室', 'description': 'ガラス・網室です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['ガラス・網室', 'A20'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405987/132.713002'} ,
  {'buildingId': '21', 'title': '超低温超高圧実験棟', 'description': '超低温超高圧実験棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['超低温超高圧実験棟', 'A21'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405509/132.713422'} ,
  {'buildingId': '22', 'title': '植物管理室', 'description': '植物管理室です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['植物管理室', 'A22'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405927/132.71279'} ,
  {'buildingId': '23', 'title': '日本鶏保護増殖舎', 'description': '日本鶏保護増殖舎です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['日本鶏保護増殖舎', 'A23'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405407/132.712954'} ,
  {'buildingId': '24', 'title': '動物舎', 'description': '動物舎です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['動物舎', 'A24'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405411/132.713147'} ,
  {'buildingId': '25', 'title': '危険薬品庫', 'description': '危険薬品庫です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['危険薬品庫', 'A25'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405897/132.713'} ,
  {'buildingId': '26', 'title': '温室B棟', 'description': '温室B棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['温室B棟', 'A26'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405371/132.712993'} ,
  {'buildingId': '27', 'title': '大温室', 'description': '大温室です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['大温室', 'A27'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405346/132.713245'} ,
  {'buildingId': '28', 'title': '温室A棟', 'description': '温室A棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['温室A棟', 'A28'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405919/132.713082'} ,
  {'buildingId': '29', 'title': '放射光準備室', 'description': '放射光準備室です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['放射光準備室', 'A29'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405376/132.713306'} ,
  {'buildingId': '30', 'title': '植物遺伝子温室R', 'description': '植物遺伝子温室Rです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['植物遺伝子温室R', 'A30'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405085/132.712642'} ,
  {'buildingId': '31', 'title': '船舶海洋風洞実験棟', 'description': '船舶海洋風洞実験棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['船舶海洋風洞実験棟', 'A31'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40575/132.7134'} ,
  {'buildingId': '32', 'title': '東地区エネルギーセンター', 'description': '東地区エネルギーセンターです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['東地区エネルギーセンター', 'A32'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405886/132.713441'} ,
  {'buildingId': '33', 'title': '飼育温室', 'description': '飼育温室です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['飼育温室', 'A33'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405127/132.712661'} ,
  {'buildingId': '34', 'title': '北地区エネルギーセンター', 'description': '北地区エネルギーセンターです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['北地区エネルギーセンター', 'A34'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405829/132.712998'} ,
  {'buildingId': '35', 'title': '書庫棟', 'description': '書庫棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['書庫棟', 'A35'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405218/132.712613'} ,
  {'buildingId': '36', 'title': '資材庫', 'description': '資材庫です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['資材庫', 'A36'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405646/132.71283'} ,
  {'buildingId': '37', 'title': 'ボンベ庫', 'description': 'ボンベ庫です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['ボンベ庫', 'A37'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405355/132.712546'} ,
  {'buildingId': '38', 'title': '倉庫', 'description': '倉庫です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['倉庫', 'A38'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405668/132.713153'} ,
  {'buildingId': '39', 'title': '弓道場的場', 'description': '弓道場的場です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['弓道場的場', 'A39'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405218/132.712981'} ,
  {'buildingId': '40', 'title': '屋外便所', 'description': '屋外便所です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['屋外便所', 'A40'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405116/132.712789'} ,
  {'buildingId': '41', 'title': '西地区エネルギーセンター', 'description': '西地区エネルギーセンターです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['西地区エネルギーセンター', 'A41'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405795/132.713383'} ,
  {'buildingId': '42', 'title': '屋外プール附属家', 'description': '屋外プール附属家です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['屋外プール附属家', 'A42'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405669/132.713352'} ,
  {'buildingId': '43', 'title': '体育器具庫', 'description': '体育器具庫です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['体育器具庫', 'A43'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405812/132.713042'} ,
  {'buildingId': '44', 'title': '体育器具庫', 'description': '体育器具庫です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['体育器具庫', 'A44'], 'tag': 'faculty', 'mapCoordinate': '#17/34.4056/132.712996'} ,
  {'buildingId': '45', 'title': '体育器具庫', 'description': '体育器具庫です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['体育器具庫', 'A45'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405589/132.712619'} ,
  {'buildingId': '46', 'title': '温室', 'description': '温室です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['温室', 'A46'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405035/132.713416'} ,
  {'buildingId': '47', 'title': '温室', 'description': '温室です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['温室', 'A47'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40501/132.712715'} ,
  {'buildingId': '48', 'title': '歯科診療所', 'description': '歯科診療所です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['歯科診療所', 'A48'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405425/132.713315'} ,
  {'buildingId': '49', 'title': '車庫', 'description': '車庫です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['車庫', 'A49'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405061/132.713153'} ,
  {'buildingId': '50', 'title': '器具庫', 'description': '器具庫です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['器具庫', 'A50'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405009/132.71327'} ,
  {'buildingId': '51', 'title': '器具庫', 'description': '器具庫です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['器具庫', 'A51'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405719/132.71312'} ,
  {'buildingId': '52', 'title': '倉庫', 'description': '倉庫です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['倉庫', 'A52'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405068/132.713164'} ,
  {'buildingId': '53', 'title': '厩舎', 'description': '厩舎です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['厩舎', 'A53'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405865/132.712663'} ,
  {'buildingId': '54', 'title': '電気室', 'description': '電気室です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['電気室', 'A54'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40543/132.712833'} ,
  {'buildingId': '55', 'title': '倉庫', 'description': '倉庫です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['倉庫', 'A55'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405094/132.712903'} ,
  {'buildingId': '56', 'title': '広島大学内ひまわり保育園', 'description': '広島大学内ひまわり保育園です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['広島大学内ひまわり保育園', 'A55'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405029/132.71302'} ,
  {'buildingId': '57', 'title': '浄水装置室', 'description': '浄水装置室です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['浄水装置室', 'A57'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405692/132.712654'} ,
  {'buildingId': '58', 'title': '危険薬品庫', 'description': '危険薬品庫です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['危険薬品庫', 'A58'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405311/132.712794'} ,
  {'buildingId': '59', 'title': '屋外便所', 'description': '屋外便所です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['屋外便所', 'A59'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405769/132.712614'} ,
  {'buildingId': '60', 'title': 'アイグラン保育園広島大学前', 'description': 'アイグラン保育園広島大学前です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['アイグラン保育園広島大学前', 'A60'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405024/132.712595'} ,
  {'buildingId': '61', 'title': '南課外活動共同施設（体育系）', 'description': '南課外活動共同施設（体育系）です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['南課外活動共同施設（体育系）', 'A61'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405296/132.712801'} ,
  {'buildingId': '62', 'title': '体育器具庫・更衣室1', 'description': '体育器具庫・更衣室1です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['体育器具庫・更衣室1', 'A62'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405725/132.712671'} ,
  {'buildingId': '63', 'title': '危険薬品庫', 'description': '危険薬品庫です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['危険薬品庫', 'A63'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405857/132.713413'} ,
  {'buildingId': '64', 'title': '体育器具庫・更衣室2', 'description': '体育器具庫・更衣室2です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['体育器具庫・更衣室2', 'A64'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405815/132.713162'} ,
  {'buildingId': '65', 'title': '国際交流会館B棟', 'description': '国際交流会館B棟です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['国際交流会館B棟', 'A65'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405663/132.712775'} ,
  {'buildingId': '66', 'title': '国際交流会館C棟', 'description': '国際交流会館C棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['国際交流会館C棟', 'A66'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405358/132.713263'} ,
  {'buildingId': '67', 'title': 'RI総合実験棟', 'description': 'RI総合実験棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['RI総合実験棟', 'A67'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405531/132.713135'} ,
  {'buildingId': '68', 'title': '管理棟', 'description': '管理棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['管理棟', 'E01'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405712/132.713199'} ,
  {'buildingId': '69', 'title': '低層実験研究棟C1', 'description': '低層実験研究棟C1です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['低層実験研究棟C1', 'E02'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405072/132.713236'} ,
  {'buildingId': '70', 'title': '高層実験研究棟A1', 'description': '高層実験研究棟A1です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['高層実験研究棟A1', 'E03'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405225/132.71316'} ,
  {'buildingId': '71', 'title': '講義棟B1', 'description': '講義棟B1です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['講義棟B1', 'E04'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405082/132.713233'} ,
  {'buildingId': '72', 'title': '低層実験研究棟C2', 'description': '低層実験研究棟C2です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['低層実験研究棟C2', 'E05'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40514/132.713453'} ,
  {'buildingId': '73', 'title': '高層実験研究棟A2', 'description': '高層実験研究棟A2です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['高層実験研究棟A2', 'E06'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40551/132.712651'} ,
  {'buildingId': '74', 'title': '講義棟B2', 'description': '講義棟B2です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['講義棟B2', 'E07'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405123/132.713409'} ,
  {'buildingId': '75', 'title': '低層実験研究棟C3', 'description': '低層実験研究棟C3です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['低層実験研究棟C3', 'E08'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405301/132.712989'} ,
  {'buildingId': '76', 'title': '高層実験研究棟A3', 'description': '高層実験研究棟A3です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['高層実験研究棟A3', 'E09'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405337/132.712967'} ,
  {'buildingId': '77', 'title': '講義棟B3', 'description': '講義棟B3です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['講義棟B3', 'E10'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405882/132.712781'} ,
  {'buildingId': '78', 'title': '低層実験研究棟C4', 'description': '低層実験研究棟C4です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['低層実験研究棟C4', 'E11'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405087/132.713039'} ,
  {'buildingId': '79', 'title': '高層実験研究棟A4', 'description': '高層実験研究棟A4です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['高層実験研究棟A4', 'E12'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40579/132.713109'} ,
  {'buildingId': '80', 'title': '講義棟B4', 'description': '講義棟B4です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['講義棟B4', 'E13'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405875/132.712662'} ,
  {'buildingId': '81', 'title': '東図書館', 'description': '東図書館です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['東図書館', 'E14'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405138/132.712624'} ,
  {'buildingId': '82', 'title': '課外活動共用施設（文化系）', 'description': '課外活動共用施設（文化系）です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['課外活動共用施設（文化系）', 'E15'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405098/132.712796'} ,
  {'buildingId': '83', 'title': '大学会館', 'description': '大学会館です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['大学会館', 'E16'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405554/132.712511'} ,
  {'buildingId': '84', 'title': 'ミライクリエ', 'description': 'ミライクリエです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['ミライクリエ', 'E17'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405668/132.713257'} ,
  {'buildingId': '85', 'title': '機械要素実験棟D4', 'description': '機械要素実験棟D4です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['機械要素実験棟D4', 'E18'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405724/132.712763'} ,
  {'buildingId': '86', 'title': '危険薬品庫', 'description': '危険薬品庫です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['危険薬品庫', 'E18'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405219/132.713335'} ,
  {'buildingId': '87', 'title': '機会力学工作機械実験棟D3', 'description': '機会力学工作機械実験棟D3です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['機会力学工作機械実験棟D3', 'E19'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405581/132.712739'} ,
  {'buildingId': '88', 'title': '共用棟E7', 'description': '共用棟E7です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['共用棟E7', 'E20'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405845/132.713215'} ,
  {'buildingId': '89', 'title': '非破壊試験棟D2', 'description': '非破壊試験棟D2です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['非破壊試験棟D2', 'E21'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405297/132.713472'} ,
  {'buildingId': '90', 'title': '共用棟E6', 'description': '共用棟E6です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['共用棟E6', 'E22'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405753/132.713139'} ,
  {'buildingId': '91', 'title': '音響実験棟D1', 'description': '音響実験棟D1です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['音響実験棟D1', 'E23'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405293/132.713474'} ,
  {'buildingId': '92', 'title': '共用棟E1', 'description': '共用棟E1です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['共用棟E1', 'E24'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405668/132.712603'} ,
  {'buildingId': '93', 'title': '土木・建築構造実験棟E2・3', 'description': '土木・建築構造実験棟E2・3です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['土木・建築構造実験棟E2・3', 'E25'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405888/132.713343'} ,
  {'buildingId': '94', 'title': '建築環境学実験棟E4', 'description': '建築環境学実験棟E4です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['建築環境学実験棟E4', 'E26'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405059/132.712603'} ,
  {'buildingId': '95', 'title': '水理実験棟E5', 'description': '水理実験棟E5です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['水理実験棟E5', 'E27'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405858/132.712577'} ,
  {'buildingId': '96', 'title': 'フェニックス工房', 'description': 'フェニックス工房です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['フェニックス工房', 'E28'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405673/132.713168'} ,
  {'buildingId': '97', 'title': 'フェニックスファクトリー', 'description': 'フェニックスファクトリーです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['フェニックスファクトリー', 'E29'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40565/132.712491'} ,
  {'buildingId': '98', 'title': '化学工学共同実験棟F2', 'description': '化学工学共同実験棟F2です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['化学工学共同実験棟F2', 'E30'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405541/132.713071'} ,
  {'buildingId': '99', 'title': '放射線総合実験棟F3', 'description': '放射線総合実験棟F3です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['放射線総合実験棟F3', 'E31'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405684/132.71292'} ,
  {'buildingId': '100', 'title': '東体育館', 'description': '東体育館です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['東体育館', 'E32'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405215/132.712615'} ,
  {'buildingId': '101', 'title': '講義管理棟C', 'description': '講義管理棟Cです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['講義管理棟C', 'E33'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405853/132.712705'} ,
  {'buildingId': '102', 'title': '実験研究棟A', 'description': '実験研究棟Aです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['実験研究棟A', 'E34'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405364/132.713047'} ,
  {'buildingId': '103', 'title': '実験研究棟B', 'description': '実験研究棟Bです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['実験研究棟B', 'E35'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405343/132.712835'} ,
  {'buildingId': '104', 'title': 'Town＆Gown未来イノベーション研究所', 'description': 'Town＆Gown未来イノベーション研究所です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['Town＆Gown未来イノベーション研究所', 'E36'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405562/132.712783'} ,
  {'buildingId': '105', 'title': '食品製造実験実習・工作機械実習', 'description': '食品製造実験実習・工作機械実習です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['食品製造実験実習・工作機械実習', 'E37'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40551/132.712542'} ,
  {'buildingId': '106', 'title': '機械専攻共用棟G7', 'description': '機械専攻共用棟G7です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['機械専攻共用棟G7', 'E38'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405896/132.712545'} ,
  {'buildingId': '107', 'title': '反応気体力学実験棟G6', 'description': '反応気体力学実験棟G6です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['反応気体力学実験棟G6', 'E39'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405995/132.713357'} ,
  {'buildingId': '108', 'title': '熱工学・流体工学実験棟G5', 'description': '熱工学・流体工学実験棟G5です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['熱工学・流体工学実験棟G5', 'E40'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405846/132.713243'} ,
  {'buildingId': '109', 'title': '機械専攻共用棟G4', 'description': '機械専攻共用棟G4です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['機械専攻共用棟G4', 'E41'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405072/132.712721'} ,
  {'buildingId': '110', 'title': '船舶試験水槽棟G3', 'description': '船舶試験水槽棟G3です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['船舶試験水槽棟G3', 'E42'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405754/132.712941'} ,
  {'buildingId': '111', 'title': '大型構造物実験棟G1', 'description': '大型構造物実験棟G1です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['大型構造物実験棟G1', 'E43'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405962/132.713066'} ,
  {'buildingId': '112', 'title': '東福利会館', 'description': '東福利会館です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['東福利会館', 'E44'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405973/132.712944'} ,
  {'buildingId': '113', 'title': '遺伝子実験棟', 'description': '遺伝子実験棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['遺伝子実験棟', 'E45'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405541/132.712525'} ,
  {'buildingId': '114', 'title': 'ナノデバイス・バイオ融合科学研究所', 'description': 'ナノデバイス・バイオ融合科学研究所です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['ナノデバイス・バイオ融合科学研究所', 'E46'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405873/132.713116'} ,
  {'buildingId': '115', 'title': '遺伝子実験棟', 'description': '遺伝子実験棟です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['遺伝子実験棟', 'E47'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405842/132.713136'} ,
  {'buildingId': '116', 'title': 'RI総合実験棟', 'description': 'RI総合実験棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['RI総合実験棟', 'E48'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405186/132.713347'} ,
  {'buildingId': '117', 'title': '放射光研究棟', 'description': '放射光研究棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['放射光研究棟', 'E49'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405956/132.712685'} ,
  {'buildingId': '118', 'title': '放射光実験準備棟', 'description': '放射光実験準備棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['放射光実験準備棟', 'E50'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405608/132.712668'} ,
  {'buildingId': '119', 'title': '放射光実験棟', 'description': '放射光実験棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['放射光実験棟', 'E51'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405441/132.713228'} ,
  {'buildingId': '120', 'title': 'ベンチャー・ビジネス・ラボラトリー', 'description': 'ベンチャー・ビジネス・ラボラトリーです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['ベンチャー・ビジネス・ラボラトリー', 'E52'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405795/132.712902'} ,
  {'buildingId': '121', 'title': '本部棟', 'description': '本部棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['本部棟', 'N01'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405051/132.713192'} ,
  {'buildingId': '122', 'title': '講義管理棟Ｅ', 'description': '講義管理棟Ｅです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['講義管理棟Ｅ', 'N02'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405812/132.712551'} ,
  {'buildingId': '123', 'title': '研究棟Ａ', 'description': '研究棟Ａです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['研究棟Ａ', 'N03'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405391/132.712855'} ,
  {'buildingId': '124', 'title': '研究棟Ｂ', 'description': '研究棟Ｂです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['研究棟Ｂ', 'N04'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405899/132.713057'} ,
  {'buildingId': '125', 'title': '研究棟C', 'description': '研究棟Cです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['研究棟C', 'N05'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405882/132.712869'} ,
  {'buildingId': '126', 'title': '研究棟D', 'description': '研究棟Dです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['研究棟D', 'N06'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405259/132.71346'} ,
  {'buildingId': '127', 'title': '機器分析棟J', 'description': '機器分析棟Jです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['機器分析棟J', 'N07'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405794/132.713232'} ,
  {'buildingId': '128', 'title': '低温実験棟H', 'description': '低温実験棟Hです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['低温実験棟H', 'N08'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405344/132.713323'} ,
  {'buildingId': '129', 'title': '両生類研究棟M', 'description': '両生類研究棟Mです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['両生類研究棟M', 'N09'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405982/132.713358'} ,
  {'buildingId': '130', 'title': '学術標本共同資料館', 'description': '学術標本共同資料館です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['学術標本共同資料館', 'N10'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405426/132.712802'} ,
  {'buildingId': '131', 'title': '先端科学総合研究棟', 'description': '先端科学総合研究棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['先端科学総合研究棟', 'N11'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405223/132.713442'} ,
  {'buildingId': '132', 'title': '総合研究実験棟', 'description': '総合研究実験棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['総合研究実験棟', 'N12'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405447/132.713011'} ,
  {'buildingId': '133', 'title': '講義棟', 'description': '講義棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['講義棟', 'N13'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405156/132.713016'} ,
  {'buildingId': '134', 'title': '研究棟', 'description': '研究棟です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['研究棟', 'N14'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40598/132.713222'} ,
  {'buildingId': '135', 'title': '研究棟', 'description': '研究棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['研究棟', 'N15'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405863/132.712835'} ,
  {'buildingId': '136', 'title': '講義棟', 'description': '講義棟です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['講義棟', 'N16'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405066/132.713032'} ,
  {'buildingId': '137', 'title': '北第3福利会館', 'description': '北第3福利会館です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['北第3福利会館', 'N17'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405401/132.713418'} ,
  {'buildingId': '138', 'title': '福山運通小丸賑わいパビリオン', 'description': '福山運通小丸賑わいパビリオンです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['福山運通小丸賑わいパビリオン', 'N18'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405273/132.712523'} ,
  {'buildingId': '139', 'title': '北第1福利会館', 'description': '北第1福利会館です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['北第1福利会館', 'N19'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405606/132.712741'} ,
  {'buildingId': '140', 'title': '中央図書館', 'description': '中央図書館です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['中央図書館', 'N20'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405467/132.713369'} ,
  {'buildingId': '141', 'title': 'サタケメモリアルホール', 'description': 'サタケメモリアルホールです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['サタケメモリアルホール', 'N21'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405644/132.712852'} ,
  {'buildingId': '142', 'title': '学士会館', 'description': '学士会館です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['学士会館', 'N22'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405914/132.712784'} ,
  {'buildingId': '143', 'title': '北第2福利会館', 'description': '北第2福利会館です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['北第2福利会館', 'N23'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405948/132.713145'} ,
  {'buildingId': '144', 'title': '音楽棟F', 'description': '音楽棟Fです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['音楽棟F', 'N24'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405464/132.712588'} ,
  {'buildingId': '145', 'title': '総合校舎G', 'description': '総合校舎Gです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['総合校舎G', 'N25'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405675/132.713357'} ,
  {'buildingId': '146', 'title': '美術棟E', 'description': '美術棟Eです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['美術棟E', 'N26'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405977/132.713028'} ,
  {'buildingId': '147', 'title': '技術棟D', 'description': '技術棟Dです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['技術棟D', 'N27'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405378/132.713325'} ,
  {'buildingId': '148', 'title': '研究棟C', 'description': '研究棟Cです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['研究棟C', 'N28'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40567/132.713332'} ,
  {'buildingId': '149', 'title': '講義棟L', 'description': '講義棟Lです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['講義棟L', 'N29'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405186/132.712622'} ,
  {'buildingId': '150', 'title': '講義棟K1', 'description': '講義棟K1です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['講義棟K1', 'N30'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405977/132.712593'} ,
  {'buildingId': '151', 'title': '講義棟K2', 'description': '講義棟K2です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['講義棟K2', 'N31'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405959/132.712921'} ,
  {'buildingId': '152', 'title': '研究棟A', 'description': '研究棟Aです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['研究棟A', 'N32'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405289/132.713387'} ,
  {'buildingId': '153', 'title': '総合校舎K3', 'description': '総合校舎K3です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['総合校舎K3', 'N33'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40534/132.713471'} ,
  {'buildingId': '154', 'title': '研究棟B', 'description': '研究棟Bです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['研究棟B', 'N34'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405605/132.712643'} ,
  {'buildingId': '155', 'title': '管理棟', 'description': '管理棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['管理棟', 'N35'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405289/132.712613'} ,
  {'buildingId': '156', 'title': '北体育館', 'description': '北体育館です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['北体育館', 'N36'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405506/132.713182'} ,
  {'buildingId': '157', 'title': 'HIRAKU-GLOBAL', 'description': 'HIRAKU-GLOBALです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['HIRAKU-GLOBAL', 'N37'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405588/132.712755'} ,
  {'buildingId': '158', 'title': '研究棟', 'description': '研究棟です。', 'imageUrl': 'building_images/building3.png', 'keywords': ['研究棟', 'S01'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405532/132.712575'} ,
  {'buildingId': '159', 'title': '実験棟', 'description': '実験棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['実験棟', 'S02'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40527/132.712917'} ,
  {'buildingId': '160', 'title': '家畜環境制御実験棟', 'description': '家畜環境制御実験棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['家畜環境制御実験棟', 'S03'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405242/132.713073'} ,
  {'buildingId': '161', 'title': '作物調査試験棟', 'description': '作物調査試験棟です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['作物調査試験棟', 'S04'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405191/132.712893'} ,
  {'buildingId': '162', 'title': '事務棟Ｍ', 'description': '事務棟Ｍです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['事務棟Ｍ', 'W01'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405945/132.712528'} ,
  {'buildingId': '163', 'title': '研究棟Ａ', 'description': '研究棟Ａです。', 'imageUrl': 'building_images/building5.png', 'keywords': ['研究棟Ａ', 'W02'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405527/132.712687'} ,
  {'buildingId': '164', 'title': '研究棟B', 'description': '研究棟Bです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['研究棟B', 'W03'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405849/132.713103'} ,
  {'buildingId': '165', 'title': '研究棟C', 'description': '研究棟Cです。', 'imageUrl': 'building_images/building3.png', 'keywords': ['研究棟C', 'W04'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405692/132.713282'} ,
  {'buildingId': '166', 'title': '西講義棟J', 'description': '西講義棟Jです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['西講義棟J', 'W05'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405332/132.712679'} ,
  {'buildingId': '167', 'title': '学生実験棟H', 'description': '学生実験棟Hです。', 'imageUrl': 'building_images/building4.png', 'keywords': ['学生実験棟H', 'W06'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40539/132.712653'} ,
  {'buildingId': '168', 'title': 'RI実験棟', 'description': 'RI実験棟です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['RI実験棟', 'W07'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405791/132.712959'} ,
  {'buildingId': '169', 'title': '環境モデル実験棟', 'description': '環境モデル実験棟です。', 'imageUrl': 'building_images/building4.png', 'keywords': ['環境モデル実験棟', 'W08'], 'tag': 'faculty', 'mapCoordinate': '#17/34.40577/132.71331'} ,
  {'buildingId': '170', 'title': '学生プラザ', 'description': '学生プラザです。', 'imageUrl': 'building_images/building1.png', 'keywords': ['学生プラザ', 'W09'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405339/132.713291'} ,
  {'buildingId': '171', 'title': '保健管理センター', 'description': '保健管理センターです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['保健管理センター', 'W10'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405931/132.713264'} ,
  {'buildingId': '172', 'title': '西第1福利会館', 'description': '西第1福利会館です。', 'imageUrl': 'building_images/building2.png', 'keywords': ['西第1福利会館', 'W11'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405608/132.712994'} ,
  {'buildingId': '173', 'title': '東講義棟K', 'description': '東講義棟Kです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['東講義棟K', 'W12'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405213/132.713372'} ,
  {'buildingId': '174', 'title': '南講義棟L', 'description': '南講義棟Lです。', 'imageUrl': 'building_images/building2.png', 'keywords': ['南講義棟L', 'W13'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405532/132.712776'} ,
  {'buildingId': '175', 'title': '西第2福利会館', 'description': '西第2福利会館です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['西第2福利会館', 'W15'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405348/132.713056'} ,
  {'buildingId': '176', 'title': '西図書館', 'description': '西図書館です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['西図書館', 'W16'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405897/132.712942'} ,
  {'buildingId': '177', 'title': '課外活動共用施設（体育系）', 'description': '課外活動共用施設（体育系）です。', 'imageUrl': 'building_images/building5.png', 'keywords': ['課外活動共用施設（体育系）', 'W16'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405498/132.712785'} ,
  {'buildingId': '178', 'title': '西体育館', 'description': '西体育館です。', 'imageUrl': 'building_images/building1.png', 'keywords': ['西体育館', 'W17'], 'tag': 'faculty', 'mapCoordinate': '#17/34.405303/132.712679'} ,
];

export default buildings;